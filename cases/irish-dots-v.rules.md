---
format: open-rules
title: Irish Dots V
setter: Tingo
source: https://tinyurl.com/irishdotsvsudoku
case: https://sudoku-sleuth.com/cases/irish-dots-v
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r5c7-r5c8 colour "white"
kropki-2: kropki r1c8-r2c8 colour "white"
kropki-3: kropki r1c4-r2c4 colour "white"
kropki-4: kropki r1c6-r2c6 colour "white"
kropki-5: kropki r4c1-r4c2 colour "white"
kropki-6: kropki r6c2-r7c2 colour "white"
kropki-7: kropki r7c8-r7c9 colour "white"
kropki-8: kropki r7c4-r8c4 colour "white"
kropki-9: kropki r8c4-r8c5 colour "white"
kropki-10: kropki r4c6-r4c7 colour "white"
pair-1: pair r5c1-r6c1 sum 5
pair-2: pair r2c3-r2c4 sum 5
pair-3: pair r3c5-r4c5 sum 5
pair-4: pair r6c5-r7c5 sum 5
pair-5: pair r5c8-r5c9 sum 5
pair-6: pair r8c1-r8c2 sum 5
```

```drawing
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,5.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF6600","stroke":"#FF6600","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,2],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF6600","stroke":"#FF6600","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,4],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF6600","stroke":"#FF6600","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,5],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF6600","stroke":"#FF6600","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF6600","stroke":"#FF6600","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,5],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF6600","stroke":"#FF6600","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,4],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF6600","stroke":"#FF6600","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF6600","stroke":"#FF6600","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,6.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF6600","stroke":"#FF6600","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,7.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF6600","stroke":"#FF6600","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,0.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,8.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,1.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,1.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,1.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal Sudoku Rules Apply
Cells separated by white dots have consecutive values.
Cells separated by green dots have a value ratio of 3:1.
Cells separated by orange dots have a value difference of 3, i.e. 1.4.7, 2.5.8, 3.6.9
Not all dots are given.
Cells joined by V must sum to 5. Not all Vs are given.
It is possible that 1-4 pairs can be joined by Vs or orange dots. It is also possible that 2-3 pairs can be joined by Vs or white dots.
