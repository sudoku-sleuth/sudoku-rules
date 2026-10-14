---
format: open-rules
title: Irish Dots VI
setter: Tingo
source: ""
case: https://sudoku-sleuth.com/cases/irish-dots-vi
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 3e56f075377c7b8bb80bd00100833722
---

```rules
sudoku 9x9
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
kropki-1: kropki r2c2-r2c3 white
kropki-2: kropki r2c1-r2c2 white
kropki-3: kropki r7c1-r8c1 white
kropki-4: kropki r7c2-r7c3 white
kropki-5: kropki r7c3-r8c3 white
kropki-6: kropki r4c9-r5c9 white
kropki-7: kropki r5c9-r6c9 white
kropki-8: kropki r6c8-r6c9 white
unique-1: unique r1c1-r1c4-r1c7-r4c1-r4c4-r4c7-r7c1-r7c4-r7c7
unique-2: unique r1c2-r1c5-r1c8-r4c2-r4c5-r4c8-r7c2-r7c5-r7c8
unique-3: unique r1c3-r1c6-r1c9-r4c3-r4c6-r4c9-r7c3-r7c6-r7c9
unique-4: unique r2c1-r2c4-r2c7-r5c1-r5c4-r5c7-r8c1-r8c4-r8c7
unique-5: unique r2c2-r2c5-r2c8-r5c2-r5c5-r5c8-r8c2-r8c5-r8c8
unique-6: unique r2c3-r2c6-r2c9-r5c3-r5c6-r5c9-r8c3-r8c6-r8c9
unique-7: unique r3c1-r3c4-r3c7-r6c1-r6c4-r6c7-r9c1-r9c4-r9c7
unique-8: unique r3c2-r3c5-r3c8-r6c2-r6c5-r6c8-r9c2-r9c5-r9c8
unique-9: unique r3c3-r3c6-r3c9-r6c3-r6c6-r6c9-r9c3-r9c6-r9c9
```

```drawing
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,1],"width":0.3,"height":0.3,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,1.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,1.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,0.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,8],"width":0.3,"height":0.3,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,0.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF6600","stroke":"#FF6600","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,3.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF6600","stroke":"#FF6600","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,7.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF6600","stroke":"#FF6600","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,1],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF6600","stroke":"#FF6600","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF6600","stroke":"#FF6600","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal Sudoku Rules Apply
Cells separated by white dots have consecutive values.
Cells separated by green dots have a value ratio of 3:1.
Cells separated by orange dots have a value difference of 3, i.e. 1.4.7, 2.5.8, 3.6.9
Not all dots are given.
Digits along the marked diagonals may not repeat
A digit may not appear in the same relative cell in more than one box (disjoint sets rule)
