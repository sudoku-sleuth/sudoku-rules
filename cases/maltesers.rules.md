---
format: open-rules
title: Maltesers
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/0wqfvo4u19
case: https://sudoku-sleuth.com/cases/maltesers
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r5c4-r5c5 colour "black"
kropki-2: kropki r8c5-r9c5 colour "black"
kropki-3: kropki r3c1-r4c1 colour "black"
kropki-4: kropki r8c1-r8c2 colour "black"
whispers-1: whispers r9c6-r9c7-r8c7-r8c8-r7c8-r7c9-r6c9-r6c8-r5c8-r5c7-r4c7-r4c6-r5c6-r5c5-r6c5-r6c4-r7c4-r7c5-r8c5-r8c6 gap 5 loop true
whispers-2: whispers r4c1-r3c1-r3c2-r2c2-r2c3-r1c3-r1c4-r2c4-r2c5-r3c5-r3c6-r4c6-r4c5-r5c5-r5c4-r6c4-r6c3-r5c3-r5c2-r4c2 gap 4 loop true
```

**Sudoku, Whisper-4, Whisper-5, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-4 Lines: Adjacent digits along a Whisper-4 line must differ by at least four.
- Whisper-5 Lines: Adjacent digits along a Whisper-5 line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. 

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
