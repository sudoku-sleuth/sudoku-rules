---
format: open-rules
title: Theo Reticle
setter: Tingo
source: https://tinyurl.com/theoreticlesudoku
case: https://sudoku-sleuth.com/cases/theo-reticle
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c4-r2c5-r2c6 total 15 connected true
cage-2: cage r4c2-r5c2-r6c2 total 13 connected true
cage-3: cage r8c4-r8c5-r8c6 total 15 connected true
cage-4: cage r4c8-r5c8-r6c8 total 16 connected true
anti-king
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
kropki-1: kropki r5c3-r5c4 colour "white"
kropki-2: kropki r5c6-r5c7 colour "white"
kropki-3: kropki r2c5-r2c6 colour "white"
kropki-4: kropki r2c4-r2c5 colour "white"
kropki-5: kropki r8c4-r8c5 colour "white"
kropki-6: kropki r6c8-r6c9 colour "white"
kropki-7: kropki r2c6-r3c6 colour "black"
kropki-8: kropki r3c4-r4c4 colour "black"
kropki-9: kropki r5c2-r5c3 colour "black"
kropki-10: kropki r6c5-r7c5 colour "black"
kropki-11: kropki r6c7-r6c8 colour "black"
kropki-12: kropki r8c5-r9c5 colour "black"
whispers-1: whispers r1c4-r1c5-r1c6-r2c7-r3c8-r4c9-r5c9-r6c9-r7c8-r8c7-r9c6-r9c5-r9c4-r8c3-r7c2-r6c1-r5c1-r4c1-r3c2-r2c3 gap 5
whispers-2: whispers r1c4-r2c3 gap 5
renban r4c6-r4c5-r4c4-r5c4-r6c4-r6c5-r6c6-r5c6
pair-1: pair r9c3-r9c4 sum 10
pair-2: pair r3c1-r4c1 sum 5
pair-3: pair r6c9-r7c9 sum 5
```

Normal Sudoku Rules Apply
Cells separated by a king's move (in chess) cannot contain the same value
Digits in killer cages must sum to the value in the top left corner of the cage.
Green lines are German Whisper lines. Adjacent digits along the line must differ in value by at least 5.
Pink lines are Renban lines. All digits along a Renban line are consecutive in any order.
Cells joined by white dots are consecutive in value. Cells joined by black dots have a value in a 2:1 ratio. Not all dots are given.
Cells joined by Vs sum to 5. Cells joined by Xs sum to 10. Not all Vs and Xs are given.
Digits along the diagonals must not repeat on their respective line.
