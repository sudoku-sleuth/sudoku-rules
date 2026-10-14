---
format: open-rules
title: American Gothic by Grant Wood
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/american-gothic-by-grant-wood
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 0049237deecd5e2a88982548367b4b0f
---

```rules
sudoku 9x9
cage-1: cage r7c6-r8c6 total 8 connected true
cage-2: cage r7c5-r8c5 total 10 connected true
cage-3: cage r9c5-r9c6 total 12 connected true
kropki-1: kropki r8c8-r9c8 black
kropki-2: kropki r7c2-r7c3 black
kropki-3: kropki r2c4-r3c4 black
kropki-4: kropki r8c2-r8c3 black
whispers-1: whispers r3c3-r2c4-r1c5 gap 5
whispers-2: whispers r1c5-r2c6 gap 5
whispers-3: whispers r8c5-r9c5-r9c6-r9c7-r8c7 gap 5
whispers-4: whispers r8c6-r9c6 gap 5
whispers-5: whispers r8c5-r7c5 gap 5
whispers-6: whispers r8c6-r7c6 gap 5
whispers-7: whispers r8c7-r7c7 gap 5
renban-1: renban r5c1-r4c1
renban-2: renban r3c6-r2c6
renban-3: renban r6c1-r5c1-r4c1-r3c2-r3c3-r4c4
renban-4: renban r3c6-r2c6-r1c7-r1c8-r2c9-r3c9
renban-5: renban r3c3-r4c2-r5c1
renban-6: renban r9c8-r8c8-r7c8-r6c8-r6c9
renban-7: renban r7c5-r6c6-r6c7-r7c7
renban-8: renban r8c4-r9c3-r9c2-r8c1
renban-9: renban r5c5-r5c4-r4c5-r4c4-r5c6-r4c6-r6c6
renban-10: renban r6c5-r7c5
renban-11: renban r2c5-r3c5
renban-12: renban r5c3-r5c4-r6c4-r7c3-r7c2-r6c1-r8c2-r8c3
renban-13: renban r5c7-r6c7-r5c8-r6c8-r4c6-r4c9-r3c9-r2c9
pair-1: pair r6c7-r7c7 sum 5
pair-2: pair r5c1-r5c2 sum 5
```

```drawing
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,3],"width":0.25,"height":0.25,"rounded":true,"fill":"#9CCCCC","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,2],"width":0.25,"height":0.25,"rounded":true,"fill":"#9CCCCC","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,6.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFD6E2","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,7.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFD6E2","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal Sudoku rules apply. Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers on the dark yellow line (woman's hair) are all powers of 2 (1,2,4,8). Numbers may repeat on the yellow and green lines, if other rules allow. Numbers on all other lines are each a set of non-repeating, consecutive numbers, in any order. Numbers in cages sum to the number in the top left corner of the cage. Numbers with a V between them sum to 5. Numbers with a black dot between them are in a ratio of 2:1. Not all possible V and dots are given.
