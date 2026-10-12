---
format: open-rules
title: Counting Oddly
setter: Timotab
source: https://sudokupad.app/7d49g4q2pl
case: https://sudoku-sleuth.com/cases/counting-oddly
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
cage-1: cage r4c6-r5c6 total 6 connected true
cage-2: cage r2c4-r2c5-r2c6 total 9 connected true
cage-3: cage r4c4-r5c4 total 14 connected true
cage-4: cage r8c9-r9c9 total 12 connected true
cage-5: cage r7c1-r7c2 total 10 connected true
cage-6: cage r8c2-r9c2 total 15 connected true
cage-7: cage r7c3-r7c4 total 13 connected true
cage-8: cage r5c9-r6c9 total 6 connected true
cage-9: cage r3c1-r3c2-r3c3 total 15 connected true
cage-10: cage r7c8-r7c9 total 8 connected true
cage-11: cage r6c6-r7c6 total 8 connected true
cage-12: cage r9c3-r9c4 total 12 connected true
cage-13: cage r1c2-r2c2 total 11 connected true
```

```drawing
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1],"width":0.62,"height":0.62,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,8],"width":0.62,"height":0.62,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,4.5],"width":0.62,"height":0.62,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,7],"width":0.62,"height":0.62,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,7],"width":0.62,"height":0.62,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,6],"width":0.62,"height":0.62,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3],"width":0.62,"height":0.62,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2],"width":0.62,"height":0.62,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"5","textColor":"#000000","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,8],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"5","textColor":"#000000","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,4.5],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"4","textColor":"#000000","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,7],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"7","textColor":"#000000","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,7],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#000000","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,6],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"4","textColor":"#000000","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"4","textColor":"#000000","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":0,"text":"6","textColor":"#000000","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1.28}}
```

• Normal sudoku rules apply.
• Digits in cages do not repeat, and must sum to the value in the top left corner of the cage.
• Clues in white circles indicate the total number of odd digits that border (orthogonally or diagonally) the two cells immediately touching the circle, not including the two cells themselves.
