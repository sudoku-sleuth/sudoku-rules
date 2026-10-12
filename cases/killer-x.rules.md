---
format: open-rules
title: Killer X
setter: Blobz
source: https://sudokupad.app/ovdg02go4b
case: https://sudoku-sleuth.com/cases/killer-x
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c5=6 r5c2=1 r5c8=8 r8c5=5
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r4c3 total 22 connected true
cage-2: cage r3c6-r3c7-r4c7 total 22 connected true
cage-3: cage r6c3-r7c3-r7c4 total 22 connected true
cage-4: cage r6c7-r7c6-r7c7 total 22 connected true
cage-5: cage r1c8-r1c9-r2c9 total 22 connected true
cage-6: cage r1c1-r1c2-r2c1 total 22 connected true
cage-7: cage r8c1-r9c1-r9c2 total 22 connected true
cage-8: cage r8c9-r9c8-r9c9 total 22 connected true
cage-9: cage r4c1-r5c1-r6c1 total 12 connected true
cage-10: cage r4c9-r5c9-r6c9 total 9 connected true
cage-11: cage r1c4-r1c5-r1c6 total 10 connected true
cage-12: cage r9c4-r9c5-r9c6 total 15 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
kropki r6c8-r7c8 colour "white"
```

Normal sudoku rules apply.

Digits in cages do not repeat and must sum to the clue given in the top left corner.

Digits do not repeat on the main diagonals.

Digits separated by a white dot are consecutive. Not all such dots are shown.
