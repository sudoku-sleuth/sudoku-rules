---
format: open-rules
title: Tuning Forks
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/cov4bgmrne
case: https://sudoku-sleuth.com/cases/tuning-forks
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c8=8 r8c1=9
---

```rules
sudoku 9x9
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
kropki-1: kropki r7c8-r8c8 colour "white"
kropki-2: kropki r1c1-r2c1 colour "white"
kropki-3: kropki r6c4-r6c5 colour "white"
kropki-4: kropki r6c5-r6c6 colour "white"
kropki-5: kropki r7c1-r7c2 colour "white"
kropki-6: kropki r9c1-r9c2 colour "white"
kropki-7: kropki r8c2-r9c2 colour "black"
arrow-1: arrow r4c3-r5c4-r6c5 bulb ["r3c3"]
arrow-2: arrow r3c4-r4c5-r5c6 bulb ["r3c3"]
arrow-3: arrow r7c4-r8c3-r9c2 bulb ["r6c4"]
arrow-4: arrow r6c3-r7c2 bulb ["r6c4"]
arrow-5: arrow r4c7-r3c8-r2c9 bulb ["r4c6"]
arrow-6: arrow r3c6-r2c7 bulb ["r4c6"]
arrow-7: arrow r7c6-r8c7-r9c8 bulb ["r6c6"]
arrow-8: arrow r6c7-r7c8-r8c9 bulb ["r6c6"]
```

**Sudoku, Diagonal, Arrows, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Diagonal: Digits along marked diagonals cannot repeat.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.
