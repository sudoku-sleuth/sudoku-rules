---
format: open-rules
title: Bipolar Quads 2
setter: The Bard
source: https://sudokupad.app/qy0va01l3v
case: https://sudoku-sleuth.com/cases/bipolar-quads-2
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 8c2f407094f90247012417b274227f46
---

```rules
sudoku 9x9
negative relations [{"op":"difference","value":1}] except []
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,2,5,6]
quadruple-2: quadruple r8c1-r8c2-r9c1-r9c2 digits [3,5,8,9]
quadruple-3: quadruple r1c8-r1c9-r2c8-r2c9 digits [2,4,7,9]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,5],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["6","7","8","9"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,4],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["6","7","8","9"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,4],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["6","7","8","9"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,5],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["6","7","8","9"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,3],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["3","4","5","6"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,3],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["2","7","8","9"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,3],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["2","7","8","9"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,7],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["3","3","6","6"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,8],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["5","5","7","7"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,6],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["3","3","6","6"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,1],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["3","3","7","7"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,2],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["5","5","6","7"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,4],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["5","7","8","8"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,6],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["7","7","8","8"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,6],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["7","7","8","8"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,4],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["5","6","7","8"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,7],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["3","3","6","6"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,5],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["6","6","8","8"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,8],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFC400","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,7],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFC400","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFC400","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFC400","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,4],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFC400","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,4],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFC400","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,3],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFC400","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,3],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFC400","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,3],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFC400","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,6],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFC400","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,1],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFC400","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,2],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFC400","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,6],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFC400","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,4],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFC400","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,4],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFC400","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,7],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFC400","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,6],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFC400","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFC400","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.

Non-Consecutive: Digits in orthogonally adjacent cells may not be consecutive.

Quadruples: Digits in the white circle must appear in at least one of the four surrounding cells.

Bipolar Quadruples: In the yellow circle of the four digits, two digits cannot appear and the two other digits must appear in any of the four surrounding cells. Double digits may appear 0,1,or 2, times.
