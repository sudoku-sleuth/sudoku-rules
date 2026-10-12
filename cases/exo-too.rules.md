---
format: open-rules
title: EXO Too
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/y3kgyvezz8
case: https://sudoku-sleuth.com/cases/exo-too
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r7c1-r8c1 colour "white"
kropki-2: kropki r8c1-r9c1 colour "white"
kropki-3: kropki r6c7-r6c8 colour "white"
kropki-4: kropki r2c3-r3c3 colour "black"
kropki-5: kropki r7c1-r7c2 colour "black"
kropki-6: kropki r7c6-r7c7 colour "black"
kropki-7: kropki r7c3-r8c3 colour "black"
kropki-8: kropki r4c5-r4c6 colour "black"
kropki-9: kropki r4c4-r5c4 colour "black"
kropki-10: kropki r5c5-r5c6 colour "black"
kropki-11: kropki r3c6-r4c6 colour "black"
kropki-12: kropki r4c1-r4c2 colour "black"
kropki-13: kropki r4c2-r4c3 colour "black"
kropki-14: kropki r8c4-r9c4 colour "black"
kropki-15: kropki r2c5-r3c5 colour "black"
kropki-16: kropki r5c9-r6c9 colour "black"
whispers-1: whispers r1c2-r1c1-r2c1-r3c1-r3c2 gap 5
whispers-2: whispers r2c2-r2c1 gap 5
whispers-3: whispers r4c4-r5c5-r6c6 gap 5
whispers-4: whispers r6c4-r5c5-r4c6 gap 5
whispers-5: whispers r9c9-r8c9-r7c9-r7c8-r7c7-r8c7-r9c7-r9c8 gap 5
```

**Sudoku, German Whispers, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

For more of our puzzles, please visit https://missingdeck.net
