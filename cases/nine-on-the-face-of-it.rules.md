---
format: open-rules
title: Nine On The Face Of It
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/nine-on-the-face-of-it
case: https://sudoku-sleuth.com/cases/nine-on-the-face-of-it
library: https://rules.sudoku-sleuth.com/
status: read
exported: 4e94effa24fb7ab3330f8387ec959623
---

```rules
sudoku 9x9
thermo-1: thermo r3c1-r2c1-r1c2-r1c3
thermo-2: thermo r1c7-r1c8-r2c9-r3c9
thermo-3: thermo r9c3-r9c2-r8c1-r7c1
thermo-4: thermo r7c9-r8c9-r9c8-r9c7
thermo-5: thermo r6c1-r7c2-r8c3-r9c4
thermo-6: thermo r1c6-r2c7-r3c8-r4c9
thermo-7: thermo r5c5-r5c4-r5c3
thermo-8: thermo r5c5-r4c5-r3c5
thermo-9: thermo r6c9-r7c8-r8c7
little-killer-1: little-killer r2c1-r1c2 sum 5
little-killer-2: little-killer r1c8-r2c9 sum 5
little-killer-3: little-killer r8c9-r9c8 sum 5
little-killer-4: little-killer r9c2-r8c1 sum 5
little-killer-5: little-killer r3c1-r2c2-r1c3 sum 10
little-killer-6: little-killer r1c7-r2c8-r3c9 sum 11
little-killer-7: little-killer r7c9-r8c8-r9c7 sum 10
little-killer-8: little-killer r9c3-r8c2-r7c1 sum 11
little-killer-9: little-killer r4c1-r3c2-r2c3-r1c4 sum 30
little-killer-10: little-killer r1c5-r2c6-r3c7-r4c8-r5c9 sum 22
little-killer-11: little-killer r9c4-r8c3-r7c2-r6c1 sum 30
little-killer-12: little-killer r1c6-r2c7-r3c8-r4c9 sum 24
```

**Sudoku, Thermometers, Diagonal Sums**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.
- Diagonal Sums: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.


For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
