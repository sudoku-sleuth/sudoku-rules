---
format: open-rules
title: Parade Route
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/pv13yej245
case: https://sudoku-sleuth.com/cases/parade-route
library: https://rules.sudoku-sleuth.com/
status: read
exported: f8fe9409805ae3d5e65d7907320a68db
---

```rules
sudoku 9x9
kropki-1: kropki r2c8-r2c9 white
kropki-2: kropki r4c2-r5c2 white
kropki-3: kropki r5c2-r6c2 white
kropki-4: kropki r1c2-r2c2 white
kropki-5: kropki r7c5-r8c5 white
kropki-6: kropki r8c5-r9c5 white
kropki-7: kropki r8c3-r9c3 white
kropki-8: kropki r4c6-r5c6 white
kropki-9: kropki r4c7-r5c7 white
kropki-10: kropki r4c4-r5c4 white
kropki-11: kropki r2c5-r3c5 white
kropki-12: kropki r2c1-r2c2 black
kropki-13: kropki r2c7-r2c8 black
kropki-14: kropki r5c9-r6c9 black
kropki-15: kropki r7c8-r8c8 black
kropki-16: kropki r7c3-r8c3 black
kropki-17: kropki r7c5-r7c6 black
kropki-18: kropki r2c2-r3c2 black
modular r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9-r3c9-r4c9-r5c9-r5c8-r5c7-r5c6-r5c5-r5c4-r5c3-r5c2-r5c1-r6c1-r7c1-r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8
```

**Sudoku, Modular Lines, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
 - Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
