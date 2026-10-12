---
format: open-rules
title: Rotisserie
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/v5t9tafeyr
case: https://sudoku-sleuth.com/cases/rotisserie
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c9=6 r7c7=1 r8c8=8 r9c1=4
---

```rules
sudoku 9x9
thermo-1: thermo r5c1-r4c1-r3c2-r2c3-r1c4-r2c5
thermo-2: thermo r1c5-r1c6-r2c7-r3c8-r4c9-r5c8
thermo-3: thermo r9c5-r9c4-r8c3-r7c2-r6c1-r5c2
thermo-4: thermo r5c9-r6c9-r7c8-r8c7-r9c6-r8c5
thermo-5: thermo r2c6-r3c7-r4c8
thermo-6: thermo r8c4-r7c3-r6c2
thermo-7: thermo r4c3-r3c4-r3c5
thermo-8: thermo r6c7-r7c6-r7c5
thermo-9: thermo r6c5-r5c6-r4c6
thermo-10: thermo r4c5-r5c4-r6c4
kropki-1: kropki r9c4-r9c5 colour "white"
kropki-2: kropki r4c1-r5c1 colour "white"
kropki-3: kropki r1c5-r1c6 colour "white"
kropki-4: kropki r8c3-r8c4 colour "white"
kropki-5: kropki r6c9-r7c9 colour "white"
```

**Standard Sudoku, Thermometers, Consecutive Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits along grey thermos strictly increase from bulb to tip.
- Consecutive Pairs: Digits separated by white dots are consecutive.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
