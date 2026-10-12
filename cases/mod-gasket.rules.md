---
format: open-rules
title: Mod Gasket
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/vk7r6dc2r1
case: https://sudoku-sleuth.com/cases/mod-gasket
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c9=8
---

```rules
sudoku 9x9
kropki-1: kropki r9c6-r9c7 colour "white"
kropki-2: kropki r6c9-r7c9 colour "white"
kropki-3: kropki r4c9-r5c9 colour "white"
kropki-4: kropki r5c9-r6c9 colour "white"
kropki-5: kropki r1c5-r1c6 colour "white"
kropki-6: kropki r1c4-r1c5 colour "white"
kropki-7: kropki r1c2-r1c3 colour "white"
kropki-8: kropki r5c1-r6c1 colour "white"
kropki-9: kropki r2c1-r3c1 colour "black"
kropki-10: kropki r4c1-r5c1 colour "black"
kropki-11: kropki r9c4-r9c5 colour "black"
kropki-12: kropki r9c5-r9c6 colour "black"
kropki-13: kropki r7c9-r8c9 colour "black"
modular-1: modular r9c4-r8c4-r7c3-r6c2-r6c1-r5c1-r4c1-r4c2-r3c3-r2c4-r1c4
modular-2: modular r1c6-r2c6-r3c7-r4c8-r4c9-r5c9-r6c9-r6c8-r7c7-r8c6-r9c6
modular-3: modular r9c7-r9c8-r9c9-r8c9-r7c9
modular-4: modular r3c1-r2c1-r1c1-r1c2-r1c3
modular-5: modular r6c4-r5c4-r4c4-r4c5-r4c6-r5c6-r6c6-r6c5-r5c5
```

**Sudoku, Modular Lines, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
 - Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
