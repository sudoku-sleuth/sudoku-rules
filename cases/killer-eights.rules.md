---
format: open-rules
title: Killer Eights
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/59tv21npgz
case: https://sudoku-sleuth.com/cases/killer-eights
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c6=8 r9c4=8
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3 total 8 connected true
cage-2: cage r1c4-r2c4-r3c4 total 8 connected true
cage-3: cage r4c4-r4c5-r4c6 total 8 connected true
cage-4: cage r4c7-r5c7-r6c7 total 8 connected true
cage-5: cage r8c7-r8c8-r8c9 total 8 connected true
cage-6: cage r9c1-r9c2-r9c3 total 8 connected true
cage-7: cage r7c3-r7c4 total 8 connected true
cage-8: cage r2c8-r3c8 total 8 connected true
cage-9: cage r7c5-r8c5 total 8 connected true
cage-10: cage r2c7-r3c7 total 8 connected true
anti-knight
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Anti-knight: Cells that are a chess knight’s move apart cannot contain the same digit.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
