---
format: open-rules
title: Boundaries
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/lcin4yrmel
case: https://sudoku-sleuth.com/cases/boundaries
library: https://rules.sudoku-sleuth.com/
status: read
exported: 74d51ba022152069a86c34fe1cc22948
---

```rules
sudoku 9x9
kropki-1: kropki r2c8-r2c9 black
kropki-2: kropki r2c2-r2c3 black
kropki-3: kropki r4c2-r4c3 black
kropki-4: kropki r4c8-r5c8 black
kropki-5: kropki r5c2-r6c2 black
kropki-6: kropki r8c7-r8c8 black
kropki-7: kropki r8c1-r8c2 black
kropki-8: kropki r6c5-r7c5 black
kropki-9: kropki r6c1-r7c1 black
kropki-10: kropki r7c8-r7c9 black
whispers-1: whispers r2c1-r1c2-r2c3-r2c4-r2c5-r3c6-r3c7-r2c8 gap 5
whispers-2: whispers r2c9-r3c8-r4c8-r5c7-r5c6-r4c5-r4c4-r4c3-r5c2-r4c1 gap 5
whispers-3: whispers r7c1-r6c2-r7c3-r7c4-r7c5-r8c6-r8c7-r7c8-r6c8-r5c9 gap 5
whispers-4: whispers r9c1-r8c2-r9c3 gap 5
whispers-5: whispers r9c4-r9c3 gap 5
whispers-6: whispers r8c5-r9c4 gap 5
whispers-7: whispers r9c6-r8c5 gap 5
whispers-8: whispers r9c7-r9c6 gap 5
```

**Sudoku, German Whispers, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Ratio pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
