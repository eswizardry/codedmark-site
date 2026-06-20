---
title: "Industrial Control Panel"
kicker: "Desktop · HMI"
summary: "Qt/C++ touchscreen HMI on a fanless Linux SBC — live Modbus telemetry, configurable alarms, and a 4-second cold boot that runs unattended for years."
outcomes:
  - "4-second cold boot to live telemetry — meets hard power-cycle requirement"
  - "18 months field deployment, zero crashes, watchdog never fired"
  - "Single codebase handles both Modbus RTU (RS-485) and Modbus TCP instruments"
stack: ["Qt", "C++", "Linux", "Modbus RTU", "Modbus TCP", "systemd"]
previewType: "window"
order: 10
---

## The challenge

A manufacturing client needed a touchscreen panel to replace ageing SCADA terminals on the production floor. Hard requirements: display live process data from a Modbus network, trigger visual and audio alarms when readings cross thresholds, log data for ISO 9001 compliance, and boot within 5 seconds of a power cycle — every time, unattended, for at least two years.

The existing terminals ran on proprietary SCADA software with a five-figure per-seat licence. The replacement had to run on a $50 ARM SBC.

## What we built

A Qt/C++ HMI application on a fanless ARM SBC running a minimal Linux BSP. The application renders directly on the framebuffer with Qt's hardware-accelerated backend — no desktop environment, no window manager, nothing between the app and the screen. Cold boot to live data: under 4 seconds.

## Technical approach

**Qt on bare Linux.** The BSP strips everything non-essential: no X11, no PulseAudio, no cron jobs. The HMI is the only userspace application. Qt's EGLFS backend renders hardware-accelerated directly to the display.

**Unified Modbus driver.** A C++ abstraction presents Modbus RTU (RS-485) and Modbus TCP registers through the same interface. The UI layer never knows which transport is underneath — the client's mix of older serial instruments and newer networked PLCs works transparently.

**Alarm engine.** Threshold rules are stored in a JSON config file edited by the plant engineer — no recompilation needed. Alarms are logged with ISO 8601 timestamps, displayed in a persistent sidebar, and trigger a relay output wired to a physical buzzer.

**Watchdog and auto-recovery.** A hardware watchdog timer fires if the application hangs. A systemd service restarts the HMI after any crash. In 18 months of field deployment, the watchdog has never fired.

## Outcomes

- 4-second cold boot to live telemetry on a $50 ARM board
- 18 months field deployment with zero unplanned downtime
- Alarm log satisfies the client's ISO 9001 audit trail requirement
- Replacing proprietary SCADA licences saved the client over ฿300,000 per year
