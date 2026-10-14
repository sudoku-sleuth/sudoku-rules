---
format: open-rules
title: Tiptoe
setter: sujoyku
source: https://sudokupad.app/4nvztnv3zz
case: https://sudoku-sleuth.com/cases/tiptoe
library: https://rules.sudoku-sleuth.com/
status: read
exported: 39ff8eff6bc78296f28d8843e8c991cd
---

```rules
sudoku 9x9
cage-1: cage r9c8-r9c9 total 12 connected true
cage-2: cage r7c7-r8c7 total 12 connected true
cage-3: cage r6c5-r6c6 total 12 connected true
cage-4: cage r4c4-r5c4 total 12 connected true
cage-5: cage r3c2-r3c3 total 12 connected true
cage-6: cage r1c1-r2c1 total 12 connected true
cage-7: cage r4c1-r5c1 total 11 connected true
cage-8: cage r6c2-r6c3 total 11 connected true
cage-9: cage r7c4-r8c4 total 11 connected true
cage-10: cage r9c5-r9c6 total 11 connected true
cage-11: cage r1c4-r2c4 total 13 connected true
cage-12: cage r3c5-r3c6 total 13 connected true
cage-13: cage r4c7-r5c7 total 13 connected true
cage-14: cage r6c8-r6c9 total 13 connected true
cage-15: cage r7c1-r7c2 total 11 connected true
cage-16: cage r8c3-r9c3 total 8 connected true
cage-17: cage r1c7-r2c7 total 14 connected true
cage-18: cage r3c8-r3c9 total 8 connected true
whispers-1: whispers r9c4-r8c5-r7c6-r6c7-r5c8-r4c9 gap 5
whispers-2: whispers r6c1-r5c2-r4c3-r3c4-r2c5-r1c6 gap 5
entropic r9c1-r8c2-r7c3-r6c4-r5c5-r4c6-r3c7-r2c8-r1c9
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 box has to contain the digits from 1 to 9 once each.

- Killer cages: Digits in a cage sum to the clue in the top left.

- German Whispers: Adjacent digits on a green line must differ by at least 5.

- Entropic Lines: Every set of three adjacent digits on an orange line must include a low digit (1, 2, 3), a medium digit (4, 5, 6), and a high digit (7, 8, 9).
