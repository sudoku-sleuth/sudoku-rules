---
format: open-rules
title: Magic Square Madness
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/magic-square-madness
library: https://rules.sudoku-sleuth.com/
status: read
exported: 8c1895396026d2fdc04e5fb85da1d67b
---

```rules
sudoku 9x9
cage-1: cage r9c5-r9c6 total 11 connected true
cage-2: cage r4c9-r5c9 total 13 connected true
cage-3: cage r1c4-r1c5 total 9 connected true
cage-4: cage r5c1-r6c1 total 7 connected true
```

Normal Sudoku rules apply. A 3x3 magic square has all three horizontal rows, all three vertical columns and both major diagonals each sum to 15. There are six magic squares in this puzzle. Five of them are in continuous 3x3 areas that the solver must find. The sixth magic square only contains the CENTER CELL of each of the nine standard 3x3 sudoku boxes. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. All numbers in cages are part of continuous magic squares.
