---
format: open-rules
title: Join Us at SudokuCon!
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/hb7zu4a2i9
case: https://sudoku-sleuth.com/cases/join-us-at-sudokucon
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c5=4 r4c7=5 r6c5=2 r7c6=5
---

```rules
sudoku 9x9
kropki-1: kropki r6c1-r6c2 colour "white"
kropki-2: kropki r1c8-r1c9 colour "white"
kropki-3: kropki r8c8-r9c8 colour "white"
kropki-4: kropki r3c3-r4c3 colour "white"
kropki-5: kropki r8c7-r8c8 colour "black"
kropki-6: kropki r1c1-r1c2 colour "black"
kropki-7: kropki r4c6-r5c6 colour "black"
whispers-1: whispers r7c3-r7c2-r8c2-r9c2-r9c3 gap 5
whispers-2: whispers r8c4-r8c5-r9c5-r9c4 gap 5 loop true
whispers-3: whispers r9c6-r8c6-r9c7-r8c7 gap 5
whispers-4: whispers r1c3-r1c2-r1c1-r2c1-r2c2-r2c3-r3c3-r3c2-r3c1 gap 4
whispers-5: whispers r2c4-r3c4-r3c5-r2c5 gap 4
whispers-6: whispers r1c7-r2c7-r3c7-r3c6-r2c6 gap 4
whispers-7: whispers r2c6-r2c7 gap 4
whispers-8: whispers r2c8-r3c8-r3c9-r2c9 gap 4 loop true
whispers-9: whispers r4c1-r5c1-r6c1 gap 4
whispers-10: whispers r5c2-r5c1-r6c2 gap 4
whispers-11: whispers r5c3-r6c3-r6c4-r5c4 gap 4
```

**Standard Sudoku, German Whispers, Dutch Whispers, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Dutch Whispers: Adjacent digits along a Dutch Whispers line must differ by at least four.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

SudokuCon 2025 is being held April 3-6, 2025 in Boston, MA, USA. We'll be there! And we'll be hosting a session on setting your first snackdoku puzzle. For more information or to register, visit https://sudokucon.com
