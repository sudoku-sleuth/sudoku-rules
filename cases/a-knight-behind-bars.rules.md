---
format: open-rules
title: A Knight Behind Bars
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/pb9ruhw25b
case: https://sudoku-sleuth.com/cases/a-knight-behind-bars
library: https://rules.sudoku-sleuth.com/
status: read
exported: c60c61d2779985bf52004d68ccad0953
---

```rules
sudoku 9x9
cage-1: cage r1c3-r2c3-r3c3 total 6 connected true
cage-2: cage r1c7-r2c7-r3c7 total 8 connected true
cage-3: cage r2c4-r2c5-r2c6 total 7 connected true
cage-4: cage r7c3-r8c3-r9c3 total 24 connected true
cage-5: cage r7c7-r8c7-r9c7 total 22 connected true
cage-6: cage r8c4-r8c5-r8c6 total 21 connected true
cage-7: cage r5c2-r5c3 total 5 connected true
cage-8: cage r5c7-r5c8 total 12 connected true
cage-9: cage r2c1-r3c1 total 16 connected true
cage-10: cage r2c9-r3c9 total 15 connected true
cage-11: cage r8c1-r9c1 total 6 connected true
cage-12: cage r8c9-r9c9 total 7 connected true
anti-knight
```

**Sudoku, Cages, Anti-knight**

Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
Cages: Digits add to the total in the top left corner of the cage, if given. Digits cannot repeat in cages.
Anti-knight: Cells that are a chess knight’s move apart cannot contain the same digit.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
