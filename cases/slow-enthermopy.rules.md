---
format: open-rules
title: Slow Enthermopy
setter: Chip Sounder
source: https://sudokupad.app/ga932mrgrc
case: https://sudoku-sleuth.com/cases/slow-enthermopy
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
slow-thermo-1: slow-thermo r8c3-r7c4-r6c5-r6c6-r5c7-r4c6-r3c5-r4c4-r5c3-r6c2-r7c1-r8c1
slow-thermo-2: slow-thermo r8c6-r7c7-r6c8-r5c9-r4c8-r3c7-r2c6-r2c5-r2c4-r3c3-r4c2
slow-thermo-3: slow-thermo r9c4-r9c5-r9c6-r8c7-r7c8-r6c9
slow-thermo-4: slow-thermo r4c9-r3c8-r2c7-r1c6
slow-thermo-5: slow-thermo r6c3-r6c4-r5c5-r5c6
```

```drawing
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[8.5,0.5],[7.5,0.5],[7.5,1.5],[6.5,1.5],[6.5,2.5]],"color":"#3066eaaf","thickness":16.64,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[5.5,1.5]],"color":"#3066eaaf","thickness":16.64,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[8.5,8.5],[8.5,5.5]],"color":"#3066eaaf","thickness":16.64,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[3.5,4.5],[3.5,5.5]],"color":"#3066eaaf","thickness":16.64,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[2.5,5.5]],"color":"#3066eaaf","thickness":16.64,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[2.5,0.5],[1.5,1.5],[3.5,3.5],[2.5,3.5]],"color":"#3066eaaf","thickness":16.64,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[7.5,3.5],[6.5,3.5],[5.5,2.5]],"color":"#3066eaaf","thickness":16.64,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[7.5,6.5]],"color":"#3066eaaf","thickness":16.64,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[3.5,7.5],[3.5,8.5]],"color":"#3066eaaf","thickness":16.64,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[4.5,2.5],[5.5,3.5]],"color":"#3066eaaf","thickness":16.64,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[7.5,8.5],[5.5,8.5]],"color":"#3066eaaf","thickness":16.64,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[1.5,8.5],[0.5,7.5],[0.5,8.5]],"color":"#3066eaaf","thickness":16.64,"rounded":true}}
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Digits along a orange slow thermometer must never decrease from the bulb end.
Adjacent cells along a blue line must alternate between low (123), medium (456) and high (789). Any row of three along a line must contain one of each entropy.
