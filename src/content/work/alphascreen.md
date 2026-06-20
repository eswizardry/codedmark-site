---
title: "alphascreen"
kicker: "FinTech · AI · Web App"
summary: "Personalised daily AI intelligence reports for retail investors — what moved overnight, what moved your positions specifically, and what's on the calendar this week."
outcomes:
  - "AI report grounded in live market data + your exact holdings — no hallucinated numbers"
  - "Delivered by email every morning before the market opens, readable in under 5 minutes"
  - "Dashboard shows portfolio P&L, performance vs S&P 500, and sector allocation live"
stack: ["Next.js", "TypeScript", "Supabase", "Claude API", "Polygon.io", "Resend", "Fly.io"]
previewType: "browser"
screenshot: "/images/work/alphascreen.png"
order: 2
---

## The problem

Retail investors with 5–10 US tickers can't spend an hour a day on research. But the generic finance apps tell them what happened — not what happened *to their portfolio*. A headline about FOMC minutes matters differently to someone holding rate-sensitive REITs than to someone holding cash and tech.

alphascreen answers one question every morning: "Did anything happen overnight that matters to my positions, and what should I be watching today?"

## What we built

A personalized daily AI intelligence report delivered by email before market open and readable on the web. The system pulls live market data for every ticker a user holds, asks Claude to synthesize a grounded narrative, and structures the output into four fixed sections:

- **What moved while you slept** — macro moves relevant to your holdings
- **What moved you, specifically** — your positions sorted by overnight impact
- **What's on the calendar** — earnings, FOMC dates, dividend ex-dates for your tickers
- **Today's signal** — a single conviction meter on how loud the day looks

The web reader shows the full report with a live portfolio dashboard alongside: P&L (day Δ + total unrealised + realised), performance vs S&P 500, and sector allocation.

## Technical approach

**Grounded AI — no invented numbers.** Every Claude call injects the user's actual position data, live price moves from Polygon.io, and headline feeds as context. The prompt is in Thai-inflected English for the target persona. Temperature 0.3, max 800 tokens per section. The system never calls Claude if any required data source is unavailable — it falls back to a static summary instead.

**Next.js App Router + Supabase.** Server Components fetch portfolio data server-side; the reader page renders pre-populated. Auth is Supabase magic-link email — no password stored. RLS policies ensure users can only read their own positions and reports.

**GitHub Actions cron + Resend.** A nightly workflow (2 AM ICT) triggers the report pipeline: fetch prices → build prompt → call Claude → store report → send email via Resend. The email links to the web reader via a signed deep-link URL.

**Design system.** Dark terminal-heritage with phosphor-lime accent — the aesthetic of a Bloomberg terminal, not a consumer fintech app. Space Grotesk for display, IBM Plex Mono for data values, JetBrains Mono for ticker symbols.

## Status

alphascreen is in private dogfood. MVP-1 (daily report pipeline) is running. MVP-2 adds user-managed buy/sell transactions, P&L calculation, and the hybrid dashboard view. Planned public beta when dogfood signal validates the daily-report value layer.
