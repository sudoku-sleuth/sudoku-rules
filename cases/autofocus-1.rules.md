---
format: open-rules
title: Autofocus 1
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/metb05sdue
case: https://sudoku-sleuth.com/cases/autofocus-1
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r5c5-r6c5 colour "white"
kropki-2: kropki r5c1-r6c1 colour "white"
kropki-3: kropki r5c6-r5c7 colour "white"
kropki-4: kropki r2c1-r3c1 colour "black"
kropki-5: kropki r9c2-r9c3 colour "black"
kropki-6: kropki r7c9-r8c9 colour "black"
kropki-7: kropki r1c7-r1c8 colour "black"
kropki-8: kropki r3c8-r3c9 colour "black"
kropki-9: kropki r8c7-r9c7 colour "black"
kropki-10: kropki r7c1-r7c2 colour "black"
kropki-11: kropki r1c3-r2c3 colour "black"
kropki-12: kropki r4c2-r4c3 colour "black"
kropki-13: kropki r2c6-r3c6 colour "black"
kropki-14: kropki r6c7-r6c8 colour "black"
kropki-15: kropki r7c4-r8c4 colour "black"
kropki-16: kropki r4c5-r5c5 colour "black"
kropki-17: kropki r5c9-r6c9 colour "black"
kropki-18: kropki r1c4-r2c4 colour "black"
kropki-19: kropki r8c6-r9c6 colour "black"
modular-1: modular r4c1-r3c1-r2c1-r1c2-r1c3-r1c4
modular-2: modular r1c6-r1c7-r1c8-r2c9-r3c9-r4c9
modular-3: modular r6c9-r7c9-r8c9-r9c8-r9c7-r9c6
modular-4: modular r9c4-r9c3-r9c2-r8c1-r7c1-r6c1
modular-5: modular r4c2-r3c2-r2c3-r2c4
modular-6: modular r2c6-r2c7-r3c8-r4c8
modular-7: modular r8c6-r8c7-r7c8-r6c8
modular-8: modular r8c4-r8c3-r7c2-r6c2
modular-9: modular r5c2-r5c3-r5c4
modular-10: modular r2c5-r3c5-r4c5
modular-11: modular r5c6-r5c7-r5c8
modular-12: modular r6c5-r7c5-r8c5
```

**Standard Sudoku, Modular Lines, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
