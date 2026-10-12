---
format: open-rules
title: Banned cages
setter: sujoyku
source: https://tinyurl.com/mvxsecyw
case: https://sudoku-sleuth.com/cases/banned-cages
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c1-r5c1-r6c1 total 9 connected true
cage-2: cage r3c4-r4c3-r4c4 total 10 connected true
cage-3: cage r3c6-r4c6-r4c7 total 10 connected true
cage-4: cage r9c4-r9c5-r9c6 total 13 connected true
cage-5: cage r6c6-r6c7-r7c6 total 10 connected true
cage-6: cage r6c3-r6c4-r7c4 total 22 connected true
cage-7: cage r8c8-r9c8 total 7 connected true
cage-8: cage r8c2-r9c2 total 11 connected true
cage-9: cage r1c2-r2c2 total 10 connected true
cage-10: cage r1c8-r2c8 total 10 connected true
cage-11: cage r4c9-r5c9-r6c9 total 16 connected true
cage-12: cage r1c4-r1c5-r1c6 total 19 connected true
renban-1: renban r7c1-r6c2-r5c2-r4c2-r3c1
renban-2: renban r1c3-r2c4-r2c5-r2c6-r1c7
renban-3: renban r9c3-r8c4-r8c5-r8c6-r9c7
renban-4: renban r7c9-r6c8-r5c8-r4c8-r3c9
```

Normal sudoku rules apply. Digits in a cage do not repeat and sum to the clue in the top left. Each purple line contains a set of consecutive non-repeating digits in any order.
