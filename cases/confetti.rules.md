---
format: open-rules
title: Confetti
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ofijwha3g8
case: https://sudoku-sleuth.com/cases/confetti
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c3=4 r5c7=4
---

```rules
sudoku 9x9
arrow-1: arrow r5c4-r4c3 bulb ["r6c3"]
arrow-2: arrow r6c7-r7c6-r6c5 bulb ["r5c8"]
arrow-3: arrow r4c7-r3c6-r4c5 bulb ["r5c8"]
arrow-4: arrow r1c7-r2c8-r3c9 bulb ["r1c6"]
arrow-5: arrow r2c5-r3c4 bulb ["r1c6"]
arrow-6: arrow r9c3-r8c2-r7c1 bulb ["r9c4"]
arrow-7: arrow r9c5-r8c6 bulb ["r9c4"]
arrow-8: arrow r7c9-r8c8-r9c7 bulb ["r6c9"]
arrow-9: arrow r5c9-r4c9 bulb ["r6c9"]
arrow-10: arrow r3c1-r2c2-r1c3 bulb ["r4c1"]
arrow-11: arrow r5c1-r6c1 bulb ["r4c1"]
clone-1: clone r1c6-r6c3-r7c8
clone-2: clone r2c2-r5c8-r9c4
clone-3: clone r2c8-r5c4-r7c1
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits on the shaft of an arrow sum to the value in the attached circle.
- Clones: Shaded cells that are the same color contain the same the digit.
