---
format: open-rules
title: Miichi
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/nvwvcppbzf
case: https://sudoku-sleuth.com/cases/miichi
library: https://rules.sudoku-sleuth.com/
status: read
exported: 45ede59f0ff1f03cc16485895a9a0d31
---

```rules
sudoku 9x9
kropki-1: kropki r1c5-r2c5 white
kropki-2: kropki r1c8-r2c8 white
kropki-3: kropki r5c8-r6c8 white
kropki-4: kropki r8c4-r8c5 white
kropki-5: kropki r8c2-r8c3 white
kropki-6: kropki r2c2-r3c2 black
kropki-7: kropki r3c1-r4c1 black
kropki-8: kropki r6c1-r7c1 black
kropki-9: kropki r7c1-r8c1 black
kropki-10: kropki r7c3-r8c3 black
kropki-11: kropki r1c3-r1c4 black
kropki-12: kropki r1c5-r1c6 black
kropki-13: kropki r1c7-r2c7 black
kropki-14: kropki r9c4-r9c5 black
kropki-15: kropki r9c5-r9c6 black
kropki-16: kropki r5c9-r6c9 black
kropki-17: kropki r3c5-r3c6 black
whispers-1: whispers r3c1-r2c1-r1c1-r2c2-r1c3-r2c3-r3c3 gap 5
whispers-2: whispers r2c5-r3c5 gap 5
whispers-3: whispers r2c8-r3c8 gap 5
whispers-4: whispers r6c3-r6c2-r7c2-r7c3 gap 5
whispers-5: whispers r5c5-r6c5-r7c5 gap 5
whispers-6: whispers r7c6-r6c6-r6c5 gap 5
whispers-7: whispers r6c8-r7c8 gap 5
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
