---
format: open-rules
title: Airflow
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/airflow
case: https://sudoku-sleuth.com/cases/airflow
library: https://rules.sudoku-sleuth.com/
status: read
exported: f11a678b04c9a42fccf06cac61257928
---

```rules
sudoku 9x9
cage-1: cage r4c4-r4c5 total 13 connected true
cage-2: cage r6c5-r6c6 total 11 connected true
cage-3: cage r5c4-r6c4 total 10 connected true
cage-4: cage r4c6-r5c6 total 10 connected true
cage-5: cage r9c2-r9c3 total 8 connected true
cage-6: cage r1c7-r1c8 total 7 connected true
cage-7: cage r7c9-r8c9 total 9 connected true
cage-8: cage r2c1-r3c1 total 9 connected true
region-sum-1: region-sum r4c2-r4c1-r3c1-r3c2-r3c3-r4c4 segments [["r4c2","r4c1"],["r3c1","r3c2","r3c3"],["r4c4"]]
region-sum-2: region-sum r4c6-r3c7-r2c7-r1c7-r1c6-r2c6 segments [["r4c6"],["r3c7","r2c7","r1c7"],["r1c6","r2c6"]]
region-sum-3: region-sum r6c6-r7c7-r7c8-r7c9-r6c9-r6c8 segments [["r6c6"],["r7c7","r7c8","r7c9"],["r6c9","r6c8"]]
region-sum-4: region-sum r6c4-r7c3-r8c3-r9c3-r9c4-r8c4 segments [["r6c4"],["r7c3","r8c3","r9c3"],["r9c4","r8c4"]]
region-sum-5: region-sum r5c6-r4c7-r3c8 segments [["r5c6"],["r4c7"],["r3c8"]]
region-sum-6: region-sum r7c2-r6c3-r5c4 segments [["r7c2"],["r6c3"],["r5c4"]]
region-sum-7: region-sum r4c5-r5c5-r6c5-r7c6 segments [["r4c5","r5c5","r6c5"],["r7c6"]]
```

**Sudoku, Region Sum Lines, Cages**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Region Sum Lines: Box borders split blue lines into sections, and the digits on those sections must sum to the same value.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
