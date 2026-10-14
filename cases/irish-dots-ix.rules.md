---
format: open-rules
title: Irish Dots IX
setter: Tingo
source: https://sudokupad.app/hovgm08wxk
case: https://sudoku-sleuth.com/cases/irish-dots-ix
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 80c05eddc384a7381d978a86fca5c709
---

```rules
sudoku 9x9
cage-1: cage r2c2-r2c3-r2c4-r3c2-r3c3-r3c4-r4c2-r4c3-r4c4 connected true
cage-2: cage r6c2-r6c3-r6c4-r7c2-r7c3-r7c4-r8c2-r8c3-r8c4 connected true
cage-3: cage r3c5-r4c5-r5c3-r5c4-r5c5-r5c6-r5c7-r6c5-r7c5 connected true
cage-4: cage r6c6-r6c7-r6c8-r7c6-r7c7-r7c8-r8c6-r8c7-r8c8 connected true
cage-5: cage r2c6-r2c7-r2c8-r3c6-r3c7-r3c8-r4c6-r4c7-r4c8 connected true
cage-6: cage r1c1-r1c2-r2c1-r3c1-r4c1-r5c1-r5c2-r6c1-r7c1 connected true
cage-7: cage r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9-r2c5-r2c9 connected true
cage-8: cage r3c9-r4c9-r5c8-r5c9-r6c9-r7c9-r8c9-r9c8-r9c9 connected true
cage-9: cage r8c1-r8c5-r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7 connected true
anti-king
kropki-1: kropki r5c8-r5c9 white
kropki-2: kropki r5c4-r5c5 white
kropki-3: kropki r5c6-r5c7 white
kropki-4: kropki r6c1-r6c2 white
kropki-5: kropki r1c5-r1c6 white
kropki-6: kropki r7c8-r7c9 white
kropki-7: kropki r7c8-r8c8 white
```

```drawing
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,5.5],"width":0.25,"height":0.25,"rounded":false,"fill":"#FF7700","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45,"opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,6.5],"width":0.25,"height":0.25,"rounded":false,"fill":"#FF7700","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,4.5],"width":0.25,"height":0.25,"rounded":false,"fill":"#FF7700","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45,"opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,6.5],"width":0.25,"height":0.25,"rounded":false,"fill":"#FF7700","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45,"opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,1],"width":0.25,"height":0.25,"rounded":false,"fill":"#FF7700","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45,"opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,3.5],"width":0.5,"height":0.25,"rounded":true,"fill":"#00FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,3.5],"width":0.5,"height":0.25,"rounded":true,"fill":"#00FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,5.5],"width":0.5,"height":0.25,"rounded":true,"fill":"#00FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,8.5],"width":0.5,"height":0.25,"rounded":true,"fill":"#00FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,7.5],"width":0.5,"height":0.25,"rounded":true,"fill":"#00FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,0.5],"width":0.5,"height":0.25,"rounded":true,"fill":"#00FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,6],"width":0.25,"height":0.5,"rounded":true,"fill":"#00FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal Sudoku Rules Apply
Cells separated by a king's move (in chess) cannot contain the same digit.
Cells separated by white dots have consecutive values. 
Cells separated by green dots (ovals) have a value ratio of 3:1.
Cells separated by orange dots (diamonds) have a value difference of 3, i.e. 1.4.7, 2.5.8, 3.6.9
Not all dots are given.
Digits in cages cannot repeat.
