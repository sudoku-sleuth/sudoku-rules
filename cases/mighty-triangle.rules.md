---
format: open-rules
title: Mighty Triangle
setter: sujoyku
source: https://sudokupad.app/j4r74tzwcq
case: https://sudoku-sleuth.com/cases/mighty-triangle
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
sandwich-1: sandwich r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 sum 12
sandwich-2: sandwich r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 sum 26
sandwich-3: sandwich r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 sum 33
sandwich-4: sandwich r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 sum 23
sandwich-5: sandwich r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 sum 13
sandwich-6: sandwich r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9 sum 20
sandwich-7: sandwich r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 sum 24
sandwich-8: sandwich r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9 sum 18
sandwich-9: sandwich r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 sum 10
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[7.5,7.5],[6.5,6.5],[5.5,5.5],[4.5,4.5],[3.5,3.5],[2.5,2.5],[1.5,1.5],[0.5,0.5],[0.5,1.5],[0.5,2.5],[0.5,3.5],[0.5,4.5],[0.5,5.5],[0.5,6.5],[0.5,7.5],[0.5,8.5],[1.5,8.5],[2.5,8.5],[3.5,8.5],[4.5,8.5],[5.5,8.5],[6.5,8.5],[7.5,8.5],[8.5,8.5]],"color":"#FF9D00","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[7.5,7.5],[8.5,8.5]],"color":"#FF9D00","thickness":9.6,"rounded":true}}
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- A Sandwich clue outside the grid indicates the sum of all digits between 1 and 9 in the respective row or column. For example, a row filled with 135792468 would have a Sandwich clue of 15(=3+5+7).

- The orange lines are so-called Omnipotent Line, i.e. each pair of adjacent digits on such a line must fulfill either an X, V, white or black Kropki dot clue. In other words, any pair of adjacent digits on a line must sum to 5 or 10, be consecutive or in a 1:2 ratio. (At least one of these constraints must be met, it is allowed that two constraints are fulfilled simultaneously.) For example, a 3 may be adjacent on a line to either a 2 (V or white Kropki dot), a 4 (white Kropki dot), a 6 (black Kropki dot) or a 7 (X).
