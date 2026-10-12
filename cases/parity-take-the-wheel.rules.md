---
format: open-rules
title: Parity, Take The Wheel!
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/qxr1uvnwel
case: https://sudoku-sleuth.com/cases/parity-take-the-wheel
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c5=1 r5c4=4
---

```rules
sudoku 9x9
parity-1: parity r4c1-r3c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c7-r9c6
parity-2: parity r2c2-r1c3-r1c4
parity-3: parity r8c8-r7c9-r6c9
parity-4: parity r1c6-r1c7-r2c8-r3c9-r4c9
parity-5: parity r2c8-r3c7-r4c6
parity-6: parity r6c1-r7c1-r8c2-r9c3-r9c4
parity-7: parity r8c2-r7c3-r6c4
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 7
little-killer-2: little-killer r1c7-r2c8-r3c9 sum 8
little-killer-3: little-killer r9c3-r8c2-r7c1 sum 9
little-killer-4: little-killer r7c9-r8c8-r9c7 sum 9
little-killer-5: little-killer r8c1-r9c2 sum 11
little-killer-6: little-killer r2c9-r1c8 sum 9
little-killer-7: little-killer r1c2-r2c1 sum 12
little-killer-8: little-killer r9c8-r8c9 sum 12
little-killer-9: little-killer r1c4-r2c3-r3c2-r4c1 sum 25
```

**Sudoku, Parity Lines, Diagonal Sums**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Parity line: Digits along a parity line alternate odd/even.
- Diagonal Sums: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
