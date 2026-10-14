---
format: open-rules
title: Get Back
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/k14qucv328
case: https://sudoku-sleuth.com/cases/get-back
library: https://rules.sudoku-sleuth.com/
status: read
exported: ee1848970da39c2e3e81899287e63282
---

```rules
sudoku 9x9
kropki-1: kropki r6c8-r6c9 white
kropki-2: kropki r8c5-r8c6 white
kropki-3: kropki r8c1-r9c1 white
kropki-4: kropki r7c1-r8c1 white
kropki-5: kropki r4c7-r4c8 black
kropki-6: kropki r4c8-r4c9 black
kropki-7: kropki r4c1-r4c2 black
kropki-8: kropki r8c3-r9c3 black
kropki-9: kropki r3c1-r3c2 black
kropki-10: kropki r1c4-r2c4 black
kropki-11: kropki r1c6-r1c7 black
kropki-12: kropki r5c9-r6c9 black
whispers-1: whispers r2c6-r2c7-r2c8-r2c9-r3c9-r4c9-r5c9-r5c8-r5c7-r4c6-r4c7 gap 5
whispers-2: whispers r3c3-r3c4-r3c5 gap 5
whispers-3: whispers r5c5-r6c5-r7c5-r7c4 gap 5
whispers-4: whispers r7c3-r7c4 gap 5
whispers-5: whispers r5c3-r5c4-r5c5-r4c5-r3c5 gap 5
whispers-6: whispers r6c1-r6c2-r6c3 gap 5
whispers-7: whispers r9c2-r8c2-r7c2-r6c2 gap 5
```

**Standard Sudoku, German Whispers, Kropki Pairs**
- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
