---
title: "Wireless Sensor Nodes"
kicker: "Embedded · Capability"
summary: "Low-power firmware for wireless sensor nodes — a layered architecture, host-side unit tests, and CI that can flash real hardware. This is how we approach embedded work."
outcomes:
  - "Host-side unit tests with Ceedling/CMock — logic is verified before a board exists"
  - "Thin HAL keeps drivers swappable and the protocol stack fully mockable"
  - "Low-power design patterns: Stop mode between measurements, peripherals power-gated"
stack: ["C", "STM32", "LoRa", "Ceedling", "CMock", "GitHub Actions"]
previewType: "terminal"
order: 9
---

> **A capability piece, not a specific client engagement.** This describes how
> CodeDMark approaches low-power sensor-node firmware — the architecture, the
> test strategy, and the tooling we bring. It's grounded in our embedded
> background (see the [TDD with Ceedling on MSP430](/blog/tdd-ceedling-msp430/)
> write-up), not a particular delivered product.

## The kind of problem

Wireless sensor nodes — soil moisture, temperature, light at remote sites with no grid power and sparse connectivity — share a hard constraint: correctness. A firmware bug discovered after a fleet of nodes is in the ground is very expensive to fix. The node also has to sip power, often lasting many months on a single cell.

That combination — must-be-correct, must-be-frugal — is exactly where our embedded discipline pays off.

## How we'd build it

A firmware platform on STM32 with a layered architecture that separates hardware drivers, the radio protocol stack, and application logic. The hardware abstraction layer (HAL) is kept thin enough to mock cleanly in unit tests, so the protocol stack and sensor logic run in CI on a Linux host — no board needed for the bulk of testing.

## Technical approach

**Host-side unit tests with Ceedling.** Application logic — state machines, sensor calibration, protocol encoding, CRC verification — is covered by a Unity/CMock test suite that runs in GitHub Actions on every push. A failing test blocks the merge. This is the same Ceedling/Unity/CMock stack we've used since our MSP430 days.

**On-target CI for integration.** A second pipeline stage can flash a real STM32 evaluation board over JTAG and run integration tests over UART. This catches timing-sensitive bugs that host tests can't see — interrupt latency, DMA races, real sensor readings.

**Low-power design.** The STM32 spends the vast majority of its time in Stop mode, with peripherals power-gated between measurements. Active current is kept to a brief measurement window; sleep current to microamps. The design target is multi-month life on a small cell.

**LoRa protocol stack.** Custom packet framing with CRC-16, configurable spreading factor, and automatic retransmit on ACK timeout — fully unit-tested, every state transition from idle → transmit → wait-ACK → sleep verified with mocked radio calls.

## Why it matters

- The bulk of the firmware is tested before any hardware exists
- A thin HAL means two board revisions can share one codebase
- CI catches regressions as pull-request comments, not field returns
