---
format: open-rules
title: EXCEED
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/batzjg7ppr
case: https://sudoku-sleuth.com/cases/exceed
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r2c3-r3c3 colour "black"
kropki-2: kropki r1c4-r2c4 colour "black"
kropki-3: kropki r5c7-r5c8 colour "black"
kropki-4: kropki r8c6-r9c6 colour "black"
kropki-5: kropki r6c4-r6c5 colour "black"
kropki-6: kropki r4c5-r5c5 colour "black"
kropki-7: kropki r4c1-r4c2 colour "black"
kropki-8: kropki r3c7-r3c8 colour "black"
kropki-9: kropki r9c1-r9c2 colour "black"
kropki-10: kropki r3c3-r3c4 colour "black"
kropki-11: kropki r1c9-r2c9 colour "black"
kropki-12: kropki r5c8-r5c9 colour "black"
kropki-13: kropki r8c7-r8c8 colour "black"
kropki-14: kropki r1c2-r2c2 colour "black"
kropki-15: kropki r6c8-r6c9 colour "black"
kropki-16: kropki r6c5-r7c5 colour "black"
whispers-1: whispers r1c2-r1c1-r2c1-r3c1-r3c2 gap 5
whispers-2: whispers r2c2-r2c1 gap 5
whispers-3: whispers r1c5-r2c6-r3c7 gap 5
whispers-4: whispers r3c5-r2c6-r1c7 gap 5
whispers-5: whispers r4c4-r4c3-r4c2-r5c2-r6c2-r6c3-r6c4 gap 5
whispers-6: whispers r4c8-r4c7-r4c6-r5c6-r6c6-r6c7-r6c8 gap 5
whispers-7: whispers r5c7-r5c6 gap 5
whispers-8: whispers r7c5-r7c4-r7c3-r8c3-r9c3-r9c4-r9c5 gap 5
whispers-9: whispers r8c4-r8c3 gap 5
whispers-10: whispers r9c8-r8c8-r7c8-r8c9 gap 5 loop true
```

Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.

German Whispers: Adjacent digits along a German Whispers line must differ by at least five.

Ratio pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Not all dots are necessarily given.
