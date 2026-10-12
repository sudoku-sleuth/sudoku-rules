---
format: open-rules
title: Gentle Arrows and Dots
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/arunjgmvqx
case: https://sudoku-sleuth.com/cases/gentle-arrows-and-dots
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c5=4 r5c1=1 r7c7=3
---

```rules
sudoku 9x9
kropki-1: kropki r1c3-r2c3 colour "black"
kropki-2: kropki r8c4-r9c4 colour "black"
kropki-3: kropki r7c8-r7c9 colour "black"
kropki-4: kropki r6c5-r6c6 colour "black"
kropki-5: kropki r2c6-r3c6 colour "black"
arrow-1: arrow r2c2-r3c2-r4c2 bulb ["r1c3"]
arrow-2: arrow r2c4-r3c4-r4c4 bulb ["r1c3"]
arrow-3: arrow r8c3-r7c3-r6c3 bulb ["r9c4"]
arrow-4: arrow r8c5-r7c5-r6c5 bulb ["r9c4"]
arrow-5: arrow r2c8-r2c7-r2c6 bulb ["r3c9"]
arrow-6: arrow r6c8-r6c7-r6c6 bulb ["r7c9"]
arrow-7: arrow r8c1-r9c1 bulb ["r7c1"]
arrow-8: arrow r4c8-r4c9 bulb ["r4c7"]
```

**Sudoku, Arrows, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the value in the circle from which the arrow emerges.
- Ratio pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Not all dots are necessarily given.

To get a weekly digest of puzzles, please join our mailing list at https://missingdeck.net/mailing.html
