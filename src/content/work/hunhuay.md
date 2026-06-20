---
title: "หุนหวย — ตรวจผลลอตเตอรี่"
kicker: "Mobile · Utilities"
summary: "Check Thai lottery results instantly — scan your ticket or browse the full draw. Clean, fast, and works on every Android phone."
outcomes:
  - "Results published within minutes of the official GLO draw"
  - "Ticket scanner using device camera — no number entry needed"
  - "Works offline once results are cached from the last sync"
stack: ["Flutter", "Dart", "Go", "PocketBase", "Fly.io"]
previewType: "phone"
screenshot: "/images/work/hunhuay-store.png"
link: "https://play.google.com/store/apps/details?id=com.eswizardry.hunhuay"
linkLabel: "Google Play"
order: 3
---

## The app

หุนหวย (Hunhuay) is a Thai lottery result checker. On the 1st and 16th of every month, millions of Thais check whether their tickets match the GLO draw. Before this app, most reached for a browser and a frustrating government website.

Hunhuay makes the check instant — browse the winning numbers or point the camera at your ticket for a direct scan. Results are cached on-device, so the app works even when the network is slow right after the draw when everyone is checking at once.

## Technical approach

**Scraper + API pipeline.** A Go scraper (deployed on GitHub Actions cron) fetches the official GLO result and writes it to PocketBase. The Flutter app polls the API and caches results locally for offline access after the first sync.

**Flutter UI.** A single shared codebase targets Android and iOS. The home screen shows the winning numbers in a clear hierarchy — first prize at the top, then three/two-digit prizes below. Ticket scanning uses the device camera via the `mobile_scanner` package. Results are cached locally with Hive so past draws are available offline.

## Backend architecture

The backend lives in two repos: `hunhuay-scraper` (GitHub Actions cron) and `hunhuay-api` (Go on Fly.io). The scraper fetches the official GLO result and writes it to PocketBase; the Flutter app reads from the API via the `pocketbase` client and caches the result locally. Separating the scraper from the API means draw-day traffic spikes hit the API layer, not the scraper process.
