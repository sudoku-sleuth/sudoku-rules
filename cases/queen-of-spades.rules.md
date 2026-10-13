---
format: open-rules
title: Queen of Spades
setter: Tingo
source: https://sudokupad.app/1a65d08au7
case: https://sudoku-sleuth.com/cases/queen-of-spades
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage r7c5-r8c5 total 12 connected true
kropki-1: kropki r1c1-r1c2 colour "white"
kropki-2: kropki r1c8-r1c9 colour "white"
kropki-3: kropki r3c5-r4c5 colour "white"
kropki-4: kropki r8c5-r9c5 colour "white"
kropki-5: kropki r6c5-r7c5 colour "white"
kropki-6: kropki r3c3-r4c3 colour "black"
kropki-7: kropki r2c5-r3c5 colour "black"
kropki-8: kropki r3c7-r4c7 colour "black"
whispers-1: whispers r7c4-r6c4-r7c3-r7c2-r6c1-r5c1-r4c2-r3c3-r2c4-r1c5-r2c6-r3c7-r4c8-r5c9-r6c9-r7c8-r7c7-r6c6-r7c6 gap 5
whispers-2: whispers r8c4-r9c3-r9c4-r9c5-r9c6-r9c7-r8c6 gap 5
whispers-3: whispers r2c9-r3c8-r2c7-r1c8 gap 5
whispers-4: whispers r2c9-r1c8 gap 5
whispers-5: whispers r2c8-r3c9 gap 5
renban r6c3-r5c2-r4c3-r3c4-r2c5-r3c6-r4c7-r5c8-r6c7
pair-1: pair r7c4-r8c4 sum 10
pair-2: pair r7c6-r8c6 sum 10
pair-3: pair r7c2-r7c3 sum 10
pair-4: pair r7c1-r7c2 sum 5
pair-5: pair r7c8-r7c9 sum 5
```

Normal Sudoku Rules Apply
Green lines are German Whispers lines. Adjacent digits along the line must differ in value by at least 5.
Pink lines are renban lines. All digits along the line must be consecutive in any order.
Cells connected by V sum to 5. Cells connected by X sum to 10. Not all Xs or Vs are necessarily given.
Cells joined by white dots are consecutive in value. Cells joined by black dots have a value in a ratio of 2:1. Not all dots are necessarily given.
Digits in killer cages must sum to the value in the top left corner of the cage.
