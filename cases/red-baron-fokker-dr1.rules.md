---
format: open-rules
title: Red Baron Fokker Dr1
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/red-baron-fokker-dr1
library: https://rules.sudoku-sleuth.com/
status: read
exported: e4bdd995dd155312b1fe7316a21ce5c6
---

```rules
sudoku 9x9
cage-1: cage r8c8-r8c9-r9c8 total 12 connected true
cage-2: cage r5c7-r6c7-r6c8 total 10 connected true
kropki r8c2-r8c3 white
whispers-1: whispers r6c1-r5c2-r4c3-r3c4-r2c5-r1c6 gap 4
whispers-2: whispers r7c2-r6c3-r5c4-r4c5-r3c6-r2c7 gap 4
whispers-3: whispers r8c3-r7c4-r6c5-r5c6-r4c7-r3c8 gap 4
whispers-4: whispers r5c4-r6c5 gap 4
whispers-5: whispers r4c5-r5c6 gap 4
whispers-6: whispers r5c2-r6c3-r7c4 gap 4
whispers-7: whispers r2c5-r3c6-r4c7 gap 4
whispers-8: whispers r3c1-r2c1-r3c2 gap 4
whispers-9: whispers r1c1-r1c2-r2c2-r2c1 gap 4
whispers-10: whispers r9c2-r9c3-r9c4-r9c5-r9c6-r8c7-r7c8-r6c9-r5c9-r4c9-r3c9-r2c9 gap 4
whispers-11: whispers r9c7-r9c8-r8c9-r7c9 gap 4
renban-1: renban r6c5-r7c6
renban-2: renban r5c6-r6c7
renban-3: renban r4c4-r5c5-r6c6
renban-4: renban r7c1-r8c1-r9c1-r9c2-r8c2
renban-5: renban r1c8-r1c9
pair-1: pair r5c5-r5c6 sum 10
pair-2: pair r6c4-r6c5 sum 10
pair-3: pair r3c6-r4c6 sum 5
pair-4: pair r3c7-r3c8 sum 5
pair-5: pair r7c2-r7c3 sum 5
```

Normal Sudoku rules apply. Numbers on red lines are at least 4 apart from their neighbors on the line. The number 5 does not appear on any red lines except in box 1. Numbers on gray lines are each a set of non-repeating consecutive numbers, in any order. Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. Numbers with a white dot between them are consecutive. Not all possible X, V and dots are given. Numbers in cages sum to the number in the top left corner of the cage.
