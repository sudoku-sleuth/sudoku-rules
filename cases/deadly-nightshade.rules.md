---
format: open-rules
title: Deadly Nightshade
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/deadly-nightshade
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c5=5
exported: 66352a8b7ea43fc06e5d22012e4ba4b0
---

```rules
sudoku 9x9
cage-1: cage r1c3-r2c3-r3c1-r3c2-r3c3 total 15 connected true
cage-2: cage r1c7-r2c7-r3c7-r3c8-r3c9 total 35 connected true
cage-3: cage r7c7-r7c8-r7c9-r8c7-r9c7 total 15 connected true
cage-4: cage r7c1-r7c2-r7c3-r8c3-r9c3 total 35 connected true
cage-5: cage r4c3-r5c3-r6c3 total 9 connected true
cage-6: cage r4c7-r5c7-r6c7 total 10 connected true
cage-7: cage r7c4-r7c5-r7c6 total 20 connected true
cage-8: cage r3c4-r3c5-r3c6 total 20 connected true
cage-9: cage r6c4-r6c5-r6c6 total 18 connected true
cage-10: cage r4c4-r4c5-r4c6 total 14 connected true
cage-11: cage r4c1-r4c2 total 14 connected true
cage-12: cage r6c1-r6c2 total 11 connected true
cage-13: cage r6c8-r6c9 total 8 connected true
cage-14: cage r4c8-r4c9 total 14 connected true
anti-knight
```

Normal sudoku rules apply: every row column and 3x3 box must contain a complete set of the digits 1 through 9.

Normal killer cage rules apply: the digits in a cage cannot repeat and must sum to the number in the top left corner of the cage.

Normal anti-knight rules apply: cells separated by a chess knight's move cannot contain the same digit.

Exported from f-puzzles.com
