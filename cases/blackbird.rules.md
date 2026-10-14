---
format: open-rules
title: Blackbird
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/6o1ngdyztk
case: https://sudoku-sleuth.com/cases/blackbird
library: https://rules.sudoku-sleuth.com/
status: read
exported: d895a813523e09da9c94ba89a8f24734
---

```rules
sudoku 9x9
kropki-1: kropki r5c7-r5c8 white
kropki-2: kropki r5c6-r5c7 white
kropki-3: kropki r6c2-r7c2 white
kropki-4: kropki r8c2-r8c3 white
kropki-5: kropki r1c3-r1c4 white
kropki-6: kropki r3c3-r3c4 white
kropki-7: kropki r6c7-r7c7 white
kropki-8: kropki r7c1-r8c1 black
kropki-9: kropki r6c6-r6c7 black
kropki-10: kropki r4c6-r4c7 black
kropki-11: kropki r3c1-r4c1 black
kropki-12: kropki r1c8-r1c9 black
whispers-1: whispers r3c1-r2c1-r1c1-r1c2-r1c3-r2c2-r3c3-r3c2 gap 5
whispers-2: whispers r3c7-r2c7-r1c8-r2c9-r3c9 gap 5
whispers-3: whispers r1c4-r2c4-r3c4-r3c5 gap 5
whispers-4: whispers r2c8-r2c7 gap 5
whispers-5: whispers r4c3-r4c2-r5c2-r5c3 gap 5
whispers-6: whispers r4c5-r5c5-r6c5 gap 5
whispers-7: whispers r5c6-r5c5-r6c6 gap 5
whispers-8: whispers r4c8-r5c8-r6c8-r6c9-r5c9 gap 5
whispers-9: whispers r5c9-r5c8 gap 5
whispers-10: whispers r8c1-r9c1 gap 5
whispers-11: whispers r7c7-r8c7-r9c7-r9c6-r8c6 gap 5
whispers-12: whispers r8c6-r8c7 gap 5
whispers-13: whispers r8c4-r8c3-r9c3 gap 5
```

**Sudoku, German Whispers, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
