---
format: open-rules
title: Love, light and truth 3
setter: Chip Sounder
source: https://sudokupad.app/jqroo3ogjl
case: https://sudoku-sleuth.com/cases/love-light-and-truth-3
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 8f449e2ce3edf97aa74032eb5d6caeab
---

```rules
sudoku 9x9
kropki-1: kropki r7c5-r7c6 black
kropki-2: kropki r7c5-r8c5 black
kropki-3: kropki r3c2-r3c3 black
kropki-4: kropki r8c2-r8c3 black
arrow-1: arrow r9c5-r8c5-r7c5-r6c4 bulb ["r9c4"]
arrow-2: arrow r5c2-r6c2-r7c1 bulb ["r5c3"]
arrow-3: arrow r4c4 bulb ["r5c3"]
arrow-4: arrow r4c7-r5c7 bulb ["r3c8"]
arrow-5: arrow r7c7-r7c6-r8c6 bulb ["r6c8"]
arrow-6: arrow r1c7-r2c8-r3c7 bulb ["r1c8"]
arrow-7: arrow r2c6-r2c5 bulb ["r2c7"]
unique-1: unique r1c1-r1c4-r1c7-r4c1-r4c4-r4c7-r7c1-r7c4-r7c7
unique-2: unique r1c2-r1c5-r1c8-r4c2-r4c5-r4c8-r7c2-r7c5-r7c8
unique-3: unique r1c3-r1c6-r1c9-r4c3-r4c6-r4c9-r7c3-r7c6-r7c9
unique-4: unique r2c1-r2c4-r2c7-r5c1-r5c4-r5c7-r8c1-r8c4-r8c7
unique-5: unique r2c2-r2c5-r2c8-r5c2-r5c5-r5c8-r8c2-r8c5-r8c8
unique-6: unique r2c3-r2c6-r2c9-r5c3-r5c6-r5c9-r8c3-r8c6-r8c9
unique-7: unique r3c1-r3c4-r3c7-r6c1-r6c4-r6c7-r9c1-r9c4-r9c7
unique-8: unique r3c2-r3c5-r3c8-r6c2-r6c5-r6c8-r9c2-r9c5-r9c8
unique-9: unique r3c3-r3c6-r3c9-r6c3-r6c6-r6c9-r9c3-r9c6-r9c9
```

```drawing
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[-0.266,9.266],[-0.068,9.068]],"color":"#000000","thickness":3.2,"headLength":0.18,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,9.5],"width":1,"height":1,"rounded":true,"thickness":0,"text":"37","textColor":"#000000","fontSize":36}}
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Cells in the same relative position within a 3x3 box must contain the set of digits 1-9 without repeat.
Digits on an arrowed line sum to the total given in the connected circle, digits may repeat if other rules allow.
Cells separated by a black dot has one digit double the other (1:2 ratio).
