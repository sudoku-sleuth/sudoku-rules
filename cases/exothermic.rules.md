---
format: open-rules
title: Exothermic
setter: Jobo
source: https://sudokupad.app/lgdnvq4f6l
case: https://sudoku-sleuth.com/cases/exothermic
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: e52f25c90e9009af83c1a6298e3e0e60
---

```rules
sudoku 9x9
thermo-1: thermo r1c3-r2c3-r2c2-r3c2-r3c1
thermo-2: thermo r4c9-r3c9-r3c8-r2c8-r2c7-r1c7-r1c6
thermo-3: thermo r6c1-r7c1-r7c2-r8c2-r8c3-r9c3-r9c4
thermo-4: thermo r4c7-r4c6-r4c5-r4c4-r5c4-r6c4-r7c4
thermo-5: thermo r8c7-r9c6-r9c7
thermo-6: thermo r7c8-r6c9-r7c9
```

```drawing
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[0.5,0.5],[1.5,0.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[2.5,4.5],[1.5,3.5],[3.5,1.5],[4.5,2.5],[5.5,2.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[8.5,8.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[7.5,4.5],[7.5,5.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[4.5,7.5],[5.5,7.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[7.5,0.5],[8.5,0.5],[8.5,1.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[0.5,8.5],[1.5,8.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply.

Along thermometers, digits must increase from the bulb end.

A set of three sequential cells along a peach line must contain a low [123], middle [456], and high [789] digit.
