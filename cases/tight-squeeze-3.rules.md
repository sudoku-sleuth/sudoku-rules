---
format: open-rules
title: Tight squeeze
setter: sujoyku
source: https://sudokupad.app/16b11h7m2r
case: https://sudoku-sleuth.com/cases/tight-squeeze-3
library: https://rules.sudoku-sleuth.com/
status: read
exported: ae14da16970bb0e3a8f6749491516156
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 10 connected true
cage-2: cage r1c3-r1c4-r2c2-r2c3-r3c1-r3c2-r4c1 total 30 connected true
cage-3: cage r8c9-r9c8-r9c9 total 11 connected true
cage-4: cage r6c9-r7c8-r7c9-r8c7-r8c8-r9c6-r9c7 total 31 connected true
cage-5: cage r8c2-r8c3-r8c4 total 10 connected true
cage-6: cage r3c9-r4c8-r4c9-r5c8-r5c9-r6c8 total 30 connected true
cage-7: cage r3c6-r3c7-r3c8 total 20 connected true
cage-8: cage r4c2-r5c1-r5c2-r6c1-r6c2-r7c1 total 36 connected true
cage-9: cage r3c4-r4c4-r4c5 total 12 connected true
cage-10: cage r6c5-r7c4-r7c5 total 22 connected true
cage-11: cage r4c6-r5c5-r5c6-r5c7 total 20 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
```

Normal sudoku rules apply. Digits in a cage do not repeat and sum to the clue in the top left. On the main diagonals digits do not repeat.
