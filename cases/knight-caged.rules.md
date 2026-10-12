---
format: open-rules
title: Knight caged
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/njkkqsvgy1
case: https://sudoku-sleuth.com/cases/knight-caged
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c3-r3c2-r3c3 total 6 connected true
cage-2: cage r3c4-r4c3-r4c4 total 7 connected true
cage-3: cage r5c2-r5c3 total 5 connected true
cage-4: cage r6c3-r6c4-r7c4 total 23 connected true
cage-5: cage r7c2-r7c3-r8c3 total 20 connected true
cage-6: cage r8c2-r9c2 total 11 connected true
cage-7: cage r1c8-r2c8 total 8 connected true
cage-8: cage r2c7-r3c7-r3c8 total 24 connected true
cage-9: cage r3c6-r4c6-r4c7 total 23 connected true
cage-10: cage r5c7-r5c8 total 9 connected true
cage-11: cage r6c6-r6c7-r7c6 total 7 connected true
cage-12: cage r7c7-r7c8-r8c7 total 6 connected true
anti-knight
```

- Normal Sudoku rules apply.

- Digits in cages must sum to the number in the top left corner of the cage. Digits may not repeat within cages.

- Cells that are a knight's move apart (in chess) may not contain the same digit.
