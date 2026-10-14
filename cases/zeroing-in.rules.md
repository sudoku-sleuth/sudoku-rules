---
format: open-rules
title: Zeroing In
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/zeroing-in
library: https://rules.sudoku-sleuth.com/
status: read
exported: 97c50cfeff91e93c8a36e0d81a6fe6e2
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r4c3 total 6 connected true
cage-2: cage r3c6-r3c7-r4c7 total 24 connected true
cage-3: cage r6c7-r7c6-r7c7 total 6 connected true
cage-4: cage r6c3-r7c3-r7c4 total 24 connected true
cage-5: cage r1c1-r1c2-r2c1 total 20 connected true
cage-6: cage r1c8-r1c9-r2c9 total 22 connected true
cage-7: cage r8c9-r9c8-r9c9 total 12 connected true
cage-8: cage r8c1-r9c1-r9c2 total 13 connected true
cage-9: cage r5c1-r5c2-r5c3 total 21 connected true
cage-10: cage r7c5-r8c5-r9c5 total 15 connected true
cage-11: cage r2c7-r2c8-r3c8 total 11 connected true
cage-12: cage r2c2-r2c3-r3c2 total 14 connected true
cage-13: cage r7c2-r8c2-r8c3 total 13 connected true
cage-14: cage r7c8-r8c7-r8c8 total 16 connected true
cage-15: cage r6c5-r6c6 total 5 connected true
cage-16: cage r4c6-r5c6 total 13 connected true
cage-17: cage r4c4-r4c5 total 11 connected true
cage-18: cage r5c4-r6c4 total 11 connected true
cage-19: cage r5c7-r5c8-r5c9 total 9 connected true
cage-20: cage r1c5-r2c5-r3c5 total 15 connected true
anti-knight
```

Normal sudoku rules apply.  Every row, column and box must contain a complete set of the digits 1-9.

Normal killer cage rules apply: digits in a cage cannot repeat and must sum to the total in the top left corner of the cage.

Normal anti-knight rules apply: cells separated by a chess knight's move cannot contain the same digit.
