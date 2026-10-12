---
format: open-rules
title: HALO
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/a1sm04xy2b
case: https://sudoku-sleuth.com/cases/halo
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r5c1-r5c2 colour "white"
kropki-2: kropki r4c4-r5c4 colour "white"
kropki-3: kropki r5c5-r5c6 colour "white"
kropki-4: kropki r4c6-r5c6 colour "black"
kropki-5: kropki r4c8-r5c8 colour "black"
kropki-6: kropki r5c2-r6c2 colour "black"
kropki-7: kropki r8c4-r8c5 colour "black"
kropki-8: kropki r4c2-r4c3 colour "black"
kropki-9: kropki r4c3-r4c4 colour "black"
kropki-10: kropki r2c7-r2c8 colour "black"
kropki-11: kropki r7c1-r7c2 colour "black"
kropki-12: kropki r6c8-r6c9 colour "black"
whispers-1: whispers r2c2-r3c2-r4c2 gap 5
whispers-2: whispers r3c2-r3c3-r3c4 gap 5
whispers-3: whispers r2c4-r3c4-r4c4 gap 5
whispers-4: whispers r4c6-r3c6-r2c7-r3c8-r4c8 gap 5
whispers-5: whispers r3c6-r3c7-r3c8 gap 5
whispers-6: whispers r6c2-r7c2-r8c2-r8c3-r8c4 gap 5
whispers-7: whispers r6c6-r7c6-r8c6-r8c7-r8c8-r7c8-r6c8-r6c7 gap 5 loop true
```

**Standard Sudoku, German Whispers, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least 5.
- Kropki Pairs: Digits separated by a black dot are in a 1:2 ratio. Digits separated by a white dot are consecutive.
