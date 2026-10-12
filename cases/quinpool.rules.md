---
format: open-rules
title: Quinpool
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/eidotubwlr
case: https://sudoku-sleuth.com/cases/quinpool
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c1=2 r2c2=6 r3c5=3 r8c8=1 r9c9=8
---

```rules
sudoku 9x9
kropki-1: kropki r2c4-r3c4 colour "black"
kropki-2: kropki r4c5-r5c5 colour "black"
kropki-3: kropki r9c3-r9c4 colour "black"
kropki-4: kropki r6c8-r7c8 colour "white"
kropki-5: kropki r6c2-r6c3 colour "white"
whispers-1: whispers r9c1-r8c2-r7c3-r6c4-r5c5-r4c6-r5c7-r6c8-r7c9 gap 5
whispers-2: whispers r4c6-r3c7-r2c8-r3c9 gap 5
whispers-3: whispers r5c7-r6c6-r7c5-r8c4 gap 5
whispers-4: whispers r1c9-r2c8-r1c7 gap 5
whispers-5: whispers r1c5-r2c4-r3c3-r4c2-r5c1 gap 5
whispers-6: whispers r5c3-r4c2-r3c1 gap 5
whispers-7: whispers r1c2-r2c3-r3c4 gap 5
```

**Sudoku, Whisper-5, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.



For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
