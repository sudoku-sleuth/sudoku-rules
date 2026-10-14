---
format: open-rules
title: Tell Me Why
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/jtfkysz6xr
case: https://sudoku-sleuth.com/cases/tell-me-why
library: https://rules.sudoku-sleuth.com/
status: read
exported: 351bd50cd7bfd3327a60bb39565e65a6
---

```rules
sudoku 9x9
kropki-1: kropki r6c8-r7c8 white
kropki-2: kropki r7c2-r8c2 white
kropki-3: kropki r3c2-r4c2 white
kropki-4: kropki r7c6-r8c6 white
kropki-5: kropki r9c1-r9c2 white
kropki-6: kropki r8c5-r9c5 black
kropki-7: kropki r7c7-r8c7 black
kropki-8: kropki r2c8-r3c8 black
kropki-9: kropki r4c3-r5c3 black
kropki-10: kropki r2c5-r2c6 black
kropki-11: kropki r8c6-r8c7 black
whispers-1: whispers r3c2-r2c2-r1c2 gap 4
whispers-2: whispers r1c3-r1c2-r1c1 gap 4
whispers-3: whispers r3c4-r2c5-r2c4-r2c3 gap 4
whispers-4: whispers r3c5-r3c4-r2c3 gap 4
whispers-5: whispers r1c6-r2c6-r3c6-r3c7 gap 4
whispers-6: whispers r1c8-r2c8-r3c8-r3c9 gap 4
whispers-7: whispers r6c3-r5c3-r4c3-r5c4-r4c5-r5c5-r6c5 gap 4
whispers-8: whispers r6c7-r5c8-r5c7-r5c6 gap 4
whispers-9: whispers r6c8-r6c7-r5c6 gap 4
whispers-10: whispers r7c1-r8c1-r9c1-r8c2-r9c3-r8c3-r7c3 gap 4
whispers-11: whispers r7c4-r8c4-r9c4 gap 4
whispers-12: whispers r9c5-r8c5-r8c4 gap 4
whispers-13: whispers r7c7-r8c7-r8c8-r7c8 gap 4
whispers-14: whispers r9c7-r9c8-r8c8 gap 4
```

**Sudoku, Dutch Whispers, Kropki Pairs**
- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Dutch Whispers: Adjacent digits along a Dutch Whispers line must differ by at least four.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

For more puzzles like these, please visit our website https://missingdeck.net
