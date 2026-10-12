---
format: open-rules
title: "Skeleton Pentominoes #2"
setter: Blobz
source: https://sudokupad.app/8vhc2tp72b
case: https://sudoku-sleuth.com/cases/skeleton-pentominoes-2
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c9=3
---

```rules
sudoku 9x9
thermo-1: thermo r3c3-r4c3
thermo-2: thermo r4c2-r4c1
thermo-3: thermo r6c2-r5c2
thermo-4: thermo r5c4-r4c4
thermo-5: thermo r1c5-r2c4
thermo-6: thermo r3c6-r2c6
thermo-7: thermo r3c9-r3c8
thermo-8: thermo r6c8-r6c9
thermo-9: thermo r6c6-r7c6
thermo-10: thermo r9c4-r8c4
thermo-11: thermo r8c3-r7c4
thermo-12: thermo r4c7-r5c6
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[45],"label":"20","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[47],"label":"27","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[49],"label":"28","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[76],"label":"26","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[69],"label":"17","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[44],"label":"33","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[43],"label":"17","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[42],"label":"25","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[31],"label":"21","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[2],"label":"32","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[3],"label":"23","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[15],"label":"31","color":"#000000","labelColor":"#000000"}}
```

Normal sudoku rules apply.

Digits on thermometers should increase from the bulb end.

Shade some cells such that the resulting pattern is 90-degree rotationally symmetric. For example, if r3c1 is shaded, then so are r1c7, r7c9, and r9c3.

The unshaded region must contain one each of the twelve standard pentominoes (no repeats by rotation or reflection).

Each pentomino encloses exactly one caged cell and one thermometer.

The arrangement of pentominoes must be deduced.

Once placed, the pentominoes can be shaded with just 3 colors, such that no two pentominoes of the same color touch each other orthogonally or diagonally. All pentominoes of the same color contain a digit in common that lives in the caged cell. For one group the digit is 1, the next group 5, and the last group 9.

Additionally, each pentomino behaves like a 5-cell killer cage: digits do not repeat and must sum to the clue in the corner of the caged cell.

Illustrated Pentominoes at:
https://tinyurl.com/pent-labels
