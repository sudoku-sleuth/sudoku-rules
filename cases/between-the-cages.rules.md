---
format: open-rules
title: Between the Cages
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/oofa0j20vz
case: https://sudoku-sleuth.com/cases/between-the-cages
library: https://rules.sudoku-sleuth.com/
status: read
exported: a8b8c45cff1e604f7157e3ad66c84029
---

```rules
sudoku 9x9
cage-1: cage r5c4-r5c5-r5c6 total 6 connected true
cage-2: cage r1c7-r1c8 total 3 connected true
cage-3: cage r9c3-r9c4 total 15 connected true
cage-4: cage r2c9-r3c9 total 8 connected true
cage-5: cage r5c8-r5c9 total 13 connected true
cage-6: cage r1c5-r2c5 total 13 connected true
cage-7: cage r8c5-r9c5 total 8 connected true
cage-8: cage r6c4-r6c5-r6c6-r7c4 total 25 connected true
between-1: between r1c2-r1c3-r1c4-r1c5-r1c6-r1c7 ends ["r1c1","r1c8"]
between-2: between r2c9-r3c9-r4c9-r5c9-r6c9-r7c9 ends ["r1c9","r8c9"]
between-3: between r9c8-r9c7-r9c6-r9c5-r9c4-r9c3 ends ["r9c9","r9c2"]
between-4: between r3c1-r4c1-r5c1-r6c1-r7c1-r8c1 ends ["r2c1","r9c1"]
between-5: between r2c3-r2c4-r2c5-r2c6 ends ["r2c2","r2c7"]
between-6: between r3c8-r4c8-r5c8-r6c8 ends ["r2c8","r7c8"]
between-7: between r8c7-r8c6-r8c5-r8c4 ends ["r8c8","r8c3"]
between-8: between r4c2-r5c2-r6c2-r7c2 ends ["r3c2","r8c2"]
between-9: between r3c5 ends ["r3c4","r3c6"]
between-10: between r7c5 ends ["r7c4","r7c6"]
between-11: between r4c4-r4c5-r4c6 ends ["r4c3","r4c7"]
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
-Between Lines: Digits placed on Between Lines must be strictly between the digits placed in the circles at the ends of those lines.
-Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
