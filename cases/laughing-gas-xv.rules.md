---
format: open-rules
title: Laughing GAS-XV
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/laughing-gas-xv
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c1-r4c2-r5c1 total 10 connected true
cage-2: cage r1c1-r2c1-r2c2 total 10 connected true
cage-3: cage r7c3-r8c3-r9c3 total 15 connected true
cage-4: cage r3c3-r3c4-r4c4 total 15 connected true
cage-5: cage r1c5-r2c5-r3c5 total 15 connected true
cage-6: cage r2c8-r2c9-r3c8 total 10 connected true
cage-7: cage r5c7-r5c8-r6c7 total 10 connected true
cage-8: cage r8c8-r8c9-r9c8 total 10 connected true
cage-9: cage r7c6-r8c6-r8c7 total 10 connected true
kropki-1: kropki r8c8-r8c9 colour "white"
kropki-2: kropki r2c1-r2c2 colour "white"
kropki-3: kropki r4c4-r4c5 colour "white"
kropki-4: kropki r4c5-r4c6 colour "white"
pair-1: pair r2c6-r2c7 sum 10
pair-2: pair r3c3-r3c4 sum 10
pair-3: pair r4c8-r4c9 sum 10
pair-4: pair r5c5-r5c6 sum 10
pair-5: pair r6c2-r6c3 sum 10
pair-6: pair r7c1-r7c2 sum 10
pair-7: pair r8c4-r8c5 sum 10
pair-8: pair r9c7-r9c8 sum 10
pair-9: pair r6c2-r7c2 sum 10
pair-10: pair r7c3-r8c3 sum 10
pair-11: pair r5c4-r6c4 sum 10
pair-12: pair r2c5-r3c5 sum 10
pair-13: pair r8c6-r9c6 sum 10
pair-14: pair r4c7-r5c7 sum 10
pair-15: pair r1c8-r2c8 sum 10
pair-16: pair r1c2-r1c3 sum 5
pair-17: pair r2c8-r2c9 sum 5
pair-18: pair r3c5-r3c6 sum 5
pair-19: pair r4c1-r4c2 sum 5
pair-20: pair r5c7-r5c8 sum 5
pair-21: pair r6c4-r6c5 sum 5
pair-22: pair r7c3-r7c4 sum 5
pair-23: pair r8c6-r8c7 sum 5
pair-24: pair r1c1-r2c1 sum 5
pair-25: pair r6c4-r7c4 sum 5
pair-26: pair r5c6-r6c6 sum 5
pair-27: pair r2c7-r3c7 sum 5
pair-28: pair r8c8-r9c8 sum 5
pair-29: pair r4c9-r5c9 sum 5
pair-30: pair r7c5-r8c5 sum 5
```

Standard sudoku rules: Each row, column, and box must contain a complete set of the digits 1-9.

Killer cages: Digits within cages marked by dashed lines cannot repeat within the cage and must sum to the number in the upper left corner of the cage.

XV: Digits separated by an "X" sum to 10. Digits separated by a "V" sum to 5. Digits not connected by an X or V may or may not sum to 5 or 10.

Kropki dots: Digits separated by a white dot are consecutive. No negative constraint applies.
