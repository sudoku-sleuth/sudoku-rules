---
format: open-rules
title: Surrounded
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/1yeic5cciz
case: https://sudoku-sleuth.com/cases/surrounded
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c2=6 r2c8=1 r4c4=2 r8c1=5 r9c9=2
exported: 2b1765f1ae4226f46690b641a9be8143
---

```rules
sudoku 9x9
arrow-1: arrow r1c6-r1c7 bulb ["r1c5"]
arrow-2: arrow r5c8-r6c8 bulb ["r4c8"]
arrow-3: arrow r8c5-r8c4 bulb ["r8c6"]
arrow-4: arrow r5c2-r4c2 bulb ["r6c2"]
arrow-5: arrow r6c9-r7c9 bulb ["r5c9"]
arrow-6: arrow r2c5-r2c6 bulb ["r2c4"]
arrow-7: arrow r4c1-r3c1 bulb ["r5c1"]
arrow-8: arrow r9c4-r9c3-r9c2 bulb ["r9c5"]
extremum r3c3-r4c3-r5c3-r6c3-r7c3-r7c4-r7c5-r7c6-r7c7-r6c7-r5c7-r4c7-r3c7-r3c6-r3c5-r3c4 type "min" exhaustive false
```

**Sudoku, Minimums, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Minimums: Digits placed in grey cells with arrows pointing in must be smaller than all orthogonally adjacent UNSHADED cells. 
- Arrows: Digits along the shaft of an arrow sum to the value in the attached circle

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
