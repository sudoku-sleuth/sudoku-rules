---
format: open-rules
title: Irish Dots VIII
setter: Tingo
source: https://sudokupad.app/yoxuixce97
case: https://sudoku-sleuth.com/cases/irish-dots-viii
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A clue marker still needs to be read before we can confirm the rule for unmarked pairs.
exported: 592eca2816448ae9bf486dc3e37cfd85
---

```rules
sudoku 9x9
negative relations [{"op":"difference","value":1}] except [["r2c1","r2c2"],["r2c3","r2c4"],["r3c2","r3c3"],["r1c3","r2c3"],["r1c2","r1c3"],["r2c8","r2c9"],["r2c2","r2c3"],["r1c1","r2c1"],["r2c1","r3c1"],["r4c5","r5c5"],["r5c5","r6c5"]]
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
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1],"width":0.25,"height":0.25,"rounded":false,"fill":"#FF6600","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,3],"width":0.25,"height":0.25,"rounded":false,"fill":"#FF6600","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2],"width":0.25,"height":0.25,"rounded":false,"fill":"#FF6600","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,2.5],"width":0.25,"height":0.25,"rounded":false,"fill":"#FF6600","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,2],"width":0.25,"height":0.25,"rounded":false,"fill":"#FF6600","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,8],"width":0.25,"height":0.25,"rounded":false,"fill":"#FF6600","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2],"width":0.25,"height":0.5,"rounded":true,"fill":"#00FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,0.5],"width":0.5,"height":0.25,"rounded":true,"fill":"#00FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,0.5],"width":0.5,"height":0.25,"rounded":true,"fill":"#00FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,4.5],"width":0.5,"height":0.25,"rounded":true,"fill":"#00FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,4.5],"width":0.5,"height":0.25,"rounded":true,"fill":"#00FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal Sudoku Rules Apply
Cells separated by white dots have consecutive values. All white dots are given.
Cells separated by green dots (ovals) have a value ratio of 3:1.
Cells separated by orange dots (diamonds) have a value difference of 3, i.e. 1.4.7, 2.5.8, 3.6.9
Not all green/orange dots are given.
Digits in the same relative positions may not contain the same value (disjoint sets).
