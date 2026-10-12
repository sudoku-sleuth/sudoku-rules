---
format: open-rules
title: What Goes Around
setter: sujoyku
source: https://sudokupad.app/6a8yjuoelv
case: https://sudoku-sleuth.com/cases/what-goes-around
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r3c2-r4c2 total 11 connected true
cage-2: cage r6c2-r7c2 total 11 connected true
cage-3: cage r8c3-r8c4 total 9 connected true
cage-4: cage r8c6-r8c7 total 9 connected true
cage-5: cage r6c7-r6c8 total 15 connected true
cage-6: cage r2c4-r3c4 total 6 connected true
cage-7: cage r1c3-r2c3 total 12 connected true
cage-8: cage r7c8-r7c9 total 14 connected true
cage-9: cage r2c7-r2c8-r3c8 total 12 connected true
kropki-1: kropki r8c9-r9c9 colour "black"
kropki-2: kropki r1c1-r1c2 colour "black"
kropki-3: kropki r1c7-r1c8 colour "black"
kropki-4: kropki r2c9-r3c9 colour "black"
entropic-1: entropic r2c2-r3c3-r4c3-r5c2-r6c1-r7c1-r8c2-r9c3-r9c4-r8c5-r7c6-r7c7-r8c8
entropic-2: entropic r6c9-r5c8-r5c7-r6c6-r6c5-r5c4-r4c4-r3c5-r2c5-r1c4
entropic-3: entropic r4c9-r4c8-r3c7-r2c6-r1c6
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[2.5,2.5],[3.5,2.5],[5.5,0.5],[6.5,0.5],[8.5,2.5],[8.5,3.5],[6.5,5.5],[6.5,6.5],[7.5,7.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[4.5,7.5],[4.5,6.5],[5.5,5.5],[5.5,4.5],[4.5,3.5],[3.5,3.5],[2.5,4.5],[1.5,4.5],[0.5,3.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[1.5,5.5],[3.5,7.5],[3.5,8.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Entropic Lines: Any three adjacent digits along a peach line must contain one low digit (1, 2, or 3), one medium digit (4, 5, or 6) and one high digit (7, 8, or 9).

- Killer cages: Digits in a cage must sum to the clue in the top left.

- Kropki: Digits joined by a black dot have a 1:2 ratio. (Not all dots are given.)
