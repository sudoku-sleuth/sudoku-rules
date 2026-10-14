---
format: open-rules
title: Black and Blue I
setter: Tingo
source: https://sudokupad.app/m309up0wbu
case: https://sudoku-sleuth.com/cases/black-and-blue-i
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: d6a4a67e154f64e54f3294141cde7f84
---

```rules
sudoku 9x9
anti-knight
kropki-1: kropki r5c2-r6c2 white
kropki-2: kropki r6c1-r6c2 black
kropki-3: kropki r6c2-r7c2 black
kropki-4: kropki r6c1-r7c1 black
kropki-5: kropki r7c1-r7c2 black
kropki-6: kropki r3c2-r3c3 black
kropki-7: kropki r3c3-r4c3 black
kropki-8: kropki r3c3-r3c4 black
kropki-9: kropki r4c3-r4c4 black
kropki-10: kropki r3c4-r4c4 black
kropki-11: kropki r2c3-r3c3 black
kropki-12: kropki r8c5-r9c5 black
kropki-13: kropki r4c8-r5c8 black
```

```drawing
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,4.5],"width":0.25,"height":0.25,"rounded":false,"fill":"#0000FF","stroke":"#000000","thickness":1,"textColor":"#0000FF","opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,4.5],"width":0.25,"height":0.25,"rounded":false,"fill":"#0000FF","stroke":"#000000","thickness":1,"textColor":"#0000FF","opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,4.5],"width":0.25,"height":0.25,"rounded":false,"fill":"#0000FF","stroke":"#000000","thickness":1,"textColor":"#0000FF","opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,4.5],"width":0.25,"height":0.25,"rounded":false,"fill":"#0000FF","stroke":"#000000","thickness":1,"textColor":"#0000FF","opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,4.5],"width":0.25,"height":0.25,"rounded":false,"fill":"#0000FF","stroke":"#000000","thickness":1,"textColor":"#0000FF","opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,3],"width":0.25,"height":0.25,"rounded":false,"fill":"#0000FF","stroke":"#000000","thickness":1,"textColor":"#0000FF","opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2],"width":0.25,"height":0.25,"rounded":false,"fill":"#0000FF","stroke":"#000000","thickness":1,"textColor":"#0000FF","opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,1],"width":0.25,"height":0.25,"rounded":false,"fill":"#0000FF","stroke":"#000000","thickness":1,"textColor":"#0000FF","opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,6],"width":0.25,"height":0.25,"rounded":false,"fill":"#0000FF","stroke":"#000000","thickness":1,"textColor":"#0000FF","opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,8],"width":0.25,"height":0.25,"rounded":false,"fill":"#0000FF","stroke":"#000000","thickness":1,"textColor":"#0000FF","opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,7],"width":0.25,"height":0.25,"rounded":false,"fill":"#0000FF","stroke":"#000000","thickness":1,"textColor":"#0000FF","opacity":0.5}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,0.5],"width":0.25,"height":0.25,"rounded":false,"fill":"#0000FF","stroke":"#000000","thickness":1,"textColor":"#0000FF","opacity":0.5}}
```

Normal Sudoku Rules Apply
Cells separated by a knight's move (in chess) cannot contain the same digit.
Cells connected by white dots are consecutive in value.
Cells connected by black dots have values in a ratio of 2:1.
Cells connected by blue squares have values separated by 2. Example: a 3 may be next to a 1 or 5 but no other values are valid. A 4 may be next to a 2 or a 6, but no other values are valid.
