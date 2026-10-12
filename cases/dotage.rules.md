---
format: open-rules
title: Dotage
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/vx4avu1oxy
case: https://sudoku-sleuth.com/cases/dotage
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r1c3-r1c4 colour "white"
kropki-2: kropki r2c3-r2c4 colour "white"
kropki-3: kropki r3c3-r3c4 colour "white"
kropki-4: kropki r7c6-r7c7 colour "white"
kropki-5: kropki r8c6-r8c7 colour "white"
kropki-6: kropki r7c3-r7c4 colour "white"
kropki-7: kropki r8c3-r8c4 colour "white"
kropki-8: kropki r9c8-r9c9 colour "white"
kropki-9: kropki r8c1-r8c2 colour "white"
kropki-10: kropki r3c6-r3c7 colour "white"
kropki-11: kropki r4c3-r4c4 colour "white"
kropki-12: kropki r3c5-r3c6 colour "white"
kropki-13: kropki r8c2-r8c3 colour "white"
kropki-14: kropki r7c2-r7c3 colour "white"
kropki-15: kropki r4c1-r4c2 colour "white"
kropki-16: kropki r8c7-r9c7 colour "white"
kropki-17: kropki r1c1-r1c2 colour "black"
kropki-18: kropki r2c2-r2c3 colour "black"
kropki-19: kropki r3c1-r3c2 colour "black"
kropki-20: kropki r4c2-r4c3 colour "black"
kropki-21: kropki r5c1-r5c2 colour "black"
kropki-22: kropki r6c2-r6c3 colour "black"
kropki-23: kropki r1c8-r1c9 colour "black"
kropki-24: kropki r2c7-r2c8 colour "black"
kropki-25: kropki r3c8-r3c9 colour "black"
kropki-26: kropki r4c7-r4c8 colour "black"
kropki-27: kropki r5c8-r5c9 colour "black"
kropki-28: kropki r6c7-r6c8 colour "black"
kropki-29: kropki r7c4-r7c5 colour "black"
kropki-30: kropki r8c5-r8c6 colour "black"
kropki-31: kropki r9c4-r9c5 colour "black"
kropki-32: kropki r6c5-r6c6 colour "black"
kropki-33: kropki r5c4-r5c5 colour "black"
kropki-34: kropki r4c5-r4c6 colour "black"
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Kropki Pairs: Digits separated by a black dot are in a 1:2 ratio. Digits separated by a white dot are consecutive. Not all dots are necessarily given.
