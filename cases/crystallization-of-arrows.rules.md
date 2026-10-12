---
format: open-rules
title: Crystallization of Arrows
setter: Will Power
source: https://sudokupad.app/f29kk6v182
case: https://sudoku-sleuth.com/cases/crystallization-of-arrows
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r8c8-r9c8 colour "white"
kropki-2: kropki r5c5-r6c5 colour "white"
kropki-3: kropki r6c1-r7c1 colour "white"
kropki-4: kropki r5c1-r6c1 colour "white"
kropki-5: kropki r4c9-r5c9 colour "white"
kropki-6: kropki r5c9-r6c9 colour "white"
kropki-7: kropki r3c4-r3c5 colour "white"
kropki-8: kropki r6c2-r6c3 colour "white"
kropki-9: kropki r2c2-r3c2 colour "black"
arrow-1: arrow r9c9-r8c9 bulb ["r9c8"]
arrow-2: arrow r7c8-r7c9-r6c9 bulb ["r8c7","r8c8"]
arrow-3: arrow r6c7-r6c8-r5c8-r5c9 bulb ["r7c6","r7c7"]
arrow-4: arrow r9c6-r9c5 bulb ["r9c7"]
arrow-5: arrow r5c6-r5c7-r4c7-r4c8 bulb ["r6c5","r6c6"]
arrow-6: arrow r4c5-r4c6-r3c6-r3c7-r3c8-r3c9 bulb ["r5c4","r5c5"]
arrow-7: arrow r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1-r9c2 bulb ["r2c1","r2c2"]
arrow-8: arrow r4c2-r5c2-r6c2-r6c3-r7c3-r7c4-r8c4 bulb ["r3c2","r3c3"]
```

```drawing
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,4.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
```

Normal Sudoku rules apply. 

ARROWS- Numbers on arrows sum to the number on the arrow's origin (circle or pill). Pills are read from left to right. Some circles and pills do not have an arrow.

CRYSTALLIZATION- Pink pills are the sum of the two pills or circles below them.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown.
