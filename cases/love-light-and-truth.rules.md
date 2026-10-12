---
format: open-rules
title: Love, light and truth
setter: Chip Sounder
source: https://sudokupad.app/9tfo91456z
case: https://sudoku-sleuth.com/cases/love-light-and-truth
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-knight
kropki-1: kropki r8c5-r9c5 colour "black"
kropki-2: kropki r8c4-r8c5 colour "black"
kropki-3: kropki r6c3-r6c4 colour "black"
kropki-4: kropki r3c2-r3c3 colour "black"
arrow-1: arrow r9c5-r8c5-r7c5-r6c4 bulb ["r9c4"]
arrow-2: arrow r7c6-r8c6-r9c7 bulb ["r6c7"]
arrow-3: arrow r7c8-r8c8-r9c8 bulb ["r6c7"]
arrow-4: arrow r5c2-r6c2-r7c1 bulb ["r5c3"]
arrow-5: arrow r4c7-r5c7 bulb ["r3c8"]
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Cells separated by a knight's move (in chess) cannot contain the same digit.
Digits on an arrowed line sum to the total given in the connected circle, digits may repeat if other rules allow.
Cells separated by a black dot has one digit double the other (1:2 ratio).
