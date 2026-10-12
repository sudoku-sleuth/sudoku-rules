---
format: open-rules
title: Deadly Nightshadelet
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/h3i4rc01eq
case: https://sudoku-sleuth.com/cases/deadly-nightshadelet
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c5=3
---

```rules
sudoku 9x9
anti-knight
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 6
little-killer-2: little-killer r1c7-r2c8-r3c9 sum 24
little-killer-3: little-killer r7c9-r8c8-r9c7 sum 7
little-killer-4: little-killer r9c3-r8c2-r7c1 sum 23
little-killer-5: little-killer r9c4-r8c3-r7c2-r6c1 sum 5
little-killer-6: little-killer r4c1-r3c2-r2c3-r1c4 sum 35
little-killer-7: little-killer r1c6-r2c7-r3c8-r4c9 sum 12
little-killer-8: little-killer r6c9-r7c8-r8c7-r9c6 sum 21
little-killer-9: little-killer r8c9-r9c8 sum 9
little-killer-10: little-killer r2c1-r1c2 sum 9
```

- Normal sudoku rules apply.
- Antiknight: Cells separated by a chess knight's move cannot contain the same digit.
- Little killers: clues outside the grid give the sum of the digits along the indicated diagonal. Digits may repeat along diagonals if allowed by other rules.
