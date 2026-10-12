---
format: open-rules
title: Maelstrom
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/maelstrom
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c5=7
---

```rules
sudoku 9x9
arrow-1: arrow r2c7-r1c6-r1c5 bulb ["r3c8"]
arrow-2: arrow r2c4-r3c3 bulb ["r2c5"]
arrow-3: arrow r3c1-r4c1-r5c1 bulb ["r2c2"]
arrow-4: arrow r8c3-r9c4-r9c5 bulb ["r7c2"]
arrow-5: arrow r6c3-r7c4 bulb ["r5c3"]
arrow-6: arrow r8c6-r7c7 bulb ["r8c5"]
arrow-7: arrow r4c7-r3c6 bulb ["r5c7"]
arrow-8: arrow r7c9-r6c9-r5c9 bulb ["r8c8"]
little-killer-1: little-killer r1c3-r2c2-r3c1 sum 20
little-killer-2: little-killer r9c7-r8c8-r7c9 sum 22
little-killer-3: little-killer r6c9-r5c8-r4c7-r3c6-r2c5-r1c4 sum 37
little-killer-4: little-killer r4c9-r3c8-r2c7-r1c6 sum 19
little-killer-5: little-killer r9c5-r8c6-r7c7-r6c8-r5c9 sum 12
little-killer-6: little-killer r6c1-r7c2-r8c3-r9c4 sum 17
little-killer-7: little-killer r1c5-r2c4-r3c3-r4c2-r5c1 sum 12
little-killer-8: little-killer r4c1-r5c2-r6c3-r7c4-r8c5-r9c6 sum 27
```

Standard sudoku rules apply.

Standard arrow rules: Digits along an arrow must sum to the number in the connected circle and may repeat if permitted by normal sudoku rules.

Standard little killer rules: Numbers outside the grid indicate the sum of all the digits along the diagonal indicated by the arrow. Digits can repeat along the diagonal if permitted by normal sudoku rules.
