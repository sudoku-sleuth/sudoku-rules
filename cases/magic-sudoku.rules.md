---
format: open-rules
title: Magic Sudoku
setter: Dr Logic
source: https://f-puzzles.com/?id=2deuke96
case: https://sudoku-sleuth.com/cases/magic-sudoku
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c9=6 r5c3=1 r8c5=2
---

```rules
sudoku 9x9
anti-king
pair-1: pair r7c8-r8c8 ratio 3
kropki-1: kropki r3c7-r4c7 colour "black"
pair-2: pair r7c7-r7c8 ratio 4
kropki-2: kropki r7c4-r7c5 colour "black"
pair-3: pair r1c1-r2c1 ratio 4
kropki-3: kropki r5c1-r6c1 colour "black"
kropki-4: kropki r1c4-r1c5 colour "black"
kropki-5: kropki r2c1-r3c1 colour "black"
pair-4: pair r3c1-r3c2 ratio 3
```

```drawing
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FF0000","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#FF0000","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#FF0000","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#FF0000","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#FF0000","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FF0000","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#FF0000","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#0000FF","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#0000FF","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#0000FF","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#0000FF","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#0000FF","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#0000FF","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#0000FF","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#0000FF","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#00FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#00FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#00FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#00FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#00FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#00FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#00FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#00FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#FF0000","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal Sudoku rules apply.
The red cells form a non-repeating magic square centered around R5C5. (Where each row, column and diagonal of the magic square sum to the same number)
The sum of the blue cells is a multiple of the centre R5C5 digit. There are no repeats including R5C5.
The green cells form a rotated version of the red magic square centered R5C5, once again no repeats and all columns, rows and diagonals sumto the same number.
Cells seperated by a black dot must be in the ratio given in the dot.
Cells seperated by a kings move (in chess) must not contain the same digits.
