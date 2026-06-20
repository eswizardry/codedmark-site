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

**Ad-supported, with optional IAP.** The free version is ad-supported. Parents can remove ads with a one-time in-app purchase. No subscription, no recurring charge.

## Technical approach

100% offline — all audio and images ship in the app bundle. Progress is stored on-device. No account, no server call needed. Works on the cheapest Android phones with no connectivity.

Built with Flutter for cross-platform support. The tracing engine uses Google ML Kit Digital Ink Recognition (`google_mlkit_digital_ink_recognition`) to score stroke accuracy — the ML model runs on-device, no server round-trip.
