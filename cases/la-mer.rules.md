---
format: open-rules
title: La Mer
setter: sujoyku
source: https://sudokupad.app/xb51761bd1
case: https://sudoku-sleuth.com/cases/la-mer
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
region-sum-1: region-sum r2c2-r2c3-r1c4-r1c5-r2c5-r3c6-r2c7-r1c8 segments [["r2c2","r2c3"],["r1c4","r1c5","r2c5","r3c6"],["r2c7","r1c8"]]
region-sum-2: region-sum r9c2-r8c3-r9c4-r9c5-r8c5-r7c5-r7c6-r8c7-r7c8 segments [["r9c2","r8c3"],["r9c4","r9c5","r8c5","r7c5","r7c6"],["r8c7","r7c8"]]
region-sum-3: region-sum r5c2-r4c3-r5c3-r5c4-r6c5-r6c6 segments [["r5c2","r4c3","r5c3"],["r5c4","r6c5","r6c6"]]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,9.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"11","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,9.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"11","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,2.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"14","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.5,6.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"14","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"15","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,9.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"7","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Region Sum Lines: Box borders divide the blue lines into segments with the same sum. (Different lines may have different sums.)

- Up to N-sums: A clue outside the Row or Column N indicates the sum of all digits up to the cell that contains the digit N. (The digit N itself is not included in the sum.)
