---
name: Canvas shape IDs
description: Canonical IDs when verifying automatically reserved canvas frames.
---

Treat the shape ID returned by `getCanvasState` as canonical.

**Why:** Automatic reserved-frame notices can include a `shape:` prefix while the live canvas returns the same frame with a bare ID. An exact search using the notice's ID can falsely imply the frame is missing.

**How to apply:** If a reserved frame is not found, inspect the returned IDs and component URLs before acting. Do not create a replacement frame based on a failed exact-ID lookup.