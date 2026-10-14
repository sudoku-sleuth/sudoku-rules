---
format: open-rules
title: Holes
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/n1hwclt759
case: https://sudoku-sleuth.com/cases/holes
library: https://rules.sudoku-sleuth.com/
status: read
exported: a5fbd26819cf441539ff479018362a2a
---

```rules
sudoku 9x9
kropki-1: kropki r3c6-r3c7 white
kropki-2: kropki r5c7-r5c8 white
kropki-3: kropki r3c3-r4c3 white
kropki-4: kropki r7c6-r8c6 white
kropki-5: kropki r1c1-r1c2 black
kropki-6: kropki r3c2-r3c3 black
kropki-7: kropki r3c1-r4c1 black
kropki-8: kropki r6c1-r7c1 black
kropki-9: kropki r1c9-r2c9 black
kropki-10: kropki r1c6-r2c6 black
kropki-11: kropki r7c2-r7c3 black
kropki-12: kropki r9c3-r9c4 black
kropki-13: kropki r4c8-r4c9 black
kropki-14: kropki r6c8-r7c8 black
kropki-15: kropki r7c8-r8c8 black
kropki-16: kropki r2c5-r2c6 black
modular-1: modular r1c1-r1c2-r1c3-r2c3
modular-2: modular r3c3-r3c2-r3c1-r2c1
modular-3: modular r4c1-r5c1-r6c1-r6c2
modular-4: modular r6c3-r5c3-r4c3-r4c2
modular-5: modular r9c1-r8c1-r7c1-r7c2
modular-6: modular r9c2-r9c3-r8c3-r7c3
modular-7: modular r8c4-r7c4-r7c5-r7c6
modular-8: modular r9c4-r9c5-r9c6-r8c6
modular-9: modular r7c7-r8c7-r9c7-r9c8
modular-10: modular r7c8-r7c9-r8c9-r9c9
modular-11: modular r6c9-r6c8-r6c7-r5c7
modular-12: modular r4c7-r4c8-r4c9-r5c9
modular-13: modular r1c4-r2c4-r3c4-r3c5
modular-14: modular r1c5-r1c6-r2c6-r3c6
modular-15: modular r3c7-r3c8-r3c9-r2c9
modular-16: modular r1c9-r1c8-r1c7-r2c7
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
