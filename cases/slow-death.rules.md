---
format: open-rules
title: Slow Death
setter: Timotab
source: https://sudokupad.app/uw9593tz9y
case: https://sudoku-sleuth.com/cases/slow-death
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
slow-thermo-1: slow-thermo r9c9-r8c8-r7c7-r6c6-r5c5-r4c4-r3c3-r2c2-r1c1
slow-thermo-2: slow-thermo r9c5-r8c4-r7c3-r6c2-r5c1
slow-thermo-3: slow-thermo r1c5-r2c6-r3c7-r4c8-r5c9
slow-thermo-4: slow-thermo r1c3-r2c2-r3c1
slow-thermo-5: slow-thermo r9c7-r8c8-r7c9
slow-thermo-6: slow-thermo r8c1-r7c2-r6c3-r5c4
slow-thermo-7: slow-thermo r5c6-r4c7-r3c8-r2c9
slow-thermo-8: slow-thermo r3c5-r2c6-r1c7
```

```drawing
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[63],"label":"31","color":"#0000"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[76],"label":"27","color":"#0000"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[2],"label":"16","color":"#0000"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[22],"label":"14","color":"#0000"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[41],"label":"6","color":"#0000"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[78],"label":"14","color":"#0000"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[80],"label":"45","color":"#0000"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[4],"label":"28","color":"#0000"}}
```

• Normal Sudoku rules apply. Place the digits 1-9 in every row, column, or box, without repetition.
• Killer Slow Thermometers. Digits along thermometers must increase or stay the same from the bulb end. Numbers in bulb cells indicate the sum of the digits on the thermometer. Thermometers are all straight lines.
