---
title: "Sensor Node Platform"
kicker: "Embedded · Firmware"
summary: "Low-power firmware for a wireless agricultural sensor node — drivers, a tested protocol stack, and CI that flashes real hardware on every push."
outcomes:
  - "18+ months battery life on a single AA cell — measured, not estimated"
  - "Full unit-test suite runs on the host; CI catches bugs before hardware is touched"
  - "Protocol stack has 100% state-transition coverage via CMock test doubles"
stack: ["C", "STM32", "LoRa", "Ceedling", "CMock", "GitHub Actions"]
previewType: "terminal"
order: 9
---

## The challenge

A client needed a wireless sensor node for agricultural monitoring — soil moisture, temperature, and light at remote sites with no grid power and sparse cellular coverage. The hardware had to last at least 18 months on a single AA cell and report reliably over LoRa to a central gateway.

The hard constraint was correctness: a firmware bug discovered after 500 nodes are in the ground is very expensive to fix.

## What we built

A firmware platform on STM32 with a layered architecture that separates hardware drivers, the radio protocol stack, and application logic. The hardware abstraction layer (HAL) is thin enough to mock cleanly in unit tests, so the entire protocol stack and sensor logic runs in a CI environment on a Linux host — no board needed for the bulk of testing.

## Technical approach

**Host-side unit tests with Ceedling.** All application logic — state machines, sensor calibration, protocol encoding, CRC verification — is covered by a Unity/CMock test suite that runs in GitHub Actions on every push. A failing test blocks the merge.

**On-target CI for integration.** A second pipeline stage flashes a real STM32 evaluation board over JTAG and runs integration tests over UART. This catches timing-sensitive bugs that host tests can't see — interrupt latency, DMA race conditions, real sensor readings.

**Low-power design.** The STM32 spends 99% of its time in Stop mode. All peripherals are power-gated between measurements. Active current during a 200 ms measurement cycle is under 4 mA; sleep current is under 10 µA.

**LoRa protocol stack.** Custom packet framing with CRC-16, configurable spreading factor, and automatic retransmit on ACK timeout. The stack is fully unit-tested — every state transition from idle → transmit → wait-ACK → sleep is verified with mocked radio calls.

## Outcomes

- 18+ months measured battery life on a 1 500 mAh AA cell
- CI catches firmware regressions before any hardware is touched
- Two board revisions shipped with no firmware changes — the HAL abstracted all hardware differences cleanly
- Protocol stack zero field failures after 12 months of deployment
