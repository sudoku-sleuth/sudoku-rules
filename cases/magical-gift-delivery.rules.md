---
format: open-rules
title: Magical Gift Delivery
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/magical-gift-delivery
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c6-r2c6-r3c6-r4c6 total 30 connected true
cage-2: cage r6c1-r6c2 total 15 connected true
cage-3: cage r7c6-r7c7 total 7 connected true
cage-4: cage r5c2-r5c3 total 5 connected true
kropki-1: kropki r1c4-r1c5 colour "white"
kropki-2: kropki r2c4-r2c5 colour "white"
kropki-3: kropki r5c1-r5c2 colour "white"
whispers-1: whispers r5c6-r4c6 gap 5
whispers-2: whispers r4c6-r4c7-r4c8 gap 5
whispers-3: whispers r4c8-r5c8 gap 5
whispers-4: whispers r9c8-r8c9-r7c9 gap 5
whispers-5: whispers r7c1-r7c2-r7c3-r6c4 gap 5
whispers-6: whispers r8c1-r9c1 gap 5
whispers-7: whispers r7c4-r8c4-r9c3-r9c2-r9c1 gap 5
whispers-8: whispers r9c8-r9c7 gap 5
whispers-9: whispers r9c8-r8c8 gap 5
whispers-10: whispers r8c8-r7c9 gap 5
whispers-11: whispers r7c9-r7c8 gap 5
whispers-12: whispers r5c6-r5c7-r5c8 gap 5
whispers-13: whispers r8c7-r8c8 gap 5
whispers-14: whispers r4c8-r3c9 gap 5
renban-1: renban r6c6-r6c7-r6c8-r5c9-r5c6-r5c8-r4c9
renban-2: renban r3c8-r4c8-r3c9-r2c9-r2c8-r2c7-r3c7
renban-3: renban r8c1-r8c2-r8c3-r7c4-r6c4-r7c3-r7c1-r7c2-r6c3
renban-4: renban r3c3-r2c4-r2c3-r3c4-r3c2-r4c1-r5c1-r4c3-r4c2
pair-1: pair r7c7-r7c8 relation {"op":"sum","value":10}
pair-2: pair r4c7-r5c7 relation {"op":"sum","value":10}
pair-3: pair r8c7-r9c7 relation {"op":"sum","value":10}
pair-4: pair r3c8-r3c9 relation {"op":"sum","value":10}
pair-5: pair r7c4-r8c4 relation {"op":"sum","value":10}
pair-6: pair r4c6-r4c7 relation {"op":"sum","value":10}
pair-7: pair r4c2-r4c3 relation {"op":"sum","value":5}
pair-8: pair r1c1-r2c1 relation {"op":"sum","value":5}
pair-9: pair r1c5-r2c5 relation {"op":"sum","value":5}
pair-10: pair r9c5-r9c6 relation {"op":"sum","value":5}
pair-11: pair r8c1-r8c2 relation {"op":"sum","value":5}
```

Normal Sudoku rules apply. Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers may repeat on green lines. Numbers on purple lines are a non-repeating set of consecutive numbers, in any order. Numbers in cages sum to the number in the top left corner of the gage. Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. Numbers with a white dot between them are consecutive. Not all possible X, V and dots are given.
