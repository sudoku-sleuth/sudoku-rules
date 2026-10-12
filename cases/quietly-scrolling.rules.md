---
format: open-rules
title: Quietly Scrolling
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/xak4eydbsc
case: https://sudoku-sleuth.com/cases/quietly-scrolling
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c2-r4c2 total 11 connected true
cage-2: cage r3c8-r4c8 total 10 connected true
cage-3: cage r6c6-r7c6 total 4 connected true
cage-4: cage r6c4-r7c4 total 9 connected true
cage-5: cage r1c5-r2c5 total 7 connected true
cage-6: cage r7c3-r8c3 total 15 connected true
cage-7: cage r7c7-r8c7 total 10 connected true
cage-8: cage r1c2-r1c3 total 6 connected true
cage-9: cage r1c7-r1c8 total 9 connected true
whispers-1: whispers r2c2-r2c3-r3c3-r3c2-r3c1-r2c1-r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9-r2c9-r3c9-r3c8-r3c7-r2c7-r2c8 gap 4
whispers-2: whispers r8c3-r9c3-r9c2-r9c1-r8c1-r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9-r8c9-r9c9-r9c8-r9c7-r8c7 gap 4
whispers-3: whispers r5c1-r4c2-r5c3-r6c4-r5c5-r6c6-r5c7-r4c8-r5c9 gap 4
```

**Sudoku, Whisper-4 Lines, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-4 Lines: Adjacent digits along a Whisper-4 Line must differ by at least four.
- Cages: digits in cages cannot repeat and sum to the value given in the top left corner of the cage.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
