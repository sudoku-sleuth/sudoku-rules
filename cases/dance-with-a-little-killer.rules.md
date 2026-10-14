---
format: open-rules
title: Dance with a Little Killer
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/dance-with-a-little-killer
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c6=6 r4c3=6 r6c7=8 r7c1=3 r7c4=7 r8c3=4
exported: 36247360d21cbdf75bcb5062e26337fb
---

```rules
sudoku 9x9
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 8
little-killer-2: little-killer r4c1-r3c2-r2c3-r1c4 sum 9
little-killer-3: little-killer r7c9-r8c8-r9c7 sum 8
little-killer-4: little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 54
little-killer-5: little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 50
little-killer-6: little-killer r6c9-r7c8-r8c7-r9c6 sum 9
little-killer-7: little-killer r1c7-r2c8-r3c9 sum 13
little-killer-8: little-killer r9c3-r8c2-r7c1 sum 13
little-killer-9: little-killer r1c4-r2c5-r3c6-r4c7-r5c8-r6c9 sum 17
little-killer-10: little-killer r9c6-r8c5-r7c4-r6c3-r5c2-r4c1 sum 34
little-killer-11: little-killer r4c9-r5c8-r6c7-r7c6-r8c5-r9c4 sum 35
```

Normal sudoku rules apply: every row, column, and box must contain a complete set of the digits 1-9.

Numbers outside the grid give the sum of the digits along the indicated diagonal. Digits can repeat along the little killer diagonal if allowed by the other rules.
