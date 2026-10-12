---
format: open-rules
title: TSL Turn 1
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/b90lxd39ek
case: https://sudoku-sleuth.com/cases/tsl-turn-1
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
renban-1: renban r2c2-r2c3-r2c4
renban-2: renban r3c2-r3c3-r3c4
renban-3: renban r4c2-r4c3-r4c4
renban-4: renban r1c7-r2c7-r3c7
renban-5: renban r1c8-r2c8-r3c8
renban-6: renban r5c7-r6c6-r7c5
renban-7: renban r6c7-r7c6-r8c5
renban-8: renban r9c1-r9c2-r9c3
renban-9: renban r9c8-r8c8-r8c9
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 7
little-killer-2: little-killer r8c1-r9c2 sum 15
little-killer-3: little-killer r1c3-r2c4-r3c5-r4c6-r5c7-r6c8-r7c9 sum 33
little-killer-4: little-killer r1c4-r2c3-r3c2-r4c1 sum 11
little-killer-5: little-killer r1c8-r2c9 sum 12
little-killer-6: little-killer r3c9-r4c8-r5c7-r6c6-r7c5-r8c4-r9c3 sum 42
little-killer-7: little-killer r3c9-r2c8-r1c7 sum 8
little-killer-8: little-killer r7c9-r8c8-r9c7 sum 9
little-killer-9: little-killer r9c4-r8c5-r7c6-r6c7-r5c8-r4c9 sum 15
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along each line must form a set of non-repeating consecutive digits in some order.
- Little killers: Clues outside the grid are the sum of the digits along the indicated diagonal.
