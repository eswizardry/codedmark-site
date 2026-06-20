---
title: "M1 Hero: The Mythic Academy"
kicker: "EdTech · Web App"
summary: "Thai-first M.1 entrance exam prep for grades 4–6 — 5 OBEC subjects, 8,000+ questions, gamified with Himmapan mythology and daily 15-minute sessions."
outcomes:
  - "5 OBEC subjects with 8,000+ curriculum-aligned questions for P4–P6"
  - "Gamified with Himmapan Magitech theme — quests, XP, ranks, and boss fights keep students coming back"
  - "Parent dashboard shows daily progress without interrupting the child's session"
stack: ["Next.js 16", "TypeScript", "Supabase", "Tailwind CSS", "Fly.io"]
previewType: "browser"
screenshot: "/images/work/m1-hero.png"
link: "https://www.m1hero.com"
linkLabel: "Visit m1hero.com"
order: 1
---

## The challenge

Thai Grade 4–6 students preparing for the M.1 (Grade 7) entrance exam face a fragmented market: expensive tutoring centres, static workbooks, and generic test-prep apps with no cultural relevance. Students disengage when practice feels like homework.

The brief: a daily practice platform that covers all five OBEC core subjects, keeps a 9–12-year-old coming back every day, and lets parents see progress without hovering.

## What we built

M1 Hero: The Mythic Academy is a Thai-first web platform where students explore the **Nakara Spires** — a hidden magical academy where Himmapan mythology meets Magitech. Each subject is guarded by a mythological creature: the Naga for Mathematics, Garuda for Science, Kinnari for Thai Language, Simha for English, and Erawan for Social Studies.

Students complete **Ancient Quests** (topic chapters), fight **Boss Stages** (chapter tests), and earn XP and ranks on the Nakara ladder — from เด็กฝึกหัด (Apprentice) up to เทพแห่งนครา (God of the Spires) at level 99.

**Live at [www.m1hero.com](https://www.m1hero.com).**

## Technical approach

**Next.js 16 App Router with Server Components.** Data fetching happens on the server by default — pages load pre-rendered with real content. `'use client'` is added only at the leaf component level for interactive elements (question engine, XP animations).

**Supabase for auth and data.** PostgreSQL with Row Level Security on every table. Students can only read their own attempts and achievements. Questions, quests, and mock tests are public-read, admin-only write. Auth via Supabase with email/password; LINE Login planned for Phase 2.

**Nakara Design System.** A custom design system with warm parchment surfaces (`#FBF8F1`), Naga Indigo primary (`#2F3BE5`), and Sun Gold for XP rewards (`#F7BE3E`). Thai text rendered with Sarabun at 1.75+ line-height for correct vowel stacking. Chibi Magitech illustrations for all five Himmapan guardian creatures.

**Adaptive question engine.** Rule-based difficulty adjustment per student, per subject. A/B test between cohorts with auto-disable if the variant underperforms. 315 unit tests cover the XP system, streak logic, rank progression, and difficulty bands.

**Content pipeline.** 139 quests, 397 modules across all five subjects, P4–P6, two terms each — mapped to OBEC indicator codes for curriculum traceability. Admin panel for question CRUD, quality review, and a feature-flag system gating AI features behind DAU thresholds.

## Outcomes

- Platform is live at www.m1hero.com on Fly.io (sin region, HA)
- 8,000+ curriculum-aligned questions across 5 OBEC subjects
- Lighthouse scores: 94 performance / 96 accessibility / 96 best practices / 100 SEO
- Daily session target: 15 minutes per subject — structured around a child's after-school window
