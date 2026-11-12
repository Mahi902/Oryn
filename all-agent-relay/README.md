**Not technical? Read [GUIDE.md](GUIDE.md). It has plain step-by-step instructions** (written for the original Claude relay; the taps are the same, only the names differ: project `all-agent-mcp`, root directory `all-agent-relay`).

# All Agent MCP relay

Lets any MCP-capable AI agent (Claude, ChatGPT, Gemini, Copilot, ...) drive your open Sugarcane/Oryn tab through a custom MCP connector. Many agents can share the same connector URL.

## Deploy (free Cloudflare account)
    npm i
    npx wrangler login
    npx wrangler deploy

## Pair
1. In Sugarcane: add the **All Agent MCP** add-on, then Agent Configuration > Bridge mode. Paste the Worker URL, switch Bridge on.
2. Copy the Connector URL (it contains a secret; treat it like a password).
3. Add it to each agent as a remote MCP / custom connector.
4. Keep the Sugarcane tab open. Each agent calls `identify` with its name, then `guide`.

## What the relay adds
- **Sessions = agents.** Each MCP session (`Mcp-Session-Id`) is one agent. `identify {name}` sets its name; unnamed agents show as "Agent".
- **Agent Chat.** Messages typed in the editor are queued. An agent receives them appended to its next tool result, or with `read_messages {wait_seconds}`; it answers with `reply {text}`. MCP is request/response, so delivery happens when the agent next calls a tool, not instantly.
- Tools handled here: `identify`, `status`, `read_messages`, `reply`. Everything else (including `toast_log`, `run_command`, `guide`) comes from the tab.
