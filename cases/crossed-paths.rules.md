---
format: open-rules
title: Crossed Paths
setter: Blobz
source: https://sudokupad.app/22pfixrhp7
case: https://sudoku-sleuth.com/cases/crossed-paths
library: https://rules.sudoku-sleuth.com/
status: read
exported: 85e29cd2c1c47bf8cfd94d3251dbaca7
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3-r2c3 total 11 connected true
cage-2: cage r2c1-r3c1-r3c2 total 11 connected true
cage-3: cage r5c1-r6c1 total 12 connected true
cage-4: cage r4c3-r5c3 total 8 connected true
cage-5: cage r7c3-r7c4-r7c5 total 19 connected true
cage-6: cage r9c3-r9c4-r9c5 total 10 connected true
cage-7: cage r8c7-r9c7-r9c8 total 19 connected true
cage-8: cage r7c8-r7c9-r8c9 total 19 connected true
cage-9: cage r2c9-r3c9 total 14 connected true
cage-10: cage r3c5-r4c5-r4c6-r5c5 total 13 connected true
```

Normal sudoku rules apply.

Digits in cages do not repeat, and must sum to the small clue in the top left corner.

A path consisting of the digits 1 to 9, in order, crosses from left to right across the grid with each digit in its corresponding column (1 in column 1, 2 in column 2, etc.) The cells along the path are connected orthogonally or diagonally.

A similar path crosses the grid from top to bottom, starting with a 1 in row 1, then a 2 in row 2, ending with a 9 in row 9. Again, cells along the path are connected orthogonally or diagonally.

The paths (which do not share cells, nor appear in any cage) are to be determined by the solver.
