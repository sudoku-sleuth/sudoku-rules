---
format: open-rules
title: Tentative Looping
setter: sujoyku
source: https://sudokupad.app/sdqmpqb31m
case: https://sudoku-sleuth.com/cases/tentative-looping
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
  - Some of the source rules still need to be included in our reading.
exported: 960b9f1eeda1ffaf070dabf9f7c492fd
---

```rules
sudoku 9x9
kropki-1: kropki r4c2-r5c2 white
kropki-2: kropki r5c4-r6c4 white
kropki-3: kropki r6c7-r6c8 white
kropki-4: kropki r2c7-r2c8 white
kropki-5: kropki r1c5-r2c5 white
kropki-6: kropki r6c9-r7c9 white
kropki-7: kropki r3c8-r3c9 white
kropki-8: kropki r4c7-r5c7 white
kropki-9: kropki r6c5-r6c6 white
kropki-10: kropki r9c8-r9c9 black
kropki-11: kropki r8c5-r9c5 black
kropki-12: kropki r7c4-r8c4 black
kropki-13: kropki r2c6-r3c6 black
kropki-14: kropki r7c1-r7c2 black
kropki-15: kropki r3c2-r3c3 black
kropki-16: kropki r5c4-r5c5 black
kropki-17: kropki r5c6-r6c6 black
kropki-18: kropki r1c1-r1c2 black
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,3.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"3","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,5.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"6","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"25","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"18","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,1.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,7.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"11","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,4.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"31","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"23","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Tenline Loop: Draw a one-cell wide loop into the puzzle. The loop may only move orthogonally from cell to cell and must not touch itself neither orthogonally nor diagonally. Moreover, the loop acts as a tenline, i.e. it can be split into contiguous, non-overlapping segments that sum to exactly 10.

- Loop sum clues: Clues outside the grid indicate the sum of all digits ON THE LOOP in the respective row or column. (Digits that are not on the loop do not contribute to the sum.)

- Connecting Kropki: Cells joined by a white dot must contain consecutive digits. Moreover, exactly one of the cells is on the loop and the other is not.
Cells joined by a black dot must contain digits with a 1:2 ratio. Moreover, either both cells lie on the loop or they both do not. (Not all dots are given.)
