---
format: open-rules
title: Irish Dots III
setter: Tingo
source: https://tinyurl.com/irishdotsiiisudoku
case: https://sudoku-sleuth.com/cases/irish-dots-iii
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
anti-king
kropki-1: kropki r8c1-r8c2 colour "white"
kropki-2: kropki r4c5-r5c5 colour "white"
kropki-3: kropki r8c3-r8c4 colour "white"
kropki-4: kropki r3c5-r4c5 colour "white"
kropki-5: kropki r2c5-r3c5 colour "white"
kropki-6: kropki r5c5-r5c6 colour "white"
kropki-7: kropki r5c8-r6c8 colour "white"
kropki-8: kropki r1c8-r1c9 colour "white"
```

```drawing
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,2],"width":0.3,"height":0.3,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,0.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,0.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,0.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,4],"width":0.3,"height":0.3,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,4.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4],"width":0.3,"height":0.3,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,6],"width":0.3,"height":0.3,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,6.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2],"width":0.3,"height":0.3,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,2.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF8800","stroke":"#FF8800","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,1],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF8800","stroke":"#FF8800","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,1.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF8800","stroke":"#FF8800","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF8800","stroke":"#FF8800","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,7],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF8800","stroke":"#FF8800","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal Sudoku Rules Apply
Cells separated by a king's move (in chess) cannot contain the same value.
Cells separated by white dots have consecutive values. Cells separated by green dots have a value ratio of 3:1.
Cells separated by orange dots have a value difference of 3, i.e. 1.4.7, 2.5.8, 3.6.9
Not all dots are given.
