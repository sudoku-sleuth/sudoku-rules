---
format: open-rules
title: Whereabouts
setter: sujoyku
source: https://sudokupad.app/iymuckpv7t
case: https://sudoku-sleuth.com/cases/whereabouts
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r7c2-r7c3-r8c2-r8c3 total 13 connected true
cage-2: cage r4c1-r5c1 total 14 connected true
cage-3: cage r9c5-r9c6 total 14 connected true
cage-4: cage r8c1-r9c1-r9c2 total 20 connected true
cage-5: cage r2c1-r3c1 total 8 connected true
cage-6: cage r9c7-r9c8 total 10 connected true
cage-7: cage r1c4-r1c5 total 6 connected true
cage-8: cage r5c9-r6c9 total 5 connected true
cage-9: cage r2c7-r2c8-r3c7-r3c8 total 25 connected true
cage-10: cage r1c8-r1c9-r2c9 total 14 connected true
cage-11: cage r5c3-r5c4 total 11 connected true
cage-12: cage r5c6-r5c7 total 10 connected true
cage-13: cage r6c5-r7c5-r8c5 total 12 connected true
cage-14: cage r2c5-r3c5-r4c5 total 12 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Diagonals: On the main diagonals, digits do not repeat.

- Killer cages: Digits in a cage sum to the clue in the top left.
