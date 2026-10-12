---
format: open-rules
title: Nabbed killers
setter: sujoyku
source: https://tinyurl.com/y539ya9e
case: https://sudoku-sleuth.com/cases/nabbed-killers
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3-r2c3 total 19 connected true
cage-2: cage r2c1-r3c1-r3c2 total 13 connected true
cage-3: cage r4c1-r4c2-r5c1-r6c1 total 19 connected true
cage-4: cage r7c1-r7c2-r8c1 total 20 connected true
cage-5: cage r8c3-r9c2-r9c3 total 9 connected true
cage-6: cage r7c6-r8c6-r9c5-r9c6 total 21 connected true
cage-7: cage r8c7-r9c7-r9c8 total 12 connected true
cage-8: cage r7c8-r7c9-r8c9 total 18 connected true
cage-9: cage r4c7-r5c7-r6c7-r6c8 total 23 connected true
cage-10: cage r1c7-r1c8-r2c7 total 17 connected true
cage-11: cage r2c9-r3c8-r3c9 total 14 connected true
cage-12: cage r1c4-r2c4-r3c4-r3c5 total 20 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
nabner-1: nabner r1c2-r1c3-r2c3 distinct true
nabner-2: nabner r2c1-r3c1-r3c2 distinct true
nabner-3: nabner r4c2-r4c1-r5c1-r6c1 distinct true
nabner-4: nabner r8c1-r7c1-r7c2 distinct true
nabner-5: nabner r9c2-r9c3-r8c3 distinct true
nabner-6: nabner r9c5-r9c6-r8c6-r7c6 distinct true
nabner-7: nabner r8c7-r9c7-r9c8 distinct true
nabner-8: nabner r7c8-r7c9-r8c9 distinct true
nabner-9: nabner r4c7-r5c7-r6c7-r6c8 distinct true
nabner-10: nabner r3c8-r3c9-r2c9 distinct true
nabner-11: nabner r1c8-r1c7-r2c7 distinct true
nabner-12: nabner r1c4-r2c4-r3c4-r3c5 distinct true
```

Normal sudoku rules apply. On the main diagonals digits do not repeat. Digits in cage sum to the clue in the top left. Golden lines are Nabner lines and do not contain repeated or consecutive digits. If for example 4 is on a Nabner line it does not contain either 3 or 5.
