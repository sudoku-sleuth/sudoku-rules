---
format: open-rules
title: Love, light and truth 2
setter: Chip Sounder
source: https://sudokupad.app/di0okuybz4
case: https://sudoku-sleuth.com/cases/love-light-and-truth-2
library: https://rules.sudoku-sleuth.com/
status: read
exported: fb8a54ad3333fea5d8338043bea9729a
---

```rules
sudoku 9x9
anti-king
kropki-1: kropki r8c5-r8c6 black
kropki-2: kropki r8c6-r9c6 black
kropki-3: kropki r7c3-r8c3 black
kropki-4: kropki r4c3-r4c4 black
kropki-5: kropki r5c8-r5c9 black
kropki-6: kropki r2c4-r3c4 black
kropki-7: kropki r1c6-r1c7 black
arrow-1: arrow r9c5-r8c5-r7c5-r6c4 bulb ["r9c4"]
arrow-2: arrow r7c6-r8c6-r9c7 bulb ["r6c7"]
arrow-3: arrow r7c8-r8c8-r9c8 bulb ["r6c7"]
arrow-4: arrow r5c2-r6c2-r7c1 bulb ["r5c3"]
arrow-5: arrow r4c7-r5c7 bulb ["r3c8"]
arrow-6: arrow r4c9-r5c9 bulb ["r3c8"]
arrow-7: arrow r8c1-r8c2 bulb ["r9c1"]
arrow-8: arrow r2c5-r3c5 bulb ["r1c5"]
little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 47
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Cells separated by a king's move (in chess) cannot contain the same digit.
Digits on an arrowed line sum to the total given in the connected circle, digits may repeat if other rules allow.
Cells separated by a black dot has one digit double the other (1:2 ratio).
Clues outside the grid sum the digits on the indicated diagonal, digits may repeat if other rules allow.
