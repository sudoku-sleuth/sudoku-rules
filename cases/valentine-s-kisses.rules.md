---
format: open-rules
title: Valentine's Kisses
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/wrb9w2awn4
case: https://sudoku-sleuth.com/cases/valentine-s-kisses
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c5=6
---

```rules
sudoku 9x9
cage-1: cage r1c2-r2c1-r2c2 total 6 connected true
cage-2: cage r1c4-r1c5-r1c6 total 13 connected true
cage-3: cage r1c8-r2c8-r2c9 total 24 connected true
cage-4: cage r4c9-r5c9-r6c9 total 18 connected true
cage-5: cage r8c8-r9c8-r9c9 total 23 connected true
cage-6: cage r6c4-r6c5-r6c6 total 14 connected true
cage-7: cage r7c6-r7c7-r8c6 total 12 connected true
cage-8: cage r7c3-r7c4-r8c4 total 22 connected true
cage-9: cage r8c2-r9c1-r9c2 total 7 connected true
cage-10: cage r4c1-r5c1-r6c1 total 13 connected true
renban-1: renban r2c2-r3c3-r4c4-r4c2-r2c4
renban-2: renban r3c4-r4c5-r3c6
renban-3: renban r2c6-r3c7-r4c8-r4c6-r2c8
renban-4: renban r4c3-r5c3
renban-5: renban r4c7-r5c7
renban-6: renban r5c2-r6c3-r7c4-r7c2-r5c4
renban-7: renban r5c6-r6c7-r7c8-r7c6-r5c8
renban-8: renban r8c4-r9c5-r8c6
```

- Normal sudoku rules apply.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Renban lines: Digits along a Renban line must form a set of non-repeating consecutive digits in any order. Each pair of intersecting lines in this puzzle forms a single 5-cell Renban.
