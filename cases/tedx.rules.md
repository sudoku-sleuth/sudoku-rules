---
format: open-rules
title: TEDx
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/tedx
case: https://sudoku-sleuth.com/cases/tedx
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
whispers-1: whispers r1c1-r1c2-r1c3 gap 4
whispers-2: whispers r3c2-r2c2-r1c2 gap 4
whispers-3: whispers r4c6-r4c5-r4c4-r5c4-r6c4-r6c5-r6c6 gap 4
whispers-4: whispers r5c5-r5c4 gap 4
whispers-5: whispers r7c7-r8c7-r9c7-r9c8-r8c9-r7c8 gap 4 loop true
pair-1: pair r1c1-r1c2 sum 10
pair-2: pair r4c4-r4c5 sum 10
pair-3: pair r7c7-r7c8 sum 10
pair-4: pair r3c2-r3c3 sum 10
pair-5: pair r6c5-r6c6 sum 10
pair-6: pair r9c8-r9c9 sum 10
pair-7: pair r1c9-r2c9 sum 10
pair-8: pair r7c3-r8c3 sum 10
pair-9: pair r8c1-r9c1 sum 10
pair-10: pair r5c5-r5c6 sum 10
pair-11: pair r5c4-r6c4 sum 10
pair-12: pair r4c7-r4c8 sum 10
pair-13: pair r3c5-r3c6 sum 10
pair-14: pair r8c4-r9c4 sum 10
x-sum-1: x-sum r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 sum 10
x-sum-2: x-sum r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9 sum 10
x-sum-3: x-sum r1c9-r1c8-r1c7-r1c6-r1c5-r1c4-r1c3-r1c2-r1c1 sum 10
x-sum-4: x-sum r8c9-r8c8-r8c7-r8c6-r8c5-r8c4-r8c3-r8c2-r8c1 sum 10
```

**Sudoku, Whisper-4,  X-sums, X pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-4: Adjacent digits along a Whisper-4 line must differ by at least four.
- X-sums: Clues outside the grid give the sum of the first X numbers placed in the corresponding row or column, where X is digit in the cell next to the X-sum clue.
- X pairs: Digits in cells separated by a X sum to 10. Not all possible Xs are necessarily given.



Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
