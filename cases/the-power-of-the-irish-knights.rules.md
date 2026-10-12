---
format: open-rules
title: The Power Of The Irish Knights
setter: Tingo
source: https://tinyurl.com/poweroftheirishknightssudoku
case: https://sudoku-sleuth.com/cases/the-power-of-the-irish-knights
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
anti-knight
kropki-1: kropki r8c4-r8c5 colour "white"
kropki-2: kropki r1c3-r2c3 colour "white"
kropki-3: kropki r2c3-r3c3 colour "white"
```

```drawing
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,3.5],"width":0.35,"height":0.35,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,5],"width":0.35,"height":0.35,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,6.5],"width":0.35,"height":0.35,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2],"width":0.35,"height":0.35,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,7],"width":0.35,"height":0.35,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,8.5],"width":0.35,"height":0.35,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,8],"width":0.35,"height":0.35,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8],"width":0.35,"height":0.35,"rounded":true,"fill":"#FF9500","stroke":"#FF9500","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,7],"width":0.35,"height":0.35,"rounded":true,"fill":"#FF9500","stroke":"#FF9500","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5],"width":0.35,"height":0.35,"rounded":true,"fill":"#FF9500","stroke":"#FF9500","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2],"width":0.35,"height":0.35,"rounded":true,"fill":"#FF9500","stroke":"#FF9500","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,4.5],"width":0.35,"height":0.35,"rounded":true,"fill":"#FF9500","stroke":"#FF9500","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,5],"width":0.35,"height":0.35,"rounded":true,"fill":"#FF9500","stroke":"#FF9500","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,3.5],"width":0.35,"height":0.35,"rounded":true,"fill":"#FF9500","stroke":"#FF9500","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,4],"width":0.35,"height":0.35,"rounded":true,"fill":"#FF9500","stroke":"#FF9500","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal Sudoku Rules Apply
Cells separated by a knight's move (in chess) cannot contain the same digit.
Cells joined by green dots have values in a ratio of 3:1
Cells joined by orange dots have values with a difference of 3, i.e. 1.4.7, 2.5.8, 3.6.9
Cells joined by white dots have values that are consecutive. Not all dots are given.
Each set of cells connected by orange and/or green and/or white dots (hitherto called a 'cluster') represents a "knight". Each "knight" has a rank of 2,3,4,5 or 6. The rank of the knight must be determined by the solver. The sum of all cells in a dot cluster must add up to the rank of the knight squared. E.G. The knight with the rank of 5 will have all connected cells summing to the value of 5^2 or 25.
