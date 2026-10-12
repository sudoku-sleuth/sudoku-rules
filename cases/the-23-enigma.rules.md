---
format: open-rules
title: The 23 Enigma
setter: sujoyku
source: https://sudokupad.app/qhybrqkov4
case: https://sudoku-sleuth.com/cases/the-23-enigma
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3-r1c4-r1c5 total 23 connected true
cage-2: cage r2c3-r2c4-r3c2-r3c3 total 23 connected true
cage-3: cage r1c1-r2c1-r2c2-r3c1 total 23 connected true
cage-4: cage r2c6-r3c5-r3c6-r4c6 total 23 connected true
cage-5: cage r6c4-r7c4-r7c5-r8c4 total 23 connected true
cage-6: cage r9c5-r9c6-r9c7-r9c8 total 23 connected true
cage-7: cage r7c9-r8c8-r8c9-r9c9 total 23 connected true
cage-8: cage r7c7-r7c8-r8c6-r8c7 total 23 connected true
cage-9: cage r4c4-r5c4-r5c5-r5c6-r6c6 total 23 connected true
cage-10: cage r8c1-r9c1-r9c2 total 23 connected true
cage-11: cage r4c1-r5c1-r5c2-r5c3-r6c2-r6c3 total 23 connected true
cage-12: cage r4c7-r4c8-r5c8-r5c9-r6c8-r6c9 total 23 connected true
cage-13: cage r6c1-r7c1-r7c2-r7c3-r8c3 total 23 connected true
cage-14: cage r1c8-r2c8-r2c9-r3c7-r3c8 total 23 connected true
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer cages: Digits in a cage do not repeat and must sum to 23.
