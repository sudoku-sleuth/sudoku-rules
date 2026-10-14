---
format: open-rules
title: Whispers 4 You
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/tyubqkkhvl
case: https://sudoku-sleuth.com/cases/whispers-4-you
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c2=5 r2c9=4 r4c5=5 r7c7=5
exported: 17bcbd820e4d4a328562ccd2f23944f1
---

```rules
sudoku 9x9
kropki-1: kropki r5c3-r5c4 black
kropki-2: kropki r7c6-r8c6 black
kropki-3: kropki r9c6-r9c7 black
kropki-4: kropki r7c4-r8c4 black
kropki-5: kropki r5c4-r6c4 black
kropki-6: kropki r2c7-r3c7 black
whispers-1: whispers r3c2-r2c1-r1c2-r2c3-r3c4-r2c5-r1c6-r2c7-r3c8-r2c9-r1c8 gap 4
whispers-2: whispers r6c2-r7c1-r8c2-r7c3-r6c4-r7c5-r8c6-r7c7-r6c8-r7c9-r8c8 gap 4
whispers-3: whispers r5c1-r4c2-r5c3-r5c4-r5c5 gap 4
whispers-4: whispers r5c9-r4c8-r5c7-r5c6 gap 4
whispers-5: whispers r6c6-r5c5 gap 4
whispers-6: whispers r4c5-r5c6 gap 4
```

**Sudoku, Whisper-4 Lines, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-4 Lines: Adjacent digits along a Whisper-4 Line must differ by at least four.
- Ratio pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
