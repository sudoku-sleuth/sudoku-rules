---
format: open-rules
title: Transmission
setter: Jobo
source: https://sudokupad.app/6hoi3z5byq
case: https://sudoku-sleuth.com/cases/transmission-2
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
thermo-1: thermo r4c1-r3c1-r2c1-r1c1-r1c2-r1c3-r1c4
thermo-2: thermo r4c1-r4c2-r5c3
thermo-3: thermo r9c6-r9c7-r9c8-r9c9-r8c9-r7c9-r6c9
thermo-4: thermo r9c6-r8c6-r7c5
thermo-5: thermo r9c1-r8c2-r7c3
thermo-6: thermo r1c9-r1c8-r1c7
thermo-7: thermo r1c9-r2c9-r3c9
pair-1: pair r8c7-r8c8 relation {"op":"sum","value":10}
pair-2: pair r2c2-r2c3 relation {"op":"sum","value":10}
```

```drawing
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[3.5,5.5],[6.5,5.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[5.5,3.5],[7.5,3.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[8.5,0.5],[8.5,3.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[1.5,7.5],[4.5,7.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[8.5,0.5],[8.5,3.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[3.5,5.5],[6.5,5.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[5.5,3.5],[7.5,3.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[1.5,7.5],[4.5,7.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply.

Along thermometers, digits must increase from the bulb end.

A set of three sequential cells along a peach line must contain a low [123], middle [456], and high [789] digit.

Digits separated by an X must sum to 10. Not all X are given.
