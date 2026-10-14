---
format: open-rules
title: "Shifter Dots 105: Dotted arrows"
setter: gUBBLOR
source: https://sudokupad.app/zxnvd5nmkb
case: https://sudoku-sleuth.com/cases/shifter-dots-105-dotted-arrows
library: https://rules.sudoku-sleuth.com/
status: read
exported: 8094608d9b6f95a62b1c83cc1b4814d6
---

```rules
sudoku 9x9
kropki-1: kropki r2c1-r3c1 white
kropki-2: kropki r6c5-r6c6 white
kropki-3: kropki r1c7-r2c7 black
kropki-4: kropki r2c6-r2c7 black
kropki-5: kropki r6c8-r6c9 black
kropki-6: kropki r8c4-r9c4 black
arrow-1: arrow r5c6-r6c7-r5c8 bulb ["r4c7"]
arrow-2: arrow r3c8 bulb ["r4c9"]
arrow-3: arrow r1c7-r2c7 bulb ["r1c6"]
arrow-4: arrow r3c5-r3c4 bulb ["r3c6"]
arrow-5: arrow r2c1-r1c2-r2c2 bulb ["r3c2"]
arrow-6: arrow r6c2-r6c1 bulb ["r7c2"]
arrow-7: arrow r5c5-r5c4 bulb ["r6c5"]
arrow-8: arrow r9c6-r8c5 bulb ["r8c7"]
arrow-9: arrow r9c2-r9c3 bulb ["r8c2"]
pair-1: pair r1c2-r2c2 shift
pair-2: pair r2c2-r3c2 shift
pair-3: pair r6c2-r7c2 shift
pair-4: pair r8c6-r8c7 shift
pair-5: pair r8c5-r8c6 shift
pair-6: pair r8c6-r9c6 shift
pair-7: pair r4c7-r5c7 shift
pair-8: pair r5c6-r5c7 shift
pair-9: pair r5c7-r5c8 shift
pair-10: pair r5c7-r6c7 shift
pair-11: pair r4c8-r4c9 shift
pair-12: pair r1c5-r1c6 shift
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Shifter dots: Digts on different sides of a shifter dot must always share either parity (even/odd) OR polarity (high/low) - never neither, never both. Shifter dots can never have 5 on it.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

Arrows: The digits along each arrow must sum to the digit in the circled cell. Digits may repeat on arrows.
