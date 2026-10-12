---
format: open-rules
title: Candy Cane
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/candy-cane
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r5c5-r5c6 colour "white"
kropki-2: kropki r4c4-r5c4 colour "white"
kropki-3: kropki r4c5-r4c6 colour "white"
kropki-4: kropki r6c6-r7c6 colour "white"
whispers-1: whispers r1c4-r2c5-r3c5 gap 5
whispers-2: whispers r2c8-r3c8-r4c7 gap 5
whispers-3: whispers r6c7-r5c8-r4c9 gap 5
whispers-4: whispers r6c1-r5c2-r4c3 gap 5
whispers-5: whispers r8c1-r7c2-r6c3 gap 5
whispers-6: whispers r9c2-r8c3 gap 5
whispers-7: whispers r2c2-r2c3-r3c4 gap 5
whispers-8: whispers r2c2-r3c1 gap 5
renban-1: renban r9c1-r8c2-r7c3
renban-2: renban r7c1-r6c2-r5c3
renban-3: renban r4c1-r3c2-r3c3
renban-4: renban r1c3-r2c4-r3c4
renban-5: renban r1c7-r2c7-r3c6
renban-6: renban r3c9-r4c8-r5c7
renban-7: renban r5c9-r6c8-r7c7
pair-1: pair r7c3-r7c4 relation {"op":"sum","value":5}
pair-2: pair r7c4-r8c4 relation {"op":"sum","value":5}
pair-3: pair r7c2-r8c2 relation {"op":"sum","value":5}
pair-4: pair r3c3-r4c3 relation {"op":"sum","value":5}
pair-5: pair r4c3-r4c4 relation {"op":"sum","value":5}
pair-6: pair r1c5-r2c5 relation {"op":"sum","value":5}
pair-7: pair r1c6-r2c6 relation {"op":"sum","value":5}
pair-8: pair r1c6-r1c7 relation {"op":"sum","value":5}
pair-9: pair r5c5-r6c5 relation {"op":"sum","value":5}
```

Normal Sudoku rules apply.  Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers may repeat on green lines if allowed by other rules. Numbers on red lines are a set of non-repeating, consecutive numbers, in any order. Numbers with a white dot between them are consecutive. Numbers with a V between them sum to 5. Not all dots and V are given. The gray line has no effect on the puzzle.
