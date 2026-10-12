---
format: open-rules
title: Family Circus Act
setter: Will Power
source: https://sudokupad.app/tqa2dsha0u
case: https://sudoku-sleuth.com/cases/family-circus-act
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r1c5-r1c6-r1c7-r2c7-r3c7-r4c7 total 15 connected true
cage-2: cage r3c8-r3c9-r4c8-r4c9 total 32 connected true
cage-3: cage r8c4-r8c5-r8c6 total 12 connected true
cage-4: cage r9c1-r9c2-r9c3 total 15 connected true
cage-5: cage r5c8-r5c9-r6c9-r7c9 total 10 connected true
cage-6: cage r2c1-r3c1 total 3 connected true
cage-7: cage r1c8-r1c9-r2c8-r2c9 total 22 connected true
cage-8: cage r2c3-r3c3-r3c4-r4c3-r4c4 total 15 connected true
cage-9: cage r8c7-r8c8-r9c7 total 21 connected true
cage-10: cage r6c5-r6c6-r6c7 total 24 connected true
kropki-1: kropki r1c5-r1c6 colour "white"
kropki-2: kropki r1c6-r1c7 colour "white"
kropki-3: kropki r2c3-r3c3 colour "white"
kropki-4: kropki r3c4-r4c4 colour "white"
kropki-5: kropki r1c8-r1c9 colour "white"
kropki-6: kropki r1c9-r2c9 colour "white"
kropki-7: kropki r2c8-r2c9 colour "white"
kropki-8: kropki r3c8-r3c9 colour "white"
kropki-9: kropki r3c9-r4c9 colour "white"
kropki-10: kropki r4c3-r4c4 colour "white"
kropki-11: kropki r3c3-r4c3 colour "white"
kropki-12: kropki r1c7-r2c7 colour "white"
kropki-13: kropki r2c7-r3c7 colour "white"
kropki-14: kropki r3c7-r4c7 colour "white"
kropki-15: kropki r5c2-r6c2 colour "black"
renban-1: renban r3c1-r3c2-r2c2-r2c1-r4c1-r5c1-r5c2-r5c3
renban-2: renban r6c1-r7c1-r8c1-r9c1-r9c2-r7c2-r8c2-r8c3
renban-3: renban r3c6-r3c5-r2c5-r2c6-r4c6-r4c5-r4c4-r5c5-r5c4
renban-4: renban r6c5-r5c6-r6c7-r6c6-r7c6-r8c6-r8c5
renban-5: renban r4c8-r4c9-r5c9-r5c8-r6c9-r7c9-r8c9-r8c8-r6c8
```

```drawing
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,6.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF0000","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,3.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF0000","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal Sudoku rules apply. RENBAN- Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. KILLER(+) CONSECUTIVE REGIONS- Numbers in regions sum to the number in the top left corner of the region, AND are a consecutive set of numbers, in order, but THERE MAY BE REPEATS in regions, if other rules allow. KROPKI PAIRS- Numbers with a white dot between them are consecutive (to clarify some regions). Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown. Orange lines and red balance points do not affect the puzzle. 

The mother and child are currently balanced and the father is currently balanced with both the mother and child. If the mother takes a step forward, what will happen? (no mathematics required)  A: The father is lowered, the mother is lowered, and the child is raised. B: The father remains the same, the mother is lowered and the child is raised. C: The father is raised, the mother is raised, and the child is lowered.
