---
format: open-rules
title: X-trapolation
setter: sujoyku
source: https://sudokupad.app/fafy0ih71v
case: https://sudoku-sleuth.com/cases/x-trapolation
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
x-sum-1: x-sum r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 sum 20
x-sum-2: x-sum r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 sum 20
x-sum-3: x-sum r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8 sum 20
x-sum-4: x-sum r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 sum 7
x-sum-5: x-sum r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 sum 11
x-sum-6: x-sum r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 sum 15
x-sum-7: x-sum r9c3-r8c3-r7c3-r6c3-r5c3-r4c3-r3c3-r2c3-r1c3 sum 15
x-sum-8: x-sum r9c6-r8c6-r7c6-r6c6-r5c6-r4c6-r3c6-r2c6-r1c6 sum 21
x-sum-9: x-sum r9c9-r8c9-r7c9-r6c9-r5c9-r4c9-r3c9-r2c9-r1c9 sum 27
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[7.5,0.5],[6.5,0.5],[5.5,0.5],[4.5,0.5],[3.5,0.5],[2.5,0.5],[1.5,0.5]],"color":"#FF9D00","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[0.5,6.5],[0.5,5.5],[0.5,4.5],[0.5,3.5],[0.5,2.5],[0.5,1.5]],"color":"#FF9D00","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[6.5,4.5],[5.5,5.5]],"color":"#FF9D00","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[8.5,6.5],[7.5,7.5],[6.5,8.5]],"color":"#FF9D00","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[8.5,4.5],[8.5,5.5],[8.5,6.5]],"color":"#FF9D00","thickness":9.6,"rounded":true}}
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- X-sums: A clue outside the grid indicates the sum of the first X digits in the respective row or column where X is the first digit seen from the clue.

- Omnipotent Lines: The orange lines are so-called Omnipotent Line, i.e. each pair of adjacent digits on such a line must fulfill either an X, V, white or black Kropki dot clue. In other words, any pair of adjacent digits on a line must sum to 5 or 10, be consecutive or in a 1:2 ratio. (At least one of these constraints must be met, it is allowed that two constraints are fulfilled simultaneously.) For example, a 3 may be adjacent on a line to either a 2 (V or white Kropki dot), a 4 (white Kropki dot), a 6 (black Kropki dot) or a 7 (X).
