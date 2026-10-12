---
format: open-rules
title: King's Cross Station
setter: Tingo
source: https://tinyurl.com/kingscrossstationsudoku
case: https://sudoku-sleuth.com/cases/king-s-cross-station
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-king
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
arrow-1: arrow r1c2-r1c3-r1c4 bulb ["r1c1"]
arrow-2: arrow r3c4-r3c5-r3c6 bulb ["r3c3"]
arrow-3: arrow r3c2-r2c2 bulb ["r4c2"]
arrow-4: arrow r9c8-r9c7-r9c6-r8c5-r7c4 bulb ["r9c9"]
arrow-5: arrow r2c7-r3c7 bulb ["r1c7"]
pair-1: pair r1c1-r1c2 relation {"op":"sum","value":10}
pair-2: pair r2c4-r3c4 relation {"op":"sum","value":10}
pair-3: pair r8c5-r9c5 relation {"op":"sum","value":5}
pair-4: pair r3c5-r3c6 relation {"op":"sum","value":5}
pair-5: pair r7c3-r7c4 relation {"op":"sum","value":5}
```

Normal Sudoku Rules Apply
Cells separated by a king's move (in chess) cannot contain the same digit.
Each of the two marked diagonals must have all digits 1-9 on them without repeating. 
The arrows represent trains arriving and departing from the station. Digits along an arrow must sum to the value of the digit in that arrow's circle.
Cells joined by V must sum to 5. Cells joined by X must sum to 10. Not all Vs or Xs are given.
