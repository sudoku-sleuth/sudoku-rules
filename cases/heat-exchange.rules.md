---
format: open-rules
title: Heat Exchange
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/heat-exchange
case: https://sudoku-sleuth.com/cases/heat-exchange
library: https://rules.sudoku-sleuth.com/
status: read
exported: 30804697de70f5f0e51722418096e164
---

```rules
sudoku 9x9
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
thermo-1: thermo r5c6-r4c6-r3c7-r2c8-r1c9
thermo-2: thermo r5c4-r6c4-r7c3-r8c2
thermo-3: thermo r2c2-r3c3-r4c4-r4c5
thermo-4: thermo r9c9-r8c8-r7c7-r6c6-r6c5
thermo-5: thermo r2c1-r3c2-r4c3-r4c2-r4c1
thermo-6: thermo r8c9-r7c8-r6c7-r6c8-r6c9
thermo-7: thermo r6c2-r6c3-r7c2-r8c1
thermo-8: thermo r4c8-r4c7-r3c8-r2c9
thermo-9: thermo r7c4-r8c5-r7c6
thermo-10: thermo r3c6-r2c5-r3c4
kropki-1: kropki r5c5-r5c6 black
kropki-2: kropki r8c5-r9c5 black
kropki-3: kropki r4c4-r5c4 black
```

**Sudoku, Diagonal, Thermometers, Ratio Dots**

- Standard sudoku rules apply: The digits 1 through 9 appear once each in every row, column, and box.
- Diagonal: Digits may not repeat along the marked diagonals.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.
- Ratio Dots: Digits in cells separated by a black dot are in a 1:2 ratio.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
