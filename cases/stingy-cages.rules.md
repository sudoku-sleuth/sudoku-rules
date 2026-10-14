---
format: open-rules
title: Stingy Cages
setter: sujoyku
source: https://sudokupad.app/4bw04xktgn
case: https://sudoku-sleuth.com/cases/stingy-cages
library: https://rules.sudoku-sleuth.com/
status: read
exported: 82f2680e87311a528fc3751b7fa7c75e
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 21 connected true
cage-2: cage r4c4-r4c5-r5c4 total 21 connected true
cage-3: cage r7c7-r7c8-r8c7 total 21 connected true
cage-4: cage r8c3-r9c2-r9c3 total 9 connected true
cage-5: cage r5c6-r6c5-r6c6 total 9 connected true
cage-6: cage r2c9-r3c8-r3c9 total 9 connected true
cage-7: cage r1c4-r1c5 total 13 connected true
cage-8: cage r9c5-r9c6 total 7 connected true
cage-9: cage r7c1-r8c1 total 12 connected true
cage-10: cage r2c3-r3c3 total 8 connected true
cage-11: cage r9c7-r9c8 total 11 connected true
cage-12: cage r1c7-r2c7 total 15 connected true
cage-13: cage r6c2-r6c3 total 11 connected true
cage-14: cage r4c8-r5c8 total 11 connected true
cage-15: cage r7c4-r7c5 total 5 connected true
```

Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each. Digits in a cage must sum to the clue in the top left. STINGY CONDITION: Any two killer cages can have at most one digit in common. For example, if a cage contains the digits 1 and 2, no other cage may have both of these digits.
