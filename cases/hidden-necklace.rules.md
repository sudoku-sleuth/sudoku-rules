---
format: open-rules
title: Hidden Necklace
setter: Blobz
source: https://sudokupad.app/xty821m1r8
case: https://sudoku-sleuth.com/cases/hidden-necklace
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c3=2 r4c9=8 r9c7=1
exported: 6264c4185f4d4e6b7d9d4fd1cd47dc5b
---

```rules
sudoku 9x9
whispers-1: whispers r4c1-r3c2 gap 5
whispers-2: whispers r8c5-r7c6 gap 5
whispers-3: whispers r5c2-r4c1 gap 5
parity-cells-1: parity-cells r7c3-r3c6-r4c7-r8c8-r8c7-r3c3-r2c2-r5c6-r6c6-r8c2-r1c7-r3c1 parity "odd"
parity-cells-2: parity-cells r5c2-r2c6-r3c5-r4c3-r1c6-r7c5-r7c8-r6c4-r8c4-r3c7-r5c7-r9c3 parity "even"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[11],"label":"32","color":"#000000","labelColor":"#0000CC"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[52],"label":"26","color":"#000000","labelColor":"#0000CC"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[75],"label":"21","color":"#000000","labelColor":"#0000CC"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[65],"color":"#000000","labelColor":"#0000CC"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[68],"color":"#000000","labelColor":"#0000CC"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[38],"color":"#000000","labelColor":"#0000CC"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[21],"color":"#000000","labelColor":"#0000CC"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[31],"color":"#000000","labelColor":"#0000CC"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[13],"color":"#000000","labelColor":"#0000CC"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[25],"color":"#000000","labelColor":"#0000CC"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[44],"color":"#000000","labelColor":"#0000CC"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[51],"color":"#000000","labelColor":"#0000CC"}}
```

Normal sudoku rules apply.

Cells marked with grey circles contain odd digits. Cells marked with grey squares contain even digits. 

Shade some cells such that the resulting pattern is 90-degree rotationally symmetric. For example, if r1c4 is shaded, then so are r4c9, r9c6, and r6c1.

The unshaded region must contain one each of the twelve standard pentominoes (no repeats by rotation or reflection).

Each pentomino encloses exactly one grey square, one grey circle, and one caged cell.

The arrangement of pentominoes must be deduced.

A single green line loops through all twelve pentominoes (some of it is shown). It passes through exactly 2 cells of a pentomino before visiting the next. The line does not enter any cell containing a cage or a grey circle. Adjacent digits along the green line differ by at least 5. 

Each pentomino behaves like a 5-cell killer cage: digits do not repeat and must sum to the value shown in the corner of the caged cell (if given).

Illustrated Pentominoes at:
https://tinyurl.com/pent-labels
