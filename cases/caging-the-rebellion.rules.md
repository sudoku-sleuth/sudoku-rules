---
format: open-rules
title: Caging the Rebellion
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/y1ulrq1bks
case: https://sudoku-sleuth.com/cases/caging-the-rebellion
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r6c3-r7c3-r7c4 total 6 connected true
cage-2: cage r6c7-r7c6-r7c7 total 7 connected true
cage-3: cage r3c6-r3c7-r4c7 total 6 connected true
cage-4: cage r3c3-r3c4-r4c3 total 8 connected true
cage-5: cage r2c5-r3c5-r4c5 total 11 connected true
cage-6: cage r5c6-r5c7-r5c8 total 11 connected true
cage-7: cage r6c5-r7c5-r8c5 total 16 connected true
cage-8: cage r5c2-r5c3-r5c4 total 17 connected true
cage-9: cage r9c3-r9c4 total 15 connected true
cage-10: cage r9c6-r9c7 total 9 connected true
cage-11: cage r1c3-r1c4 total 7 connected true
cage-12: cage r1c6-r1c7 total 15 connected true
cage-13: cage r3c1-r4c1 total 13 connected true
cage-14: cage r6c1-r7c1 total 13 connected true
cage-15: cage r6c9-r7c9 total 13 connected true
cage-16: cage r3c9-r4c9 total 15 connected true
anti-king
```

- Normal Sudoku rules apply.
- Digits in cages cannot repeat and must sum to the value given in the top left corner.
- Anti-king: Cells a chess king's move apart must contain distinct digits
