---
format: open-rules
title: HBD, FD, 2025!
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/u2731qyuyw
case: https://sudoku-sleuth.com/cases/hbd-fd-2025
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c2=5 r5c3=6
---

```rules
sudoku 9x9
kropki-1: kropki r7c8-r7c9 colour "white"
kropki-2: kropki r7c8-r8c8 colour "black"
kropki-3: kropki r2c1-r3c1 colour "black"
whispers-1: whispers r1c5-r1c4-r1c3-r2c3-r3c3-r4c3 gap 5
whispers-2: whispers r2c4-r2c3 gap 5
whispers-3: whispers r1c6-r2c6-r3c6-r4c6-r4c7-r3c8-r2c8-r1c7 gap 5 loop true
whispers-4: whispers r6c4-r7c4-r8c4-r8c5-r8c6-r7c5-r6c6-r6c5 gap 5 loop true
whispers-5: whispers r7c1-r6c1-r5c1 gap 5
whispers-6: whispers r5c2-r6c2-r6c1 gap 5
whispers-7: whispers r7c2-r6c2 gap 5
whispers-8: whispers r7c7-r8c7-r9c7-r9c8-r8c9-r7c8 gap 5 loop true
```

**Sudoku, Whisper-5,Kropki dots**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

To get a weekly digest of puzzles, please join our mailing list at https://missingdeck.net/mailing.html
