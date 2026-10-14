---
format: open-rules
title: Fitting like a glove
setter: sujoyku
source: https://tinyurl.com/2x52ac6m
case: https://sudoku-sleuth.com/cases/fitting-like-a-glove
library: https://rules.sudoku-sleuth.com/
status: read
exported: 65d433d42d86d40a6ac72ecb240a7daa
---

```rules
sudoku 9x9
cage-1: cage r9c1-r9c2 total 7 connected true
cage-2: cage r9c3-r9c4 total 10 connected true
cage-3: cage r7c2-r8c2-r8c3 total 15 connected true
cage-4: cage r7c1-r8c1 total 13 connected true
cage-5: cage r6c3-r7c3 total 8 connected true
cage-6: cage r4c3-r5c3 total 12 connected true
cage-7: cage r4c1-r4c2 total 10 connected true
cage-8: cage r5c1-r5c2-r6c2 total 15 connected true
cage-9: cage r1c2-r2c2-r3c2 total 8 connected true
cage-10: cage r8c7-r8c8-r8c9 total 20 connected true
cage-11: cage r1c4-r2c4-r3c3-r3c4-r3c5-r4c5 total 35 connected true
cage-12: cage r1c6-r1c7 total 15 connected true
cage-13: cage r1c8-r1c9 total 8 connected true
cage-14: cage r2c9-r3c9 total 7 connected true
cage-15: cage r3c7-r4c7 total 12 connected true
cage-16: cage r2c7-r2c8-r3c8 total 15 connected true
cage-17: cage r4c8-r5c8-r5c9 total 12 connected true
cage-18: cage r5c7-r6c7 total 10 connected true
cage-19: cage r6c8-r6c9 total 11 connected true
```

Normal sudoku rules apply. Digits in a cage do not repeat and sum to the clue in the top left.
