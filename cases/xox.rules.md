---
format: open-rules
title: XoX
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/p7rt51zno3
case: https://sudoku-sleuth.com/cases/xox
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r2c8-r3c8 colour "white"
kropki-2: kropki r3c8-r4c8 colour "white"
kropki-3: kropki r8c2-r8c3 colour "white"
kropki-4: kropki r8c3-r8c4 colour "white"
kropki-5: kropki r5c4-r6c4 colour "white"
kropki-6: kropki r4c4-r5c4 colour "white"
kropki-7: kropki r4c4-r4c5 colour "white"
kropki-8: kropki r4c5-r4c6 colour "white"
kropki-9: kropki r9c8-r9c9 colour "white"
kropki-10: kropki r5c9-r6c9 colour "white"
kropki-11: kropki r3c9-r4c9 colour "white"
kropki-12: kropki r4c1-r4c2 colour "white"
kropki-13: kropki r4c2-r5c2 colour "white"
kropki-14: kropki r5c1-r6c1 colour "white"
kropki-15: kropki r7c2-r7c3 colour "white"
kropki-16: kropki r5c7-r5c8 colour "white"
kropki-17: kropki r3c7-r3c8 colour "black"
kropki-18: kropki r3c8-r3c9 colour "black"
kropki-19: kropki r7c3-r8c3 colour "black"
kropki-20: kropki r8c3-r9c3 colour "black"
kropki-21: kropki r4c5-r5c5 colour "black"
kropki-22: kropki r3c1-r3c2 colour "black"
kropki-23: kropki r1c1-r1c2 colour "black"
kropki-24: kropki r7c8-r7c9 colour "black"
kropki-25: kropki r6c1-r6c2 colour "black"
kropki-26: kropki r5c8-r6c8 colour "black"
kropki-27: kropki r2c4-r3c4 colour "black"
kropki-28: kropki r1c4-r2c4 colour "black"
whispers-1: whispers r1c1-r2c2-r3c3 gap 5
whispers-2: whispers r3c1-r2c2-r1c3 gap 5
whispers-3: whispers r7c7-r8c8-r9c9 gap 5
whispers-4: whispers r9c7-r8c8-r7c9 gap 5
whispers-5: whispers r5c6-r5c5-r6c5-r6c6 gap 5 loop true
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Usually shown as green lines, adjacent digits along a German Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
