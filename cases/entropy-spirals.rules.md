---
format: open-rules
title: Entropy Spirals
setter: Will Power
source: https://sudokupad.app/1u8fe2gwin
case: https://sudoku-sleuth.com/cases/entropy-spirals
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: b06632b5679a97d74eeeaeeace798913
---

```rules
sudoku 9x9
cage-1: cage r5c5-r5c6 total 11 connected true
cage-2: cage r4c4-r4c5 total 10 connected true
cage-3: cage r5c4-r6c4 total 12 connected true
cage-4: cage r6c5-r6c6 total 9 connected true
cage-5: cage r2c8-r2c9 total 15 connected true
cage-6: cage r3c8-r3c9 total 9 connected true
cage-7: cage r1c7-r1c8 total 6 connected true
cage-8: cage r2c7-r3c7 total 11 connected true
cage-9: cage r8c2-r8c3 total 5 connected true
cage-10: cage r8c1-r9c1 total 9 connected true
cage-11: cage r7c1-r7c2 total 13 connected true
cage-12: cage r9c2-r9c3 total 12 connected true
cage-13: cage r7c9-r8c9 total 11 connected true
cage-14: cage r9c8-r9c9 total 11 connected true
cage-15: cage r8c7-r9c7 total 11 connected true
cage-16: cage r7c8-r8c8 total 11 connected true
cage-17: cage r2c3-r3c3 total 10 connected true
cage-18: cage r1c2-r1c3 total 10 connected true
cage-19: cage r2c1-r2c2 total 10 connected true
kropki r2c2-r3c2 black
```

```drawing
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[3.5,4.5],[3.5,5.5],[4.5,5.5],[5.5,5.5],[5.5,4.5],[5.5,3.5],[4.5,3.5],[3.5,3.5]],"color":"#A3F9FF","thickness":8,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[0.5,7.5],[0.5,8.5],[1.5,8.5],[2.5,8.5],[2.5,7.5],[2.5,6.5],[1.5,6.5],[0.5,6.5]],"color":"#A3F9FF","thickness":8,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[6.5,1.5],[6.5,2.5],[7.5,2.5],[8.5,2.5],[8.5,1.5],[8.5,0.5],[7.5,0.5],[6.5,0.5]],"color":"#A3F9FF","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Any set of three neighbors on blue lines contain one low number (1-3), one middle number (4-6) and one high number (7-9). KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
