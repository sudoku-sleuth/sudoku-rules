---
format: open-rules
title: Quadrants
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ir5tvmm3hd
case: https://sudoku-sleuth.com/cases/quadrants
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r2c6-r3c6 colour "white"
kropki-2: kropki r3c1-r4c1 colour "white"
kropki-3: kropki r1c3-r1c4 colour "white"
kropki-4: kropki r6c9-r7c9 colour "white"
kropki-5: kropki r6c2-r6c3 colour "black"
kropki-6: kropki r7c4-r8c4 colour "black"
kropki-7: kropki r1c2-r1c3 colour "black"
kropki-8: kropki r9c7-r9c8 colour "black"
kropki-9: kropki r7c9-r8c9 colour "black"
kropki-10: kropki r6c1-r7c1 colour "black"
kropki-11: kropki r9c3-r9c4 colour "black"
kropki-12: kropki r4c4-r5c4 colour "black"
kropki-13: kropki r4c1-r5c1 colour "black"
whispers-1: whispers r2c1-r2c2-r1c2 gap 5
whispers-2: whispers r3c1-r3c2-r3c3-r2c3-r1c3 gap 5
whispers-3: whispers r9c8-r8c8-r8c9 gap 5
whispers-4: whispers r9c7-r8c7-r7c7-r7c8-r7c9 gap 5
whispers-5: whispers r4c1-r4c2-r4c3-r4c4-r3c4-r2c4-r1c4 gap 5
whispers-6: whispers r9c6-r8c6-r7c6-r6c6-r6c7-r6c8-r6c9 gap 5
renban-1: renban r8c1-r8c2-r9c2
renban-2: renban r7c1-r7c2-r7c3-r8c3-r9c3
renban-3: renban r1c8-r2c8-r2c9
renban-4: renban r1c7-r2c7-r3c7-r3c8-r3c9
renban-5: renban r3c6-r4c6-r4c7
renban-6: renban r6c3-r6c4-r7c4
```

**Sudoku, German Whisper, Renban, Kropki (no negative)**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

For more of our puzzles, please visit https://missingdeck.net
