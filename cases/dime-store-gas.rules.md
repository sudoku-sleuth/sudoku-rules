---
format: open-rules
title: Dime Store Gas
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/kucztvtnlp
case: https://sudoku-sleuth.com/cases/dime-store-gas
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c4=2 r9c6=1
exported: 28df9dcc88673b7458c50ada27347a48
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 10 connected true
cage-2: cage r1c4-r1c5-r2c4 total 10 connected true
cage-3: cage r1c7-r1c8-r2c7 total 10 connected true
cage-4: cage r4c1-r4c2-r5c1 total 10 connected true
cage-5: cage r4c4-r4c5-r5c4 total 10 connected true
cage-6: cage r4c7-r4c8-r5c7 total 10 connected true
cage-7: cage r7c1-r7c2-r8c1 total 10 connected true
cage-8: cage r7c4-r7c5-r8c4 total 10 connected true
cage-9: cage r7c7-r7c8-r8c7 total 10 connected true
cage-10: cage r2c3-r3c3 total 10 connected true
cage-11: cage r5c8-r5c9 total 10 connected true
cage-12: cage r3c4-r3c5 total 10 connected true
cage-13: cage r5c5-r6c5 total 10 connected true
cage-14: cage r2c8-r2c9 total 10 connected true
cage-15: cage r6c3-r7c3 total 10 connected true
cage-16: cage r2c2-r3c2 total 10 connected true
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages must sum to the value shown in the upper left corner of the cage.
