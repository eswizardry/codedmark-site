---
title: "Parcel Tracking — ไปรษณีย์"
kicker: "Mobile · Utilities"
summary: "Track Thailand Post parcels and registered mail instantly — paste a tracking number and see every scan event, from origin post to your door."
outcomes:
  - "Supports all Thailand Post service types: EMS, registered mail, parcels, and COD"
  - "Push notifications when a parcel status changes — no manual refresh needed"
  - "Tracking history saved on-device — past parcels retrievable without re-entering numbers"
stack: ["Flutter", "Dart", "iOS", "Android", "Firebase"]
previewType: "phone"
screenshot: "/images/work/parcel-tracking.png"
link: "https://play.google.com/store/apps/details?id=com.bexworks.AfterPost"
linkLabel: "Google Play"
order: 6
---

## The app

Parcel Tracking (AfterPost) solves a specific Thai frustration: the Thailand Post website is slow, desktop-first, and requires a CAPTCHA on every lookup. The app gives you a clean, mobile-native interface — paste a tracking number and every scan event appears immediately, from the origin sorting centre to the final delivery attempt.

## Features

**All Thailand Post services.** EMS, registered letters, parcels, and COD (cash-on-delivery) shipments all use the same tracking format. The app handles them all without asking the user to select a service type.

**Push notifications.** Register a parcel and the app watches it. When the status changes — item sorted, out for delivery, delivery attempted — a push notification fires. Users find out before they would think to check.

**Local history.** Tracked parcels are saved in an on-device list. Finding a tracking number from last month means opening the history tab, not hunting through email.

## Technical approach

Thailand Post doesn't have a public API. The app fetches tracking data from the Thailand Post tracking endpoint and parses the HTML response. The parsing layer is isolated behind an interface, so when Thailand Post redesigns its page (which it does), only one class needs updating.

Firebase Cloud Messaging drives push notifications. A background job (on the server side) polls tracking numbers registered by app users and triggers FCM messages on status changes.
