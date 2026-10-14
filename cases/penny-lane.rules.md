---
format: open-rules
title: Penny Lane
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ihwxfv3n8r
case: https://sudoku-sleuth.com/cases/penny-lane
library: https://rules.sudoku-sleuth.com/
status: read
exported: a559697aeff2ae6c28cad4bafb622cd7
---

```rules
sudoku 9x9
kropki-1: kropki r2c9-r3c9 white
kropki-2: kropki r5c7-r6c7 white
kropki-3: kropki r1c7-r2c7 white
kropki-4: kropki r5c6-r5c7 white
kropki-5: kropki r1c4-r2c4 white
kropki-6: kropki r4c9-r5c9 white
kropki-7: kropki r2c5-r2c6 black
kropki-8: kropki r5c1-r5c2 black
kropki-9: kropki r9c2-r9c3 black
kropki-10: kropki r9c8-r9c9 black
kropki-11: kropki r2c1-r3c1 black
kropki-12: kropki r4c2-r4c3 black
kropki-13: kropki r4c4-r4c5 black
kropki-14: kropki r4c5-r5c5 black
kropki-15: kropki r7c8-r8c8 black
whispers-1: whispers r3c2-r2c2-r1c2-r1c3-r2c3 gap 4
whispers-2: whispers r2c3-r2c2 gap 4
whispers-3: whispers r3c5-r2c6-r2c5-r2c4 gap 4
whispers-4: whispers r2c4-r3c5-r3c6 gap 4
whispers-5: whispers r3c7-r2c7-r2c8-r3c8 gap 4
whispers-6: whispers r6c1-r5c1-r5c2-r6c2 gap 4
whispers-7: whispers r5c4-r6c4-r6c5 gap 4
whispers-8: whispers r5c5-r6c5-r7c5-r7c4 gap 4
whispers-9: whispers r4c8-r5c8-r6c8-r6c9 gap 4
whispers-10: whispers r9c2-r9c1-r8c1-r8c2-r9c3 gap 4
whispers-11: whispers r9c5-r8c5-r8c6-r9c6 gap 4
whispers-12: whispers r9c8-r8c9-r8c8-r8c7 gap 4
whispers-13: whispers r8c7-r9c8-r9c9 gap 4
```

**Sudoku, Dutch Whispers, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Dutch Whispers: Adjacent digits along a Dutch Whispers line must differ by at least four.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

For more of our puzzles, please visit https://missingdeck.net
