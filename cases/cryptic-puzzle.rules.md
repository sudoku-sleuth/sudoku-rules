---
format: open-rules
title: Cryptic Puzzle
setter: Will Power
source: https://sudokupad.app/t2twxl80cn
case: https://sudoku-sleuth.com/cases/cryptic-puzzle
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r1c5-r1c6-r2c6 total 10 connected true
cage-2: cage r2c3-r2c4-r3c3 total 8 connected true
cage-3: cage r1c1-r1c2-r2c1 total 15 connected true
cage-4: cage r4c1-r4c2-r5c1 total 9 connected true
cage-5: cage r6c2-r7c2-r7c3 total 7 connected true
cage-6: cage r8c4-r9c4-r9c5 total 10 connected true
cage-7: cage r7c7-r8c6-r8c7 total 8 connected true
cage-8: cage r8c9-r9c8-r9c9 total 10 connected true
cage-9: cage r5c9-r6c8-r6c9 total 9 connected true
cage-10: cage r5c7-r5c8 total 13 connected true
cage-11: cage r4c4-r4c5 total 10 connected true
cage-12: cage r5c4-r6c4 total 10 connected true
cage-13: cage r5c5-r6c5 total 10 connected true
cage-14: cage r5c6-r6c6 total 10 connected true
kropki r4c1-r5c1 colour "black"
```

```drawing
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[3.5,1.5],[2.5,2.5],[1.5,3.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[1.5,5.5],[2.5,6.5],[3.5,7.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[4.5,8.5],[5.5,7.5],[6.5,6.5],[7.5,5.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[7.5,3.5],[6.5,2.5],[5.5,1.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[4.5,4.5],[5.5,3.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[1.5,0.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[1.5,7.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[7.5,8.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[8.5,8.5],[8.5,7.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[7.5,1.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,4],"width":0,"height":0,"rounded":false,"thickness":0,"text":"      10","textColor":"#000000","fontSize":12}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3],"width":0,"height":0,"rounded":false,"thickness":0,"text":"      10","textColor":"#000000","fontSize":12}}
```

Normal Sudoku rules apply.

KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. Numbers may not repeat in cages. The number ten is duplicated in two cages because blue lines can obscure it in some formats.

SUMMING LINES- The sum of the numbers on each blue line is the same. The solver must determine this sum.

KROPKI PAIR- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
