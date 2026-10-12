---
format: open-rules
title: Irish Dots IV
setter: Tingo
source: https://tinyurl.com/irishdotsivsudoku
case: https://sudoku-sleuth.com/cases/irish-dots-iv
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A clue marker still needs to be read before we can confirm the rule for unmarked pairs.
---

```rules
sudoku 9x9
negative relations [{"op":"difference","value":1}] except [["r6c4","r6c5"],["r5c5","r6c5"],["r5c6","r6c6"],["r2c1","r2c2"],["r5c2","r5c3"],["r8c2","r9c2"],["r5c4","r6c4"],["r4c4","r5c4"],["r7c6","r8c6"],["r8c2","r8c3"],["r4c3","r4c4"],["r1c9","r2c9"],["r6c2","r7c2"],["r2c2","r3c2"],["r4c7","r4c8"],["r1c6","r2c6"]]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,4],"width":0.3,"height":0.3,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#00FF00","opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,4.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#00FF00","opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,5.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#00FF00","opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1],"width":0.3,"height":0.3,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#00FF00","opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2],"width":0.3,"height":0.3,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#00FF00","opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,1.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#00FF00","opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,3.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF6600","stroke":"#FF6600","thickness":1,"textColor":"#00FF00","opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,3.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF6600","stroke":"#FF6600","thickness":1,"textColor":"#00FF00","opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,5.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF6600","stroke":"#FF6600","thickness":1,"textColor":"#00FF00","opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,2],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF6600","stroke":"#FF6600","thickness":1,"textColor":"#00FF00","opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF6600","stroke":"#FF6600","thickness":1,"textColor":"#00FF00","opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,8.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#00FF00","opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,1.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF6600","stroke":"#FF6600","thickness":1,"textColor":"#00FF00","opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,1.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF6600","stroke":"#FF6600","thickness":1,"textColor":"#00FF00","opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,7],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF6600","stroke":"#FF6600","thickness":1,"textColor":"#00FF00","opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,5.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#00FF00","stroke":"#00FF00","thickness":1,"textColor":"#00FF00","opacity":0.5}}
```

Normal Sudoku Rules Apply
Cells joined by white dots are consecutive. All white dots are given.
Cells joined by green dots have a value ratio of 3:1.
Cells joined by orange dots have a value difference of 3, i.e. 1.4.7, 2.5.8, 3.6.9
Not all green/orange dots are given.
