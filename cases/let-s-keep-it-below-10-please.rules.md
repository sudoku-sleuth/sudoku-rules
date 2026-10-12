---
format: open-rules
title: Let's Keep It Below 10, Please
setter: Will Power
source: https://sudokupad.app/qyntkgja5q
case: https://sudoku-sleuth.com/cases/let-s-keep-it-below-10-please
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r2c5-r2c6 total 7 connected true
cage-2: cage r5c8-r6c8 total 4 connected true
cage-3: cage r8c4-r8c5 total 9 connected true
cage-4: cage r4c2-r5c2 total 12 connected true
kropki-1: kropki r5c7-r5c8 colour "white"
kropki-2: kropki r7c5-r8c5 colour "white"
kropki-3: kropki r5c3-r5c4 colour "white"
kropki-4: kropki r3c3-r4c3 colour "white"
kropki-5: kropki r4c2-r4c3 colour "white"
kropki-6: kropki r1c2-r2c2 colour "white"
kropki-7: kropki r2c3-r3c3 colour "black"
kropki-8: kropki r1c3-r2c3 colour "black"
kropki-9: kropki r5c1-r6c1 colour "black"
kropki-10: kropki r6c1-r7c1 colour "black"
kropki-11: kropki r3c5-r4c5 colour "black"
kropki-12: kropki r6c5-r7c5 colour "black"
kropki-13: kropki r5c6-r5c7 colour "black"
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[1.5,5.5],[2.5,6.5]],"color":"#AAFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[5.5,7.5],[6.5,6.5]],"color":"#AAFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[7.5,3.5],[6.5,2.5]],"color":"#AAFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[3.5,1.5],[2.5,2.5]],"color":"#AAFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[3.5,7.5],[4.5,7.5]],"color":"#FFAAAA","thickness":16,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[7.5,5.5],[7.5,4.5]],"color":"#FFAAAA","thickness":16,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[5.5,1.5],[4.5,1.5]],"color":"#FFAAAA","thickness":16,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[1.5,3.5],[1.5,4.5]],"color":"#FFAAAA","thickness":16,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[4.5,3.5],[4.5,2.5],[4.5,1.5]],"color":"#BE9EF0","thickness":16,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[5.5,4.5],[6.5,4.5],[7.5,4.5]],"color":"#BE9EF0","thickness":16,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[4.5,5.5],[4.5,6.5],[4.5,7.5]],"color":"#BE9EF0","thickness":16,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[3.5,4.5],[2.5,4.5],[1.5,4.5]],"color":"#BE9EF0","thickness":16,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[7.5,7.5],[8.5,6.5]],"color":"#AAFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[3.5,6.5],[2.5,5.5]],"color":"#98FF96","thickness":16,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[3.5,3.5],[2.5,3.5]],"color":"#98FF96","thickness":16,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,6.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFAAAA","stroke":"#FFAAAA","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,6.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFAAAA","stroke":"#FFAAAA","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,2.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFAAAA","stroke":"#FFAAAA","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFAAAA","stroke":"#FFAAAA","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,7.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#AAFFFF","stroke":"#AAFFFF","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#AAFFFF","stroke":"#AAFFFF","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,1.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#AAFFFF","stroke":"#AAFFFF","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#AAFFFF","stroke":"#AAFFFF","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,4.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#BE9EF0","stroke":"#BE9EF0","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,2.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#98FF96","stroke":"#98FF96","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,5.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#98FF96","stroke":"#98FF96","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,8.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#AAFFFF","stroke":"#AAFFFF","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal Sudoku rules apply. 

ONES PLACE LINES- Numbers on colored lines sum to the number in the bulb on the line. If the sum is over 10, only the ones place is used in the bulb. There are 4 different purple lines, with their bulb at the center of the grid.

KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. The 9 is repeated in its cage because the blue line can obscure it in some puzzle formats.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown.
