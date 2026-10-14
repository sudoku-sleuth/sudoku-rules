---
format: open-rules
title: Flag
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/yw6ll0pr8v
case: https://sudoku-sleuth.com/cases/flag
library: https://rules.sudoku-sleuth.com/
status: read
givens: r6c4=1
exported: c21b88f334517ceb9c6680b746d19421
---

```rules
sudoku 9x9
whispers-1: whispers r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 gap 5
whispers-2: whispers r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 gap 5
whispers-3: whispers r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9 gap 5
whispers-4: whispers r5c2-r5c3-r5c4-r5c5-r5c6-r6c7-r7c8-r8c9 gap 5
whispers-5: whispers r5c6-r4c7-r3c8-r2c9 gap 5
whispers-6: whispers r8c3-r7c4-r8c5 gap 5
whispers-7: whispers r4c6-r3c6-r2c6 gap 5
whispers-8: whispers r3c6-r2c5 gap 5
```

**Sudoku, Whisper-5 Lines**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
