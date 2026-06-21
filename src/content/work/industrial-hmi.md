---
title: "Touchscreen HMI Panels"
kicker: "Desktop · Capability"
summary: "Qt/C++ touchscreen HMIs on fanless Linux SBCs — live telemetry, configurable alarms, and a fast cold boot that runs unattended. This is how we approach industrial UI work."
outcomes:
  - "Qt EGLFS on bare Linux — renders straight to the framebuffer, no desktop needed"
  - "Unified driver layer so Modbus RTU (RS-485) and Modbus TCP look the same to the UI"
  - "Watchdog + systemd auto-recovery patterns for unattended, long-running deployments"
stack: ["Qt", "C++", "Linux", "Modbus RTU", "Modbus TCP", "systemd"]
previewType: "window"
order: 10
---

> **A capability piece, not a specific client engagement.** This describes how
> CodeDMark approaches industrial touchscreen HMIs — the stack, the boot story,
> and the reliability patterns we'd bring. It reflects our Qt/C++ and embedded
> Linux capability, not a particular delivered installation.

## The kind of problem

Touchscreen panels on a production floor have unforgiving requirements: display live process data from a Modbus network, trigger visual and audio alarms when readings cross thresholds, log data for compliance, and boot quickly after a power cycle — unattended, reliably, for years. Often the budget is a low-cost ARM SBC, not an industrial PC.

That's a good fit for Qt/C++ on a stripped-down Linux image — which is the kind of stack we're equipped to build.

## How we'd build it

A Qt/C++ HMI application on a fanless ARM SBC running a minimal Linux BSP. The application renders directly on the framebuffer with Qt's hardware-accelerated EGLFS backend — no desktop environment, no window manager, nothing between the app and the screen. The target is a cold boot to live data in a handful of seconds.

## Technical approach

**Qt on bare Linux.** The BSP strips everything non-essential: no X11, no desktop services, no stray cron jobs. The HMI is the only userspace application. Qt's EGLFS backend renders hardware-accelerated directly to the display.

**Unified Modbus driver.** A C++ abstraction presents Modbus RTU (RS-485) and Modbus TCP registers through the same interface. The UI layer never knows which transport is underneath — a mix of older serial instruments and newer networked PLCs works transparently.

**Alarm engine.** Threshold rules live in a config file edited by the plant engineer — no recompilation needed. Alarms are logged with ISO 8601 timestamps, shown in a persistent sidebar, and can trigger a relay output wired to a physical buzzer.

**Watchdog and auto-recovery.** A hardware watchdog timer fires if the application hangs; a systemd service restarts the HMI after any crash. These are the patterns that make an unattended panel survive years in the field.

## Why it matters

- A $50-class ARM board can replace a five-figure proprietary SCADA seat
- One codebase spans serial and networked instruments
- Boot-fast + watchdog + auto-restart is what unattended reliability actually requires
