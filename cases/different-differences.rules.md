---
format: open-rules
title: Different Differences
setter: Marty Sears
source: https://sudokupad.app/ymfy94fe19
case: https://sudoku-sleuth.com/cases/different-differences
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r2c5-r2c6 colour "black"
kropki-2: kropki r4c2-r4c3 colour "black"
kropki-3: kropki r9c3-r9c4 colour "black"
counting-circles r6c2
```

```drawing
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[2.5,1.5],[3.5,0.5],[5.5,0.5]],"color":"#FFE7C2","thickness":11,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[2.5,2.5],[2.5,3.5],[3.5,3.5]],"color":"#92FFF5","thickness":11,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[4.5,5.5],[4.5,6.5],[5.5,6.5]],"color":"#FFE7C2","thickness":11,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[0.5,7.5],[1.5,7.5],[0.5,8.5],[2.5,8.5]],"color":"#FFE2BD","thickness":11,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[2.5,7.5],[3.5,6.5]],"color":"#FFE2BD","thickness":11,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[3.5,6.5]],"color":"#FFE7C2","thickness":11,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[4.5,2.5],[4.5,3.5],[5.5,3.5],[5.5,2.5]],"color":"#FFE7C2","thickness":11,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[6.5,0.5],[8.5,0.5],[8.5,2.5],[6.5,2.5],[7.5,1.5],[6.5,1.5]],"color":"#FFE7C2","thickness":11,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[6.5,4.5],[6.5,3.5],[7.5,3.5],[7.5,4.5],[8.5,4.5]],"color":"#FFE7C2","thickness":11,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[6.5,8.5],[6.5,5.5],[8.5,5.5]],"color":"#92FFF5","thickness":11,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[8.5,6.5],[7.5,7.5]],"color":"#FFE7C2","thickness":11,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[8.5,7.5],[7.5,8.5],[8.5,8.5]],"color":"#FFE7C2","thickness":11,"rounded":true}}
```

Normal Sudoku rules apply.

SAME DIFFERENCE LINES: Every pair of adjacent digits on a turquoise line has the same difference. However, this 'difference value' may be different for different turquoise lines.

DIFFERENT DIFFERENCE LINES:
No two pairs of adjacent digits on a peach coloured line may have the same difference. Eg: if there is a 2 next to a 4 on a peach line, there can't be a 7 next to a 9 on the same line.

KROPKI DOTS:
Digits joined by a black dot are in a 1:2 ratio, ie; one is double the other.

COUNTING CIRCLES:
A digit in a circle indicates exactly how many times that digit appears in a circle.
