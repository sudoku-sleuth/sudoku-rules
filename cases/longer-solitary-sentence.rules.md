---
format: open-rules
title: Longer Solitary Sentence
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ys78k7e8ao
case: https://sudoku-sleuth.com/cases/longer-solitary-sentence
library: https://rules.sudoku-sleuth.com/
status: read
exported: f5a95e5062d0baff013599d6c91f1eda
---

```rules
sudoku 9x9
cage-1: cage r2c3-r3c2-r3c3 total 7 connected true
cage-2: cage r7c7-r7c8-r8c7 total 7 connected true
cage-3: cage r5c4-r6c4-r6c5 total 7 connected true
cage-4: cage r8c1-r8c2-r9c2 total 7 connected true
cage-5: cage r4c8-r5c8-r5c9 total 7 connected true
cage-6: cage r1c5-r2c5-r2c6 total 7 connected true
cage-7: cage r5c7-r6c7-r6c8 total 22 connected true
cage-8: cage r4c2-r5c1-r5c2 total 22 connected true
cage-9: cage r1c8-r2c8-r2c9 total 22 connected true
negative relations [{"op":"difference","value":1}] except []
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages must sum to the value shown in the upper left corner of the cage.
- Nonconsecutive: Digits in orthogonally adjacent cells cannot be consecutive.
