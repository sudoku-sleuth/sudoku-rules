---
format: open-rules
title: Given Nineteen
setter: sujoyku
source: https://sudokupad.app/5ju1ph3pyp
case: https://sudoku-sleuth.com/cases/given-nineteen
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c6=1 r1c7=9
exported: 47b98b0395f54873ad1d599b74dcecf7
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1-r2c2 total 19 connected true
cage-2: cage r3c1-r3c2-r4c1 total 19 connected true
cage-3: cage r3c3-r3c4-r4c3 total 19 connected true
cage-4: cage r1c3-r1c4-r2c3 total 19 connected true
cage-5: cage r4c7-r4c8-r4c9 total 19 connected true
cage-6: cage r5c2-r5c3-r6c2 total 19 connected true
cage-7: cage r2c5-r2c6-r3c5 total 19 connected true
cage-8: cage r5c4-r6c3-r6c4-r7c3 total 19 connected true
cage-9: cage r3c6-r4c5-r4c6-r5c5 total 19 connected true
cage-10: cage r5c8-r5c9-r6c8 total 19 connected true
cage-11: cage r6c5-r6c6-r7c5-r7c6-r7c7 total 19 connected true
cage-12: cage r7c4-r8c4-r9c4 total 19 connected true
cage-13: cage r7c8-r7c9-r8c7-r8c8-r9c7 total 19 connected true
cage-14: cage r7c1-r8c1-r8c2-r9c2-r9c3 total 19 connected true
cage-15: cage r1c8-r2c8-r3c7-r3c8-r3c9 total 19 connected true
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer cages: Digits in a cage do not repeat and must sum to 19.
