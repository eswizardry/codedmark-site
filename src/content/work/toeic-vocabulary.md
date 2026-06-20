---
title: "English Vocab: Word Builder"
kicker: "Mobile · Education"
summary: "TOEIC and everyday English vocabulary for Thai learners — spaced-repetition flashcards, word categories, and progress tracking."
outcomes:
  - "4.5-star rating on the App Store with consistent reviews on vocabulary retention"
  - "Spaced-repetition engine adapts review intervals to each learner's pace"
  - "Covers TOEIC, IELTS, and everyday categories — over 3,000 words total"
stack: ["Flutter", "Dart", "SQLite", "iOS", "Android"]
previewType: "phone"
screenshot: "/images/work/toeic-vocabulary.png"
link: "https://play.google.com/store/apps/details?id=com.eswizardry.en_vocab"
linkLabel: "Google Play"
order: 4
---

## The app

English Vocab: Word Builder helps Thai learners build the vocabulary they need for the TOEIC exam, IELTS, university entrance, and everyday English. The app focuses on retention — not just exposure — using a spaced-repetition schedule that brings each word back at exactly the right moment.

## Features

**Flashcard engine.** Swipe to mark a card as known or review again. The algorithm calculates the next review date based on answer history — a word you know well disappears for weeks; a word you keep missing comes back tomorrow.

**Word categories.** Words are grouped by topic (Business, Travel, Technology, Daily Life) and by test type (TOEIC, IELTS). Users can focus a session on a single category or mix everything together.

**Progress dashboard.** A simple chart shows words learned over time. A streak counter encourages daily practice. Both update without a server round-trip — all state is local.

## Technical approach

The app is fully offline. The word database ships inside the app bundle; study sessions and progress are stored in SQLite on-device. There is no account required, no login, no server for the learner-facing features.

The only network call is a version check at startup — if a new word pack is available, the user is offered a background download. This keeps the app useful in areas with slow connectivity.
