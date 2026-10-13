---
format: open-rules
title: Bowling A Strike
setter: Tingo
source: https://tinyurl.com/bowlingastrikesudoku
case: https://sudoku-sleuth.com/cases/bowling-a-strike
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1 total 34 connected true
cage-2: cage r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9 total 34 connected true
kropki-1: kropki r7c7-r8c7 colour "white"
kropki-2: kropki r4c6-r4c7 colour "white"
kropki-3: kropki r4c8-r4c9 colour "white"
kropki-4: kropki r6c8-r6c9 colour "black"
kropki-5: kropki r4c3-r4c4 colour "black"
arrow r8c7-r7c7-r6c7-r5c6 bulb ["r9c7"]
whispers-1: whispers r1c3-r2c4-r3c5-r2c6-r1c7 gap 5
whispers-2: whispers r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8 gap 5
pair-1: pair r1c8-r2c8 sum 10
pair-2: pair r2c7-r3c7 sum 10
pair-3: pair r3c6-r4c6 sum 10
pair-4: pair r4c5-r5c5 sum 10
pair-5: pair r3c4-r4c4 sum 10
pair-6: pair r2c3-r3c3 sum 10
pair-7: pair r1c2-r2c2 sum 10
pair-8: pair r1c4-r2c4 sum 10
pair-9: pair r1c6-r2c6 sum 10
pair-10: pair r2c5-r3c5 sum 10
pair-11: pair r7c6-r8c6 sum 10
pair-12: pair r7c4-r8c4 sum 10
pair-13: pair r4c1-r4c2 sum 10
pair-14: pair r6c1-r6c2 sum 10
pair-15: pair r6c7-r7c7 sum 5
```

Normal Sudoku Rules Apply
Green lines are German Whispers lines. Adjacent digits must differ by at least 5.
Cells joined by white dots are consecutive in value. Cells joined by black dots contain values in a ratio of 2:1. Not all dots are given.
Cells joined by Vs sum to 5. Cells joined by Xs sum to 10. Not all Xs or Vs are given.
The cells along an arrow (the path of the bowling ball) sum to the value in the circle (the bowling ball itself) at the end of the arrow.
The digits in the killer cages (gutters) must sum to the total given in the top left corner of the cage. Digits within a cage may not repeat.
