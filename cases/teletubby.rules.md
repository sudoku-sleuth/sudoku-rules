---
format: open-rules
title: Teletubby
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/yqoolvbo3l
case: https://sudoku-sleuth.com/cases/teletubby
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r7c5-r8c5 colour "white"
kropki-2: kropki r3c5-r4c5 colour "white"
kropki-3: kropki r6c2-r6c3 colour "black"
kropki-4: kropki r5c2-r5c3 colour "black"
kropki-5: kropki r4c2-r4c3 colour "black"
kropki-6: kropki r4c7-r4c8 colour "black"
kropki-7: kropki r5c7-r5c8 colour "black"
kropki-8: kropki r6c7-r6c8 colour "black"
kropki-9: kropki r2c4-r3c4 colour "black"
kropki-10: kropki r2c5-r3c5 colour "black"
kropki-11: kropki r2c6-r3c6 colour "black"
kropki-12: kropki r1c9-r2c9 colour "black"
kropki-13: kropki r8c6-r9c6 colour "black"
modular-1: modular r5c2-r4c2-r3c3-r3c4-r3c5-r3c6-r3c7-r4c8-r5c8-r6c8-r7c8-r8c7-r8c6-r8c5-r8c4-r8c3-r7c2-r6c2
modular-2: modular r6c2-r5c2-r4c2-r3c3-r3c4
modular-3: modular r6c3-r7c4-r7c5-r7c6-r6c7
modular-4: modular r1c3-r2c4-r2c5-r2c6-r1c7
modular-5: modular r6c1-r7c1-r8c2-r9c3-r9c4
modular-6: modular r9c7-r8c8-r7c9-r6c9
```

**Sudoku, Modular Lines, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
 - Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
