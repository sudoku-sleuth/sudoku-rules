---
format: open-rules
title: Skeleton Sight
setter: Blobz
source: https://sudokupad.app/p6u4woy2i6
case: https://sudoku-sleuth.com/cases/skeleton-sight
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: .....5.....3...5..2................5.2........3....2.....3...4...4..........4....
exported: 8bedd6637ec06b96af10f5d9e2311211
---

```rules
sudoku 9x9
kropki r5c3-r5c4 white
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[15],"label":"15","color":"#0000","labelColor":"#0000cc"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[5],"label":"18","color":"#0000","labelColor":"#0000cc"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[11],"label":"30","color":"#0000","labelColor":"#0000cc"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[18],"label":"29","color":"#0000","labelColor":"#0000cc"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[37],"label":"18","color":"#0000","labelColor":"#0000cc"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[46],"label":"32","color":"#0000","labelColor":"#0000cc"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[65],"label":"15","color":"#0000","labelColor":"#0000cc"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[57],"label":"20","color":"#0000","labelColor":"#0000cc"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[76],"label":"33","color":"#0000","labelColor":"#0000cc"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[61],"label":"34","color":"#0000","labelColor":"#0000cc"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[35],"label":"31","color":"#0000","labelColor":"#0000cc"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[51],"label":"26","color":"#0000","labelColor":"#0000cc"}}
```

Normal sudoku rules apply.

Digits separated by a white dot are consecutive; not all such dots are shown.

Shade some cells such that the resulting pattern is 90-degree rotationally symmetric. Four cells are already shaded. As an example, since r6c6 is shaded, then r6c4, r4c4, and r4c6 must also be shaded.

In the unshaded area of the grid, place one each of the twelve standard pentominoes (no repeats by rotation or reflection).

Each pentomino contains exactly one given digit. That digit indicates the number of cells of the pentomino that are "seen" orthogonally from that position (including itself).

The arrangement of pentominoes must be deduced.

Once placed, each pentomino behaves like a 5-cell killer cage: digits do not repeat and must sum to the value listed with the given digit.

Illustrated Pentominoes at:
https://tinyurl.com/pent-labels
