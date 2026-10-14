---
format: open-rules
title: Encore
setter: sujoyku
source: https://sudokupad.app/nqocos208i
case: https://sudoku-sleuth.com/cases/encore
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
exported: 6671ecb344a0aee22722a3e1ebaf5256
---

```rules
sudoku 9x9
region-sum-1: region-sum r1c3-r2c3-r2c4-r2c5-r3c5-r3c6-r2c7-r2c8 segments [["r1c3","r2c3"],["r2c4","r2c5","r3c5","r3c6"],["r2c7","r2c8"]]
region-sum-2: region-sum r5c3-r4c3-r4c4-r4c5-r4c6-r5c6-r6c6 segments [["r5c3","r4c3"],["r4c4","r4c5","r4c6","r5c6","r6c6"]]
region-sum-3: region-sum r9c1-r8c2-r7c3-r6c4-r5c5 segments [["r9c1","r8c2","r7c3"],["r6c4","r5c5"]]
region-sum-4: region-sum r9c5-r8c5-r7c6-r6c7-r5c8 segments [["r9c5","r8c5","r7c6"],["r6c7","r5c8"]]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"21","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"10","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"15","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,1.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"10","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,7.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"12","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Region Sum Lines: Box borders divide the blue lines into segments with the same sum. (Different lines may have different sums.)

- Up to N-sums: A clue outside the Row or Column N indicates the sum of all digits up to the cell that contains the digit N. (The digit N itself is not included in the sum.)
