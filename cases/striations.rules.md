---
format: open-rules
title: Striations
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/bmy1esc9v8
case: https://sudoku-sleuth.com/cases/striations
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c3=1 r8c7=9
---

```rules
sudoku 9x9
arrow-1: arrow r3c2-r2c1 bulb ["r4c3"]
arrow-2: arrow r5c4-r6c5 bulb ["r4c3"]
arrow-3: arrow r6c3-r5c2 bulb ["r7c4"]
arrow-4: arrow r8c5-r9c6 bulb ["r7c4"]
arrow-5: arrow r4c5-r3c4 bulb ["r5c6"]
arrow-6: arrow r6c7-r7c8 bulb ["r5c6"]
arrow-7: arrow r4c7-r3c8 bulb ["r5c6"]
arrow-8: arrow r2c6-r3c7 bulb ["r1c5"]
renban-1: renban r8c3-r7c4-r6c5-r5c6-r4c7
renban-2: renban r4c1-r5c2-r6c3
renban-3: renban r3c2-r4c3-r5c4
renban-4: renban r1c3-r2c4-r3c5-r4c6
renban-5: renban r1c5-r2c6-r3c7-r4c8-r5c9
renban-6: renban r1c7-r2c8-r3c9
renban-7: renban r7c1-r8c2-r9c3
renban-8: renban r8c5-r7c6-r6c7
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along each Renban line form a set of non-repeating consecutive digits in any order.
- Arrows: Digits along the shaft of an arrow sum to the value in the attached bulb.
