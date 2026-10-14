---
format: open-rules
title: Clues Aswirl
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/7k8hw5ne0h
case: https://sudoku-sleuth.com/cases/clues-aswirl
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c8=3
exported: 69af720d397d0a9948ab96d88dee022a
---

```rules
sudoku 9x9
cage-1: cage r2c7-r2c8-r3c8 total 11 connected true
cage-2: cage r7c8-r8c7-r8c8 total 13 connected true
cage-3: cage r7c2-r8c2-r8c3 total 13 connected true
cage-4: cage r3c4-r4c4-r4c5 total 8 connected true
cage-5: cage r4c6-r4c7-r5c6 total 14 connected true
cage-6: cage r6c5-r6c6-r7c6 total 17 connected true
cage-7: cage r5c4-r6c3-r6c4 total 13 connected true
cage-8: cage r2c2-r2c3-r3c2 total 11 connected true
cage-9: cage r3c1-r4c1 total 5 connected true
cage-10: cage r3c9-r4c9 total 8 connected true
cage-11: cage r6c9-r7c9 total 7 connected true
cage-12: cage r6c1-r7c1 total 12 connected true
cage-13: cage r1c3-r1c4 total 9 connected true
cage-14: cage r1c6-r1c7 total 4 connected true
cage-15: cage r9c3-r9c4 total 5 connected true
cage-16: cage r9c6-r9c7 total 10 connected true
arrow-1: arrow r7c6-r6c5 bulb ["r8c7"]
arrow-2: arrow r7c8-r6c9 bulb ["r8c7"]
arrow-3: arrow r6c3-r5c4 bulb ["r7c2"]
arrow-4: arrow r8c3-r9c4 bulb ["r7c2"]
arrow-5: arrow r2c7-r1c6 bulb ["r3c8"]
arrow-6: arrow r4c7-r5c6 bulb ["r3c8"]
arrow-7: arrow r3c4-r4c5 bulb ["r2c3"]
arrow-8: arrow r3c2-r4c1 bulb ["r2c3"]
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
