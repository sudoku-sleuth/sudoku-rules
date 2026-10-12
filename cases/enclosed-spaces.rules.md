---
format: open-rules
title: Enclosed Spaces
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/57vlye4586
case: https://sudoku-sleuth.com/cases/enclosed-spaces
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r5c1-r5c2-r4c3-r3c3-r2c3
thermo-2: thermo r5c1-r5c2-r6c3-r7c3-r8c3
thermo-3: thermo r1c9-r2c8-r3c8-r4c8
thermo-4: thermo r9c9-r8c8-r7c8-r6c8
thermo-5: thermo r9c9-r8c8-r8c7-r8c6-r8c5-r8c4
thermo-6: thermo r1c9-r2c8-r2c7-r2c6-r2c5-r2c4
thermo-7: thermo r9c9-r8c9-r7c9
thermo-8: thermo r1c9-r2c9-r3c9
thermo-9: thermo r1c9-r1c8-r1c7-r1c6-r1c5
thermo-10: thermo r4c5-r4c6-r5c6
thermo-11: thermo r6c5-r6c4-r5c4
kropki-1: kropki r5c8-r6c8 colour "white"
kropki-2: kropki r2c3-r2c4 colour "white"
kropki-3: kropki r4c8-r5c8 colour "white"
kropki-4: kropki r8c8-r8c9 colour "white"
kropki-5: kropki r8c3-r8c4 colour "white"
kropki-6: kropki r7c4-r7c5 colour "white"
kropki-7: kropki r6c5-r7c5 colour "white"
kropki-8: kropki r5c6-r6c6 colour "white"
kropki-9: kropki r5c4-r5c5 colour "white"
kropki-10: kropki r3c3-r4c3 colour "white"
kropki-11: kropki r6c1-r6c2 colour "white"
kropki-12: kropki r6c1-r7c1 colour "white"
```

**Sudoku, Thermometers, Consecutive Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.
- Consecutive Pairs: Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
