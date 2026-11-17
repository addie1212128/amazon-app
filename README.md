# Groundwork

A touch-first **floor plan & house plan maker** built for an Amazon Fire tablet. Draw rooms, run the numbers (floor area, cost, materials), and get real guidance for **earth homes** — earthbag, cob, rammed earth, adobe, straw bale and earthship builds.

It's a single self-contained web app (`index.html`) — no build step, no server, works offline once it's loaded.

## Features (v1)

- **Drafting canvas** — draw rectangular rooms, move & resize them, name them, add doors & windows. Pinch to zoom, two fingers to pan, snap-to-grid.
- **Run the numbers** — live floor area, footprint, wall run, door/window counts, a **cost estimate** (editable $/sq ft), and a rough **materials shopping list** that changes with the build type.
- **Earth-home brain** — pick a construction type and it shows wall thickness, thermal/insulation/skill/labor profile, a "what you'll need" checklist, climate notes, and type-specific materials (bags, bales, tires, bricks, cu yd of soil…).
- **"Which earth home fits me?"** — pick your climate + top priority and it suggests a build type.
- **Saves on the tablet** — multiple named plans auto-save locally; copy/paste backup to move between devices; export the plan as an image.
- **Light & dark**, landscape-friendly, big touch targets.

> ⚠️ **Rough estimates only.** All quantities, costs and requirements are early-planning ballparks. Structural design, drainage and especially **local building codes** vary — confirm with a local engineer or builder before building.

## Get it on your Fire tablet

**Quickest (try it now):** open the live preview link shared in chat in the tablet's **Silk** browser, then tap the menu → **Add to Home screen**. It opens full-screen like an app.

**Host your own copy (recommended for keeping it):**
1. Turn on **GitHub Pages** for this repo (Settings → Pages → deploy from branch).
2. Open the Pages URL in Silk on the tablet → **Add to Home screen**.

Because everything is in one file with no external code (only web-fonts, which fall back gracefully), it keeps working offline after the first load.

**Later — a real Appstore app:** the same `index.html` can be wrapped into an installable `.apk` (e.g. with a lightweight WebView wrapper or Capacitor) and sideloaded or published to the Amazon Appstore. Not needed to use it day-to-day.

## Files

| File | What it is |
|------|------------|
| `index.html` | The whole app (HTML + CSS + JS, self-contained). |
| `manifest.json` | PWA manifest so it installs to the home screen. |
| `icon.svg` | App icon. |
| `build-artifact.js` | Dev helper: makes a body-only `dist/artifact.html` for the claude.ai preview. Run `node build-artifact.js`. |

## Roadmap ideas

- Freeform / angled walls (not just rectangles) and interior wall drawing
- Door swing direction & window sill details
- Per-room construction overrides, roof & foundation takeoffs
- Multi-floor plans, site/lot layout, solar orientation helper
- Real file export/print when self-hosted
