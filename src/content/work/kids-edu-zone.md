---
title: "อ่านเขียน ก.ไก่ — Kids Edu Zone"
kicker: "Mobile · Education · Thai"
summary: "Thai reading and writing for young learners — consonants (ก.ไก่), vowels, numbers, and A-B-C in one app, with tracing and matching games."
outcomes:
  - "Covers the full Thai consonant set (44 ก.ไก่), vowels, tone marks, and numbers 1–100"
  - "Letter tracing with stroke-order guidance — builds correct handwriting habits early"
  - "Matching and quiz games reinforce recognition without feeling like a test"
stack: ["Flutter", "Dart", "iOS", "Android"]
previewType: "phone"
screenshot: "/images/work/kids-edu-zone-store.png"
link: "https://play.google.com/store/apps/details?id=com.eswizardry.kidseduzone"
linkLabel: "Google Play"
order: 6
---

## The app

Kids Edu Zone teaches Thai children the fundamentals of reading and writing in Thai and English. The curriculum mirrors what children learn in Thai preschool and early primary school: all 44 Thai consonants (ก.ไก่), vowels, tone marks, the numbers 1–100, and the English A–Z alphabet.

## What makes it different

**Stroke-order tracing.** Thai has complex character shapes that need to be learned in the correct order — a tracing activity that guides the finger along the right path builds muscle memory for proper handwriting. Each stroke segment lights up as the child traces it.

**Spaced exposure across activity types.** Each letter is introduced (see + hear), practised (trace), then tested (spot the matching character in a grid). The three activities are paced so a child encounters a character multiple times in a single session without repetition feeling monotonous.

**No ads, no IAP.** The app is a one-time purchase. Parents don't want ads interrupting a three-year-old's learning session, and they don't want surprise in-app purchases. Everything is unlocked on install.

## Technical approach

Audio (Thai and English pronunciation recorded by native speakers) ships in the app bundle. All progress is stored locally in SQLite. No account required. Built with Flutter for cross-platform support; the tracing engine uses `CustomPainter` with path-distance checking to score stroke accuracy.
