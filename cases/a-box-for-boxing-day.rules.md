---
format: open-rules
title: A Box for Boxing Day
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/dudn37bb1u
case: https://sudoku-sleuth.com/cases/a-box-for-boxing-day
library: https://rules.sudoku-sleuth.com/
status: read
exported: 3f418cec8689f870f0e26bbf6c498d3c
---

```rules
sudoku 9x9
kropki-1: kropki r6c4-r6c5 white
kropki-2: kropki r2c6-r3c6 white
kropki-3: kropki r8c6-r9c6 white
kropki-4: kropki r7c9-r8c9 white
kropki-5: kropki r6c2-r7c2 black
kropki-6: kropki r5c6-r6c6 black
kropki-7: kropki r1c4-r2c4 black
kropki-8: kropki r7c1-r8c1 black
kropki-9: kropki r1c8-r1c9 black
kropki-10: kropki r1c9-r2c9 black
whispers-1: whispers r2c4-r3c4-r4c4-r5c4-r6c4 gap 5
whispers-2: whispers r6c4-r7c3-r8c2 gap 5
whispers-3: whispers r6c5-r6c6-r6c7-r6c8 gap 5
whispers-4: whispers r4c2-r5c2-r6c2-r7c2-r8c2-r8c3-r8c4-r8c5-r8c6-r7c6-r6c6-r5c6-r4c6-r4c5-r4c4-r4c3 gap 4 loop true
whispers-5: whispers r4c2-r3c3-r2c4-r2c5-r2c6-r2c7-r2c8-r3c7-r4c6 gap 4
whispers-6: whispers r2c8-r3c8-r4c8-r5c8-r6c8-r7c7-r8c6 gap 4
```

**Sudoku, Whisper-5, Whisper-4, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5: Adjacent digits along a GREEN Whisper-5 line must differ by at least five.
- Whisper-4: Adjacent digits along an ORANGE Whisper-4 line must differ by at least four.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

To get a weekly digest of puzzles, please join our mailing list at https://missingdeck.net/mailing.html
