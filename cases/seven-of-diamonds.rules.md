---
format: open-rules
title: Seven of Diamonds
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/c2fa6axo3m
case: https://sudoku-sleuth.com/cases/seven-of-diamonds
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c7-r2c8-r2c9 total 23 connected true
cage-2: cage r5c1-r5c2-r5c3 total 15 connected true
cage-3: cage r5c7-r5c8-r5c9 total 15 connected true
cage-4: cage r4c5-r5c5-r6c5 total 15 connected true
cage-5: cage r8c1-r8c2-r8c3 total 24 connected true
cage-6: cage r2c1-r2c2-r2c3 total 6 connected true
cage-7: cage r8c7-r8c8-r8c9 total 7 connected true
cage-8: cage r6c2-r7c2 total 6 connected true
cage-9: cage r3c2-r4c2 total 10 connected true
cage-10: cage r3c8-r4c8 total 8 connected true
cage-11: cage r6c8-r7c8 total 13 connected true
cage-12: cage r3c3-r3c4 total 5 connected true
cage-13: cage r3c6-r3c7 total 11 connected true
cage-14: cage r7c3-r7c4 total 7 connected true
cage-15: cage r7c6-r7c7 total 9 connected true
cage-16: cage r4c3-r4c4 total 8 connected true
cage-17: cage r6c6-r6c7 total 11 connected true
nabner-1: nabner r2c1-r1c2-r2c3-r3c2 distinct true
nabner-2: nabner r2c7-r1c8-r2c9-r3c8 distinct true
nabner-3: nabner r5c1-r4c2-r5c3-r6c2 distinct true
nabner-4: nabner r5c7-r4c8-r5c9-r6c8 distinct true
nabner-5: nabner r8c1-r7c2-r8c3-r9c2 distinct true
nabner-6: nabner r8c7-r7c8-r8c9-r9c8 distinct true
nabner-7: nabner r5c4-r4c5-r5c6-r6c5 distinct true
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Nabners: Digits along a Nabner cannot repeat and no pair of digits along the line can be consecutive, regardless  of position on the line.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
