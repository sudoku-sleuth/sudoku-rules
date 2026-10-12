---
format: open-rules
title: Swimming Against The Flow
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/nugxawkdxo
case: https://sudoku-sleuth.com/cases/swimming-against-the-flow
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r3c1-r2c2-r1c3-r2c4-r3c5-r2c6-r1c7
thermo-2: thermo r5c2-r4c3-r3c4-r4c5-r5c6-r4c7-r3c8
thermo-3: thermo r7c3-r6c4-r5c5-r6c6-r7c7-r6c8-r5c9
thermo-4: thermo r7c9-r8c8-r9c7-r8c6-r7c5-r8c4-r9c3
kropki-1: kropki r2c6-r3c6 colour "white"
kropki-2: kropki r1c2-r1c3 colour "white"
kropki-3: kropki r5c2-r5c3 colour "white"
kropki-4: kropki r7c1-r7c2 colour "white"
kropki-5: kropki r7c1-r8c1 colour "white"
kropki-6: kropki r8c5-r8c6 colour "white"
kropki-7: kropki r7c4-r7c5 colour "white"
kropki-8: kropki r4c3-r5c3 colour "white"
kropki-9: kropki r6c5-r7c5 colour "white"
```

**Sudoku, Thermometers, Consecutive Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.
- Consecutive Pairs: Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
