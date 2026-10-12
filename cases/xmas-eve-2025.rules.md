---
format: open-rules
title: Xmas Eve, 2025
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mpsj796z2u
case: https://sudoku-sleuth.com/cases/xmas-eve-2025
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=1 r1c2=2 r2c8=2 r2c9=4
---

```rules
sudoku 9x9
kropki-1: kropki r3c1-r3c2 colour "white"
kropki-2: kropki r3c4-r4c4 colour "white"
kropki-3: kropki r5c6-r6c6 colour "white"
kropki-4: kropki r7c6-r7c7 colour "white"
kropki-5: kropki r2c2-r2c3 colour "white"
kropki-6: kropki r5c5-r6c5 colour "white"
kropki-7: kropki r8c5-r9c5 colour "white"
kropki-8: kropki r1c7-r1c8 colour "white"
kropki-9: kropki r1c7-r2c7 colour "white"
kropki-10: kropki r7c4-r8c4 colour "white"
kropki-11: kropki r6c3-r7c3 colour "white"
kropki-12: kropki r6c2-r6c3 colour "white"
kropki-13: kropki r8c9-r9c9 colour "white"
kropki-14: kropki r3c1-r4c1 colour "black"
kropki-15: kropki r3c7-r4c7 colour "black"
kropki-16: kropki r6c6-r7c6 colour "black"
kropki-17: kropki r5c8-r6c8 colour "black"
kropki-18: kropki r5c3-r6c3 colour "black"
kropki-19: kropki r7c1-r8c1 colour "black"
kropki-20: kropki r8c3-r9c3 colour "black"
kropki-21: kropki r5c2-r6c2 colour "black"
whispers-1: whispers r1c3-r2c4-r3c5 gap 5
whispers-2: whispers r1c5-r2c4-r3c3 gap 5
whispers-3: whispers r5c1-r4c1-r5c2-r4c3-r5c3 gap 5
whispers-4: whispers r5c5-r5c4-r4c4-r4c5-r5c6 gap 5
whispers-5: whispers r5c9-r4c8-r5c8-r6c9-r7c9-r6c8 gap 5
whispers-6: whispers r7c3-r7c2-r8c2-r9c2-r9c3 gap 5
whispers-7: whispers r8c3-r8c2 gap 5
whispers-8: whispers r8c4-r9c5-r8c6 gap 5
whispers-9: whispers r7c8-r7c7-r8c7-r9c7-r9c8 gap 5
whispers-10: whispers r8c8-r8c7 gap 5
```

**Sudoku, Whisper-5, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

To get a weekly digest of puzzles, please join our mailing list at https://missingdeck.net/mailing.html
