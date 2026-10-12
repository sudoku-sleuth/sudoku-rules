---
format: open-rules
title: Fish and Chips
setter: sujoyku
source: https://sudokupad.app/7b80ibv08q
case: https://sudoku-sleuth.com/cases/fish-and-chips-2
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 7 connected true
cage-2: cage r1c4-r1c5 total 7 connected true
cage-3: cage r1c7-r1c8 total 7 connected true
cage-4: cage r3c1-r3c2 total 8 connected true
cage-5: cage r3c4-r3c5 total 8 connected true
cage-6: cage r3c7-r3c8 total 8 connected true
cage-7: cage r5c1-r5c2 total 9 connected true
cage-8: cage r5c4-r5c5 total 9 connected true
cage-9: cage r5c7-r5c8 total 9 connected true
cage-10: cage r7c1-r7c2 total 10 connected true
cage-11: cage r7c4-r7c5 total 10 connected true
cage-12: cage r7c7-r7c8 total 10 connected true
cage-13: cage r9c1-r9c2 total 11 connected true
cage-14: cage r9c4-r9c5 total 11 connected true
cage-15: cage r9c7-r9c8 total 11 connected true
cage-16: cage r6c3-r7c3 total 15 connected true
cage-17: cage r5c6-r6c6 total 14 connected true
cage-18: cage r4c9-r5c9 total 13 connected true
cage-19: cage r2c2-r2c3-r2c4 total 20 connected true
cage-20: cage r8c2-r8c3-r8c4 total 15 connected true
cage-21: cage r4c5-r4c6-r4c7 total 20 connected true
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer Cages: Digits in a cage must sum to the clue in the top left.
