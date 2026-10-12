---
format: open-rules
title: Torque
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/sy55ff86i3
case: https://sudoku-sleuth.com/cases/torque
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c4-r3c4-r4c2-r4c3-r4c4 total 15 connected true
cage-2: cage r1c1-r1c2-r2c1 total 23 connected true
cage-3: cage r6c6-r6c7-r6c8-r7c6-r8c6 total 35 connected true
cage-4: cage r8c9-r9c8-r9c9 total 7 connected true
cage-5: cage r6c3-r6c4-r7c3 total 16 connected true
cage-6: cage r3c7-r4c6-r4c7 total 20 connected true
cage-7: cage r8c2-r9c1-r9c2 total 24 connected true
cage-8: cage r1c8-r1c9-r2c8 total 9 connected true
cage-9: cage r7c7-r7c8-r8c7 total 23 connected true
nabner-1: nabner r1c3-r2c4-r3c4-r4c5 distinct true
nabner-2: nabner r5c4-r4c3-r4c2-r3c1 distinct true
nabner-3: nabner r6c5-r7c6-r8c6-r9c7 distinct true
nabner-4: nabner r5c6-r6c7-r6c8-r7c9 distinct true
nabner-5: nabner r9c1-r8c1-r8c2-r7c3-r6c4 distinct true
nabner-6: nabner r4c6-r3c7-r2c8-r1c8 distinct true
nabner-7: nabner r7c7-r8c7 distinct true
nabner-8: nabner r2c3-r3c3 distinct true
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Nabner line: No two digits along a Nabner line can be consecutive, regardless of their position on the line. Digits may not repeat on Nabner lines.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
