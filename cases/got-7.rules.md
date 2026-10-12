---
format: open-rules
title: Got 7
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/5s34p7hl92
case: https://sudoku-sleuth.com/cases/got-7
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r1c4-r2c4 colour "white"
kropki-2: kropki r2c4-r3c4 colour "white"
kropki-3: kropki r4c1-r5c1 colour "white"
kropki-4: kropki r5c1-r6c1 colour "white"
kropki-5: kropki r7c1-r8c1 colour "white"
kropki-6: kropki r8c1-r9c1 colour "white"
kropki-7: kropki r5c6-r5c7 colour "white"
kropki-8: kropki r5c3-r5c4 colour "white"
kropki-9: kropki r4c2-r4c3 colour "white"
kropki-10: kropki r6c3-r6c4 colour "white"
kropki-11: kropki r9c3-r9c4 colour "white"
kropki-12: kropki r8c5-r8c6 colour "white"
kropki-13: kropki r2c2-r2c3 colour "black"
kropki-14: kropki r3c5-r3c6 colour "black"
kropki-15: kropki r5c4-r5c5 colour "black"
kropki-16: kropki r1c8-r1c9 colour "black"
kropki-17: kropki r2c7-r3c7 colour "black"
kropki-18: kropki r5c1-r5c2 colour "black"
kropki-19: kropki r6c7-r7c7 colour "black"
kropki-20: kropki r7c8-r8c8 colour "black"
whispers-1: whispers r2c2-r2c3-r3c3-r3c2-r3c1-r2c1-r1c1-r1c2-r1c3 gap 4
whispers-2: whispers r2c6-r2c5-r3c5-r3c6 gap 4 loop true
whispers-3: whispers r1c8-r2c8-r3c8-r3c9 gap 4
whispers-4: whispers r2c9-r2c8 gap 4
whispers-5: whispers r5c4-r5c5-r5c6-r6c6-r7c5-r8c4 gap 4
```

**Standard Sudoku, Dutch Whispers, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Dutch Whispers: Adjacent digits along an orange Dutch Whispers line must differ by at least four.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
