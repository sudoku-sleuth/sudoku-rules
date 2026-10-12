---
format: open-rules
title: Five of a Kind
setter: Kennet's Dad
source: https://sudokupad.app/m8evrtjkg2
case: https://sudoku-sleuth.com/cases/five-of-a-kind
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c2-r2c3 total 10 connected true
cage-2: cage r4c1-r4c2 total 5 connected true
cage-3: cage r2c7-r2c8 total 5 connected true
cage-4: cage r6c8-r6c9 total 5 connected true
cage-5: cage r8c7-r8c8 total 7 connected true
cage-6: cage r9c2-r9c3 total 14 connected true
cage-7: cage r8c2-r8c3 total 5 connected true
cage-8: cage r5c5-r5c6-r6c5 total 18 connected true
anti-knight
anti-king
little-killer r1c2-r2c1 sum 4
```

Anti-knight, Anti-king, Killer cages, Little killer

Normal sudoku rules apply. Digits in cells a knight's move apart in chess must not repeat. Digits in cells a king's move apart in chess must not repeat. Digits along a marked diagonal must sum to the number given outside the grid. Digits in a cage must sum to the number given.
