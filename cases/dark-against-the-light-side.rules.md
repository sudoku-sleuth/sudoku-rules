---
format: open-rules
title: Dark Against the Light Side
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/dark-against-the-light-side
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A clue marker still needs to be read before we can confirm the rule for unmarked pairs.
---

```rules
sudoku 9x9
cage-1: cage r1c6-r1c7 total 14 connected true
cage-2: cage r6c4-r6c5 total 10 connected true
cage-3: cage r7c5-r7c6 total 10 connected true
cage-4: cage r5c8-r6c8 total 10 connected true
cage-5: cage r1c3-r2c3 total 10 connected true
cage-6: cage r2c1-r2c2 total 10 connected true
cage-7: cage r4c1-r4c2 total 5 connected true
cage-8: cage r5c1-r5c2 total 5 connected true
cage-9: cage r8c3-r9c3 total 5 connected true
cage-10: cage r6c6-r6c7 total 5 connected true
kropki-1: kropki r6c9-r7c9 colour "white"
kropki-2: kropki r4c7-r4c8 colour "white"
kropki-3: kropki r3c7-r3c8 colour "white"
kropki-4: kropki r5c7-r5c8 colour "white"
kropki-5: kropki r2c5-r2c6 colour "white"
kropki-6: kropki r3c5-r3c6 colour "white"
kropki-7: kropki r6c5-r6c6 colour "white"
kropki-8: kropki r7c6-r7c7 colour "white"
kropki-9: kropki r6c7-r6c8 colour "white"
kropki-10: kropki r6c7-r7c7 colour "white"
kropki-11: kropki r1c5-r1c6 colour "white"
kropki-12: kropki r1c5-r2c5 colour "white"
kropki-13: kropki r3c2-r4c2 colour "black"
kropki-14: kropki r8c3-r8c4 colour "black"
kropki-15: kropki r4c1-r5c1 colour "black"
kropki-16: kropki r9c2-r9c3 colour "black"
kropki-17: kropki r1c2-r1c3 colour "black"
kropki-18: kropki r2c3-r2c4 colour "black"
renban-1: renban r3c1-r2c2-r2c3-r3c3-r3c2
renban-2: renban r4c8-r5c9-r6c9-r7c9
renban-3: renban r4c4-r4c3-r4c2-r5c1-r6c1-r7c1-r8c1-r9c1-r4c1
renban-4: renban r9c2-r8c2-r7c2-r6c2-r5c2-r5c3-r6c3-r7c3-r8c3
negative relations [{"op":"difference","value":1},{"op":"ratio","value":2}] except [["r6c9","r7c9"],["r4c7","r4c8"],["r3c7","r3c8"],["r5c7","r5c8"],["r2c5","r2c6"],["r3c5","r3c6"],["r6c5","r6c6"],["r7c6","r7c7"],["r6c7","r6c8"],["r6c7","r7c7"],["r1c5","r1c6"],["r1c5","r2c5"],["r3c2","r4c2"],["r8c3","r8c4"],["r4c1","r5c1"],["r9c2","r9c3"],["r1c2","r1c3"],["r2c3","r2c4"],["r6c6","r7c6"],["r5c5","r6c5"],["r4c6","r4c7"]]
```

```drawing
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[2.5,4.5],[1.5,5.5],[0.5,6.5]],"color":"#FF7C75","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[3.5,6.5],[2.5,6.5],[2.5,7.5],[3.5,7.5]],"color":"#BF7C29","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[3.5,6.5],[3.5,7.5]],"color":"#BF7C29","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[6.5,7.5],[7.5,6.5],[8.5,6.5],[8.5,5.5]],"color":"#BF7C29","thickness":8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[7.5,7.5],[8.5,8.5],[8.5,7.5]],"color":"#BF7C29","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[4.5,6.5],[4.5,7.5]],"color":"#BF7C29","thickness":8,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[1.5,3.5],[2.5,4.5],[3.5,5.5]],"color":"#94D6FF","thickness":8,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[2.5,4.5],[3.5,4.5],[4.5,4.5]],"color":"#A9FFA3","thickness":8,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,5.5],"width":0.25,"height":0.25,"rounded":false,"fill":"#FFFFFF","text":"V","textColor":"#000000","thickness":0,"fontSize":25}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,4.5],"width":0.25,"height":0.25,"rounded":false,"fill":"#FFFFFF","text":"V","textColor":"#000000","thickness":0,"fontSize":25}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,6],"width":0.25,"height":0.25,"rounded":false,"fill":"#FFFFFF","text":"X","textColor":"#000000","thickness":0,"fontSize":25}}
```

Normal Sudoku rules apply. Numbers on Gray (Darth Vader) and Brown (Obiwan Kenobi) lines are each a set of non-repeating, consecutive numbers, in any order. Numbers on the red line (Vader's Saber) sum to the same number as the sum of the numbers on the blue line (Obiwan's Saber). Numbers on the blue and red lines may repeat, if other rules allow. Numbers with a black dot between them are in a ratio of 2:1. Numbers with a white dot between them are consecutive. All possible black dots on the Dark Side (columns 1-4) and all white dots on the Light Side (columns 6-9) are shown. Numbers in cages sum to the number in the top left corner of the cage.
