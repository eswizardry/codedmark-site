---
title: "Learn English: Kids Flashcards"
kicker: "Mobile · Education · Kids"
summary: "Early-literacy English flashcards for young Thai children — bright illustrations, audio pronunciation, and simple tracing activities."
outcomes:
  - "Designed for ages 3–7 — large touch targets, simple navigation, no text reading required"
  - "Native English audio for every word — consistent pronunciation from day one"
  - "Covers colours, animals, food, numbers, and everyday objects across 200+ words"
stack: ["Flutter", "Dart", "iOS", "Android"]
previewType: "phone"
screenshot: "/images/work/learn-first-words-store.png"
link: "https://play.google.com/store/apps/details?id=com.eswizardry.myfirstword"
linkLabel: "Google Play"
order: 5
---

## The app

Learn English: Kids Flashcards is designed for Thai children aged 3–7 who are learning their first English words. The app replaces printed flashcard sets with an interactive, audio-first experience — children tap a card to hear the word spoken by a native English speaker, see the illustration animate, and can trace the letters on screen.

## Design philosophy

**Audio-first.** Young children can't read the app's UI labels, so every interaction is driven by large images and immediate audio feedback. Tap an animal — hear its name and its sound. The words, not the UI, teach.

**Simple navigation.** There is no account, no signup, no settings screen to get lost in. Open the app, pick a category, swipe through cards. A parent can hand the phone to a three-year-old and walk away.

**Bright, clear illustrations.** Every image is high-contrast with a plain background — no visual clutter competing with the word being learned. Illustrations are consistent in style across all 200+ cards.

## Technical approach

The app is entirely offline. All audio clips and images ship in the app bundle. SQLite stores progress (which words have been seen, which the child got right in the matching games). No account, no server, no ads.

Built with Flutter for Android and iOS from a single codebase. Audio playback uses `audioplayers`; letter tracing uses a custom `CustomPainter` that compares the child's stroke path against a reference.
