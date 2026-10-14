---
format: open-rules
title: Barred Knight
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/596w2orjs8
case: https://sudoku-sleuth.com/cases/barred-knight
library: https://rules.sudoku-sleuth.com/
status: read
exported: d9cd1b8ba7e9f388c3f417d375dffea7
---

```rules
sudoku 9x9
cage-1: cage r2c3-r3c2-r3c3 total 7 connected true
cage-2: cage r7c7-r7c8-r8c7 total 7 connected true
cage-3: cage r2c7-r3c7-r3c8 total 23 connected true
cage-4: cage r7c2-r7c3-r8c3 total 23 connected true
cage-5: cage r2c5-r3c5-r4c5 total 6 connected true
cage-6: cage r5c6-r5c7-r5c8 total 24 connected true
cage-7: cage r6c5-r7c5-r8c5 total 17 connected true
cage-8: cage r5c2-r5c3-r5c4 total 8 connected true
cage-9: cage r1c1-r1c2-r2c1 total 19 connected true
cage-10: cage r8c9-r9c8-r9c9 total 24 connected true
cage-11: cage r3c9-r4c8-r4c9 total 13 connected true
cage-12: cage r6c1-r6c2-r7c1 total 14 connected true
cage-13: cage r8c1-r9c1-r9c2 total 13 connected true
cage-14: cage r1c8-r1c9-r2c9 total 8 connected true
anti-knight
```

**Sudoku, Anti-knight, Cages**

Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
Cages: Digits add to the total in the top left corner of the cage, if given. Digits cannot repeat in cages.
Anti-knight: Cells that are a chess knight’s move apart cannot contain the same digit.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
