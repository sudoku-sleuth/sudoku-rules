---
format: open-rules
title: Tax Man
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/1tw8irygvv
case: https://sudoku-sleuth.com/cases/tax-man
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r7c6-r7c7 colour "white"
kropki-2: kropki r8c4-r9c4 colour "white"
kropki-3: kropki r8c5-r9c5 colour "white"
kropki-4: kropki r9c4-r9c5 colour "white"
kropki-5: kropki r3c6-r3c7 colour "black"
kropki-6: kropki r7c3-r7c4 colour "black"
kropki-7: kropki r3c9-r4c9 colour "black"
kropki-8: kropki r8c4-r8c5 colour "black"
kropki-9: kropki r2c1-r2c2 colour "black"
whispers-1: whispers r3c2-r2c2-r1c2 gap 5
whispers-2: whispers r1c1-r1c2-r1c3 gap 5
whispers-3: whispers r3c7-r2c8-r1c9 gap 5
whispers-4: whispers r1c7-r2c8-r3c9 gap 5
whispers-5: whispers r7c1-r6c1-r5c1-r6c2-r5c3-r6c3-r7c3 gap 5
whispers-6: whispers r7c7-r6c7-r5c7-r6c8-r7c9-r6c9-r5c9 gap 5
whispers-7: whispers r8c4-r7c4-r6c5-r7c6-r8c6 gap 5
whispers-8: whispers r7c4-r7c5-r7c6 gap 5
whispers-9: whispers r3c4-r2c4-r1c5-r2c6-r3c6 gap 5
whispers-10: whispers r2c4-r2c5-r2c6 gap 5
```

**Sudoku, German Whispers, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

For more of our puzzles, please visit https://missingdeck.net
