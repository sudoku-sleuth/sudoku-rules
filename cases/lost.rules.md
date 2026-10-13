---
format: open-rules
title: LOST
setter: Blobz
source: https://sudokupad.app/blobz/lost
case: https://sudoku-sleuth.com/cases/lost
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
pair-1: pair r1c1-r1c2 difference 3
pair-2: pair r2c3-r3c3 difference 2
pair-3: pair r3c4-r3c5 difference 5
pair-4: pair r1c6-r2c6 difference 7
pair-5: pair r1c8-r1c9 difference 7
pair-6: pair r3c9-r4c9 difference 3
pair-7: pair r6c6-r6c7 difference 5
pair-8: pair r5c1-r6c1 difference 2
pair-9: pair r8c1-r8c2 difference 5
pair-10: pair r7c4-r8c4 difference 7
pair-11: pair r8c7-r8c8 difference 6
pair-12: pair r7c9-r8c9 difference 6
whispers-1: whispers r4c2-r5c2-r6c2-r6c3 gap 5
whispers-2: whispers r6c4-r6c5-r5c5-r5c6 gap 5
whispers-3: whispers r4c6-r4c7-r4c8 gap 5
whispers-4: whispers r4c7-r5c7 gap 5
whispers-5: whispers r9c3-r9c4-r9c5-r9c6-r9c7 gap 5
whispers-6: whispers r4c3-r5c3-r5c4-r4c4 gap 5 loop true
```

```drawing
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[2],"label":"26","color":"#0000","labelColor":"#6b88f2ff"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[18],"label":"24","color":"#0000","labelColor":"#6b88f2ff"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[13],"label":"25","color":"#0000","labelColor":"#6b88f2ff"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[6],"label":"35","color":"#0000","labelColor":"#6b88f2ff"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[17],"label":"16","color":"#0000","labelColor":"#6b88f2ff"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[31],"label":"25","color":"#0000","labelColor":"#6b88f2ff"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[44],"label":"26","color":"#0000","labelColor":"#6b88f2ff"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[54],"label":"28","color":"#0000","labelColor":"#6b88f2ff"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[65],"label":"29","color":"#0000","labelColor":"#6b88f2ff"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[58],"label":"15","color":"#0000","labelColor":"#6b88f2ff"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[60],"label":"28","color":"#0000","labelColor":"#6b88f2ff"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[80],"label":"23","color":"#0000","labelColor":"#6b88f2ff"}}
```

Normal sudoku rules apply.

Adjacent digits along green lines differ by at least 5.

Cells separated by a dot contain digits that differ by the amount shown.

One each of the twelve standard pentominoes (no repeats by rotation or reflection) must be placed into the grid. Each pentomino touches exactly two "difference" dots and no pentomino enters a cell with a green line. 

The arrangement of pentominoes must be deduced.

Once placed, each pentomino behaves like a 5-cell killer cage: digits do not repeat and must sum to the value listed in one of the pentomino's cells.

Illustrated Pentominoes at:
https://tinyurl.com/pent-labels
