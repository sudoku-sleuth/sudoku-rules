---
format: open-rules
title: ATARI Space Invaders
setter: Will Power
source: https://sudokupad.app/s9nmx9wb3p
case: https://sudoku-sleuth.com/cases/atari-space-invaders
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 4b48b431fb3fa6b64ac88cea6bd805c4
---

```rules
sudoku 9x9
cage-1: cage r1c5-r2c5-r3c5 total 8 connected true
cage-2: cage r3c6-r4c6-r5c6 total 15 connected true
cage-3: cage r7c9-r8c9-r9c9 total 12 connected true
cage-4: cage r7c4-r7c5-r7c6 total 10 connected true
cage-5: cage r9c4-r9c5-r9c6 total 14 connected true
cage-6: cage r7c1-r8c1-r9c1 total 9 connected true
cage-7: cage r4c1-r4c2-r4c3 total 10 connected true
cage-8: cage r6c7-r6c8-r6c9 total 13 connected true
cage-9: cage r1c7-r1c8-r1c9 total 22 connected true
kropki-1: kropki r5c1-r5c2 white
kropki-2: kropki r5c5-r5c6 white
kropki-3: kropki r2c8-r2c9 white
kropki-4: kropki r2c1-r2c2 white
kropki-5: kropki r2c3-r2c4 white
kropki-6: kropki r2c6-r2c7 white
kropki-7: kropki r5c3-r5c4 white
kropki-8: kropki r8c4-r8c5 white
kropki-9: kropki r8c6-r8c7 white
kropki-10: kropki r8c8-r8c9 white
kropki-11: kropki r2c2-r2c3 black
kropki-12: kropki r2c4-r2c5 black
kropki-13: kropki r2c7-r2c8 black
kropki-14: kropki r5c8-r5c9 black
kropki-15: kropki r5c4-r5c5 black
kropki-16: kropki r5c2-r5c3 black
kropki-17: kropki r8c1-r8c2 black
kropki-18: kropki r8c5-r8c6 black
kropki-19: kropki r8c7-r8c8 black
```

```drawing
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[7.5,0.5],[6.5,0.5],[6.5,1.5],[6.5,2.5],[7.5,2.5],[8.5,2.5]],"color":"#E0E0E0","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[7.5,0.5],[7.5,1.5],[7.5,2.5]],"color":"#E0E0E0","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[7.5,3.5],[6.5,3.5],[6.5,4.5],[6.5,5.5],[7.5,5.5],[8.5,5.5]],"color":"#E0E0E0","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[7.5,4.5],[7.5,5.5]],"color":"#E0E0E0","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[8.5,6.5],[7.5,6.5],[6.5,6.5],[6.5,7.5],[6.5,8.5],[7.5,8.5],[8.5,8.5]],"color":"#E0E0E0","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[7.5,7.5],[7.5,8.5]],"color":"#E0E0E0","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[4.5,6.5],[3.5,6.5],[3.5,7.5],[3.5,8.5],[4.5,8.5],[5.5,8.5]],"color":"#E0E0E0","thickness":8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[5.5,7.5],[4.5,8.5]],"color":"#E0E0E0","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[4.5,3.5],[3.5,3.5],[3.5,4.5],[3.5,5.5],[4.5,5.5],[5.5,5.5]],"color":"#E0E0E0","thickness":8,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[5.5,4.5],[4.5,5.5]],"color":"#E0E0E0","thickness":8,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[4.5,0.5],[3.5,0.5],[3.5,1.5],[3.5,2.5],[4.5,2.5],[5.5,2.5]],"color":"#E0E0E0","thickness":8,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[5.5,1.5],[4.5,2.5]],"color":"#E0E0E0","thickness":8,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[1.5,0.5],[0.5,1.5],[1.5,2.5],[2.5,2.5]],"color":"#E0E0E0","thickness":8,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[2.5,1.5],[1.5,2.5]],"color":"#E0E0E0","thickness":8,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[1.5,3.5],[0.5,4.5],[1.5,5.5],[2.5,5.5]],"color":"#E0E0E0","thickness":8,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[2.5,4.5],[1.5,5.5]],"color":"#E0E0E0","thickness":8,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[1.5,6.5],[0.5,7.5],[1.5,8.5],[2.5,8.5]],"color":"#E0E0E0","thickness":8,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,7.5],[1.5,8.5]],"color":"#E0E0E0","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. Alien ships have no effect on the puzzle.
