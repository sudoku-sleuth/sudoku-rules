---
format: open-rules
title: Go with the Flow
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/go-with-the-flow
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r5c4-r5c5-r5c6 total 8 connected true
cage-2: cage r1c5-r2c5-r3c5 total 18 connected true
cage-3: cage r8c5-r9c5 total 7 connected true
cage-4: cage r5c8-r5c9 total 13 connected true
cage-5: cage r5c1-r5c2 total 11 connected true
cage-6: cage r1c4-r2c4-r3c4 total 17 connected true
cage-7: cage r9c1-r9c2 total 6 connected true
cage-8: cage r8c3-r9c3 total 5 connected true
cage-9: cage r1c9-r2c9 total 5 connected true
cage-10: cage r3c7-r3c8 total 5 connected true
cage-11: cage r2c6-r2c7 total 12 connected true
kropki r5c5-r6c5 colour "white"
whispers-1: whispers r3c9-r4c8-r5c9-r6c8-r7c9 gap 4
whispers-2: whispers r6c6-r7c7-r8c8-r9c9 gap 4
whispers-3: whispers r6c4-r7c3-r8c2-r9c1 gap 4
whispers-4: whispers r4c4-r3c3-r2c2-r1c1 gap 4
whispers-5: whispers r4c6-r3c7-r2c8-r1c9 gap 4
whispers-6: whispers r2c1-r3c1-r4c1-r5c1-r6c1-r7c1 gap 4
renban r5c3-r5c4-r5c5-r5c6-r5c7-r4c5-r6c5-r7c5
pair-1: pair r4c6-r5c6 relation {"op":"sum","value":10}
pair-2: pair r5c4-r6c4 relation {"op":"sum","value":10}
pair-3: pair r6c5-r6c6 relation {"op":"sum","value":10}
pair-4: pair r4c4-r4c5 relation {"op":"sum","value":10}
pair-5: pair r5c2-r5c3 relation {"op":"sum","value":10}
pair-6: pair r5c7-r5c8 relation {"op":"sum","value":10}
```

Normal Sudoku rules apply. Dutch Whispers- Numbers on red lines are at least 4 apart from their neighbors on the line. Numbers may repeat on red lines, if other rules allow. RENBAN Line- Numbers on the one purple line are a set of non-repeating, consecutive numbers, in any order. Numbers in cages sum to the number in the top left corner of the cage. Numbers with a white dot between them are consecutive. Numbers with an X between them sum to 10. Not all possible X and dots are given.
