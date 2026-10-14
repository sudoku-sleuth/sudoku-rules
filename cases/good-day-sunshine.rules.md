---
format: open-rules
title: Good Day Sunshine
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/u5jusaankq
case: https://sudoku-sleuth.com/cases/good-day-sunshine
library: https://rules.sudoku-sleuth.com/
status: read
exported: afc464359f479d4554e2ff7814d56a36
---

```rules
sudoku 9x9
kropki-1: kropki r7c8-r7c9 white
kropki-2: kropki r8c1-r9c1 white
kropki-3: kropki r7c1-r8c1 white
kropki-4: kropki r1c2-r1c3 white
kropki-5: kropki r3c1-r4c1 white
kropki-6: kropki r6c7-r7c7 white
kropki-7: kropki r1c1-r2c1 black
kropki-8: kropki r7c2-r7c3 black
kropki-9: kropki r3c5-r3c6 black
kropki-10: kropki r9c7-r9c8 black
kropki-11: kropki r6c7-r6c8 black
whispers-1: whispers r3c8-r2c7-r2c6-r3c5-r4c5-r5c6-r5c7-r4c8 gap 4 loop true
whispers-2: whispers r3c9-r3c8 gap 4
whispers-3: whispers r2c7-r1c7 gap 4
whispers-4: whispers r2c6-r1c6 gap 4
whispers-5: whispers r3c5-r3c4 gap 4
whispers-6: whispers r4c5-r4c4 gap 4
whispers-7: whispers r5c6-r6c6 gap 4
whispers-8: whispers r6c7-r5c7 gap 4
whispers-9: whispers r4c9-r4c8 gap 4
whispers-10: whispers r1c4-r2c5 gap 4
whispers-11: whispers r2c8-r1c9 gap 4
whispers-12: whispers r5c8-r6c9 gap 4
whispers-13: whispers r5c5-r6c4 gap 4
whispers-14: whispers r2c1-r1c1-r1c2-r2c2-r3c2-r3c1 gap 4
whispers-15: whispers r2c1-r2c2 gap 4
whispers-16: whispers r4c2-r4c1-r5c1-r5c2 gap 4 loop true
whispers-17: whispers r6c2-r6c1-r7c1-r7c2 gap 4 loop true
whispers-18: whispers r7c3-r8c3-r9c3-r9c2-r8c2 gap 4
whispers-19: whispers r8c2-r8c3 gap 4
whispers-20: whispers r7c5-r8c5-r9c5-r9c4-r8c4 gap 4
whispers-21: whispers r8c4-r8c5 gap 4
whispers-22: whispers r9c8-r8c7-r8c6-r9c6-r9c7 gap 4
whispers-23: whispers r7c8-r8c8-r8c9 gap 4
whispers-24: whispers r7c9-r8c9-r9c9-r9c8 gap 4
```

**Sudoku, Dutch Whispers, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Dutch Whispers: Adjacent digits along a Dutch Whispers line must differ by at least four.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
