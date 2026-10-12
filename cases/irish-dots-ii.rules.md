---
format: open-rules
title: Irish Dots II
setter: Tingo
source: https://tinyurl.com/irishdotsIIsudoku
case: https://sudoku-sleuth.com/cases/irish-dots-ii
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r5c3-r5c4 colour "white"
kropki-2: kropki r5c6-r5c7 colour "white"
kropki-3: kropki r4c3-r5c3 colour "white"
kropki-4: kropki r5c8-r6c8 colour "white"
kropki-5: kropki r6c7-r6c8 colour "white"
kropki-6: kropki r6c4-r7c4 colour "white"
kropki-7: kropki r1c3-r2c3 colour "white"
kropki-8: kropki r1c3-r1c4 colour "white"
kropki-9: kropki r8c4-r9c4 colour "white"
kropki-10: kropki r2c5-r2c6 colour "white"
kropki-11: kropki r2c8-r3c8 colour "white"
kropki-12: kropki r9c2-r9c3 colour "white"
```

```drawing
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,1],"width":0.35,"height":0.35,"rounded":true,"fill":"#FF6F00","stroke":"#FF6F00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2],"width":0.35,"height":0.35,"rounded":true,"fill":"#FF6F00","stroke":"#FF6F00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,4],"width":0.35,"height":0.35,"rounded":true,"fill":"#FF6F00","stroke":"#FF6F00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,5],"width":0.35,"height":0.35,"rounded":true,"fill":"#FF6F00","stroke":"#FF6F00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,7],"width":0.35,"height":0.35,"rounded":true,"fill":"#FF6F00","stroke":"#FF6F00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,2.5],"width":0.35,"height":0.35,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,2.5],"width":0.35,"height":0.35,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,8],"width":0.35,"height":0.35,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,6.5],"width":0.35,"height":0.35,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,3.5],"width":0.35,"height":0.35,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,2],"width":0.35,"height":0.35,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,4],"width":0.35,"height":0.35,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4],"width":0.35,"height":0.35,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,1.5],"width":0.35,"height":0.35,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2],"width":0.35,"height":0.35,"rounded":true,"fill":"#FF6F00","stroke":"#FF6F00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,3],"width":0.35,"height":0.35,"rounded":true,"fill":"#FF6F00","stroke":"#FF6F00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,6.5],"width":0.35,"height":0.35,"rounded":true,"fill":"#FF6F00","stroke":"#FF6F00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,5],"width":0.35,"height":0.35,"rounded":true,"fill":"#FF6F00","stroke":"#FF6F00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2],"width":0.35,"height":0.35,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,7],"width":0.35,"height":0.35,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal Sudoku Rules Apply
Cells separated by white dots have consecutive values. Cells separated by green dots have a value ratio of 3:1.
Cells separated by orange dots have a value difference of 3, i.e. 1.4.7, 2.5.8, 3.6.9
Not all dots are given.
