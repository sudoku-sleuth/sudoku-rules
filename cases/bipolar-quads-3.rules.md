---
format: open-rules
title: Bipolar Quads 3
setter: The Bard
source: https://sudokupad.app/bqtmbxybe7
case: https://sudoku-sleuth.com/cases/bipolar-quads-3
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 00324b7402694681d92babc9485c797f
---

```rules
sudoku 9x9
anti-king
quadruple-1: quadruple r1c5-r1c6-r2c5-r2c6 digits [6]
quadruple-2: quadruple r1c4-r1c5-r2c4-r2c5 digits [4]
quadruple-3: quadruple r5c8-r5c9-r6c8-r6c9 digits [6]
quadruple-4: quadruple r4c1-r4c2-r5c1-r5c2 digits [2,6]
quadruple-5: quadruple r8c4-r8c5-r9c4-r9c5 digits [6,8]
quadruple-6: quadruple r5c1-r5c2-r6c1-r6c2 digits [3,4]
quadruple-7: quadruple r8c5-r8c6-r9c5-r9c6 digits [2,3]
quadruple-8: quadruple r4c8-r4c9-r5c8-r5c9 digits [4,5,7]
allowed-digits-1: allowed-digits r2c2-r2c3-r3c2-r3c3 digits [3,6,7,8,9]
allowed-digits-2: allowed-digits r7c7-r7c8-r8c7-r8c8 digits [1,2,3,5,7]
allowed-digits-3: allowed-digits r2c7-r2c8-r3c7-r3c8 digits [2,3,4,5,8]
allowed-digits-4: allowed-digits r7c2-r7c3-r8c2-r8c3 digits [2,3,5,7,8]
allowed-digits-5: allowed-digits r4c5-r4c6-r5c5-r5c6 digits [2,4,5,6,7]
allowed-digits-6: allowed-digits r4c4-r4c5-r5c4-r5c5 digits [1,4,6,8,9]
allowed-digits-7: allowed-digits r5c4-r5c5-r6c4-r6c5 digits [3,4,5,7,8]
allowed-digits-8: allowed-digits r5c5-r5c6-r6c5-r6c6 digits [1,2,3,4,9]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,1],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["1","4","6","9"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,8],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["1","4","6","9"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,8],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["1","4","6","9"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,1],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["1","4","6","9"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,3],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["1","4","6","9"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,6],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["1","4","6","9"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,3],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["1","2","8","9"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,6],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["1","2","8","9"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,7],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["3","5"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,4],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["3","5","8","9"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,2],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["7","8"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,8],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["5","7"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,8],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFDD00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,8],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFDD00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,6],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFDD00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,7],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFDD00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,6],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFDD00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,8],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFDD00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,4],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFDD00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,3],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFDD00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,2],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFDD00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,1],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFDD00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,3],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFDD00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,1],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFDD00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.

Quadruples: Digits in the white circle must appear in at least one of the four surrounding cells.

Anti-Quadruples: Digits in the light red circle cannot appear in one of the four surrounding cells.

Bipolar Quadruples: In the yellow circle half of the digits cannot appear and the other half must appear in any of the four surrounding cells. (i.e. half are liars and half are true.)

Anti-King: Cells that are a King's move apart (in chess) may not contain the same digit.
