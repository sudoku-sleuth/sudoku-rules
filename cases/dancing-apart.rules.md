---
format: open-rules
title: Dancing Apart
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/glmbie1era
case: https://sudoku-sleuth.com/cases/dancing-apart
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c5=7 r5c2=6 r5c8=3 r9c5=4
---

```rules
sudoku 9x9
negative relations [{"op":"difference","value":1}] except []
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 7
little-killer-2: little-killer r7c9-r8c8-r9c7 sum 7
little-killer-3: little-killer r1c7-r2c8-r3c9 sum 8
little-killer-4: little-killer r9c3-r8c2-r7c1 sum 10
little-killer-5: little-killer r2c1-r1c2 sum 11
little-killer-6: little-killer r1c8-r2c9 sum 15
little-killer-7: little-killer r8c9-r9c8 sum 12
little-killer-8: little-killer r9c2-r8c1 sum 13
```

- Normal Sudoku rules apply.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.
- Nonconsecutive: Digits in orthogonally adjacent cells cannot be consecutive.
