---
format: open-rules
title: Omnipotent Butterfly
setter: sujoyku
source: https://sudokupad.app/dsm4bfk0b3
case: https://sudoku-sleuth.com/cases/omnipotent-butterfly
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 4d8247f2bdf66ba6f79bf6cd29229859
---

```rules
sudoku 9x9
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,3,8,9]
quadruple-2: quadruple r2c4-r2c5-r3c4-r3c5 digits [2,3,7,8]
quadruple-3: quadruple r4c2-r4c3-r5c2-r5c3 digits [4,5,6,9]
quadruple-4: quadruple r7c5-r7c6-r8c5-r8c6 digits [2,5,6,7]
quadruple-5: quadruple r5c7-r5c8-r6c7-r6c8 digits [5,6,8,9]
quadruple-6: quadruple r8c8-r8c9-r9c8-r9c9 digits [1,3,5,7]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[5.5,1.5],[5.5,0.5],[4.5,0.5],[3.5,0.5],[2.5,0.5],[2.5,1.5],[2.5,2.5],[1.5,2.5],[0.5,2.5],[0.5,3.5],[0.5,4.5],[0.5,5.5],[1.5,5.5],[2.5,5.5],[3.5,4.5],[4.5,3.5]],"color":"#FF9D00","thickness":12.8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[4.5,3.5]],"color":"#FF9D00","thickness":12.8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[7.5,3.5],[8.5,3.5],[8.5,4.5],[8.5,5.5],[8.5,6.5],[7.5,6.5],[6.5,7.5],[6.5,8.5],[5.5,8.5],[4.5,8.5],[3.5,8.5],[3.5,7.5],[3.5,6.5],[4.5,5.5],[5.5,4.5]],"color":"#FF9D00","thickness":12.8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[5.5,4.5]],"color":"#FF9D00","thickness":12.8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[1.5,6.5],[2.5,7.5],[2.5,8.5]],"color":"#FF9D00","thickness":12.8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[0.5,7.5]],"color":"#FF9D00","thickness":12.8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[2.5,8.5],[1.5,8.5]],"color":"#FF9D00","thickness":12.8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,7.5],[1.5,8.5]],"color":"#FF9D00","thickness":12.8,"rounded":true}}
```

Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each. A digit in a circle must appear in one of the four surrounding cells. The orange lines are so-called Omnipotent Lines, i.e. each pair of adjacent digits on such a line must fulfill either an X, V, white or black Kropki dot clue. In other words, any pair of adjacent digits on a line must sum to 5 or 10, be consecutive or in a 1:2 ratio. (At least one of these constraints must be met, it is allowed that two constraints are fulfilled simultaneously.) For example, a 3 may be adjacent on a line to either a 2 (V or white Kropki dot), a 4 (white Kropki dot), a 6 (black Kropki dot) or a 7 (X).
