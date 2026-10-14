---
format: open-rules
title: Touch Me Not
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/aasvu64l71
case: https://sudoku-sleuth.com/cases/touch-me-not
library: https://rules.sudoku-sleuth.com/
status: read
exported: f6e5546ab2b042328043e0b0c3e4e610
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r4c3 total 7 connected true
cage-2: cage r1c4-r2c4 total 5 connected true
cage-3: cage r3c6-r3c7-r4c7 total 22 connected true
cage-4: cage r6c7-r7c6-r7c7 total 11 connected true
cage-5: cage r4c8-r4c9 total 10 connected true
cage-6: cage r8c6-r9c6 total 16 connected true
cage-7: cage r7c1-r7c2 total 13 connected true
cage-8: cage r6c3-r7c3 total 10 connected true
cage-9: cage r4c1-r4c2 total 10 connected true
cage-10: cage r6c8-r6c9 total 14 connected true
cage-11: cage r1c6-r2c6 total 8 connected true
negative relations [{"op":"difference","value":1}] except []
```

- Normal sudoku rules apply.
- Nonconsecutive: Orthogonally adjacent digits cannot be consecutive.
- Cages: Within cages, digits cannot repeat and must sum to the value shown in the upper left corner of the cage.
