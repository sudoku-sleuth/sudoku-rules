---
format: open-rules
title: Skeleton Pentominoes
setter: Blobz
source: https://sudokupad.app/90xk0m4mug
case: https://sudoku-sleuth.com/cases/skeleton-pentominoes
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 16174126124a99c6538a116d2af8c443
---

```rules
sudoku 9x9
parity-cells-1: parity-cells r2c6-r3c7-r4c6-r5c9-r6c8-r9c4-r8c3-r6c5-r5c3-r2c2-r1c6-r7c5 parity "odd"
parity-cells-2: parity-cells r7c1-r3c3-r1c3-r2c9-r3c9-r7c8-r7c6-r8c5-r6c4-r2c5-r4c7-r6c1 parity "even"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[28],"label":"29","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[4],"label":"28","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[70],"label":"27","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[15],"label":"19","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[77],"label":"25","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[50],"label":"17","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[63],"label":"23","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[51],"label":"19","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[21],"label":"30","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[43],"label":"31","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[57],"label":"26","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[36],"label":"28","color":"#000000","labelColor":"#000000"}}
```

Normal sudoku rules apply.

Cells marked with grey circles contain odd digits. Cells marked with grey squares contain even digits. 

Shade some cells such that the resulting pattern is 90-degree rotationally symmetric. For example, if r3c1 is shaded, then so are r1c7, r7c9, and r9c3.

The unshaded region must contain one each of the twelve standard pentominoes (no repeats by rotation or reflection).

Each pentomino encloses exactly one grey square, one grey circle, and one caged cell.

The arrangement of pentominoes must be deduced.

Once placed, the pentominoes can be shaded with just 3 colors, such that no two pentominoes of the same color touch each other orthogonally or diagonally. All pentominoes of the same color contain a digit in common that lives in the caged cell. For one group the digit is 7, the next group 8, and the last group 9. 

Additionally, each pentomino behaves like a 5-cell killer cage: digits do not repeat and must sum to the clue in the corner of the caged cell.

Illustrated Pentominoes at:
https://tinyurl.com/pent-labels
