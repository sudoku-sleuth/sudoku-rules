---
format: open-rules
title: Solitary Confinement
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/1x05zagpv1
case: https://sudoku-sleuth.com/cases/solitary-confinement
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0f69d876f4aa752fc6facf219a94171d
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 7 connected true
cage-2: cage r1c8-r1c9-r2c9 total 8 connected true
cage-3: cage r8c9-r9c8-r9c9 total 8 connected true
cage-4: cage r8c1-r9c1-r9c2 total 19 connected true
cage-5: cage r2c3-r3c2-r3c3 total 14 connected true
cage-6: cage r2c7-r3c7-r3c8 total 16 connected true
cage-7: cage r4c8-r4c9-r5c9 total 23 connected true
cage-8: cage r5c1-r5c2-r6c2 total 23 connected true
negative relations [{"op":"difference","value":1}] except []
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages must sum to the value shown in the upper left corner of the cage.
- Nonconsecutive: Digits in orthogonally adjacent cells cannot be consecutive.
