---
format: open-rules
title: Slanted Whispers of Love
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/yrovzxitfe
case: https://sudoku-sleuth.com/cases/slanted-whispers-of-love
library: https://rules.sudoku-sleuth.com/
status: read
exported: d47d891d01e98cdd337fae6f83a2eb1a
---

```rules
sudoku 9x9
whispers r3c1-r2c2-r1c3-r2c4-r3c5-r2c6-r1c7-r2c8-r3c9-r4c8-r5c7-r6c6-r7c5-r6c4-r5c3-r4c2 gap 5 loop true
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 10
little-killer-2: little-killer r3c9-r2c8-r1c7 sum 13
little-killer-3: little-killer r7c1-r8c2-r9c3 sum 7
little-killer-4: little-killer r7c9-r8c8-r9c7 sum 10
little-killer-5: little-killer r8c1-r9c2 sum 10
little-killer-6: little-killer r8c9-r9c8 sum 8
little-killer-7: little-killer r2c1-r1c2 sum 12
little-killer-8: little-killer r2c9-r1c8 sum 7
little-killer-9: little-killer r4c1-r3c2-r2c3-r1c4 sum 16
little-killer-10: little-killer r1c3-r2c4-r3c5-r4c6-r5c7-r6c8-r7c9 sum 18
```

**Sudoku, Whisper-5 Lines, Diagonal Sums**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five.
 - Diagonal Sums: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
