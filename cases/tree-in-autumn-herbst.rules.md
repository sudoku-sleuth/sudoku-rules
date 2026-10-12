---
format: open-rules
title: Tree in Autumn (Herbst) 秋天
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/tree-in-autumn-herbst
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r9c1-r9c2 total 4 connected true
cage-2: cage r8c3-r8c4 total 15 connected true
cage-3: cage r9c6-r9c7 total 6 connected true
cage-4: cage r6c6-r6c7 total 10 connected true
cage-5: cage r4c8-r5c8 total 13 connected true
cage-6: cage r4c2-r5c2 total 9 connected true
cage-7: cage r2c4-r3c4 total 16 connected true
cage-8: cage r4c5-r5c5-r6c5 total 22 connected true
kropki-1: kropki r1c7-r1c8 colour "black"
kropki-2: kropki r2c8-r2c9 colour "black"
kropki-3: kropki r3c7-r3c8 colour "black"
kropki-4: kropki r4c3-r4c4 colour "black"
kropki-5: kropki r3c5-r3c6 colour "black"
kropki-6: kropki r3c1-r3c2 colour "black"
entropic-1: entropic r6c6-r6c7-r5c8-r4c8-r3c7-r2c7
entropic-2: entropic r6c4-r6c3-r5c2-r4c2-r3c3-r3c4
renban-1: renban r9c5-r8c5-r7c5-r6c5-r5c5-r4c5-r5c4-r5c6-r5c7
renban-2: renban r2c7-r2c6-r1c5-r2c4-r3c4
```

```drawing
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.5,8.5],[1.5,8.5],[0.5,7.5],[0.5,6.5]],"color":"#FF5457","thickness":12.8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[2.5,1.5],[1.5,2.5],[1.5,3.5]],"color":"#FF5457","thickness":12.8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[2.5,4.5],[2.5,5.5],[3.5,6.5]],"color":"#FF5457","thickness":12.8,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,7],"width":0,"height":0,"rounded":false,"thickness":0,"text":"      13","textColor":"#000000","fontSize":12}}
```

Normal Sudoku rules apply. RENBAN LINES- Numbers on brown lines are each a set of non-repeating, consecutive numbers, in any order. ENTROPY LINES- Any 3 consecutive numbers on orange lines contain exactly one high (7,8,9), one middle (4,5,6) and one low (1,2,3) number. VIRTUAL ARROW SUMS- Numbers on red lines act like Sudoku arrows, where three of the numbers add to the fourth number on the line. The solver must determine which END OF THE LINE contains the sum. Numbers do not repeat on any lines. Numbers in cages sum to the number in the top left corner of the cage. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
