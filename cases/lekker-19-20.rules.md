---
format: open-rules
title: Lekker 19/20
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/uznefjzqp4
case: https://sudoku-sleuth.com/cases/lekker-19-20
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c3=6 r4c1=4 r7c4=2 r8c2=7 r8c7=1
exported: ec8a7395823a19a52b468a4f6c276aac
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3-r1c4 total 19 connected true
cage-2: cage r1c6-r1c7-r1c8 total 20 connected true
cage-3: cage r3c2-r3c3-r3c4 total 20 connected true
cage-4: cage r3c6-r3c7-r3c8 total 19 connected true
cage-5: cage r5c1-r6c1-r7c1 total 20 connected true
cage-6: cage r5c9-r6c9-r7c9 total 19 connected true
cage-7: cage r8c4-r9c3-r9c4 total 19 connected true
cage-8: cage r8c6-r9c6-r9c7 total 20 connected true
cage-9: cage r6c4-r6c5-r6c6 total 19 connected true
cage-10: cage r5c4-r5c5-r5c6 total 20 connected true
cage-11: cage r4c7-r5c7-r6c7-r7c7 total 20 connected true
cage-12: cage r4c3-r5c3-r6c3-r7c3-r8c3 total 20 connected true
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 19
little-killer-2: little-killer r4c1-r3c2-r2c3-r1c4 sum 20
little-killer-3: little-killer r3c9-r2c8-r1c7 sum 20
little-killer-4: little-killer r4c9-r3c8-r2c7-r1c6 sum 19
little-killer-5: little-killer r7c9-r8c8-r9c7 sum 20
little-killer-6: little-killer r7c1-r8c2-r9c3 sum 19
```

**Standard Sudoku, Cages, Little Killer**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

For more puzzles like these, please visit our website https://missingdeck.net
