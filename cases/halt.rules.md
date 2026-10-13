---
format: open-rules
title: Halt!
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/halt
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r9c8-r9c9 total 11 connected true
cage-2: cage r9c1-r9c2 total 11 connected true
whispers-1: whispers r6c9-r7c9-r8c8-r9c7-r9c6-r9c5-r9c4-r9c3-r8c2-r7c1-r6c1-r5c1-r4c1-r3c1-r2c2-r1c3-r1c4-r1c5-r1c6-r1c7-r2c8-r3c9-r4c9-r5c9 gap 5
whispers-2: whispers r6c8-r5c8-r4c8-r4c9 gap 5
whispers-3: whispers r4c7-r4c8 gap 5
renban-1: renban r4c2-r5c2-r6c2-r5c3-r4c3-r6c3
renban-2: renban r4c4-r5c4-r6c4-r4c5-r5c5-r6c5
renban-3: renban r4c6-r5c6-r6c6-r6c7
pair-1: pair r1c2-r1c3 sum 10
pair-2: pair r2c2-r3c2 sum 10
pair-3: pair r1c4-r1c5 sum 10
pair-4: pair r1c6-r1c7 sum 10
pair-5: pair r2c6-r3c6 sum 10
pair-6: pair r3c9-r4c9 sum 10
pair-7: pair r4c8-r4c9 sum 10
pair-8: pair r5c8-r6c8 sum 10
pair-9: pair r7c9-r8c9 sum 10
pair-10: pair r8c7-r8c8 sum 10
pair-11: pair r9c6-r9c7 sum 10
pair-12: pair r8c4-r9c4 sum 10
pair-13: pair r9c3-r9c4 sum 10
pair-14: pair r8c1-r8c2 sum 10
pair-15: pair r6c1-r6c2 sum 10
pair-16: pair r4c4-r5c4 sum 10
pair-17: pair r4c1-r5c1 sum 10
```

Normal Sudoku rules apply. Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers may repeat on the green line. Numbers on red lines are a set of non-repeating, consecutive numbers, in any order. Numbers in cages sum to the number in the top left corner of the cage. Numbers with an X between them sum to 10. Not all possible X are given.
