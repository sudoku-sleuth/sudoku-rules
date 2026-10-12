---
format: open-rules
title: Overflow
setter: sujoyku
source: https://sudokupad.app/9t5zacjwsr
case: https://sudoku-sleuth.com/cases/overflow
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1 total 11 connected true
cage-2: cage r3c1-r4c1 total 12 connected true
cage-3: cage r1c3-r1c4 total 13 connected true
cage-4: cage r9c6-r9c7 total 13 connected true
cage-5: cage r6c9-r7c9 total 14 connected true
cage-6: cage r8c9-r9c9 total 8 connected true
cage-7: cage r7c7-r8c7 total 11 connected true
cage-8: cage r7c8-r8c8-r9c8 total 16 connected true
cage-9: cage r1c2-r2c2-r3c2 total 18 connected true
cage-10: cage r8c1-r9c1-r9c2 total 20 connected true
cage-11: cage r1c8-r1c9-r2c9 total 22 connected true
cage-12: cage r2c3-r3c3 total 8 connected true
cage-13: cage r3c7-r4c7 total 13 connected true
cage-14: cage r7c5-r7c6 total 15 connected true
cage-15: cage r6c3-r7c3 total 10 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
```

Normal sudoku rules apply. Digits in a cage sum to the clue in the top left. On the main diagonals digits do not repeat.
