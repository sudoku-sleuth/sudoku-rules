---
fog:
  initiallyLit:
    - 31
    - 32
    - 40
    - 41
format: open-rules
title: Disjoint Fog
setter: Meggen033
source: https://sudokupad.app/717etgkepi
case: https://sudoku-sleuth.com/cases/disjoint-fog
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c7-r3c8 colour "white"
kropki-2: kropki r7c5-r8c5 colour "white"
kropki-3: kropki r8c2-r8c3 colour "white"
kropki-4: kropki r2c9-r3c9 colour "white"
kropki-5: kropki r9c7-r9c8 colour "white"
arrow-1: arrow r4c5-r5c5-r5c6 bulb ["r4c6"]
arrow-2: arrow r5c8-r6c7 bulb ["r5c7"]
pair-1: pair r2c8-r2c9 sum 10
pair-2: pair r3c3-r3c4 sum 10
pair-3: pair r6c3-r6c4 sum 10
pair-4: pair r8c6-r9c6 sum 10
little-killer-1: little-killer r4c9-r3c8-r2c7-r1c6 sum 31
little-killer-2: little-killer r5c1-r6c2-r7c3-r8c4-r9c5 sum 41
unique-1: unique r1c1-r1c4-r1c7-r4c1-r4c4-r4c7-r7c1-r7c4-r7c7 stated true
unique-2: unique r1c2-r1c5-r1c8-r4c2-r4c5-r4c8-r7c2-r7c5-r7c8 stated true
unique-3: unique r1c3-r1c6-r1c9-r4c3-r4c6-r4c9-r7c3-r7c6-r7c9 stated true
unique-4: unique r2c1-r2c4-r2c7-r5c1-r5c4-r5c7-r8c1-r8c4-r8c7 stated true
unique-5: unique r2c2-r2c5-r2c8-r5c2-r5c5-r5c8-r8c2-r8c5-r8c8 stated true
unique-6: unique r2c3-r2c6-r2c9-r5c3-r5c6-r5c9-r8c3-r8c6-r8c9 stated true
unique-7: unique r3c1-r3c4-r3c7-r6c1-r6c4-r6c7-r9c1-r9c4-r9c7 stated true
unique-8: unique r3c2-r3c5-r3c8-r6c2-r6c5-r6c8-r9c2-r9c5-r9c8 stated true
unique-9: unique r3c3-r3c6-r3c9-r6c3-r6c6-r6c9-r9c3-r9c6-r9c9 stated true
```

•	Normal Sudoku rules apply. 

•	Disjoint Set: Digits must not repeat at corresponding box positions.

•	Digits along diagonals pointed to by arrows outside the grid must sum to the number listed.

•	The digits along each arrow must sum to the digit in the circled cell.  Digits may repeat along an arrow if other rules apply.

•	A white dot between cells indicates cells with consecutive values. Not all dots are shown.

•	Adjacent cells connected with an X must sum to 10.

•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell.
