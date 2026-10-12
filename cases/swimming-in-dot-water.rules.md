---
format: open-rules
title: Swimming in Dot Water
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/m6p0dhav5d
case: https://sudoku-sleuth.com/cases/swimming-in-dot-water
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r3c2-r2c3-r3c4-r2c5-r3c6-r2c7
thermo-2: thermo r5c7-r4c6-r5c5-r4c4-r5c3-r4c2
thermo-3: thermo r7c3-r6c4-r7c5-r6c6-r7c7-r6c8
thermo-4: thermo r9c8-r8c7-r9c6-r8c5-r9c4-r8c3
thermo-5: thermo r4c1-r5c2-r6c1-r7c2-r8c1-r9c2
thermo-6: thermo r1c9-r2c8-r3c9-r4c8-r5c9
kropki-1: kropki r2c5-r2c6 colour "white"
kropki-2: kropki r7c8-r7c9 colour "white"
kropki-3: kropki r6c1-r7c1 colour "white"
kropki-4: kropki r5c1-r6c1 colour "white"
kropki-5: kropki r3c6-r4c6 colour "black"
kropki-6: kropki r3c4-r4c4 colour "black"
kropki-7: kropki r7c7-r8c7 colour "black"
kropki-8: kropki r7c5-r8c5 colour "black"
kropki-9: kropki r1c8-r2c8 colour "black"
kropki-10: kropki r5c1-r5c2 colour "black"
kropki-11: kropki r7c1-r7c2 colour "black"
kropki-12: kropki r5c9-r6c9 colour "black"
```

**Sudoku, Thermometers, Kropki pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermometers are strictly increasing from bulb (grey circle) to tip (along the grey line).
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
