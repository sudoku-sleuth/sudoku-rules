---
format: open-rules
title: R you Being Cautious?
setter: sujoyku
source: https://sudokupad.app/t1mzdfna03
case: https://sudoku-sleuth.com/cases/r-you-being-cautious
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - We have only read part of the published answer so far.
exported: 2454908b4d2990ebf07017310479d401
---

```rules
sudoku 9x9
cage-1: cage r2c5-r3c5 total 9 connected true
cage-2: cage r7c5-r8c5 total 10 connected true
cage-3: cage r5c2-r5c3 total 10 connected true
cage-4: cage r5c7-r5c8 total 10 connected true
cage-5: cage r6c5-r6c6-r6c7 total 17 connected true
cage-6: cage r4c3-r4c4-r4c5 total 16 connected true
cage-7: cage r5c4-r6c4 total 6 connected true
cage-8: cage r4c6-r5c6 total 9 connected true
cage-9: cage r7c3-r8c3 total 5 connected true
cage-10: cage r1c1-r2c1 total 4 connected true
cage-11: cage r1c2-r1c3 total 4 connected true
cage-12: cage r2c3-r3c3 total 8 connected true
cage-13: cage r3c1-r3c2 total 8 connected true
cage-14: cage r1c7-r2c7 total 5 connected true
cage-15: cage r1c8-r1c9 total 5 connected true
cage-16: cage r2c9-r3c9 total 11 connected true
cage-17: cage r3c7-r3c8 total 11 connected true
cage-18: cage r7c1-r7c2 total 5 connected true
cage-19: cage r8c1-r9c1 total 11 connected true
cage-20: cage r9c2-r9c3 total 11 connected true
cage-21: cage r7c7-r7c8 total 7 connected true
cage-22: cage r7c9-r8c9 total 11 connected true
cage-23: cage r9c8-r9c9 total 12 connected true
cage-24: cage r8c7-r9c7 total 12 connected true
cage-25: cage r1c4-r1c5 total 9 connected true
```

Fill the grid with the digits from 1 to 6 and the letters R, B and C such that each row, column and 3x3 region contains each symbol once. Symbols in a killer cage do not repeat and sum to the little clue in the top left. The letter R counts as the row number of its cell. B counts as the box number of its cell. C counts as the column number of its cell. (Note that although symbols in a cage do not repeat, different symbols may contribute the same value to the sum.)
