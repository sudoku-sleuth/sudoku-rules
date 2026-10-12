---
format: open-rules
title: The One True Miracle
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/onramfm57m
case: https://sudoku-sleuth.com/cases/the-one-true-miracle
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c7=4 r2c3=6 r3c8=5 r5c1=9 r5c4=8 r6c3=4 r7c5=7 r8c2=5 r8c7=6
---

```rules
sudoku 9x9
sandwich-1: sandwich r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 sum 33
sandwich-2: sandwich r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9 sum 32
sandwich-3: sandwich r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 sum 32
sandwich-4: sandwich r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 sum 3
sandwich-5: sandwich r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9 sum 3
sandwich-6: sandwich r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8 sum 6
sandwich-7: sandwich r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 sum 31
sandwich-8: sandwich r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4 sum 6
scoped-move-1: scoped-move move "knight" relation "same" digits [1]
scoped-move-2: scoped-move move "king" relation "same" digits [1]
scoped-move-3: scoped-move move "orthogonal" relation "consecutive" digits [1]
```

- Normal sudoku rules apply.
- The digit 1 (and ONLY the digit 1) is subject to antiknight, antiking, and nonconsecutive constraints. That is, cells that are a chess knight's move away from a 1 cannot contain the digit 1. Cells that are chess king's move away from a 1 cannot contain the digit 1. Cells that are orthogonally adjacent to a 1 cannot contain the digit 2.
- Sandwiches: Clues outside the grid give the sum of the digits appearing between the 1 and the 9 in that row or column.
