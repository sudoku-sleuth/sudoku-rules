---
format: open-rules
title: Back in the USSR
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/kixhuf7dwq
case: https://sudoku-sleuth.com/cases/back-in-the-ussr
library: https://rules.sudoku-sleuth.com/
status: read
exported: 7a86fa9b6af53cf468647b2575ffc48b
---

```rules
sudoku 9x9
kropki-1: kropki r1c8-r2c8 white
kropki-2: kropki r2c5-r2c6 white
kropki-3: kropki r8c2-r9c2 white
kropki-4: kropki r7c7-r8c7 white
kropki-5: kropki r1c3-r2c3 white
kropki-6: kropki r2c3-r2c4 white
kropki-7: kropki r3c4-r4c4 white
kropki-8: kropki r6c5-r7c5 white
kropki-9: kropki r5c4-r5c5 black
kropki-10: kropki r5c5-r5c6 black
kropki-11: kropki r4c6-r5c6 black
kropki-12: kropki r2c1-r3c1 black
kropki-13: kropki r1c5-r2c5 black
whispers-1: whispers r1c7-r2c7-r3c7-r3c8-r2c9-r1c9 gap 5
whispers-2: whispers r3c9-r2c9 gap 5
whispers-3: whispers r4c2-r4c3-r5c4-r5c3-r5c2-r6c3-r6c4 gap 5
whispers-4: whispers r9c3-r8c3-r7c3-r7c2-r7c1-r8c2-r9c1 gap 5
whispers-5: whispers r4c6-r4c7-r5c8-r5c7-r5c6-r6c7-r6c8 gap 5
```

** Sudoku, German Whispers, Kropki Pairs **

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
