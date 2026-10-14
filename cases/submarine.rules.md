---
format: open-rules
title: Submarine
setter: Jobo
source: https://sudokupad.app/fkqjwq5njo
case: https://sudoku-sleuth.com/cases/submarine
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: bbd0158b6fc7632305902fd24cb0a2c0
---

```rules
sudoku 9x9
thermo r6c5-r5c5-r4c5-r3c5-r2c5-r2c6
region-sum-1: region-sum r3c2-r3c3-r3c4 segments [["r3c2","r3c3"],["r3c4"]]
region-sum-2: region-sum r4c2-r4c3-r4c4 segments [["r4c2","r4c3"],["r4c4"]]
region-sum-3: region-sum r3c6-r3c7-r3c8 segments [["r3c6"],["r3c7","r3c8"]]
region-sum-4: region-sum r4c6-r4c7-r4c8 segments [["r4c6"],["r4c7","r4c8"]]
renban-1: renban r6c3-r6c2-r7c2
renban-2: renban r6c7-r6c8-r7c8
unique-1: unique r1c1-r1c4-r1c7-r4c1-r4c4-r4c7-r7c1-r7c4-r7c7
unique-2: unique r1c2-r1c5-r1c8-r4c2-r4c5-r4c8-r7c2-r7c5-r7c8
unique-3: unique r1c3-r1c6-r1c9-r4c3-r4c6-r4c9-r7c3-r7c6-r7c9
unique-4: unique r2c1-r2c4-r2c7-r5c1-r5c4-r5c7-r8c1-r8c4-r8c7
unique-5: unique r2c2-r2c5-r2c8-r5c2-r5c5-r5c8-r8c2-r8c5-r8c8
unique-6: unique r2c3-r2c6-r2c9-r5c3-r5c6-r5c9-r8c3-r8c6-r8c9
unique-7: unique r3c1-r3c4-r3c7-r6c1-r6c4-r6c7-r9c1-r9c4-r9c7
unique-8: unique r3c2-r3c5-r3c8-r6c2-r6c5-r6c8-r9c2-r9c5-r9c8
unique-9: unique r3c3-r3c6-r3c9-r6c3-r6c6-r6c9-r9c3-r9c6-r9c9
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,4.214],[4.5,1.5],[5.5,0.5],[6.5,0.5],[7.5,1.5],[7.5,7.5],[6.5,8.5],[5.5,8.5],[4.5,7.5],[4.5,4.786]],"color":"#e5bbf7ff","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply.

Along the thermometer, digits must increase from the bulb end.

Digits an equal distance from the center of  the lavender line must sum to the digit on the center of that line.

Red lines contain a non-repeating set of consecutive digits in any order.

Box borders divide blue lines into segments with the same sum.

Cells in the same position within two 3x3 boxes cannot contain the same digit (disjoint sets).
