---
format: open-rules
title: Tenkropki
setter: sujoyku
source: https://sudokupad.app/rghli2uny5
case: https://sudoku-sleuth.com/cases/tenkropki
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 4431e240671e57aa0bdada4186858863
---

```rules
sudoku 9x9
kropki-1: kropki r4c1-r4c2 black
kropki-2: kropki r4c2-r4c3 black
kropki-3: kropki r2c4-r3c4 black
kropki-4: kropki r1c4-r2c4 black
kropki-5: kropki r7c6-r7c7 black
kropki-6: kropki r6c7-r7c7 black
kropki-7: kropki r4c3-r4c4 white
kropki-8: kropki r3c4-r4c4 white
kropki-9: kropki r6c4-r7c4 white
kropki-10: kropki r7c3-r7c4 white
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[2.5,5.5],[5.5,2.5],[5.5,0.5],[7.5,0.5],[7.5,3.5],[4.5,6.5],[5.5,7.5],[2.5,7.5],[1.5,8.5],[0.5,8.5],[0.5,7.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[8.5,6.5],[8.5,7.5],[7.5,8.5],[6.5,8.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[1.5,1.5],[2.5,0.5],[2.5,1.5],[1.5,2.5],[0.5,2.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[8.5,4.5],[8.5,5.5],[7.5,5.5],[7.5,4.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[2.5,5.5],[5.5,2.5],[5.5,0.5],[7.5,0.5],[7.5,3.5],[4.5,6.5],[5.5,7.5],[2.5,7.5],[1.5,8.5],[0.5,8.5],[0.5,7.5]],"color":"#FFFFFF","thickness":2.56,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[8.5,6.5],[8.5,7.5],[7.5,8.5],[6.5,8.5]],"color":"#FFFFFF","thickness":2.56,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[1.5,1.5],[2.5,0.5],[2.5,1.5],[1.5,2.5],[0.5,2.5]],"color":"#FFFFFF","thickness":2.56,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[8.5,4.5],[8.5,5.5],[7.5,5.5],[7.5,4.5]],"color":"#FFFFFF","thickness":2.56,"rounded":true}}
```

- Normal Sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Kropki: Digits joined by a black dot are in a 1:2 ratio. Digits joined by a white dot are consecutive. (Not all dots are shown.)

- Tentropy Lines: Every set of 4 adjacent digits on a peach line must contain a digit from each of the X-pair (ten-pair) subsets of {1,9}, {2,8}, {3,7}, and {4,6}. A 5 may not appear on a tentropy line. Digits on a line may repeat if allowed by other rules.
