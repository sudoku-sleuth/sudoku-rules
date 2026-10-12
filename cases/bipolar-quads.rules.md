---
format: open-rules
title: Bipolar Quads
setter: The Bard
source: https://sudokupad.app/kr14e140de
case: https://sudoku-sleuth.com/cases/bipolar-quads
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
quadruple-1: quadruple r5c2-r5c3-r6c2-r6c3 digits [2,4,6,8]
quadruple-2: quadruple r1c7-r1c8-r2c7-r2c8 digits [2,4,6,8]
quadruple-3: quadruple r4c5-r4c6-r5c5-r5c6 digits [2,4,6,8]
quadruple-4: quadruple r7c6-r7c7-r8c6-r8c7 digits [2,4,6,8]
allowed-digits-1: allowed-digits r3c7-r3c8-r4c7-r4c8 digits [1,2,4,6,7,8,9]
allowed-digits-2: allowed-digits r5c4-r5c5-r6c4-r6c5 digits [1,2,5,8,9]
allowed-digits-3: allowed-digits r6c3-r6c4-r7c3-r7c4 digits [1,3,5,6,7,8,9]
allowed-digits-4: allowed-digits r8c2-r8c3-r9c2-r9c3 digits [1,3,5,7,9]
allowed-digits-5: allowed-digits r1c2-r1c3-r2c2-r2c3 digits [1,3,5,7,9]
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,1],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["2","4","6","8"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,1],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["2","4","6","8"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,4],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["2","3","4","7"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,4],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["2","3","4","7"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,8],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["3","6","7","8"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,8],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["3","6","7","8"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,5],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["2","5","6","8"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,6],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["5","6","8","9"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,7],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["1","3","5","7"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,6],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["2","5","7","9"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,1],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["2","3","4","5"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,6],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFA600","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,8],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFA600","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,7],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFA600","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,6],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFA600","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,4],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFA600","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,4],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFA600","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,1],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFA600","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,1],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFA600","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,1],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFA600","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFA600","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,8],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFA600","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.

Quadruples: Digits in the white circle must appear in at least one of the four surrounding cells.

Anti-Quadruples: Digits in the light red circle cannot appear in one of the four surrounding cells.

Bipolar Quadruples: In the yellow circle of the four digits, two digits cannot appear and the two other digits must appear in any of the four surrounding cells.
