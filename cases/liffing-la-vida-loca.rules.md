---
format: open-rules
title: Liffing la vida loca
setter: sujoyku
source: https://sudokupad.app/v13gcnfx5j
case: https://sudoku-sleuth.com/cases/liffing-la-vida-loca
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 64f7983fb10f606726f36726a11329ea
---

```rules
sudoku 9x9
thermo-1: thermo r1c4-r2c4-r3c5-r4c6-r5c6
thermo-2: thermo r2c8-r2c7-r1c6
thermo-3: thermo r8c3-r9c4-r8c5-r7c6-r6c5-r5c4
thermo-4: thermo r4c3-r3c3-r2c2-r3c1-r4c1-r5c2
thermo-5: thermo r5c7-r4c8-r3c9
thermo-6: thermo r1c3-r2c3-r3c4
thermo-7: thermo r7c1-r7c2-r6c3
thermo-8: thermo r7c8-r8c7-r9c6
thermo-9: thermo r6c8-r7c7-r8c6
```

```drawing
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[2.2,2.8],[1.8,3.2]],"color":"#f66f","thickness":3.2,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[3.2,4.8],[2.8,5.2]],"color":"#f66f","thickness":3.2,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[1.2,5.8],[0.8,6.2]],"color":"#f66f","thickness":3.2,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[2.8,7.8],[3.2,8.2]],"color":"#f66f","thickness":3.2,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[7.8,5.8],[8.2,6.2]],"color":"#f66f","thickness":3.2,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[6.8,5.8],[7.2,6.2]],"color":"#f66f","thickness":3.2,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[6.2,4.8],[5.8,5.2]],"color":"#f66f","thickness":3.2,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[5.8,1.8],[6.2,2.2]],"color":"#f66f","thickness":3.2,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,0.5],"width":0.62,"height":0.1,"rounded":false,"fill":"#f66f","thickness":0,"angle":0}}
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Bulb-gravitating Thermos: Digits along a thermometer must strictly increase from the bulb end. Moreover, each thermometer is split in two parts by a red cut. The digits on the bulb part must sum to strictly more than the digits on the tip part.
