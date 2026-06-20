---
title: "M1 Hero"
kicker: "EdTech · Mobile"
summary: "English practice for Thai grades 4–6 — adaptive vocabulary drills, streaks, and a teacher dashboard. Built to work fully offline on low-end phones."
outcomes:
  - "100% offline — works on the cheapest Android phones with no connectivity"
  - "Adaptive spaced-repetition adjusts drill difficulty per student, per word"
  - "Teacher dashboard surfaces struggling students in one view, not a week later"
stack: ["Flutter", "Dart", "SQLite", "Go", "Fly.io"]
previewType: "phone"
# link: "https://play.google.com/..."   # add App Store / Play Store URL here
order: 1
---

## The challenge

Thai primary-school students in grades 4–6 have very limited English exposure outside the classroom. Textbook vocabulary drills are static — every student gets the same exercise regardless of what they already know. And on low-end phones in rural areas, most cloud-dependent apps simply don't work.

The school needed an app that adapts to each learner and still functions on a 2018 Android device with spotty 3G.

## What we built

M1 Hero is a Flutter mobile app running a spaced-repetition vocabulary engine entirely on-device. The algorithm adjusts drill difficulty per card based on each student's error history — a student who keeps confusing "uncle" and "ant" gets targeted repetition; one who already knows "apple" sees it far less often.

Teachers access a web dashboard where they can view per-student vocabulary progress, flag students who haven't practised this week, and push custom word lists that appear in the app on the student's next session.

## Technical approach

**Offline-first architecture.** All lessons, word lists, and student state live in a local SQLite database. The app syncs with the backend only when connectivity is available. A student can complete a full term of exercises with zero internet.

**Flutter for cross-platform reach.** A single codebase targets Android and iOS. We targeted Android API level 21 (Android 5) to cover the older hardware common in rural Thai schools.

**Go backend on Fly.io.** A lightweight Go API handles teacher-dashboard data, student sync, and authentication — deployed on Fly.io for low-latency access from Thailand.

**Custom SM-2 adaptation.** We extended the SM-2 spaced-repetition algorithm to track confusable pairs at the word level. Error patterns surface as targeted review sessions rather than generic re-drills.

## Outcomes

- Students on the pilot programme showed measurable vocabulary retention improvement after 4 weeks
- App functions fully offline — no connectivity required after the initial install
- Same Flutter codebase ships on Android and iOS
- Teacher dashboard cuts the time to identify a struggling student from a week to a single daily check
