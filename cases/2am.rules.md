---
format: open-rules
title: 2AM
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/s1pnd84nkd
case: https://sudoku-sleuth.com/cases/2am
library: https://rules.sudoku-sleuth.com/
status: read
exported: 3672edac6d5f7d69b73afd6628089748
---

```rules
sudoku 9x9
kropki-1: kropki r7c1-r8c1 white
kropki-2: kropki r5c9-r6c9 white
kropki-3: kropki r2c9-r3c9 white
kropki-4: kropki r1c5-r1c6 white
kropki-5: kropki r5c7-r6c7 white
kropki-6: kropki r3c7-r4c7 white
kropki-7: kropki r3c3-r4c3 white
kropki-8: kropki r6c3-r7c3 white
kropki-9: kropki r4c4-r5c4 black
kropki-10: kropki r6c5-r6c6 black
kropki-11: kropki r8c8-r9c8 black
kropki-12: kropki r2c3-r3c3 black
kropki-13: kropki r2c4-r3c4 black
kropki-14: kropki r2c5-r2c6 black
kropki-15: kropki r1c6-r1c7 black
kropki-16: kropki r3c1-r4c1 black
kropki-17: kropki r4c1-r5c1 black
kropki-18: kropki r5c1-r6c1 black
whispers-1: whispers r2c1-r1c2-r2c3-r2c2-r3c1-r3c2-r3c3 gap 5
whispers-2: whispers r6c4-r5c4-r4c5-r5c6-r6c6 gap 5
whispers-3: whispers r5c4-r5c5-r5c6 gap 5
whispers-4: whispers r9c7-r8c7-r7c7-r8c8-r7c9-r8c9-r9c9 gap 5
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
