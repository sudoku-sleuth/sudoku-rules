---
format: open-rules
title: Helicopter
setter: Jobo
source: https://sudokupad.app/ttg5v7noxd
case: https://sudoku-sleuth.com/cases/helicopter
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
anti-king
thermo-1: thermo r4c4-r3c4-r3c3-r3c2-r3c1
thermo-2: thermo r4c4-r3c4-r3c5-r3c6-r3c7
thermo-3: thermo r4c9-r3c9
thermo-4: thermo r4c9-r5c9
whispers r4c9-r4c8-r4c7-r5c7-r6c6-r7c5-r7c4-r7c3-r7c2-r7c1-r6c1-r5c2-r4c3-r4c4-r4c5-r4c6-r4c7 gap 5
region-sum r8c1-r8c2-r8c3-r8c4-r8c5 segments [["r8c1","r8c2","r8c3"],["r8c4","r8c5"]]
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[7.5,1.5]],"color":"#efdc14ff","thickness":10,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[7.5,3.5]],"color":"#efdc14ff","thickness":10,"rounded":true}}
```

Normal sudoku rules apply.

Along thermometers, digits must increase from the bulb end.

Adjacent digits along the green line must differ by at least 5.

Box borders divide the blue line into segments with the same sum.

Adjacent digits along a yellow line cannot be consecutive.

Cells separated by a king's move cannot contain the same digit.
