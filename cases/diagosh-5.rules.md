---
format: open-rules
title: DiagoSh 5
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/d1gyn40ov4
case: https://sudoku-sleuth.com/cases/diagosh-5
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
whispers-1: whispers r1c1-r1c2-r2c3-r3c2-r4c1-r5c1-r6c1-r7c2-r8c3-r9c2-r9c1 gap 5
whispers-2: whispers r1c9-r1c8-r2c7-r3c8-r4c9-r5c9-r6c9-r7c8-r8c7-r9c8-r9c9 gap 5
whispers-3: whispers r3c3-r4c4-r3c5-r4c6-r3c7 gap 5
whispers-4: whispers r7c3-r6c4-r7c5-r6c6-r7c7 gap 5
little-killer-1: little-killer r2c1-r1c2 sum 5
little-killer-2: little-killer r2c9-r1c8 sum 15
little-killer-3: little-killer r8c9-r9c8 sum 15
little-killer-4: little-killer r8c1-r9c2 sum 5
little-killer-5: little-killer r3c1-r2c2-r1c3 sum 16
little-killer-6: little-killer r9c5-r8c4-r7c3-r6c2-r5c1 sum 14
```

**Sudoku, Whisper-5 Lines, Diagonal Sums**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five.
 - Diagonal Sums: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
