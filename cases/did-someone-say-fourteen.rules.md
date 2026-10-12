---
format: open-rules
title: Did Someone Say Fourteen?
setter: sujoyku
source: https://sudokupad.app/8ryxjwj5zh
case: https://sudoku-sleuth.com/cases/did-someone-say-fourteen
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c1-r3c1-r3c2-r4c1 total 14 connected true
cage-2: cage r5c1-r6c1-r6c2-r7c1 total 14 connected true
cage-3: cage r8c1-r9c1-r9c2 total 14 connected true
cage-4: cage r8c4-r9c3-r9c4 total 14 connected true
cage-5: cage r8c5-r9c5-r9c6-r9c7 total 14 connected true
cage-6: cage r8c9-r9c8-r9c9 total 14 connected true
cage-7: cage r7c2-r8c2 total 14 connected true
cage-8: cage r6c4-r7c3-r7c4-r8c3 total 14 connected true
cage-9: cage r3c5-r3c6-r3c7-r3c8 total 14 connected true
cage-10: cage r2c3-r3c3-r4c2-r4c3 total 14 connected true
cage-11: cage r6c7-r6c8-r7c8-r8c8 total 14 connected true
cage-12: cage r1c6-r1c7-r1c8-r1c9 total 14 connected true
cage-13: cage r4c6-r4c7-r4c8-r5c6 total 14 connected true
cage-14: cage r6c5-r7c5 total 14 connected true
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer cages: Digits in a cage do not repeat and must sum to 14.
