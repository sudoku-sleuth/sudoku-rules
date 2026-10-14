---
format: open-rules
title: Mods
setter: Marty Sears
source: https://tinyurl.com/26kuv3bu
case: https://sudoku-sleuth.com/cases/mods
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: eefdbd20a3a5d816bb2b8c49128eb22d
---

```rules
sudoku 9x9
counting-circles r2c5-r2c6-r4c2-r5c2-r5c8-r6c8-r8c4-r8c5
```

```drawing
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[1.5,8.5],[0.5,7.5],[2.5,5.5],[2.5,4.5],[3.5,4.5]],"color":"#92FFF5","thickness":11,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[1.5,0.5],[3.5,0.5],[2.5,1.5]],"color":"#92FFF5","thickness":11,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[4.5,5.5],[5.5,4.5]],"color":"#92FFF5","thickness":11,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[6.5,1.5],[6.5,2.5]],"color":"#92FFF5","thickness":11,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[6.5,6.5],[6.5,7.5],[8.5,7.5]],"color":"#92FFF5","thickness":11,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[8.5,1.5],[8.5,0.5]],"color":"#92FFF5","thickness":11,"rounded":true}}
```

• Normal sudoku rules apply

• Turquoise lines are 'Same Difference' lines. Each pair of adjacent digits on one of these lines has the same difference. However, this 'difference value' may be different for different lines.

• A digit in a circle indicates exactly how many circles contain that digit.
