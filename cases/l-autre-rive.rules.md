---
format: open-rules
title: L'autre rive
setter: sujoyku
source: https://sudokupad.app/6hs0gpwaue
case: https://sudoku-sleuth.com/cases/l-autre-rive
library: https://rules.sudoku-sleuth.com/
status: read
exported: bc697f21340e313657de08b392fe10b3
---

```rules
sudoku 9x9
cage-1: cage r1c3-r1c4 total 12 connected true
cage-2: cage r1c6-r1c7 total 12 connected true
cage-3: cage r9c3-r9c4 total 12 connected true
cage-4: cage r9c6-r9c7 total 12 connected true
cage-5: cage r3c1-r4c1 total 14 connected true
cage-6: cage r6c1-r7c1 total 14 connected true
cage-7: cage r3c9-r4c9 total 14 connected true
cage-8: cage r6c9-r7c9 total 14 connected true
cage-9: cage r7c5-r8c5 total 13 connected true
cage-10: cage r2c5-r3c5 total 11 connected true
cage-11: cage r5c2-r5c3 total 12 connected true
cage-12: cage r5c7-r5c8 total 10 connected true
kropki-1: kropki r1c1-r1c2 black
kropki-2: kropki r1c8-r1c9 black
kropki-3: kropki r4c4-r5c4 black
kropki-4: kropki r5c6-r6c6 black
kropki-5: kropki r1c1-r2c1 black
kropki-6: kropki r3c7-r3c8 black
kropki-7: kropki r9c1-r9c2 white
kropki-8: kropki r9c8-r9c9 white
kropki-9: kropki r6c3-r6c4 white
kropki-10: kropki r4c6-r4c7 white
kropki-11: kropki r8c9-r9c9 white
kropki-12: kropki r7c2-r7c3 white
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer Cages: Digits in a cage must sum to the clue in the top left.

- Kropki: Digits joined by a black dot have a 1:2 ratio. Digits joined by a white dot are consecutive. (Not all dots are given.)
