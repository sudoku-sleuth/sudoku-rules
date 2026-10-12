---
format: open-rules
title: Lady Madonna
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/80q92qkbdn
case: https://sudoku-sleuth.com/cases/lady-madonna
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r7c5-r7c6 colour "white"
kropki-2: kropki r5c1-r6c1 colour "black"
kropki-3: kropki r3c3-r4c3 colour "black"
kropki-4: kropki r3c2-r3c3 colour "black"
kropki-5: kropki r2c7-r3c7 colour "black"
kropki-6: kropki r4c7-r4c8 colour "black"
kropki-7: kropki r6c3-r6c4 colour "black"
kropki-8: kropki r6c5-r7c5 colour "black"
kropki-9: kropki r5c8-r5c9 colour "black"
kropki-10: kropki r1c6-r1c7 colour "black"
kropki-11: kropki r7c3-r8c3 colour "black"
kropki-12: kropki r9c5-r9c6 colour "black"
whispers-1: whispers r3c4-r3c3-r2c3-r2c4-r3c5 gap 4
whispers-2: whispers r2c8-r3c8-r3c9-r2c9 gap 4
whispers-3: whispers r4c8-r4c9-r3c9 gap 4
whispers-4: whispers r6c1-r5c1-r4c1-r5c2-r4c3-r5c3-r6c3 gap 4
whispers-5: whispers r4c7-r5c8-r6c8-r6c7-r5c7 gap 4
whispers-6: whispers r5c7-r5c8 gap 4
whispers-7: whispers r9c5-r8c5-r9c6-r8c6 gap 4
whispers-8: whispers r1c1-r2c1-r3c1-r3c2 gap 4
whispers-9: whispers r1c6-r2c7-r3c7-r3c6-r2c6 gap 4
whispers-10: whispers r2c6-r2c7 gap 4
whispers-11: whispers r6c6-r5c5-r5c4-r6c4-r6c5 gap 4
whispers-12: whispers r7c1-r8c1-r8c2-r7c2 gap 4 loop true
whispers-13: whispers r8c3-r7c3-r8c4-r7c4 gap 4
whispers-14: whispers r9c9-r8c8-r8c7-r9c7-r9c8 gap 4
```

**Sudoku, Dutch Whispers, Kropki Pairs**
- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Dutch Whispers: Adjacent digits along a Dutch Whispers line must differ by at least four.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

For more puzzles like these, please visit our website https://missingdeck.net
