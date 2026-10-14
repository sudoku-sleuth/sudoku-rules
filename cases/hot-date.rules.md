---
format: open-rules
title: Hot Date
setter: Blobz
source: https://sudokupad.app/blobz/hot-date
case: https://sudoku-sleuth.com/cases/hot-date
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c5=4 r1c9=7 r3c1=2 r5c5=6 r7c9=8 r9c1=5 r9c5=1
exported: 31ed8ab4edadfd2e2151b5ab6c0dda12
---

```rules
sudoku 9x9
thermo-1: thermo r3c9-r2c9-r1c9
thermo-2: thermo r9c7-r8c7-r7c7-r6c7
thermo-3: thermo r6c4-r5c4-r4c4
thermo-4: thermo r3c3-r2c3-r1c3
thermo-5: thermo r7c8-r6c8-r5c8-r4c8
thermo-6: thermo r7c3-r6c3-r5c3
thermo-7: thermo r8c1-r7c1-r6c1-r5c1-r4c1
thermo-8: thermo r8c6-r7c6-r6c6
thermo-9: thermo r5c6-r4c6-r3c6-r2c6
thermo-10: thermo r5c2-r4c2-r3c2-r2c2
quadruple-1: quadruple r2c2-r2c3-r3c2-r3c3 digits [1]
quadruple-2: quadruple r1c5-r1c6-r2c5-r2c6 digits [2]
quadruple-3: quadruple r2c7-r2c8-r3c7-r3c8 digits [3]
quadruple-4: quadruple r5c1-r5c2-r6c1-r6c2 digits [4]
quadruple-5: quadruple r4c4-r4c5-r5c4-r5c5 digits [5]
quadruple-6: quadruple r5c8-r5c9-r6c8-r6c9 digits [6]
quadruple-7: quadruple r7c5-r7c6-r8c5-r8c6 digits [8]
quadruple-8: quadruple r8c7-r8c8-r9c7-r9c8 digits [9]
quadruple-9: quadruple r8c2-r8c3-r9c2-r9c3 digits [7]
```

```drawing
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[6.5,5.5],[8.5,3.5],[6.5,1.5],[5.5,2.5],[6.5,3.5],[5.5,4.5]],"color":"#f067f0aa","thickness":9.6,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[2.5,7.5],[3.5,8.5],[5.5,6.5],[3.5,4.5],[2.5,5.5],[3.5,6.5],[2.5,7.5]],"color":"#f067f0aa","thickness":9.6,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[3.5,2.5],[1.5,4.5],[0.5,3.5],[1.5,2.5],[0.5,1.5],[1.5,0.5],[2.5,1.5]],"color":"#f067f0aa","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply.

Along thermometers, digits increase from the bulb end.

Pink lines contain a set of consecutive digits (with no repeats) in any order.

Digits in white circles must appear in a cell touching that circle.
