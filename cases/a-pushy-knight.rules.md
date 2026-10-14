---
format: open-rules
title: A Pushy Knight
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/gpk5jlsjpa
case: https://sudoku-sleuth.com/cases/a-pushy-knight
library: https://rules.sudoku-sleuth.com/
status: read
exported: d9cd18a2e953d0449c2f09530d7ce5e5
---

```rules
sudoku 9x9
cage-1: cage r2c1-r2c2-r2c3 total 8 connected true
cage-2: cage r1c8-r2c8-r3c8 total 8 connected true
cage-3: cage r8c7-r8c8-r8c9 total 8 connected true
cage-4: cage r7c2-r8c2-r9c2 total 8 connected true
cage-5: cage r4c5-r5c4-r5c5-r5c6-r6c5 total 15 connected true
cage-6: cage r3c2-r4c2-r5c2 total 23 connected true
cage-7: cage r5c8-r6c8-r7c8 total 22 connected true
cage-8: cage r8c3-r8c4-r8c5 total 24 connected true
cage-9: cage r2c5-r2c6-r2c7 total 21 connected true
cage-10: cage r1c3-r1c4-r2c4 total 13 connected true
cage-11: cage r3c9-r4c8-r4c9 total 14 connected true
cage-12: cage r8c6-r9c6-r9c7 total 16 connected true
cage-13: cage r6c1-r6c2-r7c1 total 15 connected true
cage-14: cage r6c3-r7c3 total 9 connected true
cage-15: cage r3c3-r3c4 total 8 connected true
cage-16: cage r3c7-r4c7 total 5 connected true
cage-17: cage r7c6-r7c7 total 6 connected true
anti-knight
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Anti-knight: Cells that are a chess knight’s move apart cannot contain the same digit.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
