---
format: open-rules
title: Plaid Patches and Zipper
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/plaid-patches-and-zipper
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
whispers-1: whispers r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6 gap 5
whispers-2: whispers r3c3-r3c4-r3c5-r3c6 gap 5
whispers-3: whispers r3c9-r3c8-r3c7 gap 5
whispers-4: whispers r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7 gap 5
whispers-5: whispers r6c4-r6c5-r6c6 gap 5
whispers-6: whispers r6c1-r6c2-r6c3 gap 5
whispers-7: whispers r7c9-r7c8-r7c7 gap 5
whispers-8: whispers r7c4-r7c5-r7c6 gap 5
whispers-9: whispers r4c9-r4c8-r4c7 gap 5
whispers-10: whispers r4c3-r4c4-r4c5-r4c6 gap 5
renban-1: renban r6c9-r6c8-r6c7
renban-2: renban r5c3-r5c4-r5c5
renban-3: renban r9c7-r9c6-r9c5
renban-4: renban r8c8-r8c7-r8c6
renban-5: renban r1c2-r1c3-r1c4
renban-6: renban r2c5-r2c4-r2c3
renban-7: renban r1c8-r1c7-r1c6
renban-8: renban r4c1-r5c1-r6c1
renban-9: renban r7c1-r7c2-r7c3
renban-10: renban r3c1-r3c2-r3c3
pair-1: pair r2c6-r2c7 relation {"op":"sum","value":10}
pair-2: pair r3c6-r3c7 relation {"op":"sum","value":10}
pair-3: pair r4c6-r4c7 relation {"op":"sum","value":10}
pair-4: pair r5c6-r5c7 relation {"op":"sum","value":10}
pair-5: pair r6c6-r6c7 relation {"op":"sum","value":10}
pair-6: pair r7c6-r7c7 relation {"op":"sum","value":10}
pair-7: pair r8c6-r8c7 relation {"op":"sum","value":10}
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[43,44],"color":"#000000","labelColor":"#000000"}}
```

Normal Sudoku rules apply. Numbers with an X between them sum to 10. Not all X are given. German Whispers Lines- Numbers on green lines are at least 5 apart from their neighbors on the line. Renban Lines- Numbers on pink lines are a set of non-repeating, consecutive numbers, in any order. First, complete the puzzle with the numbers in the cage sum to 15. Second, erase and complete the puzzle a second time with the cage sum to 5.
