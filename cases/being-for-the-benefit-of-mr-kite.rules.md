---
format: open-rules
title: Being For the Benefit of Mr. Kite
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/uf186r11nf
case: https://sudoku-sleuth.com/cases/being-for-the-benefit-of-mr-kite
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r8c1-r8c2 colour "white"
kropki-2: kropki r8c8-r8c9 colour "white"
kropki-3: kropki r4c1-r4c2 colour "white"
kropki-4: kropki r3c5-r3c6 colour "white"
kropki-5: kropki r3c8-r3c9 colour "black"
kropki-6: kropki r3c6-r3c7 colour "black"
kropki-7: kropki r3c4-r3c5 colour "black"
kropki-8: kropki r8c9-r9c9 colour "black"
kropki-9: kropki r8c5-r9c5 colour "black"
kropki-10: kropki r8c2-r9c2 colour "black"
whispers-1: whispers r3c6-r2c6-r1c6-r1c7-r1c8-r2c7-r3c8 gap 5
whispers-2: whispers r5c1-r6c1-r7c1 gap 5
whispers-3: whispers r5c2-r6c1-r7c2 gap 5
whispers-4: whispers r5c3-r6c3-r7c3 gap 5
whispers-5: whispers r5c4-r5c5-r5c6 gap 5
whispers-6: whispers r5c5-r6c5-r7c5 gap 5
whispers-7: whispers r6c8-r6c7 gap 5
whispers-8: whispers r5c8-r5c7 gap 5
whispers-9: whispers r7c9-r7c8-r7c7-r6c7-r5c7 gap 5
whispers-10: whispers r3c2-r2c2-r1c2-r2c3-r1c4-r2c4-r3c4 gap 5
```

**Sudoku, German Whispers, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
