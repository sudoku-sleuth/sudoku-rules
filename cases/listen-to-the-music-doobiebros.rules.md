---
format: open-rules
title: Listen to the Music DoobieBros
setter: Will Power
source: https://sudokupad.app/kt314fvstk
case: https://sudoku-sleuth.com/cases/listen-to-the-music-doobiebros
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 77053d1ea9503ae42ff63491be299584
---

```rules
sudoku 9x9
cage-1: cage r1c6-r2c6-r3c6 total 9 connected true
cage-2: cage r1c8-r2c8-r3c8 total 16 connected true
kropki-1: kropki r2c1-r3c1 white
kropki-2: kropki r5c2-r6c2 white
kropki-3: kropki r5c6-r5c7 white
kropki-4: kropki r4c3-r4c4 black
kropki-5: kropki r3c2-r3c3 black
kropki-6: kropki r2c1-r2c2 black
kropki-7: kropki r5c4-r5c5 black
kropki-8: kropki r4c5-r4c6 black
kropki-9: kropki r4c7-r4c8 black
kropki-10: kropki r3c6-r3c7 black
kropki-11: kropki r3c8-r3c9 black
kropki-12: kropki r9c1-r9c2 black
kropki-13: kropki r8c1-r8c2 black
kropki-14: kropki r8c5-r8c6 black
kropki-15: kropki r8c8-r8c9 black
whispers-1: whispers r2c1-r1c1-r1c2-r2c2-r3c2 gap 4
whispers-2: whispers r1c2-r1c3-r2c3-r3c3-r4c3 gap 4
whispers-3: whispers r1c6-r2c6-r3c6 gap 4
whispers-4: whispers r5c4-r4c4-r3c4 gap 4
whispers-5: whispers r4c7-r3c7-r2c7 gap 4
whispers-6: whispers r1c8-r2c8-r3c8 gap 4
whispers-7: whispers r7c1-r8c1-r9c1 gap 4
whispers-8: whispers r6c5-r7c5-r8c5 gap 4
whispers-9: whispers r6c8-r7c8-r8c8 gap 4
whispers-10: whispers r4c2-r5c2-r5c1 gap 4
whispers-11: whispers r2c5-r3c5-r4c5 gap 4
```

```drawing
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1],"width":0.9,"height":0.7,"rounded":true,"fill":"#FF7383","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2],"width":0.9,"height":0.7,"rounded":true,"fill":"#FF7383","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3],"width":0.9,"height":0.7,"rounded":true,"fill":"#FF7383","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,4],"width":0.9,"height":0.7,"rounded":true,"fill":"#FF7383","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,5],"width":0.9,"height":0.7,"rounded":true,"fill":"#FF7383","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,6],"width":0.9,"height":0.7,"rounded":true,"fill":"#FF7383","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,7],"width":0.9,"height":0.7,"rounded":true,"fill":"#FF7383","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,8],"width":0.9,"height":0.7,"rounded":true,"fill":"#FF7383","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,1],"width":0.9,"height":0.7,"rounded":true,"fill":"#FF7383","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,1],"width":0.9,"height":0.7,"rounded":true,"fill":"#FF7383","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,5],"width":0.9,"height":0.7,"rounded":true,"fill":"#FF7383","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,8],"width":0.9,"height":0.7,"rounded":true,"fill":"#FF7383","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
```

What the people need, is a way to make 'em smile! Normal Sudoku rules apply. DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
