---
format: open-rules
title: Ask Me Why
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/qfei99kabt
case: https://sudoku-sleuth.com/cases/ask-me-why
library: https://rules.sudoku-sleuth.com/
status: read
exported: 9c8cc09534d2c88e774753f0f045be7d
---

```rules
sudoku 9x9
kropki-1: kropki r8c2-r8c3 white
kropki-2: kropki r8c1-r8c2 white
kropki-3: kropki r8c7-r8c8 white
kropki-4: kropki r4c9-r5c9 white
kropki-5: kropki r4c1-r4c2 white
kropki-6: kropki r5c1-r5c2 white
kropki-7: kropki r6c1-r7c1 white
kropki-8: kropki r5c5-r5c6 white
kropki-9: kropki r2c1-r3c1 black
kropki-10: kropki r4c2-r5c2 black
kropki-11: kropki r7c3-r8c3 black
kropki-12: kropki r2c6-r2c7 black
kropki-13: kropki r3c9-r4c9 black
kropki-14: kropki r7c7-r8c7 black
kropki-15: kropki r2c4-r3c4 black
kropki-16: kropki r1c8-r1c9 black
kropki-17: kropki r1c7-r2c7 black
kropki-18: kropki r5c7-r6c7 black
kropki-19: kropki r4c5-r5c5 black
kropki-20: kropki r7c4-r8c4 black
kropki-21: kropki r3c2-r3c3 black
whispers-1: whispers r3c1-r2c1-r1c2-r2c3-r3c3 gap 4
whispers-2: whispers r2c3-r2c2-r2c1 gap 4
whispers-3: whispers r2c6-r2c5-r3c6-r3c5 gap 4
whispers-4: whispers r1c8-r2c8-r3c8 gap 4
whispers-5: whispers r3c9-r2c8-r2c9 gap 4
whispers-6: whispers r6c2-r5c2-r4c2-r5c3-r4c4-r5c4-r6c4 gap 4
whispers-7: whispers r6c7-r5c8-r5c7-r5c6 gap 4
whispers-8: whispers r5c6-r6c7-r6c8 gap 4
whispers-9: whispers r7c1-r8c1-r9c1-r8c2-r9c3-r8c3-r7c3 gap 4
whispers-10: whispers r7c5-r8c5-r9c5 gap 4
whispers-11: whispers r9c6-r8c6-r8c5 gap 4
whispers-12: whispers r7c8-r8c8-r8c9-r7c9 gap 4
whispers-13: whispers r9c8-r9c9-r8c9 gap 4
```

**Sudoku, Dutch Whispers, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Dutch Whispers: Adjacent digits along a Dutch Whispers line must differ by at least four.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

For more of our puzzles, please visit https://missingdeck.net
