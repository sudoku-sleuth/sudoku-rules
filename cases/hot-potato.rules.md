---
format: open-rules
title: Hot Potato
setter: sujoyku
source: https://sudokupad.app/w0298g25jm
case: https://sudoku-sleuth.com/cases/hot-potato
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c2-r4c2 total 11 connected true
cage-2: cage r5c2-r5c3 total 8 connected true
cage-3: cage r6c3-r7c3 total 11 connected true
cage-4: cage r2c1-r2c2 total 13 connected true
cage-5: cage r8c3-r8c4 total 10 connected true
cage-6: cage r8c5-r9c5 total 7 connected true
cage-7: cage r1c5-r2c5 total 6 connected true
cage-8: cage r2c6-r2c7 total 11 connected true
cage-9: cage r3c7-r4c7 total 15 connected true
cage-10: cage r5c7-r5c8 total 12 connected true
cage-11: cage r6c8-r7c8 total 10 connected true
cage-12: cage r8c8-r8c9 total 12 connected true
cage-13: cage r1c2-r1c3-r1c4 total 10 connected true
cage-14: cage r5c6-r6c6-r7c5-r7c6 total 16 connected true
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer cages: Digits in a cage do not repeat and sum to the clue in the top left. Moreover, if cages are adjacent to each other (i.e. share an edge), they have to contain at least one common digit.
