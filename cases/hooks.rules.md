---
format: open-rules
title: Hooks
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/6kr17muy8x
case: https://sudoku-sleuth.com/cases/hooks
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c5=9 r8c9=3
exported: e330a35abd7614776b398fbbe6d381f3
---

```rules
sudoku 9x9
kropki-1: kropki r7c8-r8c8 white
kropki-2: kropki r8c1-r9c1 white
kropki-3: kropki r6c2-r7c2 black
kropki-4: kropki r5c6-r5c7 black
kropki-5: kropki r2c7-r2c8 black
kropki-6: kropki r3c4-r4c4 black
kropki-7: kropki r3c7-r4c7 black
whispers-1: whispers r2c1-r1c1-r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r6c3-r5c3 gap 5
whispers-2: whispers r5c7-r6c7-r6c8-r5c8-r4c8-r3c8-r2c8-r1c8-r1c9-r2c9 gap 5
whispers-3: whispers r8c3-r9c3-r9c4-r8c4-r7c4 gap 5
whispers-4: whispers r8c7-r9c7-r9c6-r8c6-r7c6 gap 5
whispers-5: whispers r5c4-r4c4-r4c5-r5c5-r6c5-r6c6-r5c6 gap 5
whispers-6: whispers r7c2-r7c3-r7c4 gap 5
whispers-7: whispers r7c8-r7c7-r7c6 gap 5
whispers-8: whispers r3c9-r2c9 gap 5
whispers-9: whispers r3c1-r2c1 gap 5
whispers-10: whispers r4c1-r3c1 gap 5
whispers-11: whispers r4c9-r3c9 gap 5
```

**Sudoku, Whisper-5, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
