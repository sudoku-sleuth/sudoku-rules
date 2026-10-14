---
format: open-rules
title: Bangers and Mash (Union Jack)
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/bangers-and-mash-union-jack
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: db96afc7efd57b0b2609aa978c0b5c77
---

```rules
sudoku 9x9
kropki-1: kropki r1c4-r2c4 white
kropki-2: kropki r2c4-r3c4 white
kropki-3: kropki r8c6-r9c6 white
kropki-4: kropki r8c4-r9c4 white
kropki-5: kropki r7c4-r8c4 white
kropki-6: kropki r4c8-r4c9 black
kropki-7: kropki r7c6-r8c6 black
kropki-8: kropki r6c2-r6c3 black
kropki-9: kropki r5c6-r6c6 black
kropki-10: kropki r3c4-r3c5 black
kropki-11: kropki r8c9-r9c9 black
parity-cells r5c5 parity "odd"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[1.5,4.5],[2.5,4.5],[3.5,4.5],[4.5,4.5],[5.5,4.5],[6.5,4.5],[7.5,4.5],[8.5,4.5]],"color":"#FF7383","thickness":11.2,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[4.5,1.5],[4.5,2.5],[4.5,3.5],[4.5,4.5],[4.5,5.5],[4.5,6.5],[4.5,7.5],[4.5,8.5]],"color":"#FF7383","thickness":11.2,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[1.5,7.5],[2.5,6.5],[3.5,5.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[8.5,8.5],[7.5,7.5],[6.5,6.5],[5.5,5.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[1.5,1.5],[2.5,2.5],[3.5,3.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[7.5,1.5],[6.5,2.5],[5.5,3.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[5.5,1.5],[5.5,2.5],[6.5,1.5],[7.5,0.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[3.5,1.5],[3.5,2.5],[2.5,1.5],[1.5,0.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[1.5,2.5],[2.5,3.5],[1.5,3.5],[0.5,3.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[1.5,5.5],[2.5,5.5],[1.5,6.5],[0.5,7.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[1.5,8.5],[2.5,7.5],[3.5,6.5],[3.5,7.5],[3.5,8.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[5.5,7.5],[5.5,6.5],[6.5,7.5],[7.5,8.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[8.5,7.5],[7.5,6.5],[6.5,5.5],[7.5,5.5],[8.5,5.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[7.5,3.5],[6.5,3.5],[7.5,2.5],[8.5,1.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,8],"width":0.4,"height":0.4,"rounded":true,"fill":"#000000","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,7],"width":0.4,"height":0.4,"rounded":true,"fill":"#BABABA","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,5.5],"width":0.4,"height":0.4,"rounded":true,"fill":"#BABABA","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,2],"width":0.4,"height":0.4,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,2],"width":0.4,"height":0.4,"rounded":true,"fill":"#000000","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,3],"width":0.4,"height":0.4,"rounded":true,"fill":"#BABABA","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,3],"width":0.4,"height":0.4,"rounded":true,"fill":"#BABABA","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,6],"width":0.4,"height":0.4,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,8],"width":0.4,"height":0.4,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,8],"width":0.4,"height":0.4,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,6],"width":0.4,"height":0.4,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,1],"width":0,"height":0,"rounded":false,"thickness":0,"text":"10     ","textColor":"#000000","fontSize":12}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,3],"width":0,"height":0,"rounded":false,"thickness":0,"text":"     10","textColor":"#000000","fontSize":12}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"     30","textColor":"#000000","fontSize":12}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8],"width":0,"height":0,"rounded":false,"thickness":0,"text":"     30","textColor":"#000000","fontSize":12}}
```

Normal Sudoku rules apply. ANTI WHISPERS- Numbers on red lines are EITHER CONSECUTIVE OR TWO APART from their neighbors on the line. The sum of each of the four diagonal red lines is in its top cell. The two lines that cross at the center of the puzzle are considered separate lines, but do share the center digit. The center digit is odd. Numbers do NOT repeat on red lines. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Numbers with a GRAY dot between them satisfy BOTH black and white dot requirements. Dots shown at cell corners refer to the numbers on the diagonal line going through the dot. Not all possible dots are given. Numbers on blue lines may repeat, if other rules allow.
