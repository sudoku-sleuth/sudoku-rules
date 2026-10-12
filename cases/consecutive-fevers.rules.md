---
format: open-rules
title: Consecutive Fevers
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/55rqklpk8r
case: https://sudoku-sleuth.com/cases/consecutive-fevers
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r3c2-r2c1-r1c2-r2c3-r3c4-r2c5
thermo-2: thermo r7c8-r8c9-r9c8-r8c7-r7c6-r8c5
thermo-3: thermo r6c2-r7c1-r8c2-r7c3-r6c4-r7c5
thermo-4: thermo r4c8-r3c9-r2c8-r3c7-r4c6-r3c5
kropki-1: kropki r2c3-r3c3 colour "white"
kropki-2: kropki r6c1-r6c2 colour "white"
kropki-3: kropki r6c1-r7c1 colour "white"
kropki-4: kropki r3c3-r3c4 colour "white"
kropki-5: kropki r7c5-r7c6 colour "white"
kropki-6: kropki r7c5-r8c5 colour "white"
kropki-7: kropki r4c7-r4c8 colour "white"
kropki-8: kropki r7c3-r7c4 colour "white"
kropki-9: kropki r2c2-r3c2 colour "white"
kropki-10: kropki r7c7-r7c8 colour "white"
kropki-11: kropki r5c4-r6c4 colour "white"
kropki-12: kropki r3c4-r4c4 colour "white"
kropki-13: kropki r4c5-r4c6 colour "white"
kropki-14: kropki r6c3-r7c3 colour "white"
kropki-15: kropki r9c2-r9c3 colour "white"
```

**Standard Sudoku, Thermometers, Consecutive Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits along grey thermos strictly increase from bulb to tip.
- Consecutive Pairs: Digits separated by white dots are consecutive.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
