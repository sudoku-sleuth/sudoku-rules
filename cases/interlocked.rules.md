---
format: open-rules
title: Interlocked
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/6g8ogssn34
case: https://sudoku-sleuth.com/cases/interlocked
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c4-r2c5 total 9 connected true
cage-2: cage r8c5-r8c6 total 11 connected true
cage-3: cage r3c4-r3c5 total 12 connected true
cage-4: cage r7c5-r7c6 total 8 connected true
cage-5: cage r6c2-r7c2 total 9 connected true
cage-6: cage r1c6-r1c7 total 7 connected true
whispers-1: whispers r4c2-r3c1-r2c2-r1c3-r2c4 gap 5
whispers-2: whispers r2c6-r1c7-r2c8-r3c9-r4c8 gap 5
whispers-3: whispers r6c2-r7c1-r8c2-r9c3-r8c4 gap 5
whispers-4: whispers r8c6-r9c7-r8c8-r7c9-r6c8 gap 5
whispers-5: whispers r4c2-r5c3-r6c2 gap 5
whispers-6: whispers r4c8-r5c7-r6c8 gap 5
whispers-7: whispers r4c6-r3c6-r2c6 gap 5
whispers-8: whispers r4c4-r3c4-r2c4 gap 5
whispers-9: whispers r6c4-r7c4-r8c4 gap 5
whispers-10: whispers r6c6-r7c6-r8c6 gap 5
whispers-11: whispers r3c5-r2c5 gap 5
whispers-12: whispers r7c5-r8c5 gap 5
whispers-13: whispers r7c5-r6c4 gap 5
whispers-14: whispers r3c5-r4c6 gap 5
```

**Sudoku, Whispers-5 Lines, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5 Lines: Adjacent digits along a Whisper-5 Line differ by at least 5.
- Cages: Digits in a cage sum to the value in the upper left corner of the cage. 

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
