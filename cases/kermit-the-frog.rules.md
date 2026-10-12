---
format: open-rules
title: Kermit the Frog
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/kermit-the-frog
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage r4c2-r4c3-r4c4 total 10 connected true
kropki r2c4-r3c4 colour "white"
whispers-1: whispers r1c6-r2c6-r3c7-r3c8-r4c9-r5c9-r6c8-r7c7 gap 5
whispers-2: whispers r4c8-r4c7-r4c6-r3c5-r4c4-r4c3-r4c2 gap 5
whispers-3: whispers r1c5-r1c4-r2c4-r3c3-r3c2-r4c1-r5c1-r6c2-r7c3-r8c4-r8c5 gap 5
renban-1: renban r5c3-r5c4-r5c5-r5c6-r5c7-r6c6-r6c5
renban-2: renban r5c2-r6c3-r7c4-r8c5-r7c6-r6c7-r5c8
pair-1: pair r8c7-r8c8 relation {"op":"sum","value":10}
pair-2: pair r7c1-r8c1 relation {"op":"sum","value":10}
pair-3: pair r1c5-r1c6 relation {"op":"sum","value":10}
pair-4: pair r3c5-r3c6 relation {"op":"sum","value":10}
pair-5: pair r2c4-r2c5 relation {"op":"sum","value":10}
pair-6: pair r8c4-r8c5 relation {"op":"sum","value":10}
pair-7: pair r1c3-r2c3 relation {"op":"sum","value":10}
pair-8: pair r8c3-r9c3 relation {"op":"sum","value":10}
pair-9: pair r4c1-r5c1 relation {"op":"sum","value":10}
pair-10: pair r7c6-r8c6 relation {"op":"sum","value":10}
pair-11: pair r6c7-r6c8 relation {"op":"sum","value":10}
```

Normal Sudoku rules apply. Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers on red lines are a set of non-repeating, consecutive numbers, in any order. Numbers in a cage sum to the number in the top left corner of the cage. Numbers with an X between them sum to 10. Numbers with a white dot between them are consecutive. Not all X and dots are given. Gray lines and ovals are decorative only.
