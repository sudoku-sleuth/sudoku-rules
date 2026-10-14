---
format: open-rules
title: Blue or Yellow?
setter: Marty Sears
source: https://sudokupad.app/hrinu3frw3
case: https://sudoku-sleuth.com/cases/blue-or-yellow
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: 804a9857d97b13b8cfdb47d6b8b5242d
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[-0.167,8.5],[-0.167,9.167],[9.167,9.167],[9.167,-0.167],[-0.167,-0.167],[-0.167,8.5]],"color":"#23c7267a","thickness":17.28,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[-0.167,8.5],[-0.167,9.167],[9.167,9.167],[9.167,-0.167],[-0.167,-0.167],[-0.167,8.5]],"color":"#59de5aff","thickness":6.4,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[9.5,4.5],[9.5,5]],"color":"#FFFFFF","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4,-0.5],[4.5,-0.5]],"color":"#FFFFFF","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[-0.5,4.5],[-0.5,5]],"color":"#FFFFFF","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[4,9.5],[4.5,9.5]],"color":"#FFFFFF","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4.5],"width":0.79,"height":0.79,"rounded":true,"stroke":"#fde710ff","thickness":5.76,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,1.5],"width":0.79,"height":0.79,"rounded":true,"stroke":"#fde710ff","thickness":5.76,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,2.5],"width":0.79,"height":0.79,"rounded":true,"stroke":"#fde710ff","thickness":5.76,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,7.5],"width":0.79,"height":0.79,"rounded":true,"stroke":"#fde710ff","thickness":5.76,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,5.5],"width":0.79,"height":0.79,"rounded":true,"stroke":"#fde710ff","thickness":5.76,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,8.5],"width":0.79,"height":0.79,"rounded":true,"stroke":"#fde710ff","thickness":5.76,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,3.5],"width":0.79,"height":0.79,"rounded":true,"stroke":"#fde710ff","thickness":5.76,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,6.5],"width":0.79,"height":0.79,"rounded":true,"stroke":"#fde710ff","thickness":5.76,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,7.5],"width":0.79,"height":0.79,"rounded":true,"stroke":"#02c1ffff","thickness":5.76,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,2.5],"width":0.79,"height":0.79,"rounded":true,"stroke":"#02c1ffff","thickness":5.76,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,5.5],"width":0.79,"height":0.79,"rounded":true,"stroke":"#02c1ffff","thickness":5.76,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,6.5],"width":0.79,"height":0.79,"rounded":true,"stroke":"#02c1ffff","thickness":5.76,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4.5],"width":0.79,"height":0.79,"rounded":true,"stroke":"#02c1ffff","thickness":5.76,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,6.5],"width":0.79,"height":0.79,"rounded":true,"stroke":"#02c1ffff","thickness":5.76,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,3.5],"width":0.79,"height":0.79,"rounded":true,"stroke":"#02c1ffff","thickness":5.76,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,0.5],"width":0.79,"height":0.79,"rounded":true,"stroke":"#02c1ffff","thickness":5.76,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,4.5],"width":0.4,"height":0.4,"rounded":true,"fill":"#1bdf1eff","thickness":0,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,1.5],"width":0.4,"height":0.4,"rounded":true,"fill":"#1bdf1eff","thickness":0,"angle":0}}
```

Normal sudoku rules apply.

Draw a snake connecting the two green spots. The snake must be one cell wide, may only move orthogonally, and may not touch itself (not even diagonally.)

Adjacent digits along the snake must have a difference of at least 5.

A digit in a coloured circle indicates how many times that digit appears in a circle of that colour.

All circles of one colour are on the snake. All circles of the other colour are not on the snake.
