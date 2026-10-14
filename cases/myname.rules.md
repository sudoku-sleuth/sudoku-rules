---
format: open-rules
title: MYNAME
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/zqzieurqkp
case: https://sudoku-sleuth.com/cases/myname
library: https://rules.sudoku-sleuth.com/
status: read
exported: 936a1061a916d472a30727d404dc7fb1
---

```rules
sudoku 9x9
kropki-1: kropki r7c6-r7c7 white
kropki-2: kropki r8c6-r8c7 white
kropki-3: kropki r1c7-r2c7 white
kropki-4: kropki r2c7-r3c7 white
kropki-5: kropki r8c1-r8c2 white
kropki-6: kropki r7c2-r8c2 white
kropki-7: kropki r7c2-r7c3 white
kropki-8: kropki r4c5-r4c6 black
kropki-9: kropki r4c3-r5c3 black
kropki-10: kropki r6c8-r6c9 black
kropki-11: kropki r6c1-r7c1 black
kropki-12: kropki r7c4-r8c4 black
kropki-13: kropki r2c2-r3c2 black
kropki-14: kropki r9c5-r9c6 black
whispers-1: whispers r6c2-r5c2-r4c2-r5c3-r6c4-r5c4-r4c4 gap 5
whispers-2: whispers r5c8-r5c7-r5c6 gap 5
whispers-3: whispers r3c1-r2c1-r1c1-r2c2-r1c3-r2c3-r3c3 gap 5
whispers-4: whispers r1c5-r2c6-r3c6 gap 5
whispers-5: whispers r1c7-r2c6 gap 5
whispers-6: whispers r9c3-r8c3-r7c3-r8c4-r7c5-r8c5-r9c5 gap 5
whispers-7: whispers r6c6-r5c6-r4c7-r5c8-r6c8 gap 5
whispers-8: whispers r7c8-r8c7-r9c8 gap 5
whispers-9: whispers r8c8-r8c7 gap 5
```

** Sudoku, German Whispers, Kropki pairs **

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
