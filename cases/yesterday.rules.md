---
format: open-rules
title: Yesterday
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/9w35fq9ln6
case: https://sudoku-sleuth.com/cases/yesterday
library: https://rules.sudoku-sleuth.com/
status: read
exported: 8cfd9d1ed978c28693a34b68557dd99e
---

```rules
sudoku 9x9
kropki-1: kropki r2c6-r3c6 black
kropki-2: kropki r5c8-r6c8 black
kropki-3: kropki r5c2-r6c2 black
kropki-4: kropki r1c2-r1c3 black
kropki-5: kropki r2c5-r3c5 white
kropki-6: kropki r7c4-r7c5 white
kropki-7: kropki r1c4-r2c4 white
kropki-8: kropki r1c3-r1c4 white
kropki-9: kropki r3c5-r3c6 white
kropki-10: kropki r3c6-r3c7 white
kropki-11: kropki r3c3-r4c3 white
kropki-12: kropki r4c3-r5c3 white
kropki-13: kropki r8c3-r9c3 white
kropki-14: kropki r2c5-r2c6 white
whispers-1: whispers r1c1-r2c2-r3c1 gap 4
whispers-2: whispers r2c2-r1c3 gap 4
whispers-3: whispers r3c5-r3c4-r2c5-r2c4-r3c4 gap 4
whispers-4: whispers r1c8-r1c7-r2c7-r2c8-r3c8-r3c7 gap 4
whispers-5: whispers r4c1-r5c1-r6c1-r6c2 gap 4
whispers-6: whispers r5c1-r5c2 gap 4
whispers-7: whispers r6c6-r6c5-r5c6-r5c5-r6c5 gap 4
whispers-8: whispers r6c8-r5c8-r5c9 gap 4
whispers-9: whispers r7c2-r8c2-r9c2-r9c1-r8c1-r8c2 gap 4
whispers-10: whispers r9c6-r8c5-r8c4-r9c4-r9c5 gap 4
whispers-11: whispers r7c8-r8c8-r8c9-r9c9-r9c8 gap 4
whispers-12: whispers r8c9-r7c9 gap 4
```

**Sudoku, Dutch Whispers, Kropki pairs**
- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Dutch Whispers: Adjacent digits along a Dutch Whispers line must differ by at least four.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
