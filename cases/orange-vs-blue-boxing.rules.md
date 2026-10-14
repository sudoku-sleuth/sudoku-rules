---
format: open-rules
title: Orange vs. Blue Boxing
setter: Will Power
source: https://sudokupad.app/ihbxboo33n
case: https://sudoku-sleuth.com/cases/orange-vs-blue-boxing
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 8f1809eaf0a83df87bff427912f4bb26
---

```rules
sudoku 9x9
cage-1: cage r4c1-r4c2 total 6 connected true
cage-2: cage r6c4-r6c5-r6c6 total 23 connected true
cage-3: cage r2c4-r2c5 total 7 connected true
kropki-1: kropki r6c1-r6c2 black
kropki-2: kropki r7c1-r7c2 black
kropki-3: kropki r8c1-r8c2 black
kropki-4: kropki r7c7-r7c8 black
kropki-5: kropki r7c8-r7c9 black
kropki-6: kropki r7c4-r8c4 black
kropki-7: kropki r8c6-r9c6 black
kropki-8: kropki r9c4-r9c5 black
kropki-9: kropki r8c6-r8c7 black
kropki-10: kropki r3c5-r3c6 black
arrow-1: arrow r3c2-r4c1 bulb ["r2c3"]
arrow-2: arrow r4c3-r3c2 bulb ["r3c4"]
arrow-3: arrow r4c2-r3c2 bulb ["r5c3"]
arrow-4: arrow r6c2-r7c2-r8c2 bulb ["r5c1"]
arrow-5: arrow r6c1-r7c1-r8c1 bulb ["r5c1"]
arrow-6: arrow r2c7-r3c8 bulb ["r1c6"]
arrow-7: arrow r5c8-r6c8-r7c9 bulb ["r4c8"]
arrow-8: arrow r5c7-r6c7-r7c7 bulb ["r4c8"]
arrow-9: arrow r2c6-r2c7 bulb ["r1c5"]
arrow-10: arrow r3c6-r2c7 bulb ["r3c5"]
```

```drawing
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,3.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FF7383","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FF7383","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,4.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FF7383","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,4.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FF7383","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,0.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#78C9FF","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,7.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFA666","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal Sudoku rules apply. ARROWS- Numbers on arrows sum to the number in the arrow's circle. All upper body arrows are 2 in length. Numbers may repeat on arrows, if other rules allow. Colors in circles have no effect on the puzzle. KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.
