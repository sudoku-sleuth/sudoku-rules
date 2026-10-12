---
format: open-rules
title: Knight of the Long Fifteens
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/sibxon5xpc
case: https://sudoku-sleuth.com/cases/knight-of-the-long-fifteens
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r3c5 total 15 connected true
cage-2: cage r3c7-r4c7-r5c7 total 15 connected true
cage-3: cage r7c5-r7c6-r7c7 total 15 connected true
cage-4: cage r5c3-r6c3-r7c3 total 15 connected true
cage-5: cage r8c1-r9c1-r9c2 total 15 connected true
cage-6: cage r1c8-r1c9-r2c9 total 15 connected true
cage-7: cage r1c1-r1c2-r2c1 total 15 connected true
cage-8: cage r8c9-r9c8-r9c9 total 15 connected true
cage-9: cage r3c1-r4c1-r5c1 total 15 connected true
cage-10: cage r5c9-r6c9-r7c9 total 15 connected true
cage-11: cage r1c5-r1c6-r1c7 total 15 connected true
cage-12: cage r9c3-r9c4-r9c5 total 15 connected true
cage-13: cage r8c4-r8c5-r8c6 total 15 connected true
cage-14: cage r4c8-r5c8-r6c8 total 15 connected true
cage-15: cage r2c4-r2c5-r2c6 total 15 connected true
cage-16: cage r4c2-r5c2-r6c2 total 15 connected true
cage-17: cage r5c4-r6c4-r6c5 total 15 connected true
cage-18: cage r4c5-r4c6-r5c6 total 15 connected true
anti-knight
kropki-1: kropki r3c7-r4c7 colour "black"
kropki-2: kropki r5c7-r5c8 colour "black"
kropki-3: kropki r7c6-r7c7 colour "black"
kropki-4: kropki r8c1-r9c1 colour "black"
kropki-5: kropki r9c8-r9c9 colour "black"
```

**Standard Sudoku, Antiknight, Cages, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Anti-knight: Cells that are a chess knight’s move apart cannot contain the same digit.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Ratio Pairs: Digits separated by a black dot are in a 1:2 ratio.
