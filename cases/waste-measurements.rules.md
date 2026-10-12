---
format: open-rules
title: Waste Measurements
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/hjo9l18801
case: https://sudoku-sleuth.com/cases/waste-measurements
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=1 r1c5=2 r1c9=3 r5c1=4 r5c5=5 r5c9=6 r9c1=7 r9c5=8 r9c9=9
---

```rules
sudoku 9x9
cage-1: cage r1c2-r2c1-r2c2 total 23 connected true
cage-2: cage r1c4-r1c5-r1c6 total 16 connected true
cage-3: cage r3c2-r3c3-r3c4 total 6 connected true
cage-4: cage r2c6-r2c7 total 8 connected true
cage-5: cage r2c8-r3c8-r4c8 total 15 connected true
cage-6: cage r4c1-r5c1-r6c1 total 12 connected true
cage-7: cage r4c9-r5c9-r6c9 total 18 connected true
cage-8: cage r4c3-r5c3 total 10 connected true
cage-9: cage r6c2-r7c2-r8c2 total 15 connected true
cage-10: cage r8c3-r8c4 total 12 connected true
cage-11: cage r9c4-r9c5-r9c6 total 14 connected true
cage-12: cage r7c6-r7c7-r7c8 total 24 connected true
cage-13: cage r8c8-r8c9-r9c8 total 7 connected true
cage-14: cage r5c4-r6c4-r6c5 total 6 connected true
cage-15: cage r4c5-r4c6-r5c6 total 24 connected true
```

**Sudoku, Cages**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
