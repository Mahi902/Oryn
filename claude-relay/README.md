**Not technical? Read [GUIDE.md](GUIDE.md) instead. It has plain step-by-step instructions.**

# Sugarcane <-> Claude relay

Lets Claude (claude.ai) drive your open Sugarcane/Oryn tab through a custom MCP connector.

## Deploy (free Cloudflare account)
    npm i
    npx wrangler login
    npx wrangler deploy
Wrangler prints your URL, e.g. https://sugarcane-claude.YOU.workers.dev

## Pair
1. In Sugarcane: Claude Configuration > Bridge mode. Paste the Worker URL, switch Bridge on.
2. Copy the Connector URL (it contains a secret; treat it like a password).
3. claude.ai > Settings > Connectors > Add custom connector > paste it.
4. Keep the Sugarcane tab open. Ask Claude to use the connector; it calls `guide` first.

The tab keeps its own permission switches (Allow UI Control, approvals, scopes).
Use the regenerate button in the add-on to revoke a leaked URL.
