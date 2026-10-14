---
format: open-rules
title: Against the Flow
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/w5yi6j8qp9
case: https://sudoku-sleuth.com/cases/against-the-flow
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c2=3 r3c9=2 r7c1=1 r9c5=8
exported: 532fbb23e3398657f4f58d1b9793958a
---

```rules
sudoku 9x9
kropki-1: kropki r5c3-r5c4 white
kropki-2: kropki r3c3-r3c4 white
kropki-3: kropki r5c6-r6c6 white
kropki-4: kropki r7c5-r7c6 white
kropki-5: kropki r5c8-r6c8 white
kropki-6: kropki r4c3-r4c4 white
whispers-1: whispers r5c3-r4c2-r3c1-r2c2-r1c3 gap 5
whispers-2: whispers r3c3-r4c4-r5c5-r6c4-r7c3 gap 5
whispers-3: whispers r5c6-r4c5-r3c4-r2c5-r1c6 gap 5
whispers-4: whispers r3c6-r4c7-r5c8-r6c7-r7c6 gap 5
whispers-5: whispers r5c9-r4c8-r3c7-r2c8-r1c9 gap 5
whispers-6: whispers r5c4-r6c3-r7c2-r8c3-r9c4 gap 5
whispers-7: whispers r5c7-r6c6-r7c5-r8c6-r9c7 gap 5
```

**Sudoku, Whisper-5, Consecutive Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five.
- Consecutive Pairs: Digits in cells separated by a white dot are consecutive. 

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
