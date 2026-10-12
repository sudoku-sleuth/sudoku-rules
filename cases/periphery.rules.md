---
format: open-rules
title: Periphery
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/eeylvko5vj
case: https://sudoku-sleuth.com/cases/periphery
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1-r2c2 total 11 connected true
cage-2: cage r1c8-r1c9-r2c8-r2c9 total 17 connected true
cage-3: cage r8c8-r8c9-r9c8-r9c9 total 29 connected true
cage-4: cage r8c1-r8c2-r9c1-r9c2 total 14 connected true
cage-5: cage r6c3-r6c4-r7c4 total 11 connected true
cage-6: cage r3c6-r4c5-r4c6 total 12 connected true
arrow-1: arrow r4c2-r3c3-r2c4-r1c4 bulb ["r4c1"]
arrow-2: arrow r4c8-r3c7-r2c6 bulb ["r4c9"]
arrow-3: arrow r6c8-r7c7-r8c6-r9c6 bulb ["r6c9"]
arrow-4: arrow r6c3-r7c4 bulb ["r6c2"]
arrow-5: arrow r4c5-r4c6 bulb ["r3c4"]
arrow-6: arrow r9c3-r9c2-r9c1 bulb ["r9c4"]
arrow-7: arrow r8c2-r8c3 bulb ["r7c1"]
```

**Sudoku, Cages, Arrows**
- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits add to the total in the top left corner of the cage, if given. Digits cannot repeat in cages.
- Arrows: Digits along the shaft of an arrow sum to the value in the attached circle.

For more of our puzzles, please visit https://missingdeck.net
