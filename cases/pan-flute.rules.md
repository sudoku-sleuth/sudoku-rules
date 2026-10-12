---
format: open-rules
title: Pan Flute
setter: Jobo
source: https://sudokupad.app/5qylclwglp
case: https://sudoku-sleuth.com/cases/pan-flute
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
anti-knight
thermo-1: thermo r3c2-r4c2-r5c2-r6c2-r7c2-r8c2
thermo-2: thermo r3c3-r4c3-r5c3-r6c3-r7c3
thermo-3: thermo r3c4-r4c4-r5c4-r6c4
thermo-4: thermo r3c5-r4c5-r5c5
thermo-5: thermo r3c6-r4c6
thermo-6: thermo r3c7-r4c7
thermo-7: thermo r3c8-r4c8
```

```drawing
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[2.5,2.5],[2.5,3.5],[2.5,4.5],[2.5,5.5],[2.5,6.5],[2.5,7.5]],"color":"#99A8D1","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply.

Along thermometers, digits must increase from the bulb end.

The line consists of one or more contiguous, non-overlapping groups of cells, each of which sums to 10.

Cells separated by a knight's move cannot contain the same digit.
