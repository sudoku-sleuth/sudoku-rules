---
format: open-rules
title: Hello, 2026!
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ppdo024v5w
case: https://sudoku-sleuth.com/cases/hello-2026
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r2c4-r3c4 colour "white"
kropki-2: kropki r9c3-r9c4 colour "white"
kropki-3: kropki r2c8-r3c8 colour "white"
kropki-4: kropki r9c6-r9c7 colour "white"
kropki-5: kropki r6c4-r6c5 colour "black"
kropki-6: kropki r9c1-r9c2 colour "black"
kropki-7: kropki r3c1-r4c1 colour "black"
kropki-8: kropki r2c9-r3c9 colour "black"
whispers-1: whispers r3c1-r2c1-r1c1-r1c2-r1c3 gap 5
whispers-2: whispers r9c7-r9c8-r9c9-r8c9-r7c9 gap 5
whispers-3: whispers r2c3-r2c4-r2c5-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r7c5 gap 5
whispers-4: whispers r1c7-r1c8-r1c9-r2c9-r3c9 gap 4
whispers-5: whispers r7c1-r8c1-r9c1-r9c2-r9c3 gap 4
whispers-6: whispers r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c4-r9c5-r8c5-r7c5-r6c5-r5c5-r4c5-r3c4 gap 4 loop true
```

**Sudoku, Whisper-5, Whisper-4, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5: Adjacent digits along a THINNER, GREEN Whisper-5 line must differ by at least five.
- Whisper-4: Adjacent digits along an THICKER, ORANGE Whisper-4 line must differ by at least four.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

To get a weekly digest of puzzles, please join our mailing list at https://missingdeck.net/mailing.html
