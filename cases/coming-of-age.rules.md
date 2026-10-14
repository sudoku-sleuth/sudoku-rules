---
format: open-rules
title: Coming of Age
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/txhly2zpq1
case: https://sudoku-sleuth.com/cases/coming-of-age
library: https://rules.sudoku-sleuth.com/
status: read
givens: r7c3=1 r7c7=2 r8c4=1 r8c8=5 r9c6=8
exported: 9031790542bf00fa8ba49d92edf1bf2c
---

```rules
sudoku 9x9
kropki-1: kropki r5c3-r5c4 white
kropki-2: kropki r6c2-r7c2 white
kropki-3: kropki r6c5-r6c6 white
kropki-4: kropki r4c9-r5c9 white
kropki-5: kropki r5c9-r6c9 white
kropki-6: kropki r6c8-r7c8 black
kropki-7: kropki r7c8-r7c9 black
kropki-8: kropki r3c2-r4c2 black
kropki-9: kropki r1c7-r2c7 black
whispers-1: whispers r1c1-r1c2-r2c2-r2c1-r3c1-r3c2 gap 5
whispers-2: whispers r1c4-r2c4-r3c4 gap 5
whispers-3: whispers r2c5-r3c5-r3c6-r2c6 gap 5
whispers-4: whispers r4c5-r4c6-r3c6 gap 5
whispers-5: whispers r2c9-r2c8-r1c7-r1c8-r1c9 gap 5
whispers-6: whispers r1c9-r2c8 gap 5
whispers-7: whispers r6c3-r5c2-r5c1-r6c1-r6c2 gap 5
whispers-8: whispers r6c4-r5c4-r5c5 gap 5
whispers-9: whispers r4c8-r4c7-r5c7-r5c8-r6c8-r6c7 gap 5
```

**Sudoku, Whisper-5 lines, Kropki pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5 line: Adjacent digits along a Whisper-5 line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
