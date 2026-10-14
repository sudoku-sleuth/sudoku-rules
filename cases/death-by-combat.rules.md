---
format: open-rules
title: Death by Combat
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/fia59ze9lk
case: https://sudoku-sleuth.com/cases/death-by-combat
library: https://rules.sudoku-sleuth.com/
status: read
exported: 57470872cc5d168053fc0b008571d1cb
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3-r2c1 total 10 connected true
cage-2: cage r1c8-r1c9-r2c9-r3c9 total 30 connected true
cage-3: cage r8c9-r9c7-r9c8-r9c9 total 11 connected true
cage-4: cage r7c1-r8c1-r9c1-r9c2 total 29 connected true
cage-5: cage r4c1-r4c2-r4c3-r5c1 total 11 connected true
cage-6: cage r5c9-r6c7-r6c8-r6c9 total 10 connected true
cage-7: cage r1c5-r1c6-r2c6-r3c6 total 29 connected true
cage-8: cage r7c4-r8c4-r9c4-r9c5 total 29 connected true
cage-9: cage r6c2-r6c3 total 16 connected true
cage-10: cage r4c7-r4c8 total 15 connected true
cage-11: cage r7c6-r8c6 total 9 connected true
cage-12: cage r2c4-r3c4 total 6 connected true
cage-13: cage r7c2-r7c3 total 4 connected true
cage-14: cage r3c7-r3c8 total 3 connected true
anti-knight
```

Normal sudoku rules apply: every row column and 3x3 box must contain a complete set of the digits 1 through 9.
Normal killer cage rules apply: the digits in a cage cannot repeat and must sum to the number in the top left corner of the cage.
Normal anti-knight rules apply: cells separated by a chess knight's move cannot contain the same digit.
