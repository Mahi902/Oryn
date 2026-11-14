// ============================================================
//  Oryn — Service Worker  v5.8.0
//  Strategies:
//    SHELL_CACHE  → Cache-first  (own .html pages, app shell)
//    LIB_CACHE    → Stale-while-revalidate  (CDN / third-party libs)
//    NEVER_CACHE  → Network-only (live data endpoints)
// ============================================================

const SHELL_CACHE = 'dwp-shell-v5810';
const LIB_CACHE   = 'dwp-libs-v5800';
// On-device sentence-prediction runtime (vendor/ai/*, ~30 MB). Kept in its own cache that is NOT
// versioned with the shell, so a shell version bump never forces users to re-download it.
const AI_CACHE   = 'dwp-ai-runtime-v1';

// ── Own-origin pages to pre-cache on install ─────────────────
const OWN_ORIGIN = 'https://mahi902.github.io';
const BASE_PATH  = '/Oryn/';

// Every tool page extracted from toolsDB (including onlineOnly —
// their HTML shell is still useful offline even if features need net).
const PRECACHE_PAGES = [
  // App shell
  'app.html',
  'manifest.json',

  // Document Editing
  'document-writer.html',
  'viewer.html',
  'markup.html',
  'word-description-finder.html',
  'translator.html',
  'document-signer.html',
  'findandreplacer.html',
  'page-number-adder.html',
  'spreadsheet.html',
  'rm.html',
  'fe.html',
  'chart-maker.html',
  'graphmaker.html',
  'whiteboard.html',
  'mmm.html',
  'table-maker.html',
  'watermarker.html',
  'email-writer.html',
  'spell-checker.html',
  'file-extractor.html',
  'qr-code-maker.html',
  'id-card-maker.html',
  'file-zipper.html',
  'converters.html',
  'mtools.html2pdf.html',
  'mtools.jpg2pdf.html',
  'mtools.md2pdf.html',
  'mtools.old2new.html',
  'mtools.pdf2jpg.html',
  'mtools.scd2jpg.html',
  'mtools.scd2pdf.html',
  'mtools.url2pdf.html',
  'pdfcompressor.html',
  'context-field.html',
  'metadatainspector.html',
  'gift-card-maker.html',
  'docudrop.html',
  'text-extractor.html',
  'keyboard-click-test.html',

  // Code Editing
  'frontend-ide.html',
  'code-playground.html',
  'html.html',
  'mdeditor.html',
  'button-designer.html',
  'html-splitter.html',
  'goto-code.html',
  'code-snipper.html',

  // Image Editing
  'image-editor.html',
  'atbedt.html',
  'draw.html',

  // Collaboration
  'collab-document-editor.html',
  'connect1.html',
  'connect.html',

  // Other key pages
  'sceditor.html',
  'dynote.html',
  'scanner.html',
  'welcome.html',
  'aboutapp.html',
  'instapp.html',
].map(p => BASE_PATH + p);

// ── Offline assets for the editor (sceditor.html) + its tools ─
// Self-hosted libraries, fonts, data files, sub-pages and the ColorLabs
// iframe tools. Everything here is pre-cached on install so every
// editor feature that does not need a server works with no connection.
// Paths are URL-encoded exactly as the browser requests them.
const OFFLINE_ASSETS = [
  'copy.html',
  'defw.html',
  'enlimg.html',
  'red.html',
  'temp.html',
  'customlinks.json',
  'textstyles.json',
  'textfonts.txt',
  'ffonts.json',
  'pmarg.json',
  'ctab.json',
  'aed.txt',
  'spterm.txt',
  'sceditortips.txt',
  'bsa.txt',
  'img/1024appicon.png',
  'img/Icon.png',
  'img/verifiedonlybottomright.png',
  'MaterialSymbolsOutlined%5BFILL%2CGRAD%2Copsz%2Cwght%5D.woff2',
  'ColorLabs/actionconfirmation1.html',
  'ColorLabs/asset/000.txt',
  'ColorLabs/asset/001.png',
  'ColorLabs/asset/002.png',
  'ColorLabs/chartmaker1.html',
  'ColorLabs/colorchooser1.html',
  'ColorLabs/draw1.html',
  'vendor/bootstrap-icons/font/bootstrap-icons.min.css',
  'vendor/bootstrap-icons/font/fonts/bootstrap-icons.woff',
  'vendor/bootstrap-icons/font/fonts/bootstrap-icons.woff2',
  'vendor/chart.umd.min.js',
  'vendor/fabric.min.js',
  'vendor/fonts/MaterialSymbolsRounded.woff2',
  'vendor/fonts/files/barlow-latin-400-normal.woff2',
  'vendor/fonts/files/barlow-latin-700-normal.woff2',
  'vendor/fonts/files/caveat-latin-400-normal.woff2',
  'vendor/fonts/files/caveat-latin-700-normal.woff2',
  'vendor/fonts/files/cormorant-garamond-latin-400-normal.woff2',
  'vendor/fonts/files/cormorant-garamond-latin-700-normal.woff2',
  'vendor/fonts/files/crimson-text-latin-400-normal.woff2',
  'vendor/fonts/files/crimson-text-latin-700-normal.woff2',
  'vendor/fonts/files/dancing-script-latin-400-normal.woff2',
  'vendor/fonts/files/dancing-script-latin-700-normal.woff2',
  'vendor/fonts/files/dm-mono-latin-400-normal.woff2',
  'vendor/fonts/files/dm-mono-latin-500-normal.woff2',
  'vendor/fonts/files/dm-sans-latin-300-italic.woff2',
  'vendor/fonts/files/dm-sans-latin-300-normal.woff2',
  'vendor/fonts/files/dm-sans-latin-400-normal.woff2',
  'vendor/fonts/files/dm-sans-latin-500-normal.woff2',
  'vendor/fonts/files/dm-sans-latin-600-normal.woff2',
  'vendor/fonts/files/dm-sans-latin-700-normal.woff2',
  'vendor/fonts/files/eb-garamond-latin-400-normal.woff2',
  'vendor/fonts/files/eb-garamond-latin-700-normal.woff2',
  'vendor/fonts/files/exo-2-latin-400-normal.woff2',
  'vendor/fonts/files/exo-2-latin-700-normal.woff2',
  'vendor/fonts/files/figtree-latin-400-normal.woff2',
  'vendor/fonts/files/figtree-latin-700-normal.woff2',
  'vendor/fonts/files/fira-code-latin-400-normal.woff2',
  'vendor/fonts/files/fira-code-latin-700-normal.woff2',
  'vendor/fonts/files/great-vibes-latin-400-normal.woff2',
  'vendor/fonts/files/hind-siliguri-bengali-400-normal.woff2',
  'vendor/fonts/files/hind-siliguri-bengali-700-normal.woff2',
  'vendor/fonts/files/hind-siliguri-latin-400-normal.woff2',
  'vendor/fonts/files/hind-siliguri-latin-700-normal.woff2',
  'vendor/fonts/files/ibm-plex-mono-latin-400-normal.woff2',
  'vendor/fonts/files/ibm-plex-mono-latin-700-normal.woff2',
  'vendor/fonts/files/jetbrains-mono-latin-400-normal.woff2',
  'vendor/fonts/files/jetbrains-mono-latin-700-normal.woff2',
  'vendor/fonts/files/josefin-sans-latin-400-normal.woff2',
  'vendor/fonts/files/josefin-sans-latin-700-normal.woff2',
  'vendor/fonts/files/karla-latin-400-normal.woff2',
  'vendor/fonts/files/karla-latin-700-normal.woff2',
  'vendor/fonts/files/lato-latin-400-normal.woff2',
  'vendor/fonts/files/lato-latin-700-normal.woff2',
  'vendor/fonts/files/lexend-latin-400-normal.woff2',
  'vendor/fonts/files/lexend-latin-700-normal.woff2',
  'vendor/fonts/files/libre-baskerville-latin-400-normal.woff2',
  'vendor/fonts/files/libre-baskerville-latin-700-normal.woff2',
  'vendor/fonts/files/lora-latin-400-normal.woff2',
  'vendor/fonts/files/lora-latin-700-normal.woff2',
  'vendor/fonts/files/manrope-latin-400-normal.woff2',
  'vendor/fonts/files/manrope-latin-700-normal.woff2',
  'vendor/fonts/files/merriweather-latin-400-normal.woff2',
  'vendor/fonts/files/merriweather-latin-700-normal.woff2',
  'vendor/fonts/files/montserrat-latin-400-normal.woff2',
  'vendor/fonts/files/montserrat-latin-700-normal.woff2',
  'vendor/fonts/files/noto-sans-bengali-bengali-400-normal.woff2',
  'vendor/fonts/files/noto-sans-bengali-bengali-700-normal.woff2',
  'vendor/fonts/files/noto-sans-bengali-latin-400-normal.woff2',
  'vendor/fonts/files/noto-sans-bengali-latin-700-normal.woff2',
  'vendor/fonts/files/noto-sans-latin-400-normal.woff2',
  'vendor/fonts/files/noto-sans-latin-700-normal.woff2',
  'vendor/fonts/files/noto-serif-bengali-bengali-400-normal.woff2',
  'vendor/fonts/files/noto-serif-bengali-bengali-700-normal.woff2',
  'vendor/fonts/files/noto-serif-bengali-latin-400-normal.woff2',
  'vendor/fonts/files/noto-serif-bengali-latin-700-normal.woff2',
  'vendor/fonts/files/noto-serif-latin-400-normal.woff2',
  'vendor/fonts/files/noto-serif-latin-700-normal.woff2',
  'vendor/fonts/files/nunito-latin-400-normal.woff2',
  'vendor/fonts/files/nunito-latin-700-normal.woff2',
  'vendor/fonts/files/open-sans-latin-400-normal.woff2',
  'vendor/fonts/files/open-sans-latin-700-normal.woff2',
  'vendor/fonts/files/oswald-latin-400-normal.woff2',
  'vendor/fonts/files/oswald-latin-700-normal.woff2',
  'vendor/fonts/files/outfit-latin-400-normal.woff2',
  'vendor/fonts/files/outfit-latin-700-normal.woff2',
  'vendor/fonts/files/pacifico-latin-400-normal.woff2',
  'vendor/fonts/files/playfair-display-latin-400-normal.woff2',
  'vendor/fonts/files/playfair-display-latin-700-normal.woff2',
  'vendor/fonts/files/plus-jakarta-sans-latin-400-normal.woff2',
  'vendor/fonts/files/plus-jakarta-sans-latin-700-normal.woff2',
  'vendor/fonts/files/poppins-latin-400-normal.woff2',
  'vendor/fonts/files/poppins-latin-700-normal.woff2',
  'vendor/fonts/files/pt-serif-latin-400-normal.woff2',
  'vendor/fonts/files/pt-serif-latin-700-normal.woff2',
  'vendor/fonts/files/quicksand-latin-400-normal.woff2',
  'vendor/fonts/files/quicksand-latin-500-normal.woff2',
  'vendor/fonts/files/quicksand-latin-600-normal.woff2',
  'vendor/fonts/files/quicksand-latin-700-normal.woff2',
  'vendor/fonts/files/raleway-latin-400-normal.woff2',
  'vendor/fonts/files/raleway-latin-700-normal.woff2',
  'vendor/fonts/files/roboto-latin-400-normal.woff2',
  'vendor/fonts/files/roboto-latin-700-normal.woff2',
  'vendor/fonts/files/roboto-mono-latin-400-normal.woff2',
  'vendor/fonts/files/roboto-mono-latin-700-normal.woff2',
  'vendor/fonts/files/rubik-latin-400-normal.woff2',
  'vendor/fonts/files/rubik-latin-700-normal.woff2',
  'vendor/fonts/files/sacramento-latin-400-normal.woff2',
  'vendor/fonts/files/satisfy-latin-400-normal.woff2',
  'vendor/fonts/files/sora-latin-400-normal.woff2',
  'vendor/fonts/files/sora-latin-700-normal.woff2',
  'vendor/fonts/files/source-code-pro-latin-400-normal.woff2',
  'vendor/fonts/files/source-code-pro-latin-700-normal.woff2',
  'vendor/fonts/files/source-serif-4-latin-400-normal.woff2',
  'vendor/fonts/files/source-serif-4-latin-700-normal.woff2',
  'vendor/fonts/files/spectral-latin-400-normal.woff2',
  'vendor/fonts/files/spectral-latin-700-normal.woff2',
  'vendor/fonts/files/titillium-web-latin-400-normal.woff2',
  'vendor/fonts/files/titillium-web-latin-700-normal.woff2',
  'vendor/fonts/files/ubuntu-latin-400-normal.woff2',
  'vendor/fonts/files/ubuntu-latin-700-normal.woff2',
  'vendor/fonts/fonts.css',
  'vendor/fonts/material.css',
  'vendor/franc-min.min.js',
  'vendor/harper.js',
  'vendor/html2canvas.min.js',
  'vendor/jspdf.umd.min.js',
  'vendor/katex/auto-render.min.js',
  'vendor/katex/fonts/KaTeX_AMS-Regular.woff2',
  'vendor/katex/fonts/KaTeX_Caligraphic-Bold.woff2',
  'vendor/katex/fonts/KaTeX_Caligraphic-Regular.woff2',
  'vendor/katex/fonts/KaTeX_Fraktur-Bold.woff2',
  'vendor/katex/fonts/KaTeX_Fraktur-Regular.woff2',
  'vendor/katex/fonts/KaTeX_Main-Bold.woff2',
  'vendor/katex/fonts/KaTeX_Main-BoldItalic.woff2',
  'vendor/katex/fonts/KaTeX_Main-Italic.woff2',
  'vendor/katex/fonts/KaTeX_Main-Regular.woff2',
  'vendor/katex/fonts/KaTeX_Math-BoldItalic.woff2',
  'vendor/katex/fonts/KaTeX_Math-Italic.woff2',
  'vendor/katex/fonts/KaTeX_SansSerif-Bold.woff2',
  'vendor/katex/fonts/KaTeX_SansSerif-Italic.woff2',
  'vendor/katex/fonts/KaTeX_SansSerif-Regular.woff2',
  'vendor/katex/fonts/KaTeX_Script-Regular.woff2',
  'vendor/katex/fonts/KaTeX_Size1-Regular.woff2',
  'vendor/katex/fonts/KaTeX_Size2-Regular.woff2',
  'vendor/katex/fonts/KaTeX_Size3-Regular.woff2',
  'vendor/katex/fonts/KaTeX_Size4-Regular.woff2',
  'vendor/katex/fonts/KaTeX_Typewriter-Regular.woff2',
  'vendor/katex/katex.min.css',
  'vendor/katex/katex.min.js',
  'vendor/marked.min.js',
  'vendor/pdf-lib.min.js',
  'vendor/peerjs.min.js',
  'vendor/qrcode.js',
  'vendor/yjs.mjs',
  'whatsnew.md',
  'mit.md',
  'tos.md',
  'privacypolicy.md',
  'tpn.md',
  'vendor/conv/crypto-js-4.2.0.js',
  'vendor/conv/jszip-3.10.1.min.js',
  'vendor/conv/marked-13.0.2.min.js',
  'vendor/conv/marked-4.3.0.min.js',
  'vendor/conv/papaparse-5.4.1.min.js',
  'vendor/conv/pdf-3.11.174.min.js',
  'vendor/conv/pdf.worker-3.11.174.min.js',
  'vendor/dynote/tailwind.css',
  'vendor/fonts/extra.css',
  'vendor/fonts/files/inter-latin-400-normal.woff2',
  'vendor/fonts/files/inter-latin-500-normal.woff2',
  'vendor/fonts/files/inter-latin-600-normal.woff2',
  'vendor/fonts/files/inter-latin-700-normal.woff2',
  'vendor/fonts/files/roboto-latin-500-normal.woff2',
  'vendor/fonts/files/open-sans-latin-600-normal.woff2',
  'vendor/fonts/files/montserrat-latin-600-normal.woff2',
  'vendor/fonts/files/poppins-latin-600-normal.woff2',
  'words.txt'
].map(p => BASE_PATH + p);

// Files that never change without a cache-version bump: serve straight
// from cache and never re-download in the background (harper.js ~5.6 MB,
// words.txt ~4.8 MB, fonts, vendor libs).
const IMMUTABLE_RE = /\/(vendor|ColorLabs\/asset)\/|\/words\.txt$|MaterialSymbols.*\.woff2$|\.woff2?$/;

// ── Live-data URLs — always fetch from network, never cache ──
const NEVER_CACHE_PATTERNS = [
  /\/current\.txt/,
  /\/su\.json/,
  /\/temp\.json/,          // template list (changes often)
  /accounts\.google\.com/, // Google auth
  /\/gsi\/client/,
];

// Release notes: network first so "What's New" is current; cached copy is the offline fallback.
const NETWORK_FIRST_RE = /\/(whatsnew\.md|spterm\.txt)(\?|$)/;   // fresh when online, cached copy offline

// ── CDN / third-party host patterns → LIB_CACHE ──────────────
const LIB_HOST_PATTERNS = [
  /cdnjs\.cloudflare\.com/,
  /unpkg\.com/,
  /cdn\.jsdelivr\.net/,
  /fonts\.googleapis\.com/,
  /fonts\.gstatic\.com/,
  /cdn\.tailwindcss\.com/,
  /buttons\.github\.io/,
  /mozilla\.github\.io/,    // pdf.js
];

// ─────────────────────────────────────────────────────────────
//  INSTALL — pre-cache the app shell + all tool pages
// ─────────────────────────────────────────────────────────────
const PRECACHE_SIZES = {"app.html":334292,"manifest.json":3510,"document-writer.html":195154,"viewer.html":36199,"markup.html":59490,"word-description-finder.html":28458,"translator.html":28906,"document-signer.html":60961,"findandreplacer.html":30715,"page-number-adder.html":44936,"spreadsheet.html":72617,"rm.html":43603,"fe.html":35435,"chart-maker.html":43360,"graphmaker.html":47752,"whiteboard.html":50038,"mmm.html":68446,"table-maker.html":41653,"watermarker.html":64394,"email-writer.html":95394,"spell-checker.html":46085,"file-extractor.html":75569,"qr-code-maker.html":81254,"id-card-maker.html":55362,"file-zipper.html":25568,"converters.html":33893,"mtools.html2pdf.html":38172,"mtools.jpg2pdf.html":31497,"mtools.md2pdf.html":43179,"mtools.old2new.html":1389,"mtools.pdf2jpg.html":28483,"mtools.scd2jpg.html":1389,"mtools.scd2pdf.html":1389,"mtools.url2pdf.html":42753,"pdfcompressor.html":47261,"context-field.html":32527,"metadatainspector.html":68713,"gift-card-maker.html":89092,"docudrop.html":87086,"text-extractor.html":86626,"keyboard-click-test.html":29785,"frontend-ide.html":65212,"code-playground.html":36484,"html.html":41311,"mdeditor.html":55980,"button-designer.html":84204,"html-splitter.html":31755,"goto-code.html":26518,"code-snipper.html":26281,"image-editor.html":79728,"atbedt.html":43731,"draw.html":93474,"collab-document-editor.html":1301,"connect1.html":58424,"connect.html":53280,"sceditor.html":2425392,"dynote.html":102665,"scanner.html":49464,"welcome.html":42506,"aboutapp.html":17540,"instapp.html":19815,"copy.html":4546,"defw.html":13990,"enlimg.html":1635,"red.html":4852,"temp.html":42196,"customlinks.json":167945,"textstyles.json":5072,"textfonts.txt":3819,"ffonts.json":9311,"pmarg.json":38290,"ctab.json":10525,"aed.txt":187510,"sceditortips.txt":44003,"bsa.txt":111359,"img/1024appicon.png":367406,"img/Icon.png":803369,"img/verifiedonlybottomright.png":1392928,"MaterialSymbolsOutlined%5BFILL%2CGRAD%2Copsz%2Cwght%5D.woff2":3752276,"ColorLabs/actionconfirmation1.html":14623,"ColorLabs/asset/000.txt":602,"ColorLabs/asset/001.png":1084508,"ColorLabs/asset/002.png":2140097,"ColorLabs/chartmaker1.html":28717,"ColorLabs/colorchooser1.html":28875,"ColorLabs/draw1.html":25610,"vendor/bootstrap-icons/font/bootstrap-icons.min.css":85875,"vendor/bootstrap-icons/font/fonts/bootstrap-icons.woff":176032,"vendor/bootstrap-icons/font/fonts/bootstrap-icons.woff2":130396,"vendor/chart.umd.min.js":205363,"vendor/fabric.min.js":311096,"vendor/fonts/MaterialSymbolsRounded.woff2":5397756,"vendor/fonts/files/barlow-latin-400-normal.woff2":22196,"vendor/fonts/files/barlow-latin-700-normal.woff2":22788,"vendor/fonts/files/caveat-latin-400-normal.woff2":48836,"vendor/fonts/files/caveat-latin-700-normal.woff2":51020,"vendor/fonts/files/cormorant-garamond-latin-400-normal.woff2":22876,"vendor/fonts/files/cormorant-garamond-latin-700-normal.woff2":22340,"vendor/fonts/files/crimson-text-latin-400-normal.woff2":25184,"vendor/fonts/files/crimson-text-latin-700-normal.woff2":25540,"vendor/fonts/files/dancing-script-latin-400-normal.woff2":23816,"vendor/fonts/files/dancing-script-latin-700-normal.woff2":25444,"vendor/fonts/files/dm-mono-latin-400-normal.woff2":14820,"vendor/fonts/files/dm-mono-latin-500-normal.woff2":14988,"vendor/fonts/files/dm-sans-latin-300-italic.woff2":14800,"vendor/fonts/files/dm-sans-latin-300-normal.woff2":13708,"vendor/fonts/files/dm-sans-latin-400-normal.woff2":14200,"vendor/fonts/files/dm-sans-latin-500-normal.woff2":14304,"vendor/fonts/files/dm-sans-latin-600-normal.woff2":14144,"vendor/fonts/files/dm-sans-latin-700-normal.woff2":14348,"vendor/fonts/files/eb-garamond-latin-400-normal.woff2":23820,"vendor/fonts/files/eb-garamond-latin-700-normal.woff2":25292,"vendor/fonts/files/exo-2-latin-400-normal.woff2":16720,"vendor/fonts/files/exo-2-latin-700-normal.woff2":17220,"vendor/fonts/files/figtree-latin-400-normal.woff2":11384,"vendor/fonts/files/figtree-latin-700-normal.woff2":11376,"vendor/fonts/files/fira-code-latin-400-normal.woff2":23312,"vendor/fonts/files/fira-code-latin-700-normal.woff2":23040,"vendor/fonts/files/great-vibes-latin-400-normal.woff2":42800,"vendor/fonts/files/hind-siliguri-bengali-400-normal.woff2":71076,"vendor/fonts/files/hind-siliguri-bengali-700-normal.woff2":72956,"vendor/fonts/files/hind-siliguri-latin-400-normal.woff2":14472,"vendor/fonts/files/hind-siliguri-latin-700-normal.woff2":14480,"vendor/fonts/files/ibm-plex-mono-latin-400-normal.woff2":14708,"vendor/fonts/files/ibm-plex-mono-latin-700-normal.woff2":14908,"vendor/fonts/files/jetbrains-mono-latin-400-normal.woff2":21168,"vendor/fonts/files/jetbrains-mono-latin-700-normal.woff2":21908,"vendor/fonts/files/josefin-sans-latin-400-normal.woff2":12372,"vendor/fonts/files/josefin-sans-latin-700-normal.woff2":12072,"vendor/fonts/files/karla-latin-400-normal.woff2":13140,"vendor/fonts/files/karla-latin-700-normal.woff2":13304,"vendor/fonts/files/lato-latin-400-normal.woff2":23580,"vendor/fonts/files/lato-latin-700-normal.woff2":23040,"vendor/fonts/files/lexend-latin-400-normal.woff2":14476,"vendor/fonts/files/lexend-latin-700-normal.woff2":14808,"vendor/fonts/files/libre-baskerville-latin-400-normal.woff2":20108,"vendor/fonts/files/libre-baskerville-latin-700-normal.woff2":20436,"vendor/fonts/files/lora-latin-400-normal.woff2":21148,"vendor/fonts/files/lora-latin-700-normal.woff2":21044,"vendor/fonts/files/manrope-latin-400-normal.woff2":14108,"vendor/fonts/files/manrope-latin-700-normal.woff2":14212,"vendor/fonts/files/merriweather-latin-400-normal.woff2":49168,"vendor/fonts/files/merriweather-latin-700-normal.woff2":48660,"vendor/fonts/files/montserrat-latin-400-normal.woff2":18780,"vendor/fonts/files/montserrat-latin-700-normal.woff2":18824,"vendor/fonts/files/noto-sans-bengali-bengali-400-normal.woff2":44352,"vendor/fonts/files/noto-sans-bengali-bengali-700-normal.woff2":47788,"vendor/fonts/files/noto-sans-bengali-latin-400-normal.woff2":10352,"vendor/fonts/files/noto-sans-bengali-latin-700-normal.woff2":10408,"vendor/fonts/files/noto-sans-latin-400-normal.woff2":13120,"vendor/fonts/files/noto-sans-latin-700-normal.woff2":13464,"vendor/fonts/files/noto-serif-bengali-bengali-400-normal.woff2":58720,"vendor/fonts/files/noto-serif-bengali-bengali-700-normal.woff2":71628,"vendor/fonts/files/noto-serif-bengali-latin-400-normal.woff2":11096,"vendor/fonts/files/noto-serif-bengali-latin-700-normal.woff2":11804,"vendor/fonts/files/noto-serif-latin-400-normal.woff2":14400,"vendor/fonts/files/noto-serif-latin-700-normal.woff2":15232,"vendor/fonts/files/nunito-latin-400-normal.woff2":16316,"vendor/fonts/files/nunito-latin-700-normal.woff2":16228,"vendor/fonts/files/open-sans-latin-400-normal.woff2":18640,"vendor/fonts/files/open-sans-latin-700-normal.woff2":18204,"vendor/fonts/files/oswald-latin-400-normal.woff2":12248,"vendor/fonts/files/oswald-latin-700-normal.woff2":12672,"vendor/fonts/files/outfit-latin-400-normal.woff2":14032,"vendor/fonts/files/outfit-latin-700-normal.woff2":14060,"vendor/fonts/files/pacifico-latin-400-normal.woff2":32280,"vendor/fonts/files/playfair-display-latin-400-normal.woff2":21856,"vendor/fonts/files/playfair-display-latin-700-normal.woff2":23224,"vendor/fonts/files/plus-jakarta-sans-latin-400-normal.woff2":11816,"vendor/fonts/files/plus-jakarta-sans-latin-700-normal.woff2":12244,"vendor/fonts/files/poppins-latin-400-normal.woff2":7884,"vendor/fonts/files/poppins-latin-700-normal.woff2":7816,"vendor/fonts/files/pt-serif-latin-400-normal.woff2":33116,"vendor/fonts/files/pt-serif-latin-700-normal.woff2":29588,"vendor/fonts/files/quicksand-latin-400-normal.woff2":15776,"vendor/fonts/files/quicksand-latin-500-normal.woff2":15788,"vendor/fonts/files/quicksand-latin-600-normal.woff2":15864,"vendor/fonts/files/quicksand-latin-700-normal.woff2":15124,"vendor/fonts/files/raleway-latin-400-normal.woff2":22408,"vendor/fonts/files/raleway-latin-700-normal.woff2":22696,"vendor/fonts/files/roboto-latin-400-normal.woff2":21884,"vendor/fonts/files/roboto-latin-700-normal.woff2":22240,"vendor/fonts/files/roboto-mono-latin-400-normal.woff2":12680,"vendor/fonts/files/roboto-mono-latin-700-normal.woff2":12696,"vendor/fonts/files/rubik-latin-400-normal.woff2":18936,"vendor/fonts/files/rubik-latin-700-normal.woff2":19112,"vendor/fonts/files/sacramento-latin-400-normal.woff2":23708,"vendor/fonts/files/satisfy-latin-400-normal.woff2":22724,"vendor/fonts/files/sora-latin-400-normal.woff2":14724,"vendor/fonts/files/sora-latin-700-normal.woff2":15128,"vendor/fonts/files/source-code-pro-latin-400-normal.woff2":11656,"vendor/fonts/files/source-code-pro-latin-700-normal.woff2":11540,"vendor/fonts/files/source-serif-4-latin-400-normal.woff2":20088,"vendor/fonts/files/source-serif-4-latin-700-normal.woff2":21716,"vendor/fonts/files/spectral-latin-400-normal.woff2":21696,"vendor/fonts/files/spectral-latin-700-normal.woff2":23036,"vendor/fonts/files/titillium-web-latin-400-normal.woff2":12344,"vendor/fonts/files/titillium-web-latin-700-normal.woff2":11732,"vendor/fonts/files/ubuntu-latin-400-normal.woff2":34924,"vendor/fonts/files/ubuntu-latin-700-normal.woff2":29844,"vendor/fonts/fonts.css":37572,"vendor/fonts/material.css":1300,"vendor/franc-min.min.js":174835,"vendor/harper.js":5664932,"vendor/html2canvas.min.js":198689,"vendor/jspdf.umd.min.js":364463,"vendor/katex/auto-render.min.js":3481,"vendor/katex/fonts/KaTeX_AMS-Regular.woff2":28076,"vendor/katex/fonts/KaTeX_Caligraphic-Bold.woff2":6912,"vendor/katex/fonts/KaTeX_Caligraphic-Regular.woff2":6908,"vendor/katex/fonts/KaTeX_Fraktur-Bold.woff2":11348,"vendor/katex/fonts/KaTeX_Fraktur-Regular.woff2":11316,"vendor/katex/fonts/KaTeX_Main-Bold.woff2":25324,"vendor/katex/fonts/KaTeX_Main-BoldItalic.woff2":16780,"vendor/katex/fonts/KaTeX_Main-Italic.woff2":16988,"vendor/katex/fonts/KaTeX_Main-Regular.woff2":26272,"vendor/katex/fonts/KaTeX_Math-BoldItalic.woff2":16400,"vendor/katex/fonts/KaTeX_Math-Italic.woff2":16440,"vendor/katex/fonts/KaTeX_SansSerif-Bold.woff2":12216,"vendor/katex/fonts/KaTeX_SansSerif-Italic.woff2":12028,"vendor/katex/fonts/KaTeX_SansSerif-Regular.woff2":10344,"vendor/katex/fonts/KaTeX_Script-Regular.woff2":9644,"vendor/katex/fonts/KaTeX_Size1-Regular.woff2":5468,"vendor/katex/fonts/KaTeX_Size2-Regular.woff2":5208,"vendor/katex/fonts/KaTeX_Size3-Regular.woff2":3624,"vendor/katex/fonts/KaTeX_Size4-Regular.woff2":4928,"vendor/katex/fonts/KaTeX_Typewriter-Regular.woff2":13568,"vendor/katex/katex.min.css":23197,"vendor/katex/katex.min.js":275309,"vendor/marked.min.js":36054,"vendor/pdf-lib.min.js":525099,"vendor/peerjs.min.js":92865,"vendor/qrcode.js":56694,"vendor/yjs.mjs":92384,"whatsnew.md":800,"mit.md":1202,"tos.md":5413,"privacypolicy.md":8725,"tpn.md":52239,"vendor/conv/crypto-js-4.2.0.js":219092,"vendor/conv/jszip-3.10.1.min.js":97630,"vendor/conv/marked-13.0.2.min.js":38704,"vendor/conv/marked-4.3.0.min.js":49718,"vendor/conv/papaparse-5.4.1.min.js":19469,"vendor/conv/pdf-3.11.174.min.js":320004,"vendor/conv/pdf.worker-3.11.174.min.js":1087212,"vendor/dynote/tailwind.css":13627,"vendor/fonts/extra.css":2808,"vendor/fonts/files/inter-latin-400-normal.woff2":23664,"vendor/fonts/files/inter-latin-500-normal.woff2":24272,"vendor/fonts/files/inter-latin-600-normal.woff2":24452,"vendor/fonts/files/inter-latin-700-normal.woff2":24356,"vendor/fonts/files/roboto-latin-500-normal.woff2":22200,"vendor/fonts/files/open-sans-latin-600-normal.woff2":18620,"vendor/fonts/files/montserrat-latin-600-normal.woff2":18688,"vendor/fonts/files/poppins-latin-600-normal.woff2":8000,"words.txt":4862985};

// ── Pre-cache with progress reporting ─────────────────────────
// Posts PRECACHE_PROGRESS / PRECACHE_DONE to every open window so the
// app can show a download screen. Re-running only fetches what is missing.
async function broadcast(msg) {
  const cs = await self.clients.matchAll({ includeUncontrolled: true, type: 'window' });
  cs.forEach(c => c.postMessage(msg));
}
const PREFIX_LEN = (OWN_ORIGIN + BASE_PATH).length;
const sizeOf = u => PRECACHE_SIZES[u.slice(PREFIX_LEN)] || 2000;

// Converters are published as mtools.<from>2<to>.html in the repo root, and new ones
// can appear without an app update. Ask GitHub for the live list so they are
// downloaded too; the static list above is the fallback when GitHub is unreachable.
async function discoverConverters() {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), 6000);   // never stall the download on a slow GitHub
  try {
    const r = await fetch('https://api.github.com/repos/mahi902/Oryn/contents/', { cache: 'no-cache', signal: ctl.signal });
    clearTimeout(timer);
    if (!r.ok) return [];
    const files = await r.json();
    return files.map(f => f.name).filter(n => /^mtools\.[a-z0-9]+2[a-z0-9]+\.html$/i.test(n))
                .map(n => OWN_ORIGIN + BASE_PATH + n);
  } catch (e) { clearTimeout(timer); return []; }
}

// Pull the CDN files a freshly downloaded page/stylesheet refers to (scripts, stylesheets,
// and the font files inside Google Fonts CSS) so pages that are not self-hosted yet still
// work offline.
const REF_HOST_RE = /^https:\/\/(cdnjs\.cloudflare\.com|cdn\.jsdelivr\.net|unpkg\.com|cdn\.tailwindcss\.com|fonts\.googleapis\.com|fonts\.gstatic\.com)\//;
async function cacheRefsOf(text, baseUrl) {
  const found = new Set();
  const re = /(?:src|href)\s*=\s*["']([^"']+)["']|url\(\s*["']?([^"')]+)["']?\s*\)|@import\s+["']([^"']+)["']/gi;
  let m;
  while ((m = re.exec(text))) {
    const raw = m[1] || m[2] || m[3];
    if (!raw || /^(data:|blob:|#)/.test(raw)) continue;
    try { const u = new URL(raw, baseUrl).href; if (REF_HOST_RE.test(u)) found.add(u); } catch (e) {}
  }
  const lib = await caches.open(LIB_CACHE);
  for (const u of found) {
    try {
      if (await lib.match(u)) continue;
      const res = await fetch(u);
      if (!res.ok) continue;
      const clean = new Response(await res.clone().blob(), { status: 200, headers: res.headers });
      await lib.put(u, clean);
      if (/fonts\.googleapis\.com|\.css(\?|$)/.test(u)) await cacheRefsOf(await res.text(), u);
    } catch (e) { /* best effort */ }
  }
}

// Cache an arbitrary list of URLs on request (add-on files, etc.).
async function cacheUrls(urls) {
  const shell = await caches.open(SHELL_CACHE);
  const failed = [];
  for (const u of urls) {
    try {
      const res = await fetch(new Request(u, { cache: 'reload' }));
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const copy = res.clone();
      if (LIB_HOST_PATTERNS.some(re => re.test(u))) await (await caches.open(LIB_CACHE)).put(u, res);
      else await shell.put(u, res);
      const type = copy.headers.get('content-type') || '';
      if (/html|css/.test(type) || /\.(html|css)(\?|$)/.test(u)) await cacheRefsOf(await copy.text(), u);
    } catch (e) { failed.push(u); }
  }
  return failed;
}

async function runPrecache() {
  const cache = await caches.open(SHELL_CACHE);
  const staticUrls = PRECACHE_PAGES.concat(OFFLINE_ASSETS).map(p => OWN_ORIGIN + p);
  const dynamicUrls = (await discoverConverters()).filter(u => !staticUrls.includes(u));
  const urls = staticUrls.concat(dynamicUrls);
  let total = 0, doneBytes = 0, doneFiles = 0;
  const todo = [];
  for (const u of urls) {
    const sz = sizeOf(u); total += sz;
    if (await cache.match(u)) { doneBytes += sz; doneFiles++; } else todo.push(u);
  }
  const failed = [];
  let next = 0;
  const report = file => broadcast({ type: 'PRECACHE_PROGRESS', done: doneBytes, total,
                                     files: doneFiles, fileTotal: urls.length, file });
  await report('');
  async function worker() {
    while (next < todo.length) {
      const u = todo[next++];
      try {
        const res = await fetch(new Request(u, { cache: 'reload' }));
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const copy = dynamicUrls.includes(u) ? res.clone() : null;
        await cache.put(u, res);
        if (copy) await cacheRefsOf(await copy.text(), u);
      } catch (err) {
        failed.push(u);
        console.warn('[SW] Pre-cache miss:', u, err);
      }
      doneBytes += sizeOf(u); doneFiles++;
      await report(decodeURIComponent(u.slice(PREFIX_LEN)).split('/').pop());
    }
  }
  await Promise.all(Array.from({ length: 6 }, worker));
  await broadcast({ type: 'PRECACHE_DONE', ok: failed.length === 0, failed: failed.length,
                    total, fileTotal: urls.length, version: SHELL_CACHE });
}

self.addEventListener('install', event => {
  event.waitUntil(runPrecache().catch(e => console.warn('[SW] precache error', e)).then(() => self.skipWaiting()));
});

// ─────────────────────────────────────────────────────────────
//  ACTIVATE — delete stale caches from old versions
// ─────────────────────────────────────────────────────────────
self.addEventListener('activate', event => {
  const KEEP = [SHELL_CACHE, LIB_CACHE, AI_CACHE];
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => !KEEP.includes(k)).map(k => {
          console.log('[SW] Deleting old cache:', k);
          return caches.delete(k);
        })
      ))
      .then(() => self.clients.claim())
  );
});

// ─────────────────────────────────────────────────────────────
//  FETCH — route each request to the right strategy
// ─────────────────────────────────────────────────────────────
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = request.url;

  // Only handle GET; let POST/PUT pass through untouched
  if (request.method !== 'GET') return;

  // ── Optional on-device AI model: bypass the SW completely ───
  // ~130 MB of weights are cached by Transformers.js in its own Cache API
  // store ('transformers-cache'); don't double-cache them in SHELL_CACHE.
  if (/^https:\/\/([^/]*\.)?(huggingface\.co|hf\.co)\//i.test(url)) return;

  // ── Sentence-prediction runtime: cache-first, stored in AI_CACHE ──
  if (url.startsWith(OWN_ORIGIN + BASE_PATH + 'vendor/ai/')) {
    event.respondWith(aiRuntime(request));
    return;
  }

  // ── Never-cache: live data / auth ──────────────────────────
  if (NEVER_CACHE_PATTERNS.some(re => re.test(url))) {
    event.respondWith(fetch(request));
    return;
  }

  // ── Third-party CDN libs: stale-while-revalidate ───────────
  if (LIB_HOST_PATTERNS.some(re => re.test(url))) {
    event.respondWith(staleWhileRevalidate(request, LIB_CACHE));
    return;
  }

  // ── Release notes: network first, cached copy offline ──────
  if (url.startsWith(OWN_ORIGIN) && NETWORK_FIRST_RE.test(url)) {
    event.respondWith(networkWithCacheFallback(request, SHELL_CACHE));
    return;
  }

  // ── Own origin, immutable assets: cache-first, no bg refresh ─
  if (url.startsWith(OWN_ORIGIN) && IMMUTABLE_RE.test(url)) {
    event.respondWith(cacheOnly(request, SHELL_CACHE));
    return;
  }

  // ── Own origin: cache-first (serve from cache, update bg) ──
  if (url.startsWith(OWN_ORIGIN)) {
    event.respondWith(cacheFirst(request, SHELL_CACHE));
    return;
  }

  // ── Everything else: network with cache fallback ───────────
  event.respondWith(networkWithCacheFallback(request, SHELL_CACHE));
});

// ─────────────────────────────────────────────────────────────
//  Strategy helpers
// ─────────────────────────────────────────────────────────────

/** vendor/ai runtime: look in every cache (ignoring ?v=), else fetch once and keep in AI_CACHE */
async function aiRuntime(request) {
  const hit = await caches.match(request, { ignoreSearch: true });
  if (hit) return hit;
  try {
    const res = await fetch(request);
    if (res && res.ok && res.status === 200) {
      const cache = await caches.open(AI_CACHE);
      cache.put(request, res.clone());
    }
    return res;
  } catch (e) {
    return new Response('', { status: 503 });
  }
}

/** Cache-first: serve cached copy instantly; revalidate in background */
async function cacheFirst(request, cacheName) {
  const cache  = await caches.open(cacheName);
  const cached = await cache.match(request, { ignoreSearch: true });
  if (cached) {
    // Background refresh so next visit gets the latest version
    fetch(request).then(res => {
      if (res && res.ok) cache.put(request, res);
    }).catch(() => {});
    return cached;
  }
  // Not in cache yet — fetch, store, and return
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response('Offline — this page has not been cached yet.', {
      status: 503,
      headers: { 'Content-Type': 'text/plain' },
    });
  }
}

/** Immutable assets: cache first; fetch + store once if missing */
async function cacheOnly(request, cacheName) {
  const cache  = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response && response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    return new Response('', { status: 503 });
  }
}

/** Stale-while-revalidate: return cache immediately AND update it */
async function staleWhileRevalidate(request, cacheName) {
  const cache  = await caches.open(cacheName);
  const cached = await cache.match(request);

  const fetchPromise = fetch(request).then(res => {
    if (res && (res.ok || res.type === 'opaque')) cache.put(request, res.clone());
    return res;
  }).catch(() => null);

  return cached || await fetchPromise || new Response('', { status: 503 });
}

/** Network-first with cache fallback (for unknown third-party fetches) */
async function networkWithCacheFallback(request, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const response = await fetch(request);
    if (response && response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    const cached = await cache.match(request);
    return cached || new Response('', { status: 503 });
  }
}

// ─────────────────────────────────────────────────────────────
//  MESSAGE — allow the app to trigger a manual cache refresh
//  Usage: navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' })
// ─────────────────────────────────────────────────────────────
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  // App asks us to cache extra files (e.g. an add-on's files) and reports back when done.
  if (event.data && event.data.type === 'CACHE_URLS' && Array.isArray(event.data.urls)) {
    const id = event.data.id;
    const src = event.source;
    event.waitUntil(cacheUrls(event.data.urls).then(failed => {
      const msg = { type: 'CACHE_URLS_DONE', id, ok: failed.length === 0, failed };
      return src ? src.postMessage(msg) : broadcast(msg);
    }));
  }
  // App asks for a status check / retry: fetches only what is missing
  if (event.data && (event.data.type === 'PRECACHE_STATUS' || event.data.type === 'RETRY_PRECACHE')) {
    event.waitUntil(runPrecache());
  }
});
