---
format: open-rules
title: Adding, or Multiplying The Fun
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/adding-or-multiplying-the-fun
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r3c1=8 r3c4=7 r4c4=3 r4c7=2 r4c8=9
exported: 9a75f82498f0e6617c94568f8c3e6275
---

```rules
sudoku 9x9
kropki-1: kropki r9c3-r9c4 black
kropki-2: kropki r9c8-r9c9 black
kropki-3: kropki r5c5-r5c6 black
kropki-4: kropki r5c5-r6c5 black
kropki-5: kropki r7c8-r8c8 black
kropki-6: kropki r8c4-r8c5 black
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,6.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,6],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,8.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,1],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":2.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,8.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,7.5],"width":2.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,4],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,5.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,7],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,6],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,6],"width":0,"height":0,"rounded":false,"thickness":0,"text":"  =","textColor":"#000000","fontSize":20}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,7],"width":0,"height":0,"rounded":false,"thickness":0,"text":"  +","textColor":"#000000","fontSize":20}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2],"width":0,"height":0,"rounded":false,"thickness":0,"text":"  =","textColor":"#000000","fontSize":20}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,3],"width":0,"height":0,"rounded":false,"thickness":0,"text":"  +","textColor":"#000000","fontSize":20}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,7],"width":0,"height":0,"rounded":false,"thickness":0,"text":"  =","textColor":"#000000","fontSize":20}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,8],"width":0,"height":0,"rounded":false,"thickness":0,"text":"  x","textColor":"#000000","fontSize":20}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2],"width":0,"height":0,"rounded":false,"thickness":0,"text":"  x","textColor":"#000000","fontSize":20}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,3],"width":0,"height":0,"rounded":false,"thickness":0,"text":"  =","textColor":"#000000","fontSize":20}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,7],"width":0,"height":0,"rounded":false,"thickness":0,"text":"  +","textColor":"#000000","fontSize":20}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,8],"width":0,"height":0,"rounded":false,"thickness":0,"text":"  =","textColor":"#000000","fontSize":20}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,1],"width":0,"height":0,"rounded":false,"thickness":0,"text":"  +","textColor":"#000000","fontSize":20}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,2],"width":0,"height":0,"rounded":false,"thickness":0,"text":"  =","textColor":"#000000","fontSize":20}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"  x","textColor":"#000000","fontSize":20}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,6],"width":0,"height":0,"rounded":false,"thickness":0,"text":"  =","textColor":"#000000","fontSize":20}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,2],"width":0,"height":0,"rounded":false,"thickness":0,"text":"  =  ","textColor":"#000000","fontSize":20}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,3],"width":0,"height":0,"rounded":false,"thickness":0,"text":"  +","textColor":"#000000","fontSize":20}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"  =","textColor":"#000000","fontSize":20}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,6],"width":0,"height":0,"rounded":false,"thickness":0,"text":"  +","textColor":"#000000","fontSize":20}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3],"width":0,"height":0,"rounded":false,"thickness":0,"text":"  =","textColor":"#000000","fontSize":20}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"  +","textColor":"#000000","fontSize":20}}
```

Normal Sudoku rules apply. Numbers in circles and pills are to be used in the calculations with addition (+) or multiplication (x) on one side and the result on the other side of the (=) sign. If circles and pills are next to each other, with no symbol between, they are part of different calculations than one another. Cells with a black dot between them are in a ratio of 2:1. Not all possible dots are shown.
