---
format: open-rules
title: Sandwiched Entropy
setter: sujoyku
source: https://sudokupad.app/21nh613agy
case: https://sudoku-sleuth.com/cases/sandwiched-entropy
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
entropic r1c4-r1c3-r1c2-r2c2-r3c2-r3c3-r4c3-r5c3-r5c2-r4c2-r4c1-r5c1-r6c1-r7c1-r8c1-r8c2-r8c3-r9c3-r9c4-r9c5-r9c6-r8c7-r7c7-r6c8-r5c8-r5c9-r4c9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,7.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"1","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,5.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"23","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,3.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"31","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,1.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"12","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,-0.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"28","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,-0.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"1","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,-0.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"28","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,-0.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"11","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
```

- Normal Sudoku rules apply.

- Entropy line: Any set of three consecutive digits on the orange line must contain a low (1, 2 or 3), a medium (4, 5 or 6) and a high digit (7, 8 or 9).

- Sandwich: Clues outside the grid indicate the sum of all digits between 3 and 6 in the respective row or column. For example, the row 123456789 would have the sandwich clue 9 as the sum of 4 and 5.
