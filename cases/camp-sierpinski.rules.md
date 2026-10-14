---
format: open-rules
title: Camp Sierpiński
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/p20wsmy2ow
case: https://sudoku-sleuth.com/cases/camp-sierpinski
library: https://rules.sudoku-sleuth.com/
status: read
exported: b1516b7b9b8c6c55048475fede792cc1
---

```rules
sudoku 9x9
kropki-1: kropki r2c4-r2c5 black
kropki-2: kropki r2c7-r2c8 black
kropki-3: kropki r5c7-r6c7 black
kropki-4: kropki r9c2-r9c3 black
kropki-5: kropki r7c5-r7c6 black
kropki-6: kropki r3c6-r3c7 black
whispers-1: whispers r1c2-r1c1-r2c1-r2c2-r3c2-r3c1 gap 4
whispers-2: whispers r1c3-r2c3-r3c3 gap 4
whispers-3: whispers r1c6-r1c5-r1c4-r2c4-r3c4-r3c5-r3c6 gap 4
whispers-4: whispers r2c5-r2c4 gap 4
whispers-5: whispers r3c7-r2c7-r1c7-r1c8-r1c9-r2c8-r3c9 gap 4
whispers-6: whispers r6c2-r5c2-r4c2-r4c3-r5c3 gap 4
whispers-7: whispers r5c3-r5c2 gap 4
whispers-8: whispers r4c5-r5c5-r6c5 gap 4
whispers-9: whispers r6c7-r5c7-r4c7-r5c8-r6c9-r5c9-r4c9 gap 4
whispers-10: whispers r7c3-r7c2-r8c2-r8c3-r9c3-r9c2 gap 4
whispers-11: whispers r7c5-r8c5-r9c5 gap 4
whispers-12: whispers r9c6-r8c5-r7c6 gap 4
whispers-13: whispers r7c8-r8c8-r9c8 gap 4
```

**Sudoku, Whisper-4 Lines, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-4: Adjacent digits along a Whisper-4 line must differ by at least four.
- Kropki pairs: Digits in cells connected by a black dot are in a 2:1 ratio. Digits in cells connected by a white dot are consecutive.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing.html
