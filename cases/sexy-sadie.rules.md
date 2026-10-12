---
format: open-rules
title: Sexy Sadie
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/v9aypqspld
case: https://sudoku-sleuth.com/cases/sexy-sadie
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r2c2-r2c3 colour "white"
kropki-2: kropki r3c5-r3c6 colour "white"
kropki-3: kropki r2c7-r2c8 colour "white"
kropki-4: kropki r5c2-r5c3 colour "white"
kropki-5: kropki r6c5-r6c6 colour "white"
kropki-6: kropki r7c6-r7c7 colour "white"
kropki-7: kropki r7c7-r8c7 colour "white"
kropki-8: kropki r3c1-r3c2 colour "black"
kropki-9: kropki r3c3-r4c3 colour "black"
kropki-10: kropki r7c6-r8c6 colour "black"
kropki-11: kropki r8c7-r9c7 colour "black"
kropki-12: kropki r1c4-r2c4 colour "black"
whispers-1: whispers r1c2-r1c1-r2c1-r2c2-r3c2-r3c1 gap 4
whispers-2: whispers r3c4-r2c5-r2c4-r2c3 gap 4
whispers-3: whispers r3c5-r3c4-r2c3 gap 4
whispers-4: whispers r2c6-r3c7 gap 4
whispers-5: whispers r3c6-r2c7 gap 4
whispers-6: whispers r4c8-r4c9-r3c9-r2c9 gap 4
whispers-7: whispers r2c8-r3c8-r3c9 gap 4
whispers-8: whispers r5c2-r5c1-r6c1-r6c2-r7c2-r7c1 gap 4
whispers-9: whispers r6c5-r5c4-r5c3-r6c3-r6c4 gap 4
whispers-10: whispers r7c5-r8c5-r8c6-r7c6-r6c6-r5c6 gap 4
whispers-11: whispers r7c5-r7c6 gap 4
whispers-12: whispers r6c7-r7c7 gap 4
whispers-13: whispers r9c9-r9c8-r8c7-r8c8-r8c9 gap 4
whispers-14: whispers r8c9-r9c8 gap 4
```

**Sudoku, Dutch Whispers, Kropki Pairs**
- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Dutch Whispers: Adjacent digits along a Dutch Whispers line must differ by at least four.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

For more puzzles like these, please visit our website https://missingdeck.net
