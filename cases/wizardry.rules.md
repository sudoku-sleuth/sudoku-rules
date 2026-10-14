---
format: open-rules
title: Wizardry
setter: Blobz
source: https://sudokupad.app/blobz/wizardry
case: https://sudoku-sleuth.com/cases/wizardry
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c5=7
exported: fd674d49254a10989147eb90dec4a098
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1-r3c1-r3c2-r3c3-r4c1-r4c3-r5c1-r5c3 connected true
cage-2: cage r1c2-r1c3 total 17 connected true
cage-3: cage r1c4-r2c3-r2c4 total 8 connected true
cage-4: cage r1c5-r1c6 total 7 connected true
cage-5: cage r2c5-r3c4-r3c5 total 21 connected true
cage-6: cage r2c6-r3c6-r4c5-r4c6-r5c5-r6c4-r6c5-r7c4-r8c4 connected true
cage-7: cage r1c8-r2c7-r2c8-r2c9-r3c7-r3c8-r4c7-r4c8 total 44 connected true
cage-8: cage r3c9-r4c9 total 14 connected true
cage-9: cage r5c7-r5c8-r5c9-r6c7-r6c9-r7c7-r7c8-r8c7-r9c7 connected true
cage-10: cage r7c9-r8c9-r9c9 total 17 connected true
cage-11: cage r8c8-r9c8 total 3 connected true
cage-12: cage r8c6-r9c6 total 7 connected true
cage-13: cage r5c6-r6c6-r7c5-r7c6-r8c5-r9c5 total 33 connected true
cage-14: cage r6c1-r7c1-r8c1-r8c3-r9c1-r9c2-r9c3 total 38 connected true
cage-15: cage r7c2-r8c2 total 7 connected true
cage-16: cage r6c2-r6c3 total 11 connected true
cage-17: cage r4c2-r5c2 total 11 connected true
cage-18: cage r4c4-r5c4 total 10 connected true
kropki-1: kropki r1c8-r2c8 white
kropki-2: kropki r4c7-r5c7 white
kropki-3: kropki r7c5-r8c5 white
kropki-4: kropki r3c2-r3c3 white
```

Normal sudoku rules apply.

Digits in cages do not repeat, and must sum to the small clue, if given.

White dots separate consecutive digits; not all such dots are given.
