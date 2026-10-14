---
format: open-rules
title: Los démas
setter: sujoyku
source: https://sudokupad.app/uviycfcr7l
case: https://sudoku-sleuth.com/cases/los-demas
library: https://rules.sudoku-sleuth.com/
status: read
exported: dc681a3ae55e108a66ec81e2ee1b910a
---

```rules
sudoku 9x9
cage-1: cage r1c3-r2c1-r2c2-r2c3-r3c1 total 18 connected true
cage-2: cage r1c1-r1c2 total 11 connected true
cage-3: cage r1c9-r2c7-r2c8-r2c9-r3c7 total 19 connected true
cage-4: cage r3c8-r3c9 total 12 connected true
cage-5: cage r7c3-r8c1-r8c2-r8c3-r9c1 total 20 connected true
cage-6: cage r7c1-r7c2 total 13 connected true
cage-7: cage r7c9-r8c7-r8c8-r8c9-r9c7 total 21 connected true
cage-8: cage r9c8-r9c9 total 14 connected true
cage-9: cage r2c4-r3c2-r3c3-r3c4 total 20 connected true
cage-10: cage r8c4-r9c2-r9c3-r9c4 total 18 connected true
cage-11: cage r1c6-r1c7-r1c8-r2c6 total 24 connected true
cage-12: cage r4c1-r5c1 total 10 connected true
cage-13: cage r5c9-r6c9 total 10 connected true
cage-14: cage r5c2-r6c2 total 11 connected true
cage-15: cage r4c8-r5c8 total 9 connected true
cage-16: cage r5c7-r6c7-r7c7-r7c8 total 18 connected true
cage-17: cage r1c4-r1c5-r2c5 total 20 connected true
cage-18: cage r8c5-r8c6-r9c6 total 22 connected true
cage-19: cage r3c6-r4c6-r4c7 total 18 connected true
cage-20: cage r5c4-r5c5 total 7 connected true
cage-21: cage r6c5-r6c6 total 8 connected true
cage-22: cage r4c3-r4c4 total 12 connected true
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer cages: Digits in a cage do not repeat and sum to the clue in the top left.
