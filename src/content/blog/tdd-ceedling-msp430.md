---
title: "TDD for Embedded C using Ceedling with MSP430"
description: "แนะนำ Ceedling framework สำหรับทำ TDD บน embedded C — รวม Unity, CMock, CException ในชุดเดียว พร้อมตัวอย่างใช้งานบน MSP430"
pubDate: 2015-09-14
tags: ["tdd", "embedded", "msp430", "c"]
lang: "th-en"
---

หลังจากที่ก่อนหน้านี้ได้ลอง TDD บน MSP430 โดยใช้ ASSERT มาโครแบบง่ายๆ กันไปแล้ว วันนี้จะมาแนะนำ framework ตัวหนึ่งที่น่าสนใจสำหรับใช้ในการพัฒนาแบบ TDD และถึงแม้ว่าจะไม่ได้พัฒนาโดยใช้ TDD ก็ยังสามารถใช้ framework ตัวนี้ในการสร้าง Unit test ได้สำหรับทดสอบโค้ด หรือแม้แต่ใช้เป็น build tool ก็ได้เช่นกัน

## CEEDLING คืออะไร?

Ceedling เป็นเครื่องมือที่ช่วยในการ build โปรเจ็คของภาษา C ซึ่งใช้ rake (make ไฟล์ของภาษา Ruby) เป็นตัว build โดย Ceedling จะรวบรวมเครื่องมือที่จำเป็นสำหรับการพัฒนาซอฟแวร์ตามแบบ TDD มารวมกันเพื่อความสะดวกและง่ายในการใช้งาน โดยประกอบไปด้วย:

- **Unity** — unit test framework
- **CMock** — mock up generator สำหรับภาษา C
- **CException** — exception handler สำหรับภาษา C

## เตรียมความพร้อม

ก่อนจะไปต่อขอให้ติดตั้ง Ceedling ก่อนครับ: [throwtheswitch.org/ceedling](http://www.throwtheswitch.org/ceedling/)

## มาลองใช้งานกันเลย

หลังจากติดตั้ง Ceedling เสร็จแล้วให้เปิด terminal แล้ว `cd` ไปที่โฟลเดอร์ที่จะใช้ทำงาน แล้วป้อนคำสั่ง `ceedling example temp_sensor` เพื่อลองเล่นกับตัวอย่าง:

```bash
$ ceedling example temp_sensor
      create  temp_sensor/vendor/ceedling/...
      ...
Example project 'temp_sensor' created!
 - Tool documentation is located in vendor/ceedling/docs
 - Execute 'rake -T' to view available test & build tasks
```

จากนั้นให้ `cd` เข้าไปที่โฟลเดอร์ที่ ceedling สร้างขึ้น แล้วสั่งรัน `rake -T` เพื่อดูว่าเราสามารถทำอะไรได้บ้าง:

```bash
$ cd temp_sensor/
$ rake -T
rake clean           # Delete all build artifacts and temporary products
rake clobber         # Delete all generated files (and build artifacts)
rake environment     # List all configured environment variables
rake files:header    # List all collected header files
rake files:source    # List all collected source files
rake files:test      # List all collected test files
rake test:all        # Run all unit tests
```

จากนั้นลองสั่ง `rake test:all` เพื่อรันทดสอบทั้งหมด แล้วจะเห็น output แบบนี้:

```
-------------------
FAILED TEST SUMMARY
-------------------
[test_TimerConfigurator.c]
  Test: test_TimerConfigurator_Init_ExpectAndReturn
  At line (25): "Function 'TimerConfigurator_Init' called more times than expected."

--------------------
OVERALL TEST SUMMARY
--------------------
TESTED:  13
PASSED:  12
FAILED:   1
IGNORED:  0
```

นี่คือ output ที่ออกมาจาก Unity test framework ซึ่งรายงานว่ามีการทดสอบทั้งหมด 13 tests แต่ล้มเหลว 1 tests เป็นต้น

## ตั้งค่าสำหรับ MSP430

สำหรับ MSP430 เราต้องปรับแต่ง `project.yml` เพื่อให้ใช้ cross-compiler ของ MSP430:

```yaml
:tools:
  :test_compiler:
    :executable: msp430-gcc
    :arguments:
      - -mmcu=msp430g2553
      - -I"$": COLLECTION_PATHS_TEST_SUPPORT_SOURCE_INCLUDE_VENDOR
      - -D$: COLLECTION_DEFINES_TEST_AND_VENDOR
      - -c "${1}"
      - -o "${2}"
```

## สรุป

Ceedling เป็น framework ที่ช่วยให้การทำ TDD บน embedded C ง่ายขึ้นมาก โดยเฉพาะการสร้าง mock สำหรับ hardware dependency ทำให้เราสามารถทดสอบ business logic ได้โดยไม่ต้องรันบน hardware จริง
