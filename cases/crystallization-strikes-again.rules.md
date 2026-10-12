---
format: open-rules
title: Crystallization Strikes Again
setter: Will Power
source: https://sudokupad.app/4g0r5n41f1
case: https://sudoku-sleuth.com/cases/crystallization-strikes-again
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage r3c9-r4c9 total 4 connected true
kropki-1: kropki r1c1-r1c2 colour "white"
kropki-2: kropki r1c2-r2c2 colour "white"
kropki-3: kropki r2c1-r2c2 colour "white"
kropki-4: kropki r4c2-r5c2 colour "white"
kropki-5: kropki r4c1-r4c2 colour "white"
kropki-6: kropki r8c2-r8c3 colour "black"
kropki-7: kropki r7c2-r7c3 colour "black"
kropki-8: kropki r6c4-r6c5 colour "black"
kropki-9: kropki r4c5-r4c6 colour "black"
kropki-10: kropki r8c7-r8c8 colour "black"
kropki-11: kropki r8c9-r9c9 colour "black"
```

```drawing
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,3.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,8.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,7.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
```

Normal Sudoku rules apply. Pink pills are the sum of the two pills (or circles) below them. Pills are read from left to right. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown. KILLER CAGE- Numbers in cages sum to the number in the top left corner of the cage.
