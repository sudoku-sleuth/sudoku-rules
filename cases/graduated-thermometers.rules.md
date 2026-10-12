---
format: open-rules
title: Graduated Thermometers
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/rqzttbhs05
case: https://sudoku-sleuth.com/cases/graduated-thermometers
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c2=2 r4c3=8 r5c6=5 r6c7=2 r6c8=5
---

```rules
sudoku 9x9
thermo-1: thermo r3c2-r3c1-r2c1-r1c1-r1c2
thermo-2: thermo r1c4-r2c4-r3c4-r2c5-r3c6-r2c6-r1c6
thermo-3: thermo r1c9-r1c8-r2c8-r3c8-r3c9
thermo-4: thermo r9c3-r8c3-r7c3-r7c4-r7c5-r8c4-r9c5-r9c4
thermo-5: thermo r9c6-r8c6-r7c7-r8c8-r9c8-r8c7
kropki-1: kropki r1c1-r1c2 colour "white"
kropki-2: kropki r2c1-r3c1 colour "white"
kropki-3: kropki r3c1-r3c2 colour "white"
kropki-4: kropki r9c4-r9c5 colour "white"
kropki-5: kropki r5c7-r5c8 colour "white"
```

**Standard Sudoku, Thermometers, Consecutive Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits along grey thermos strictly increase from bulb to tip.
- Consecutive Pairs: Digits separated by white dots are consecutive.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
