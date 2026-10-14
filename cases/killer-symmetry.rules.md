---
format: open-rules
title: Killer Symmetry
setter: Dr Logic
source: https://sudokupad.app/a7fb1ne354
case: https://sudoku-sleuth.com/cases/killer-symmetry
library: https://rules.sudoku-sleuth.com/
status: read
exported: 743816bd1fba7edfe51b2ab2aaf323f3
---

```rules
sudoku 9x9
cage-1: cage r5c6-r6c5-r6c6 total 19 connected true
cage-2: cage r4c4-r4c5-r5c4 total 19 connected true
cage-3: cage r1c7-r1c8-r2c7 total 15 connected true
cage-4: cage r2c9-r3c8-r3c9 total 15 connected true
cage-5: cage r8c4-r9c3-r9c4 total 24 connected true
cage-6: cage r6c1-r6c2-r7c1 total 22 connected true
cage-7: cage r6c8-r6c9 total 10 connected true
cage-8: cage r4c7-r5c7 total 9 connected true
cage-9: cage r7c8-r8c8-r9c8 total 14 connected true
cage-10: cage r1c4-r2c4 total 10 connected true
cage-11: cage r3c1-r3c2 total 10 connected true
cage-12: cage r4c2-r5c2 total 8 connected true
diagonal direction "anti"
kropki-1: kropki r7c5-r7c6 white
kropki-2: kropki r2c2-r2c3 white
kropki-3: kropki r6c7-r6c8 black
kropki-4: kropki r2c8-r3c8 black
kropki-5: kropki r7c3-r7c4 black
kropki-6: kropki r8c8-r8c9 black
kropki-7: kropki r8c6-r9c6 black
kropki-8: kropki r1c1-r2c1 black
kropki-9: kropki r5c3-r5c4 black
```

Normal Sudoku Rules
Normal Killer Cage rules: Digits in a cage cannot repeat and must sum to the number in the top left corner of the cage (if
White dot: Digits separated by a white dot must be consecutive given).
Black dot: Digits separated by a black dot must be in a 1:2 ratio.
Not all dots are given
Digits cannot repeat along the marked diagonal
