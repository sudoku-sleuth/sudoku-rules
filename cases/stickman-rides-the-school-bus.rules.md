---
format: open-rules
title: Stickman Rides the School Bus
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/stickman-rides-the-school-bus
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r7c3-r7c4 colour "black"
kropki-2: kropki r7c2-r8c2 colour "black"
kropki-3: kropki r3c2-r4c2 colour "black"
whispers-1: whispers r7c9-r6c9-r5c8 gap 5
whispers-2: whispers r4c7-r4c6-r3c6-r2c6-r1c6 gap 5
whispers-3: whispers r1c5-r1c4-r1c3-r1c2 gap 5
whispers-4: whispers r6c4-r5c4-r4c4-r3c4-r2c4-r2c3-r2c2-r2c1-r3c1-r4c1-r5c1 gap 5
whispers-5: whispers r8c4-r9c5-r9c6-r8c7 gap 5
whispers-6: whispers r5c1-r6c1-r7c1-r8c2-r8c3-r8c4-r7c5-r7c6-r8c7-r8c8 gap 5
renban-1: renban r3c2-r3c3-r4c3-r4c2
renban-2: renban r9c2-r8c2-r7c2-r6c2-r5c2-r5c3-r8c3-r7c3
pair-1: pair r6c3-r6c4 sum 5
pair-2: pair r4c3-r4c4 sum 5
pair-3: pair r1c1-r1c2 sum 5
pair-4: pair r2c8-r3c8 sum 5
pair-5: pair r8c6-r8c7 sum 5
pair-6: pair r7c1-r7c2 sum 5
pair-7: pair r9c7-r9c8 sum 5
pair-8: pair r7c5-r8c5 sum 5
pair-9: pair r7c3-r8c3 sum 5
pair-10: pair r1c4-r2c4 sum 5
pair-11: pair r6c8-r6c9 sum 5
pair-12: pair r4c6-r5c6 sum 5
```

Stickman Adventure #5: Normal Sudoku rules apply. Numbers on green lines (school bus) are at least 5 apart from their neighbors on the line. Numbers on purple lines (stickman) are a set of non-repeating, consecutive numbers, in any order. Numbers with a V between them sum to 5. Numbers with a black dot between them are in a ratio of 2:1. Not all V and dots are given.
