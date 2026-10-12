---
format: open-rules
title: Anything works
setter: sujoyku
source: https://sudokupad.app/0qbv5dz0h2
case: https://sudoku-sleuth.com/cases/anything-works
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r1c4-r1c5-r1c6-r2c5 total 12 connected true
cage-2: cage r5c3-r6c3 total 13 connected true
cage-3: cage r4c1-r5c1-r6c1 total 20 connected true
cage-4: cage r1c1-r1c2-r2c1 total 10 connected true
cage-5: cage r3c1-r3c2 total 14 connected true
cage-6: cage r1c8-r1c9-r2c8-r2c9 total 19 connected true
cage-7: cage r5c9-r6c7-r6c8-r6c9 total 21 connected true
cage-8: cage r8c1-r9c1-r9c2 total 7 connected true
```

```drawing
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[8.5,6.5],[7.5,5.5],[8.5,5.5],[7.5,4.5],[8.5,3.5],[7.5,2.5],[6.5,1.5],[5.5,1.5],[4.5,1.5],[3.5,1.5],[3.5,2.5],[2.5,2.5],[1.5,2.5],[1.5,1.5],[0.5,2.5],[1.5,3.5],[2.5,3.5],[2.5,4.5],[2.5,5.5],[1.5,5.5],[0.5,6.5],[1.5,6.5],[2.5,6.5],[2.5,7.5],[2.5,8.5],[3.5,7.5],[3.5,8.5],[4.5,7.5],[4.5,6.5],[3.5,6.5],[3.5,5.5],[3.5,4.5],[3.5,3.5],[4.5,3.5],[4.5,4.5],[5.5,3.5],[6.5,3.5],[6.5,4.5]],"color":"#FF9D00","thickness":12.8,"rounded":true}}
```

Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each. Digits in a cage sum to the clue in the top left. The orange line is a so-called Omnipotent Line, i.e. each pair of adjacent digits on the line must fulfill either an X, V, white or black Kropki dot clue. In other words, any pair of adjacent digits on the line must sum to 5 or 10, be consecutive or in a 1:2 ratio. (At least one of these constraints must be met, it is allowed that two constraints are fulfilled simultaneously.) For example, a 3 may be adjacent on the line to either a 2 (V or white Kropki dot), a 4 (white Kropki dot), a 6 (black Kropki dot) or a 7 (X).
