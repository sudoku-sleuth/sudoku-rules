---
format: open-rules
title: Slingshots and a Thermo
setter: Timotab
source: https://sudokupad.app/vuvz60ykmo
case: https://sudoku-sleuth.com/cases/slingshots-and-a-thermo
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 6
  cols: 6
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 9
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r2c3
      - r3c1
      - r3c2
      - r3c3
    - - r1c4
      - r1c5
      - r1c6
      - r2c4
      - r2c5
      - r2c6
      - r3c4
      - r3c5
      - r3c6
    - - r4c1
      - r4c2
      - r4c3
      - r5c1
      - r5c2
      - r5c3
      - r6c1
      - r6c2
      - r6c3
    - - r4c4
      - r4c5
      - r4c6
      - r5c4
      - r5c5
      - r5c6
      - r6c4
      - r6c5
      - r6c6
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6
unique-7: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1
unique-8: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2
unique-9: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3
unique-10: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4
unique-11: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5
unique-12: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6
unique-13: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3-r3c1-r3c2-r3c3
unique-14: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6-r3c4-r3c5-r3c6
unique-15: unique r4c1-r4c2-r4c3-r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
unique-16: unique r4c4-r4c5-r4c6-r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
thermo r1c6-r2c6-r2c5-r2c4
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1.6,0.8],[1.5,0.9],[1.5,0.5],[1.1,0.5]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.5,0.9],[1.4,0.8]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1.6,1.8],[1.5,1.9],[1.5,1.5],[1.1,1.5]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.5,1.9],[1.4,1.8]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1.6,2.8],[1.5,2.9],[1.5,2.5],[1.1,2.5]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[1.5,2.9],[1.4,2.8]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.9,4.2],[0.9,4.1],[0.5,4.5],[0.5,4.1]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0.9,4.1],[0.8,4.1]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[2.9,4.2],[2.9,4.1],[2.5,4.5],[2.1,4.5]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[2.9,4.1],[2.8,4.1]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[2.9,5.2],[2.9,5.1],[2.5,5.5],[2.1,5.5]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.9,5.1],[2.8,5.1]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[2.6,2.8],[2.5,2.9],[2.5,2.5],[2.1,2.5]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[2.5,2.9],[2.4,2.8]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[2.6,1.8],[2.5,1.9],[2.5,1.5],[2.1,1.5]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[2.5,1.9],[2.4,1.8]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[3.2,1.4],[3.1,1.5],[3.5,1.5],[3.5,1.1]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[3.1,1.5],[3.2,1.6]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[4.2,0.4],[4.1,0.5],[4.5,0.5],[4.5,0.9]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[4.1,0.5],[4.2,0.6]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[5.2,0.4],[5.1,0.5],[5.5,0.5],[5.1,0.9]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[5.1,0.5],[5.2,0.6]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[3.9,5.5],[3.5,5.5],[3.1,5.1],[3.1,5.2]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[3.1,5.1],[3.2,5.1]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[4.6,4.2],[4.5,4.1],[4.5,4.5],[4.1,4.5]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[4.5,4.1],[4.4,4.2]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[5.6,5.2],[5.5,5.1],[5.5,5.5],[5.1,5.5]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[5.5,5.1],[5.4,5.2]],"color":"#ddabfaff","thickness":3.2,"rounded":true}}
```

• Quattroquadri: Place the digits 1-9 in each 3x3 box so that digits do not repeat in any box, row, or column.
• Thermometer: Digits along a grey thermometer strictly increase from the bulb end.
• Slingshots: If a purple arrow is present in a cell, the digit in the cell the arrow comes from appears in the grid in the direction of the arrow at a distance of N cells, where N is the digit in the arrow’s cell.
