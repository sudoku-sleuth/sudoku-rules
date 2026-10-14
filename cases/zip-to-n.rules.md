---
format: open-rules
title: Zip to N
setter: sujoyku
source: https://sudokupad.app/og9hjferzn
case: https://sudoku-sleuth.com/cases/zip-to-n
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
exported: 9bdd261587ccd3697be8953e5a07edf1
---

```rules
sudoku 9x9
zipper-1: zipper r1c2-r1c3-r1c4
zipper-2: zipper r3c1-r3c2-r3c3
zipper-3: zipper r7c7-r7c8-r7c9
zipper-4: zipper r8c4-r7c5-r6c6-r5c7-r4c8
zipper-5: zipper r6c2-r5c3-r4c4-r3c5-r2c6
zipper-6: zipper r9c6-r9c7-r9c8
zipper-7: zipper r4c5-r5c5-r6c5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"12","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"17","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,9.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"14","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,9.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"15","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,6.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"12","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.5,0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"13","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Zippers: On a lavender line, digits at the same distance to the center (marked by a dot) must add to the same sum. If the line has odd length, that sum must equal the digit at the line's center.

- Up to N-sums: A clue outside the Row or Column N indicates the sum of all digits up to the cell that contains the digit N. (The digit N itself is not included in the sum.)
