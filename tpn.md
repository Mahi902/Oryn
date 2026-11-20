# Open Source Notices and Attributions

This application incorporates various third-party software libraries, fonts, models and online services. Each item below remains the property of its respective authors and is used under the license or terms shown.

`Notices last updated: Nov 20, 2026 (Editor v253)`

---

##  Libraries and Frameworks

Bundled with the application (served from our own `vendor/` folder, not loaded from a third-party CDN).

| Library | License | Copyright/License Link |
| :--- | :--- | :--- |
| **jsPDF** | MIT | [View License](https://github.com/parallax/jsPDF/blob/master/LICENSE) |
| **pdf-lib** | MIT | [View License](https://github.com/Hopding/pdf-lib/blob/master/LICENSE.md) |
| **PDF.js** | Apache 2.0 | [View License](https://github.com/mozilla/pdf.js/blob/master/LICENSE) |
| **html2canvas** | MIT | [View License](https://github.com/niklasvh/html2canvas/blob/master/LICENSE) |
| **Fabric.js** | MIT | [View License](https://github.com/fabricjs/fabric.js/blob/master/LICENSE) |
| **KaTeX** | MIT | [View License](https://github.com/KaTeX/KaTeX/blob/main/LICENSE) |
| **Yjs** | MIT | [View License](https://github.com/yjs/yjs/blob/main/LICENSE) |
| **PeerJS** | MIT | [View License](https://github.com/peers/peerjs/blob/master/LICENSE) |
| **Harper** (grammar checking) | Apache 2.0 | [View License](https://github.com/Automattic/harper/blob/master/LICENSE) |
| **franc** (language detection) | MIT | [View License](https://github.com/wooorm/franc/blob/main/license) |
| **marked** | MIT | [View License](https://github.com/markedjs/marked/blob/master/LICENSE.md) |
| **QR Code Generator** (Kazuhiko Arase) | MIT | [View License](https://github.com/kazuhikoarase/qrcode-generator/blob/master/LICENSE) |
| **Chart.js** | MIT | [View License](https://github.com/chartjs/Chart.js/blob/master/LICENSE.md) |
| **Tesseract.js** | Apache 2.0 | [View License](https://github.com/naptha/tesseract.js/blob/master/LICENSE) |
| **OpenCV** | Apache 2.0 | [View License](https://opencv.org/license/) |
| **Papa Parse** | MIT | [View License](https://github.com/mholt/PapaParse/blob/master/LICENSE) |
| **JSZip** | MIT or GPL v3 (used under MIT) | [View License](https://github.com/Stuk/jszip/blob/main/LICENSE.markdown) |
| **CryptoJS** | MIT | [View License](https://github.com/brix/crypto-js/blob/develop/LICENSE) |
| **CodeMirror** | MIT | [View License](https://github.com/codemirror/dev/blob/main/LICENSE) |
| **Tailwind CSS** | MIT | [View License](https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE) |
| **Dwyl English Word Dictionary** | The Unlicense | [View License](https://github.com/dwyl/english-words/blob/master/LICENSE.md) |
| **LaTeX** | LPPL | [View License](https://github.com/latex3/latex3/blob/develop/LICENSE) |

### On-device AI

Runs entirely in your browser; models are downloaded once and cached.

| Component | License | Copyright/License Link |
| :--- | :--- | :--- |
| **Transformers.js** | Apache 2.0 | [View License](https://github.com/huggingface/transformers.js/blob/main/LICENSE) |
| **ONNX Runtime Web** | MIT | [View License](https://github.com/microsoft/onnxruntime/blob/main/LICENSE) |
| **SmolLM2** (HuggingFaceTB) | Apache 2.0 | [Model card](https://huggingface.co/HuggingFaceTB/SmolLM2-360M-Instruct) |
| **SDXS-512** text-to-image model | See model card | [Model card](https://huggingface.co/Fcouprie/sdxs-512-texte-image) |

### Fonts and Icons

| Asset | License | Copyright/License Link |
| :--- | :--- | :--- |
| **Fontsource font packages** (Inter, Roboto, Open Sans, Lato, Montserrat, Poppins, Lora, Merriweather, Playfair Display, Noto, Fira Code, JetBrains Mono and others) | SIL Open Font License 1.1 (some families Apache 2.0 or the Ubuntu Font Licence) | [Fontsource](https://fontsource.org/) / [OFL 1.1](https://openfontlicense.org/) |
| **Material Symbols & Material Icons** | Apache 2.0 | [View License](https://github.com/google/material-design-icons/blob/master/LICENSE) |
| **Bootstrap Icons** | MIT | [View License](https://github.com/twbs/icons/blob/main/LICENSE) |

### Images

| Source | License | Copyright/License Link |
| :--- | :--- | :--- |
| **Unsplash** | Unsplash License | [View License](https://unsplash.com/license) |

### Browser Standards

| Standard | License | Copyright/License Link |
| :--- | :--- | :--- |
| **IndexedDB** | W3C | [View License](https://github.com/w3c/IndexedDB/blob/main/LICENSE.md) |

---

##  Service Providers & APIs

The following services are used to power specific features within the application, and are contacted only when you use those features. Usage is governed by their respective Terms of Service and Privacy Policies.

### AI & Machine Learning
* **OpenAI**: Powered by OpenAI models.
    * [Terms of Service](https://openai.com/policies/service-terms)
* **Pollinations.ai**: Used for image generation services.
    * [Terms & Conditions](https://pollinations.ai/)

### Translation Services
* **MyMemory API**: Provided by Translated.net.
    * [Terms of Service](https://mymemory.translated.net/doc/tos.php)
    * [Google Translate](https://docs.cloud.google.com/translate/attribution)

### Google Services
* **Google Identity Services, Google Drive API and Google Picker**: Sign-in, saving and opening documents, and picking images, video and audio from your Google Drive.
    * [Google APIs Terms of Service](https://developers.google.com/terms)
    * [Google Privacy Policy](https://policies.google.com/privacy)
* **Google Fonts**: Font catalogue and on-demand font loading.
    * [Google Fonts Terms](https://developers.google.com/fonts/terms)
* **Google Input Tools**: Handwriting recognition.
    * [Google Terms of Service](https://policies.google.com/terms)

### Images and Media
* **Openverse**: Web image search in Insert Image. Results are openly licensed (Creative Commons and public-domain works); the creator and license are shown when you pick an image.
    * [Openverse Terms](https://openverse.org/terms)
    * [About Creative Commons licenses](https://creativecommons.org/share-your-work/cclicenses/)
* **YouTube and Vimeo**: Playback of videos you insert by link.
    * [YouTube Terms of Service](https://www.youtube.com/t/terms)
    * [Vimeo Terms of Service](https://vimeo.com/terms)

### Maps and Location
* **OpenStreetMap**: Map tiles and place search (Nominatim). Map data © OpenStreetMap contributors, available under the Open Database License.
    * [Copyright and License](https://www.openstreetmap.org/copyright)
    * [Tile Usage Policy](https://operations.osmfoundation.org/policies/tiles/)
    * [Nominatim Usage Policy](https://operations.osmfoundation.org/policies/nominatim/)
* **Photon (Komoot)**: Place search.
    * [Photon](https://photon.komoot.io/)
* **Open-Meteo Geocoding API**: Place search. Licensed CC BY 4.0.
    * [License & Terms](https://open-meteo.com/en/license)
* **Esri (ArcGIS Online)**: Satellite and reference map imagery.
    * [Esri Legal](https://www.esri.com/en-us/legal/overview)

### Utilities
* **AllOrigins**: Fetches images and web pages that block direct browser requests.
    * [AllOrigins](https://allorigins.win/)
* **QR Server (goqr.me)**: Fallback QR code image service.
    * [Terms](https://goqr.me/api/)
* **GitHub**: Lists the Material Symbols icon set from the public google/material-design-icons repository.
    * [GitHub Terms of Service](https://docs.github.com/en/site-policy/github-terms/github-terms-of-service)

---

##  Standard License Collection
`License templates last updated: Mar 7, 2026`

# Apache 2.0
                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright [yyyy] [name of copyright owner]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.


# MIT
The MIT License (MIT)

Copyright (c) <year> <owner>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


# MPL
Mozilla Public License Version 2.0
==================================

1. Definitions
--------------

1.1. "Contributor"
    means each individual or legal entity that creates, contributes to
    the creation of, or owns Covered Software.

1.2. "Contributor Version"
    means the combination of the Contributions of others (if any) used
    by a Contributor and that particular Contributor's Contribution.

1.3. "Contribution"
    means Covered Software of a particular Contributor.

1.4. "Covered Software"
    means Source Code Form to which the initial Contributor has attached
    the notice in Exhibit A, the Executable Form of such Source Code
    Form, and Modifications of such Source Code Form, in each case
    including portions thereof.

1.5. "Incompatible With Secondary Licenses"
    means

    (a) that the initial Contributor has attached the notice described
        in Exhibit B to the Covered Software; or

    (b) that the Covered Software was made available under the terms of
        version 1.1 or earlier of the License, but not also under the
        terms of a Secondary License.

1.6. "Executable Form"
    means any form of the work other than Source Code Form.

1.7. "Larger Work"
    means a work that combines Covered Software with other material, in 
    a separate file or files, that is not Covered Software.

1.8. "License"
    means this document.

1.9. "Licensable"
    means having the right to grant, to the maximum extent possible,
    whether at the time of the initial grant or subsequently, any and
    all of the rights conveyed by this License.

1.10. "Modifications"
    means any of the following:

    (a) any file in Source Code Form that results from an addition to,
        deletion from, or modification of the contents of Covered
        Software; or

    (b) any new file in Source Code Form that contains any Covered
        Software.

1.11. "Patent Claims" of a Contributor
    means any patent claim(s), including without limitation, method,
    process, and apparatus claims, in any patent Licensable by such
    Contributor that would be infringed, but for the grant of the
    License, by the making, using, selling, offering for sale, having
    made, import, or transfer of either its Contributions or its
    Contributor Version.

1.12. "Secondary License"
    means either the GNU General Public License, Version 2.0, the GNU
    Lesser General Public License, Version 2.1, the GNU Affero General
    Public License, Version 3.0, or any later versions of those
    licenses.

1.13. "Source Code Form"
    means the form of the work preferred for making modifications.

1.14. "You" (or "Your")
    means an individual or a legal entity exercising rights under this
    License. For legal entities, "You" includes any entity that
    controls, is controlled by, or is under common control with You. For
    purposes of this definition, "control" means (a) the power, direct
    or indirect, to cause the direction or management of such entity,
    whether by contract or otherwise, or (b) ownership of more than
    fifty percent (50%) of the outstanding shares or beneficial
    ownership of such entity.

2. License Grants and Conditions
--------------------------------

2.1. Grants

Each Contributor hereby grants You a world-wide, royalty-free,
non-exclusive license:

(a) under intellectual property rights (other than patent or trademark)
    Licensable by such Contributor to use, reproduce, make available,
    modify, display, perform, distribute, and otherwise exploit its
    Contributions, either on an unmodified basis, with Modifications, or
    as part of a Larger Work; and

(b) under Patent Claims of such Contributor to make, use, sell, offer
    for sale, have made, import, and otherwise transfer either its
    Contributions or its Contributor Version.

2.2. Effective Date

The licenses granted in Section 2.1 with respect to any Contribution
become effective for each Contribution on the date the Contributor first
distributes such Contribution.

2.3. Limitations on Grant Scope

The licenses granted in this Section 2 are the only rights granted under
this License. No additional rights or licenses will be implied from the
distribution or licensing of Covered Software under this License.
Notwithstanding Section 2.1(b) above, no patent license is granted by a
Contributor:

(a) for any code that a Contributor has removed from Covered Software;
    or

(b) for infringements caused by: (i) Your and any other third party's
    modifications of Covered Software, or (ii) the combination of its
    Contributions with other software (except as part of its Contributor
    Version); or

(c) under Patent Claims infringed by Covered Software in the absence of
    its Contributions.

This License does not grant any rights in the trademarks, service marks,
or logos of any Contributor (except as may be necessary to comply with
the notice requirements in Section 3.4).

2.4. Subsequent Licenses

No Contributor makes additional grants as a result of Your choice to
distribute the Covered Software under a subsequent version of this
License (see Section 10.2) or under the terms of a Secondary License (if
permitted under the terms of Section 3.3).

2.5. Representation

Each Contributor represents that the Contributor believes its
Contributions are its original creation(s) or it has sufficient rights
to grant the rights to its Contributions conveyed by this License.

2.6. Fair Use

This License is not intended to limit any rights You have under
applicable copyright doctrines of fair use, fair dealing, or other
equivalents.

2.7. Conditions

Sections 3.1, 3.2, 3.3, and 3.4 are conditions of the licenses granted
in Section 2.1.

3. Responsibilities
-------------------

3.1. Distribution of Source Form

All distribution of Covered Software in Source Code Form, including any
Modifications that You create or to which You contribute, must be under
the terms of this License. You must inform recipients that the Source
Code Form of the Covered Software is governed by the terms of this
License, and how they can obtain a copy of this License. You may not
attempt to alter or restrict the recipients' rights in the Source Code
Form.

3.2. Distribution of Executable Form

If You distribute Covered Software in Executable Form then:

(a) such Covered Software must also be made available in Source Code
    Form, as described in Section 3.1, and You must inform recipients of
    the Executable Form how they can obtain a copy of such Source Code
    Form by reasonable means in a timely manner, at a charge no more
    than the cost of distribution to the recipient; and

(b) You may distribute such Executable Form under the terms of this
    License, or sublicense it under different terms, provided that the
    license for the Executable Form does not attempt to limit or alter
    the recipients' rights in the Source Code Form under this License.

3.3. Distribution of a Larger Work

You may create and distribute a Larger Work under terms of Your choice,
provided that You also comply with the requirements of this License for
the Covered Software. If the Larger Work is a combination of Covered
Software with a work governed by one or more Secondary Licenses, and the
Covered Software is not Incompatible With Secondary Licenses, this
License permits You to additionally distribute such Covered Software
under the terms of such Secondary License(s), so that the recipient of
the Larger Work may, at their option, further distribute the Covered
Software under the terms of either this License or such Secondary
License(s).

3.4. Notices

You may not remove or alter the substance of any license notices
(including copyright notices, patent notices, disclaimers of warranty,
or limitations of liability) contained within the Source Code Form of
the Covered Software, except that You may alter any license notices to
the extent required to remedy known factual inaccuracies.

3.5. Application of Additional Terms

You may choose to offer, and to charge a fee for, warranty, support,
indemnity or liability obligations to one or more recipients of Covered
Software. However, You may do so only on Your own behalf, and not on
behalf of any Contributor. You must make it absolutely clear that any
such warranty, support, indemnity, or liability obligation is offered by
You alone, and You hereby agree to indemnify every Contributor for any
liability incurred by such Contributor as a result of warranty, support,
indemnity or liability terms You offer. You may include additional
disclaimers of warranty and limitations of liability specific to any
jurisdiction.

4. Inability to Comply Due to Statute or Regulation
---------------------------------------------------

If it is impossible for You to comply with any of the terms of this
License with respect to some or all of the Covered Software due to
statute, judicial order, or regulation then You must: (a) comply with
the terms of this License to the maximum extent possible; and (b)
describe the limitations and the code they affect. Such description must
be placed in a text file included with all distributions of the Covered
Software under this License. Except to the extent prohibited by statute
or regulation, such description must be sufficiently detailed for a
recipient of ordinary skill to be able to understand it.

5. Termination
--------------

5.1. The rights granted under this License will terminate automatically
if You fail to comply with any of its terms. However, if You become
compliant, then the rights granted under this License from a particular
Contributor are reinstated (a) provisionally, unless and until such
Contributor explicitly and finally terminates Your grants, and (b) on an
ongoing basis, if such Contributor fails to notify You of the
non-compliance by some reasonable means prior to 60 days after You have
come back into compliance. Moreover, Your grants from a particular
Contributor are reinstated on an ongoing basis if such Contributor
notifies You of the non-compliance by some reasonable means, this is the
first time You have received notice of non-compliance with this License
from such Contributor, and You become compliant prior to 30 days after
Your receipt of the notice.

5.2. If You initiate litigation against any entity by asserting a patent
infringement claim (excluding declaratory judgment actions,
counter-claims, and cross-claims) alleging that a Contributor Version
directly or indirectly infringes any patent, then the rights granted to
You by any and all Contributors for the Covered Software under Section
2.1 of this License shall terminate.

5.3. In the event of termination under Sections 5.1 or 5.2 above, all
end user license agreements (excluding distributors and resellers) which
have been validly granted by You or Your distributors under this License
prior to termination shall survive termination.

************************************************************************
*                                                                      *
*  6. Disclaimer of Warranty                                           *
*  -------------------------                                           *
*                                                                      *
*  Covered Software is provided under this License on an "as is"       *
*  basis, without warranty of any kind, either expressed, implied, or  *
*  statutory, including, without limitation, warranties that the       *
*  Covered Software is free of defects, merchantable, fit for a        *
*  particular purpose or non-infringing. The entire risk as to the     *
*  quality and performance of the Covered Software is with You.        *
*  Should any Covered Software prove defective in any respect, You     *
*  (not any Contributor) assume the cost of any necessary servicing,   *
*  repair, or correction. This disclaimer of warranty constitutes an   *
*  essential part of this License. No use of any Covered Software is   *
*  authorized under this License except under this disclaimer.         *
*                                                                      *
************************************************************************

************************************************************************
*                                                                      *
*  7. Limitation of Liability                                          *
*  --------------------------                                          *
*                                                                      *
*  Under no circumstances and under no legal theory, whether tort      *
*  (including negligence), contract, or otherwise, shall any           *
*  Contributor, or anyone who distributes Covered Software as          *
*  permitted above, be liable to You for any direct, indirect,         *
*  special, incidental, or consequential damages of any character      *
*  including, without limitation, damages for lost profits, loss of    *
*  goodwill, work stoppage, computer failure or malfunction, or any    *
*  and all other commercial damages or losses, even if such party      *
*  shall have been informed of the possibility of such damages. This   *
*  limitation of liability shall not apply to liability for death or   *
*  personal injury resulting from such party's negligence to the       *
*  extent applicable law prohibits such limitation. Some               *
*  jurisdictions do not allow the exclusion or limitation of           *
*  incidental or consequential damages, so this exclusion and          *
*  limitation may not apply to You.                                    *
*                                                                      *
************************************************************************

8. Litigation
-------------

Any litigation relating to this License may be brought only in the
courts of a jurisdiction where the defendant maintains its principal
place of business and such litigation shall be governed by laws of that
jurisdiction, without reference to its conflict-of-law provisions.
Nothing in this Section shall prevent a party's ability to bring
cross-claims or counter-claims.

9. Miscellaneous
----------------

This License represents the complete agreement concerning the subject
matter hereof. If any provision of this License is held to be
unenforceable, such provision shall be reformed only to the extent
necessary to make it enforceable. Any law or regulation which provides
that the language of a contract shall be construed against the drafter
shall not be used to construe this License against a Contributor.

10. Versions of the License
---------------------------

10.1. New Versions

Mozilla Foundation is the license steward. Except as provided in Section
10.3, no one other than the license steward has the right to modify or
publish new versions of this License. Each version will be given a
distinguishing version number.

10.2. Effect of New Versions

You may distribute the Covered Software under the terms of the version
of the License under which You originally received the Covered Software,
or under the terms of any subsequent version published by the license
steward.

10.3. Modified Versions

If you create software not governed by this License, and you want to
create a new license for such software, you may create and use a
modified version of this License if you rename the license and remove
any references to the name of the license steward (except to note that
such modified license differs from this License).

10.4. Distributing Source Code Form that is Incompatible With Secondary
Licenses

If You choose to distribute Source Code Form that is Incompatible With
Secondary Licenses under the terms of this version of the License, the
notice described in Exhibit B of this License must be attached.

Exhibit A - Source Code Form License Notice
-------------------------------------------

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

If it is not possible or desirable to put the notice in a particular
file, then You may include the notice in a location (such as a LICENSE
file in a relevant directory) where a recipient would be likely to look
for such a notice.

You may add additional accurate notices of copyright ownership.

Exhibit B - "Incompatible With Secondary Licenses" Notice
---------------------------------------------------------

  This Source Code Form is "Incompatible With Secondary Licenses", as
  defined by the Mozilla Public License, v. 2.0.


# BSD 3-Clause
BSD 3-Clause License

Copyright (c) 2018, the respective contributors, as shown by the AUTHORS file.
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


# W3C
By obtaining and/or copying this work, you (the licensee) agree that you have read, understood, and will comply with the following terms and conditions.

Permission to copy, modify, and distribute this work, with or without modification, for any purpose and without fee or royalty is hereby granted, provided that you include the following on ALL copies of the work or portions thereof, including modifications:

The full text of this NOTICE in a location viewable to users of the redistributed or derivative work.
Any pre-existing intellectual property disclaimers, notices, or terms and conditions. If none exist, the W3C software and document short notice should be included.
Notice of any changes or modifications, through a copyright statement on the new code or document such as "This software or document includes material copied from or derived from [title and URI of the W3C document]. Copyright © [$year-of-document] World Wide Web Consortium. https://www.w3.org/copyright/software-license-2023/"

THIS WORK IS PROVIDED "AS IS," AND COPYRIGHT HOLDERS MAKE NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY OR FITNESS FOR ANY PARTICULAR PURPOSE OR THAT THE USE OF THE SOFTWARE OR DOCUMENT WILL NOT INFRINGE ANY THIRD PARTY PATENTS, COPYRIGHTS, TRADEMARKS OR OTHER RIGHTS.

COPYRIGHT HOLDERS WILL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF ANY USE OF THE SOFTWARE OR DOCUMENT.

The name and trademarks of copyright holders may NOT be used in advertising or publicity pertaining to the work without specific, written prior permission. Title to copyright in this work will at all times remain with copyright holders.


# The Unlicense
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org/>


# LPPL

The LaTeX Project Public License
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

LPPL Version 1.2  1999-09-03

Copyright 1999 LaTeX3 Project
    Everyone is allowed to distribute verbatim copies of this
    license document, but modification of it is not allowed.


PREAMBLE
========

The LaTeX Project Public License (LPPL) is the license under which the
base LaTeX distribution is distributed.

You may use this license for any program that you have written and wish
to distribute.  This license may be particularly suitable if your
program is TeX-related (such as a LaTeX package), but you may use it
even if your program is unrelated to TeX.  The section `WHETHER AND HOW
TO DISTRIBUTE PROGRAMS UNDER THIS LICENSE', below, gives instructions,
examples, and recommendations for authors who are considering
distributing their programs under this license.

In this license document, `The Program' refers to any program
distributed under this license.

This license gives conditions under which The Program may be distributed
and conditions under which modified versions of The Program may be
distributed.  Individual files of The Program may bear supplementary
and/or superseding conditions on modification of themselves and on the
distribution of modified versions of themselves, but *no* file of The
Program may bear supplementary or superseding conditions on the
distribution of an unmodified copy of the file.  A distributor wishing
to distribute a complete, unmodified copy of The Program therefore
needs to check the conditions only in this license and nowhere else.

Activities other than distribution and/or modification of The Program
are not covered by this license; they are outside its scope.  In
particular, the act of running The Program is not restricted.

We, the LaTeX3 Project, believe that the conditions below give you
the freedom to make and distribute modified versions of The Program
that conform with whatever technical specifications you wish while
maintaining the availability, integrity, and reliability of
The Program.  If you do not see how to achieve your goal while 
meeting these conditions, then read the document `cfgguide.tex'
in the base LaTeX distribution for suggestions.


CONDITIONS ON DISTRIBUTION AND MODIFICATION
===========================================

You may distribute a complete, unmodified copy of The Program.
Distribution of only part of The Program is not allowed.

You may not modify in any way a file of The Program that bears a legal
notice forbidding modification of that file.

You may distribute a modified file of The Program if, and only if, the
following eight conditions are met:

  1. You must meet any additional conditions borne by the file on the
     distribution of a modified version of the file as described below
     in the subsection `Additional Conditions on Individual Files of
     The Program'.
 
  2. If the file is a LaTeX software file, then you must meet any
     applicable additional conditions on the distribution of a modified
     version of the file that are described below in the subsection
     `Additional Conditions on LaTeX Software Files'.
 
  3. You must not distribute the modified file with the filename of the
     original file.
 
  4. In the modified file, you must acknowledge the authorship and
     name of the original file, and the name (if any) of the program
     which contains it.
 
  5. You must change any identification string in the file to indicate
     clearly that the modified file is not part of The Program.
 
  6. You must change any addresses in the modified file for the
     reporting of errors in the file or in The Program generally to
     ensure that reports for files no longer maintained by the original
     maintainers will be directed to the maintainers of the modified
     files.
 
  7. You must distribute the modified file under a license that forbids
     distribution both of the modified file and of any files derived
     from the modified file with the filename of the original file.
 
  8. You must do either (A) or (B):

       (A) distribute a copy of The Program (that is, a complete,
           unmodified copy of The Program) together with the modified
           file; if your distribution of the modified file is made by
           offering access to copy the modified file from a designated
           place, then offering equivalent access to copy The Program
           from the same place meets this condition, even though third
           parties are not compelled to copy The Program along with the
           modified file;

       (B) provide to those who receive the modified file information
           that is sufficient for them to obtain a copy of The Program;
           for example, you may provide a Uniform Resource Locator (URL)
           for a site that you expect will provide them with a copy of 
           The Program free of charge (either the version from which
           your modification is derived, or perhaps a later version).

Note that in the above, `distribution' of a file means making the
file available to others by any means.  This includes, for instance,
installing the file on any machine in such a way that the file is
accessible by users other than yourself.  `Modification' of a file
means any procedure that produces a derivative file under any
applicable law -- that is, a file containing the original file or
a significant portion of it, either verbatim or with modifications
and/or translated into another language.

Changing the name of a file (other than as necessitated by the file
conventions of the target file systems) is considered to be a
modification of the file.

The distribution conditions in this license do not have to be
applied to files that have been modified in accordance with the
above conditions.  Note, however, that Condition 7. does apply to
any such modified file.

The conditions above are not intended to prohibit, and hence do not
apply to, the updating, by any method, of a file so that it becomes
identical to the latest version of that file of The Program.

 

A Recommendation on Modification Without Distribution
-----------------------------------------------------

It is wise never to modify a file of The Program, even for your own
personal use, without also meeting the above eight conditions for
distributing the modified file.  While you might intend that such
modified files will never be distributed, often this will happen by
accident -- you may forget that you have modified the file; or it may
not occur to you when allowing others to access the modified file
that you are thus distributing it and violating the conditions of
this license.  It is usually in your best interest to keep your copy
of The Program identical with the public one.  Many programs provide
ways to control the behavior of that program without altering its
licensed files.


Additional Conditions on Individual Files of The Program
--------------------------------------------------------

An individual file of The Program may bear additional conditions that
supplement and/or supersede the conditions in this license if, and only
if, such additional conditions exclusively concern modification of the
file or distribution of a modified version of the file.  The conditions
on individual files of The Program therefore may differ only with
respect to the kind and extent of modification of those files that
is allowed, and with respect to the distribution of modified versions
of those files.


Additional Conditions on LaTeX Software Files
---------------------------------------------

If a file of The Program is intended to be used with LaTeX (that is,
if it is a LaTeX software file), then the following additional
conditions, which supplement and/or supersede the conditions
above, apply to the file according to its filename extension:

  - You may not modify any file with filename extension `.ins' since
    these are installation files containing the legal notices that are
    placed in the files they generate.
 
  - You may distribute modified versions of files with filename
    extension `.fd' (LaTeX font definition files) under the standard
    conditions of the LPPL as described above.  You may also distribute
    such modified LaTeX font definition files with their original names
    provided that:
    (1) the only changes to the original files either enable use of
        available fonts or prevent attempts to access unavailable fonts;
    (2) you also distribute the original, unmodified files (TeX input
        paths can be used to control which set of LaTeX font definition
        files is actually used by TeX).

  - You may distribute modified versions of files with filename
    extension `.cfg' (configuration files) with their original names.
    The Program may (and usually will) specify the range of commands
    that are allowed in a particular configuration file.
 
Because of portability and exchangeability issues in LaTeX software,
The LaTeX3 Project deprecates the distribution of modified versions of
components of LaTeX or of generally available contributed code for them,
but such distribution can meet the conditions of this license.


NO WARRANTY
===========

There is no warranty for The Program.  Except when otherwise stated in
writing, The Copyright Holder provides The Program `as is', without
warranty of any kind, either expressed or implied, including, but not
limited to, the implied warranties of merchantability and fitness for
a particular purpose.  The entire risk as to the quality and performance
of The Program is with you.  Should The Program prove defective, you
assume the cost of all necessary servicing, repair, or correction.

In no event unless agreed to in writing will The Copyright Holder, or
any author named in the files of The Program, or any other party who may
distribute and/or modify The Program as permitted above, be liable to
you for damages, including any general, special, incidental or
consequential damages arising out of any use of The Program or out of
inability to use The Program (including, but not limited to, loss of
data, data being rendered inaccurate, or losses sustained by anyone as
a result of any failure of The Program to operate with any other
programs), even if The Copyright Holder or said author or said other
party has been advised of the possibility of such damages.


WHETHER AND HOW TO DISTRIBUTE PROGRAMS UNDER THIS LICENSE
=========================================================

This section contains important instructions, examples, and
recommendations for authors who are considering distributing their
programs under this license.  These authors are addressed as `you' in
this section.


Choosing This License or Another License
----------------------------------------

If for any part of your program you want or need to use *distribution*
conditions that differ from those in this license, then do not refer to
this license anywhere in your program but instead distribute your
program under a different license.  You may use the text of this license
as a model for your own license, but your license should not refer to
the LPPL or otherwise give the impression that your program is
distributed under the LPPL.

The document `modguide.tex' in the base LaTeX distribution explains
the motivation behind the conditions of this license.  It explains,
for example, why distributing LaTeX under the GNU General Public
License (GPL) was considered inappropriate.  Even if your program is
unrelated to LaTeX, the discussion in `modguide.tex' may still be
relevant, and authors intending to distribute their programs under any
license are encouraged to read it.


How to Use This License
-----------------------

To use this license, place in each of the files of your program both
an explicit copyright notice including your name and the year and also
a statement that the distribution and/or modification of the file is
constrained by the conditions in this license.

Here is an example of such a notice and statement:

  %% pig.dtx
  %% Copyright 2001 M. Y. Name
  %
  % This program may be distributed and/or modified under the
  % conditions of the LaTeX Project Public License, either version 1.2
  % of this license or (at your option) any later version.
  % The latest version of this license is in
  %   http://www.latex-project.org/lppl.txt
  % and version 1.2 or later is part of all distributions of LaTeX 
  % version 1999/12/01 or later.
  %
  % This program consists of the files pig.dtx and pig.ins

Given such a notice and statement in a file, the conditions given in
this license document would apply, with `The Program' referring to the
two files `pig.dtx' and `pig.ins', and `The Copyright Holder' referring
to the person `M. Y. Name'.


Important Recommendations
-------------------------

 Defining What Constitutes The Program

   The LPPL requires that distributions of The Program contain all the
   files of The Program.  It is therefore important that you provide a
   way for the licensee to determine which files constitute The Program.
   This could, for example, be achieved by explicitly listing all the
   files of The Program near the copyright notice of each file or by
   using a line like

    % This program consists of all files listed in manifest.txt.

   in that place.  In the absence of an unequivocal list it might be
   impossible for the licensee to determine what is considered by you
   to comprise The Program.

 Noting Exceptional Files
  
   If The Program contains any files bearing additional conditions on
   modification, or on distribution of modified versions, of those
   files (other than those listed in `Additional Conditions on LaTeX
   Software Files'), then it is recommended that The Program contain a
   prominent file that defines the exceptional conditions, and either
   lists the exceptional files or defines one or more categories of
   exceptional files.

   Files containing the text of a license (such as this file) are
   often examples of files bearing more restrictive conditions on
   modification.  LaTeX configuration files (with filename extension
   `.cfg') are examples of files bearing less restrictive conditions
   on the distribution of a modified version of the file.  The
   additional conditions on LaTeX software given above are examples 
   of declaring a category of files bearing exceptional additional
   conditions.


# Unsplash
* All images can be downloaded and used for free
* Commercial and non-commercial purposes
* No permission needed (though attribution is appreciated!)

- What is not permitted 
* Images cannot be sold without significant modification.
* Compiling images from Unsplash to replicate a similar or competing service.

Longform:
`Unsplash grants you an irrevocable, nonexclusive, worldwide copyright license to download, copy, modify, distribute, perform, and use images from Unsplash for free, including for commercial purposes, without permission from or attributing the photographer or Unsplash. This license does not include the right to compile images from Unsplash to replicate a similar or competing service.`
