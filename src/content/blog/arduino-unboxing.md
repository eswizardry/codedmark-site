---
title: "แกะกล่อง Arduino UNO"
description: "รีวิวและแกะกล่อง Arduino UNO R3 — specs, pinout, และสิ่งที่อยู่ในกล่อง"
pubDate: 2015-08-03
tags: ["arduino", "hardware", "review"]
lang: "th"
---

วันนี้จะมาแกะกล่อง Arduino UNO R3 กันครับ บอร์ดที่เป็นจุดเริ่มต้นของนักพัฒนา embedded หลายคน

## สิ่งที่อยู่ในกล่อง

- Arduino UNO R3 x1
- USB Cable (Type A to Type B) x1
- แผ่น CD (พร้อม IDE และ driver)

## Specifications

| ข้อมูล | รายละเอียด |
|---|---|
| Microcontroller | ATmega328P |
| Operating Voltage | 5V |
| Digital I/O Pins | 14 (6 PWM) |
| Analog Input Pins | 6 |
| Flash Memory | 32 KB |
| Clock Speed | 16 MHz |

## ความประทับใจแรก

Arduino UNO เป็นบอร์ดที่เหมาะมากสำหรับผู้เริ่มต้น เนื่องจาก:

- **IDE ใช้ง่าย** — Arduino IDE มาพร้อม library และตัวอย่างมากมาย
- **Community ใหญ่** — หาตัวอย่างและ tutorial ได้ไม่ยาก
- **Breadboard friendly** — pinout ออกแบบมาให้ใช้กับ breadboard ได้สะดวก

## เทียบกับ MSP430

หลังจากใช้ MSP430 มาสักพัก มาลอง Arduino รู้สึกว่า Arduino development experience ดีกว่ามากในแง่ของ toolchain และ community แต่ MSP430 ชนะในเรื่องของ low-power consumption ถ้าต้องการ battery-powered project

บทความหน้าจะมาลอง blink LED บน Arduino UNO กัน stay tuned!
