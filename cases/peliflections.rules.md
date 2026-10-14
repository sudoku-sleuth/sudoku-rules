---
format: open-rules
title: Peliflections
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/nkw687p7hw
case: https://sudoku-sleuth.com/cases/peliflections
library: https://rules.sudoku-sleuth.com/
status: read
exported: b419231868affc8fe7629847f6c91793
---

```rules
sudoku 9x9
kropki-1: kropki r2c2-r3c2 white
kropki-2: kropki r2c5-r3c5 white
kropki-3: kropki r2c8-r3c8 white
kropki-4: kropki r4c2-r5c2 white
kropki-5: kropki r4c5-r5c5 white
kropki-6: kropki r4c8-r5c8 white
kropki-7: kropki r4c3-r4c4 white
kropki-8: kropki r5c9-r6c9 white
kropki-9: kropki r3c1-r4c1 black
kropki-10: kropki r3c6-r4c6 black
kropki-11: kropki r8c2-r9c2 black
kropki-12: kropki r7c4-r8c4 black
kropki-13: kropki r8c6-r8c7 black
kropki-14: kropki r7c7-r7c8 black
kropki-15: kropki r6c8-r7c8 black
whispers-1: whispers r4c1-r3c1-r2c1-r2c2-r3c3-r4c3 gap 4
whispers-2: whispers r3c2-r4c2-r5c3-r5c4-r4c4-r3c4-r2c4-r2c5-r3c6-r4c6 gap 4
whispers-3: whispers r3c5-r4c5-r5c6-r5c7-r4c7-r3c7-r2c7-r2c8-r3c9-r4c9 gap 4
whispers-4: whispers r3c8-r4c8-r5c9 gap 4
whispers-5: whispers r7c1-r8c1 gap 4
whispers-6: whispers r9c1-r9c2-r8c2-r7c2-r6c2-r6c3-r7c4-r8c4 gap 4
whispers-7: whispers r7c3-r8c3-r9c4-r9c5-r8c5-r7c5-r6c5-r6c6-r7c7-r8c7 gap 4
whispers-8: whispers r7c6-r8c6-r9c7-r9c8-r8c8-r7c8-r6c8-r6c9 gap 4
whispers-9: whispers r7c9-r8c9 gap 4
renban-1: renban r3c2-r4c3
renban-2: renban r3c5-r4c6
renban-3: renban r3c8-r4c9
renban-4: renban r7c3-r8c4
renban-5: renban r7c6-r8c7
```

**Sudoku, Whisper-4, Renban, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-4: Adjacent digits along a Whisper-4 line must differ by at least four.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
