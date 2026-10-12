---
format: open-rules
title: Luke Skywalker X-Wing Fighter
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/luke-skywalker-x-wing-fighter
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r1c9-r2c9 total 9 connected true
cage-2: cage r1c1-r2c1 total 10 connected true
cage-3: cage r8c7-r8c8 total 10 connected true
cage-4: cage r2c7-r3c7 total 14 connected true
cage-5: cage r5c1-r6c1 total 3 connected true
cage-6: cage r5c3-r6c3 total 12 connected true
kropki-1: kropki r2c8-r3c8 colour "white"
kropki-2: kropki r2c7-r2c8 colour "white"
kropki-3: kropki r1c7-r2c7 colour "white"
kropki-4: kropki r1c6-r1c7 colour "white"
kropki-5: kropki r6c5-r7c5 colour "white"
kropki-6: kropki r7c5-r8c5 colour "white"
kropki-7: kropki r8c5-r9c5 colour "white"
kropki-8: kropki r9c5-r9c6 colour "white"
kropki-9: kropki r4c7-r5c7 colour "white"
kropki-10: kropki r5c7-r6c7 colour "white"
whispers-1: whispers r8c7-r7c8-r6c9 gap 4
whispers-2: whispers r1c4-r2c5-r3c6-r3c7-r4c7-r5c8-r6c9 gap 4
whispers-3: whispers r5c8-r6c7-r7c6 gap 4
whispers-4: whispers r6c7-r7c8 gap 4
whispers-5: whispers r4c7-r5c6-r6c5-r7c4-r8c3-r9c2-r9c1 gap 4
whispers-6: whispers r9c1-r8c1-r7c2-r6c3-r5c4-r4c5-r3c6 gap 4
whispers-7: whispers r5c4-r4c3-r3c4-r2c5 gap 4
whispers-8: whispers r3c2-r2c3-r1c4 gap 4
whispers-9: whispers r2c3-r3c4 gap 4
whispers-10: whispers r6c5-r7c6 gap 4
```

```drawing
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,3.5],"width":1,"height":0.5,"rounded":false,"fill":"#FF7F7A","stroke":"#000000","thickness":1,"textColor":"#000000","angle":135,"opacity":0.5}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,7.5],"width":1,"height":0.5,"rounded":false,"fill":"#FF7F7A","stroke":"#000000","thickness":1,"textColor":"#000000","angle":135,"opacity":0.5}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,1.5],"width":1,"height":0.25,"rounded":false,"fill":"#FF7F7A","stroke":"#000000","thickness":1,"textColor":"#000000","angle":135,"opacity":0.5}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,2.5],"width":1,"height":0.25,"rounded":false,"fill":"#FF7F7A","stroke":"#000000","thickness":1,"textColor":"#000000","angle":135,"opacity":0.5}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,3.5],"width":1,"height":0.5,"rounded":false,"fill":"#BABABA","stroke":"#000000","thickness":1,"textColor":"#000000","angle":135,"opacity":0.5}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,5.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#7D81FF","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal Sudoku rules apply. DUTCH WHISPERS- Numbers on the blue line are at least 4 apart from their neighbors on the line. Numbers repeat on the blue line. The number 5 does not appear on the blue line. Numbers in cages sum to the number in the top left corner of the cage. Numbers cannot repeat in cages. Numbers with white dots between them are consecutive. Hints for Star Wars (original movie) fans (Not required for the solve): The blue circle is the only number found in the name of Luke's droid that is located on his fighter. The gray rectangle is Luke's cockpit, and contains the number in Luke's call sign during the final Star Wars Battle ("RED _"). The red rectangles have no effect on the puzzle.
