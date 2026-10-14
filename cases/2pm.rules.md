---
format: open-rules
title: 2PM
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/5lnq7trw5g
case: https://sudoku-sleuth.com/cases/2pm
library: https://rules.sudoku-sleuth.com/
status: read
exported: 703eae67c9553bd22e608d1c9079674b
---

```rules
sudoku 9x9
kropki-1: kropki r6c5-r6c6 white
kropki-2: kropki r8c1-r9c1 white
kropki-3: kropki r6c3-r7c3 white
kropki-4: kropki r4c2-r5c2 white
kropki-5: kropki r3c3-r4c3 white
kropki-6: kropki r1c3-r2c3 black
kropki-7: kropki r2c2-r3c2 black
kropki-8: kropki r8c8-r9c8 black
kropki-9: kropki r5c2-r6c2 black
kropki-10: kropki r5c8-r6c8 black
kropki-11: kropki r2c7-r3c7 black
kropki-12: kropki r1c6-r2c6 black
kropki-13: kropki r4c6-r5c6 black
kropki-14: kropki r5c1-r6c1 black
kropki-15: kropki r7c1-r8c1 black
kropki-16: kropki r9c3-r9c4 black
kropki-17: kropki r9c7-r9c8 black
kropki-18: kropki r2c5-r3c5 black
whispers-1: whispers r6c4-r5c4-r4c4-r4c5-r5c5 gap 5
whispers-2: whispers r5c5-r5c4 gap 5
whispers-3: whispers r9c7-r8c7-r7c7-r8c8-r7c9-r8c9-r9c9 gap 5
whispers-4: whispers r2c1-r1c2-r2c3-r2c2-r3c1-r3c2-r3c3 gap 5
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
 -Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
