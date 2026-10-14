---
format: open-rules
title: Dotty Hot Spot
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/5c4djyvcyx
case: https://sudoku-sleuth.com/cases/dotty-hot-spot
library: https://rules.sudoku-sleuth.com/
status: read
exported: 274c7b9d4aa6ff313cd09a0dba565fb2
---

```rules
sudoku 9x9
thermo-1: thermo r1c1-r1c2-r1c3-r1c4-r1c5
thermo-2: thermo r2c8-r2c7-r2c6-r2c5-r2c4
thermo-3: thermo r9c5-r9c6-r9c7-r9c8-r9c9
thermo-4: thermo r8c6-r8c5-r8c4-r8c3-r8c2
thermo-5: thermo r7c1-r6c1-r5c1-r4c1-r3c1
thermo-6: thermo r3c9-r4c9-r5c9-r6c9-r7c9
thermo-7: thermo r2c3-r3c3-r4c3-r5c3-r6c3
thermo-8: thermo r8c7-r7c7-r6c7-r5c7-r4c7
kropki-1: kropki r1c4-r2c4 white
kropki-2: kropki r8c6-r9c6 white
kropki-3: kropki r3c4-r4c4 white
kropki-4: kropki r3c4-r3c5 white
kropki-5: kropki r3c5-r4c5 white
kropki-6: kropki r4c4-r4c5 white
kropki-7: kropki r5c6-r6c6 white
kropki-8: kropki r6c7-r7c7 black
kropki-9: kropki r8c1-r8c2 black
kropki-10: kropki r2c7-r3c7 black
kropki-11: kropki r5c2-r6c2 black
```

**Sudoku, Thermometers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermometers are strictly increasing from bulb (grey circle) to tip (along the grey line).
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
