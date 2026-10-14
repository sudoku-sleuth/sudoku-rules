---
format: open-rules
title: GAS Molecules
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/zlp8owh932
case: https://sudoku-sleuth.com/cases/gas-molecules
library: https://rules.sudoku-sleuth.com/
status: read
exported: 3ddcf77fe2a2f7462559ff8fee8c11ed
---

```rules
sudoku 9x9
kropki-1: kropki r5c1-r6c1 white
kropki-2: kropki r1c1-r1c2 white
kropki-3: kropki r6c1-r7c1 white
kropki-4: kropki r1c7-r1c8 white
kropki-5: kropki r1c8-r1c9 white
kropki-6: kropki r2c8-r2c9 white
kropki-7: kropki r5c5-r6c5 white
kropki-8: kropki r2c5-r3c5 white
kropki-9: kropki r3c4-r3c5 white
kropki-10: kropki r6c8-r6c9 white
kropki-11: kropki r2c1-r3c1 black
kropki-12: kropki r3c1-r4c1 black
kropki-13: kropki r4c1-r5c1 black
kropki-14: kropki r7c9-r8c9 black
kropki-15: kropki r6c9-r7c9 black
kropki-16: kropki r5c9-r6c9 black
kropki-17: kropki r1c2-r1c3 black
kropki-18: kropki r1c3-r1c4 black
kropki-19: kropki r1c4-r1c5 black
kropki-20: kropki r9c7-r9c8 black
kropki-21: kropki r9c6-r9c7 black
kropki-22: kropki r9c5-r9c6 black
kropki-23: kropki r5c3-r5c4 black
kropki-24: kropki r5c6-r5c7 black
kropki-25: kropki r3c5-r4c5 black
kropki-26: kropki r6c5-r7c5 black
kropki-27: kropki r6c4-r6c5 black
kropki-28: kropki r2c2-r3c2 black
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
