---
format: open-rules
title: Galaxy Minesweeper Sudoku
setter: Will Power
source: https://sudokupad.app/8u0pbls32w
case: https://sudoku-sleuth.com/cases/galaxy-minesweeper-sudoku
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r3c3=9 r3c9=1 r4c1=2 r4c9=8 r5c5=9 r5c7=4 r7c8=7 r8c1=7 r9c6=1
exported: 70e6c35eb2232f407ed8e99a4a5b76c5
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-36","rules":[],"visual":{"kind":"cage","cells":[77],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"cage","cells":[61],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"cage","cells":[35],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"cage","cells":[26],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"cage","cells":[20],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"cage","cells":[63],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"cage","cells":[42],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"cage","cells":[27],"color":"#000000","labelColor":"#000000"}}
```

Normal Sudoku rules apply.  
There are four paths (spiral arms) of orthogonally or diagonally adjacent cells that contain the digits from 1 to n, in ascending order. All paths end in the central 3x3 box in the cells with the 5, 6, 7 and 8. The paths are found by adding the TOTAL NUMBER OF PINK CELLS (mines) surrounding the cell, including itself.
The mines have no effect on the puzzle other than determining the 4 spiral arms.
