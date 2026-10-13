---
format: open-rules
title: The First Christmas
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/the-first-christmas
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
whispers-1: whispers r9c2-r9c3-r9c4-r9c5-r9c6-r9c7 gap 5
whispers-2: whispers r9c8-r8c9-r7c9-r6c9-r5c9-r4c8-r3c7-r3c6-r2c5-r1c6-r1c7-r1c8-r1c9 gap 5
renban-1: renban r3c6-r4c6-r5c6-r5c7-r6c8-r5c9
renban-2: renban r8c7-r8c8
renban-3: renban r9c2-r8c3-r8c4-r8c5-r9c6
renban-4: renban r7c2-r6c1
renban-5: renban r7c1-r8c2
renban-6: renban r7c3-r6c3
renban-7: renban r7c4-r6c4-r5c4
renban-8: renban r7c5-r6c5
renban-9: renban r5c9-r5c8
pair-1: pair r3c5-r3c6 sum 10
pair-2: pair r1c7-r1c8 sum 10
pair-3: pair r6c9-r7c9 sum 10
pair-4: pair r2c4-r2c5 sum 10
pair-5: pair r1c6-r2c6 sum 10
pair-6: pair r1c4-r1c5 sum 10
pair-7: pair r5c8-r5c9 sum 5
pair-8: pair r8c6-r9c6 sum 5
pair-9: pair r6c7-r6c8 sum 5
pair-10: pair r6c2-r6c3 sum 5
pair-11: pair r4c1-r5c1 sum 5
pair-12: pair r4c4-r4c5 sum 5
pair-13: pair r8c3-r8c4 sum 5
```

Mary watching Jesus, who is in a manger. Normal Sudoku rules apply.  Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers may repeat on green lines. Numbers on pink lines are a set of non-repeating, consecutive numbers, in any order. Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. Not all X and V are given.
