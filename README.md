# Aether plugins and extensions

> **Aether** is an open-source **AI agent for Android** — an on-device LLM chat that actually
> runs tools: bash, read, write, edit, grep, find, ls, MCP servers, subagents and a local
> Alpine Linux runtime. `Aether` — открытый **ИИ-агент для телефона** на Android: чат с моделью,
> который реально работает с файлами, командами и сервисами.
>
> Downloads: https://github.com/jcufyr6d5djj-beep/aether/releases/latest · Site: https://jcufyr6d5djj-beep.github.io/aether/ · Telegram: https://t.me/AetherAIAgent

This repository collects example **plugins (extensions)** for Aether. An extension is a small Node package that can add agent tools, chat commands, UI components, hooks and native Android mods to the Android AI agent.

Keywords: aether plugins, aether extensions, ai agent android plugins, mcp server android, kotlin ai agent extension, termux ai agent, локальный ИИ агент расширения.

## Package layout

```json
{
  "name": "my-aether-extension",
  "version": "1.0.0",
  "pi": { "extensions": ["./agent.ts"] },
  "aether": { "api": { "min": 2, "max": 2 }, "extensions": ["./android.ts"] }
}
```

A package can be script-only, native-only, or both. Scripts are hot-reloaded; native classpath mods load on app start.

## Examples

| Folder | What it shows |
|---|---|
| `examples/hello-extension` | Minimal script extension with one agent tool and one command |

## Related repositories

- [aether](https://github.com/jcufyr6d5djj-beep/aether) — the Android AI agent itself
- [aether-skills](https://github.com/jcufyr6d5djj-beep/aether-skills) — reusable agent skills
- [aether-docs](https://github.com/jcufyr6d5djj-beep/aether-docs) — install and troubleshooting

