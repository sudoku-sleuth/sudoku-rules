---
format: open-rules
title: Uh Oh, It's Magic!
setter: Will Power
source: https://sudokupad.app/lpm35nm689
case: https://sudoku-sleuth.com/cases/uh-oh-it-s-magic
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 245c7510806626f5ca3065acb5cdbbed
---

```rules
sudoku 9x9
little-killer-1: little-killer r1c2-r2c1 sum 12
little-killer-2: little-killer r8c9-r9c8 sum 8
little-killer-3: little-killer r6c9-r7c8-r8c7-r9c6 sum 15
little-killer-4: little-killer r1c4-r2c3-r3c2-r4c1 sum 25
little-killer-5: little-killer r1c8-r2c9 sum 14
little-killer-6: little-killer r1c7-r2c8-r3c9 sum 16
little-killer-7: little-killer r5c9-r6c8-r7c7-r8c6-r9c5 sum 24
little-killer-8: little-killer r5c1-r6c2-r7c3-r8c4-r9c5 sum 21
little-killer-9: little-killer r7c1-r8c2-r9c3 sum 7
little-killer-10: little-killer r8c1-r9c2 sum 9
```

```drawing
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#CFCFCF","thickness":0}}
```

Normal Sudoku rules apply. LITTLE KILLER- Numbers outside the grid are the sum of the indicated diagonal. MAGIC SQUARES- A magic square is a 3x3 square that all vertical, horizontal and major diagonals sum to the same number. The gray circles are the centers of three magic squares.
