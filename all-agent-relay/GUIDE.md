# Connect Claude to Sugarcane: simple guide

No coding needed. You do the setup **once**. It takes about 15 minutes.

**What this does:** Claude (on claude.ai) can click, type and run commands in your Sugarcane editor for you.

**How it works:** a small free helper, called the *relay*, sits on the internet between Claude and your editor tab. Claude talks to the relay. The relay talks to your tab.

You need:
- A free Cloudflare account (cloudflare.com)
- A free GitHub account (github.com)
- A Claude account on claude.ai that allows custom connectors
- Your Sugarcane editor with the **Connect with Claude** add-on installed

> Works on a phone or a computer. On a phone, use Chrome and switch on **Desktop site** (Chrome menu) when a page looks cramped.

---

## Part 1: Put the relay online (once)

1. Go to **github.com/mahi902/Oryn** and tap **Fork** (top right), then **Create fork**. This gives you your own copy. Cloudflare needs a copy that belongs to you.
2. Go to **dash.cloudflare.com** and sign in.
3. Tap **Workers & Pages**, then **Create application**, then **Import a repository** (it may say "Connect to Git").
4. Choose **GitHub** and allow Cloudflare to see your forked **Oryn** repo. Pick it.
5. Fill in the boxes. Type them by hand, in lowercase, with no spaces:
   - Project name: `all-agent-mcp`
   - Root directory: `all-agent-relay`
   - Deploy command: `npx wrangler deploy` (or leave the default)
   - Build command: leave empty
6. Tap **Save and Deploy**. Wait one to two minutes.
7. When it finishes, copy the address ending in `workers.dev`. This is your **Worker URL**.
   Can't see it? Open Workers & Pages, tap `all-agent-mcp`, then Settings, then Domains & Routes.

Screen names may look slightly different, since Cloudflare updates its pages.

## Part 2: Link the relay to your editor (once)

1. Open Sugarcane and open **Agent Configuration**.
2. Paste your Worker URL into **Relay Worker URL**.
3. Turn **Bridge mode** on.
4. Wait until the text under it says **Connected**.
5. Tap the **copy** button next to **Connector URL**.

**The Connector URL is a password.** Anyone who has it can control your editor tab. Never post it anywhere. If it leaks, tap the circular-arrows button to make a new one.

## Part 3: Link Claude to the relay (once)

1. Open **claude.ai** (use Desktop site on a phone).
2. Go to **Settings**, then **Connectors**, then **Add custom connector**.
3. Paste the Connector URL, give it a name such as "Sugarcane", and save.
4. In Sugarcane's Agent Configuration, turn on **Allow UI Control**. Without it Claude cannot click or type.

## Part 4: Use it (every time)

1. Keep your Sugarcane tab **open and on screen**. If the phone puts the tab to sleep, it disconnects. It reconnects by itself when you come back.
2. In claude.ai, ask Claude, for example: *"Use the Sugarcane connector and make the title bold."*
3. Watch the bar at the top of the editor:
   - **Orange, "Claude is working…"**: Claude is acting. It shows the current action. Tap **Stop** to cancel.
   - **Yellow, "Claude needs your approval"**: open the Claude chat in Sugarcane and tap **Approve** or **Deny**.
   - **Green, "Claude finished"**: done.

## If something goes wrong

| What you see | What to do |
|---|---|
| Status says "Retrying…" | The Relay Worker URL has a typo, or the relay isn't deployed. Check it. |
| Claude says the tab isn't connected | Turn Bridge mode on, and keep the tab open and awake. |
| Claude says a permission is off | Turn on the switch it names in Agent Configuration. |
| Cloudflare rejects the project name | Type `all-agent-mcp` by hand. Use only lowercase letters, numbers and dashes. |
| The build fails on Cloudflare | Open the failed build and read the last red lines. Make sure Root directory is `all-agent-relay`. |
| You think the link leaked | Tap the circular-arrows button in Sugarcane, then paste the new link into claude.ai. |

## Safety notes

- Claude acts only within the switches you turn on in Agent Configuration. It cannot change those switches itself.
- Turn Bridge mode off when you are not using it.
- Never share your Connector URL, your GitHub token or your Cloudflare token.
