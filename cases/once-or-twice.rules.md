---
format: open-rules
title: Once Or Twice
setter: sujoyku
source: https://sudokupad.app/ph98s3rpnb
case: https://sudoku-sleuth.com/cases/once-or-twice
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,9.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"12","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,9.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"6","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"7","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.5,3.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"10","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[0.5,5.5],[0.5,4.5],[2.5,2.5],[3.5,2.5],[3.5,1.5],[4.5,0.5],[5.5,1.5],[5.5,2.5],[7.5,4.5],[6.5,5.5],[5.5,4.5],[4.5,4.5],[4.5,5.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[7.5,6.5],[5.5,6.5],[5.5,7.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[0.5,5.5],[0.5,4.5],[2.5,2.5],[3.5,2.5],[3.5,1.5],[4.5,0.5],[5.5,1.5],[5.5,2.5],[7.5,4.5],[6.5,5.5],[5.5,4.5],[4.5,4.5],[4.5,5.5]],"color":"#9ae9f6ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[7.5,6.5],[5.5,6.5],[5.5,7.5]],"color":"#9ae9f6ff","thickness":9.6,"rounded":true}}
```

- Normal sudoku rules apply, i.e. each Row, Column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Yin Yang: Shade some cells such that all shaded cells are orthogonally connected, all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.
The value of a shaded cell is double its digit. The value of an unshaded cell equals its digit.

- Target Sums: A clue X outside the grid indicates the sum of all the values that (seen from the clue) appear in its row or column before reaching the first instance of the target value X.

- Region Sum Lines: Box borders divide the blue lines into segments with the same sum of values. (Different lines may have different sums.)
