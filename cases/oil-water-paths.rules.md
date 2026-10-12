---
format: open-rules
title: Oil, Water, Paths
setter: Blobz
source: https://sudokupad.app/blobz/oil-water-paths
case: https://sudoku-sleuth.com/cases/oil-water-paths
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r2c2-r2c3 connected true
cage-2: cage r2c1-r3c1 connected true
cage-3: cage r4c1-r4c2 connected true
cage-4: cage r5c1-r6c1-r6c2 connected true
cage-5: cage r7c1-r7c2-r8c2 total 17 connected true
cage-6: cage r8c1-r9c1 connected true
cage-7: cage r7c3-r8c3-r9c3 connected true
cage-8: cage r5c4-r5c5-r6c4-r7c4-r8c4 connected true
cage-9: cage r8c5-r9c5 connected true
cage-10: cage r7c6-r8c6-r8c7-r8c8-r9c8 connected true
cage-11: cage r5c8-r6c7-r6c8-r7c8 connected true
cage-12: cage r3c9-r4c9-r5c9-r6c9 connected true
cage-13: cage r1c8-r2c7-r2c8 connected true
cage-14: cage r1c5-r2c5-r3c5 total 14 connected true
cage-15: cage r3c3-r4c3-r4c4-r4c5 connected true
cage-16: cage r4c6-r4c7-r5c6-r6c5-r6c6 connected true
layered-cage-1: layered-cage r1c2-r2c2-r2c3 upper [2,4,6,8]
layered-cage-2: layered-cage r2c1-r3c1 upper [2,4,6,8]
layered-cage-3: layered-cage r4c1-r4c2 upper [2,4,6,8]
layered-cage-4: layered-cage r5c1-r6c1-r6c2 upper [2,4,6,8]
layered-cage-5: layered-cage r7c1-r7c2-r8c2 upper [2,4,6,8]
layered-cage-6: layered-cage r8c1-r9c1 upper [2,4,6,8]
layered-cage-7: layered-cage r7c3-r8c3-r9c3 upper [2,4,6,8]
layered-cage-8: layered-cage r5c4-r5c5-r6c4-r7c4-r8c4 upper [2,4,6,8]
layered-cage-9: layered-cage r8c5-r9c5 upper [2,4,6,8]
layered-cage-10: layered-cage r7c6-r8c6-r8c7-r8c8-r9c8 upper [2,4,6,8]
layered-cage-11: layered-cage r5c8-r6c7-r6c8-r7c8 upper [2,4,6,8]
layered-cage-12: layered-cage r3c9-r4c9-r5c9-r6c9 upper [2,4,6,8]
layered-cage-13: layered-cage r1c8-r2c7-r2c8 upper [2,4,6,8]
layered-cage-14: layered-cage r1c5-r2c5-r3c5 upper [2,4,6,8]
layered-cage-15: layered-cage r3c3-r4c3-r4c4-r4c5 upper [2,4,6,8]
layered-cage-16: layered-cage r4c6-r4c7-r5c6-r6c5-r6c6 upper [2,4,6,8]
```

Normal sudoku rules apply.

Each cage is either full of "oil" (even digits), full of "water" (odd digits), or a mix of both. In all cases, each "row" within a cage is of just one type (oil or water). Oil floats on water, so even digits will always be in rows above odd digits in mixed cages.

Digits in cages do not repeat.

Digits in cages must sum to the small clue, if given.

A path consisting of the digits 1 to 9, in order, crosses from left to right across the grid with each digit in its corresponding column (1 in column 1, 2 in column 2, etc.) The cells along the path are connected orthogonally or diagonally. A similar path crosses the grid from top to bottom, starting with a 1 in row 1, then a 2 in row 2, ending with a 9 in row 9. Again, cells along the path are connected orthogonally or diagonally.

Each path oscillates inside/outside cages, such that all of one path's oil cells (but not water cells) are in cages, and all the other path's water cells (but not oil cells) are in cages. It is permissible for a path to exit and re-enter the same cage.

The two paths (which do not share cells) must be determined by the solver.
