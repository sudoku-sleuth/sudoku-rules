---
format: open-rules
title: Irish Dots VII
setter: Tingo
source: https://tinyurl.com/3w2dzy3b
case: https://sudoku-sleuth.com/cases/irish-dots-vii
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: e4ead924d30a6a42804325581e2ea9fb
---

```rules
sudoku 9x9
anti-king
kropki-1: kropki r5c1-r5c2 white
kropki-2: kropki r5c2-r5c3 white
kropki-3: kropki r1c1-r2c1 white
kropki-4: kropki r1c2-r1c3 white
kropki-5: kropki r8c4-r9c4 white
kropki-6: kropki r3c5-r3c6 white
kropki-7: kropki r8c7-r9c7 white
kropki-8: kropki r4c2-r4c3 white
kropki-9: kropki r7c6-r7c7 white
kropki-10: kropki r8c9-r9c9 white
kropki-11: kropki r7c9-r8c9 white
kropki-12: kropki r1c2-r2c2 white
kropki-13: kropki r2c3-r3c3 white
```

```drawing
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,4.5],"width":0.25,"height":0.25,"rounded":false,"fill":"#FF6600","stroke":"#000000","thickness":1,"textColor":"#000000","angle":-45,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4],"width":0.25,"height":0.25,"rounded":false,"fill":"#FF6600","stroke":"#000000","thickness":1,"textColor":"#000000","angle":-45,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,0.5],"width":0.25,"height":0.25,"rounded":false,"fill":"#FF6600","stroke":"#000000","thickness":1,"textColor":"#000000","angle":-45,"opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,2],"width":0.25,"height":0.25,"rounded":false,"fill":"#FF6600","stroke":"#000000","thickness":1,"textColor":"#000000","angle":-45,"opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2],"width":0.25,"height":0.25,"rounded":false,"fill":"#FF6600","stroke":"#000000","thickness":1,"textColor":"#000000","angle":-45,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,3],"width":0.25,"height":0.25,"rounded":false,"fill":"#FF6600","stroke":"#000000","thickness":1,"textColor":"#000000","angle":-45,"opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,6.5],"width":0.25,"height":0.25,"rounded":false,"fill":"#FF6600","stroke":"#000000","thickness":1,"textColor":"#000000","angle":-45,"opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,8],"width":0.25,"height":0.25,"rounded":false,"fill":"#FF6600","stroke":"#000000","thickness":1,"textColor":"#000000","angle":-45,"opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,1.5],"width":0.5,"height":0.25,"rounded":true,"fill":"#00FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,2.5],"width":0.5,"height":0.25,"rounded":true,"fill":"#00FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,3],"width":0.25,"height":0.5,"rounded":true,"fill":"#00FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,5],"width":0.25,"height":0.5,"rounded":true,"fill":"#00FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,6],"width":0.25,"height":0.5,"rounded":true,"fill":"#00FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,7],"width":0.25,"height":0.5,"rounded":true,"fill":"#00FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal Sudoku Rules Apply
Cells separated by a king's move (in chess) cannot contain the same digit.
Cells separated by white dots have consecutive values.
Cells separated by green dots (ovals) have a value ratio of 3:1.
Cells separated by orange dots (diamonds) have a value difference of 3, i.e. 1.4.7, 2.5.8, 3.6.9
Not all dots are given.
