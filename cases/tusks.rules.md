---
format: open-rules
title: Tusks
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/kual7b1fms
case: https://sudoku-sleuth.com/cases/tusks
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r1c2-r2c3-r3c4-r4c4-r5c4
thermo-2: thermo r1c8-r2c7-r3c6-r4c6-r5c6
thermo-3: thermo r9c4-r8c4-r7c4-r6c3-r5c2
thermo-4: thermo r9c6-r8c6-r7c6-r6c7-r5c8
thermo-5: thermo r3c8-r4c8-r5c9-r6c9-r7c9
thermo-6: thermo r3c2-r4c2-r5c1-r6c1-r7c1
thermo-7: thermo r1c1-r2c1-r3c1
thermo-8: thermo r3c9-r2c9-r1c9
kropki-1: kropki r4c8-r5c8 colour "black"
kropki-2: kropki r4c2-r5c2 colour "black"
kropki-3: kropki r8c3-r9c3 colour "black"
kropki-4: kropki r8c7-r9c7 colour "black"
kropki-5: kropki r2c5-r3c5 colour "black"
kropki-6: kropki r2c3-r3c3 colour "black"
kropki-7: kropki r2c7-r3c7 colour "black"
kropki-8: kropki r1c1-r1c2 colour "black"
```

**Sudoku, Thermometers, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
- Ratio Pairs: Digits separated by a black dot are in a 1:2 ratio.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing
