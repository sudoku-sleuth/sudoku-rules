---
format: open-rules
title: Watch Your Step
setter: sujoyku
source: https://sudokupad.app/4csesub8mu
case: https://sudoku-sleuth.com/cases/watch-your-step
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
index-line-1: index-line r4c1-r3c2-r2c1-r1c2-r2c3-r1c4
index-line-2: index-line r8c4-r7c3-r6c4-r6c3-r6c2-r7c1-r8c2
index-line-3: index-line r9c6-r8c7-r9c8-r8c9-r7c8-r6c9
index-line-4: index-line r4c6-r5c7-r4c8-r3c9-r2c8-r3c7-r2c6
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"15","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,1.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"15","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"6","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,3.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"6","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,7.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"18","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Periodic Sums: A clue outside the grid indicates the sum of N and every Nth digit in the row or column, where N is the digit in the first cell seen from the clue. (For example, if there is a 16 clue to the left of Row 5 and r5c1 is a 3, then r5c1, r5c4, and r5c7 must sum to 16.)

- Index Lines: Each turquoise line is an Index Line, i.e. the digit in the Nth cell along such a line (starting from the diamond) indicates the position along the line where the digit N appears. For example, if a diamond cell contains a 3, the third cell along that line must have a 1.
