---
format: open-rules
title: The Sum Is Hot Today
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/vqtmw94lse
case: https://sudoku-sleuth.com/cases/the-sum-is-hot-today
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c2=2
---

```rules
sudoku 9x9
thermo-1: thermo r4c1-r3c1-r2c2-r1c3-r1c4
thermo-2: thermo r1c6-r1c7-r2c8-r3c9-r4c9
thermo-3: thermo r6c9-r7c9-r8c8-r9c7-r9c6
thermo-4: thermo r9c4-r9c3-r8c2-r7c1-r6c1
thermo-5: thermo r3c6-r3c5-r3c4
thermo-6: thermo r4c3-r5c3-r6c3
thermo-7: thermo r6c7-r5c7-r4c7
thermo-8: thermo r7c2-r6c2-r5c2
thermo-9: thermo r5c8-r6c8-r7c8
thermo-10: thermo r5c4-r6c5-r5c6
thermo-11: thermo r8c4-r7c4-r6c4
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 9
little-killer-2: little-killer r1c7-r2c8-r3c9 sum 11
little-killer-3: little-killer r7c9-r8c8-r9c7 sum 9
little-killer-4: little-killer r9c3-r8c2-r7c1 sum 13
little-killer-5: little-killer r8c9-r9c8 sum 11
little-killer-6: little-killer r9c2-r8c1 sum 11
little-killer-7: little-killer r2c1-r1c2 sum 11
little-killer-8: little-killer r1c8-r2c9 sum 17
little-killer-9: little-killer r1c6-r2c7-r3c8-r4c9 sum 15
little-killer-10: little-killer r4c1-r3c2-r2c3-r1c4 sum 19
little-killer-11: little-killer r9c4-r8c3-r7c2-r6c1 sum 20
little-killer-12: little-killer r6c9-r7c8-r8c7-r9c6 sum 15
```

**Sudoku, Thermometers, Diagonal Sums**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on thermometers strictly increase from bulb to tip.
- Diagonal Sums: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
