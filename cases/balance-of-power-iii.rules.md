---
format: open-rules
title: Balance of Power III
setter: Will Power
source: https://sudokupad.app/41p3bb1w0p
case: https://sudoku-sleuth.com/cases/balance-of-power-iii
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: fc60f5443d44de824ae817e0aba54405
---

```rules
sudoku 9x9
cage-1: cage r1c9-r2c9-r3c9 total 24 connected true
cage-2: cage r4c2-r4c3-r4c4 total 7 connected true
cage-3: cage r4c5-r4c6 total 10 connected true
cage-4: cage r5c4-r6c4 total 11 connected true
cage-5: cage r7c1-r7c2 total 6 connected true
cage-6: cage r8c2-r9c2 total 11 connected true
cage-7: cage r1c3-r1c4-r1c5 total 9 connected true
cage-8: cage r1c2-r2c2 total 11 connected true
cage-9: cage r1c7-r2c7-r3c7 total 9 connected true
cage-10: cage r5c2-r5c3 total 14 connected true
kropki-1: kropki r5c9-r6c9 white
kropki-2: kropki r6c9-r7c9 white
kropki-3: kropki r8c9-r9c9 white
kropki-4: kropki r4c9-r5c9 black
kropki-5: kropki r9c5-r9c6 black
kropki-6: kropki r5c7-r6c7 black
kropki-7: kropki r4c3-r4c4 black
kropki-8: kropki r1c5-r2c5 black
kropki-9: kropki r6c8-r6c9 black
```

```drawing
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[1.5,1.5],[1.5,2.5],[1.5,3.5],[1.5,4.5],[1.5,5.5],[1.5,6.5],[1.5,7.5],[1.5,8.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[3.5,1.5],[3.5,2.5],[3.5,3.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[3.5,6.5],[3.5,7.5],[3.5,8.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[5.5,5.5],[5.5,4.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[3.5,6.5],[2.5,6.5],[1.5,6.5]],"color":"#CFCFCF","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[0.5,4.5]],"color":"#CFCFCF","thickness":8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[4.5,5.5],[3.5,5.5]],"color":"#CFCFCF","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[2.5,1.5],[1.5,1.5]],"color":"#CFCFCF","thickness":8,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[6.5,1.5],[7.5,0.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[7.5,3.5],[7.5,4.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[7.5,7.5],[7.5,8.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[4.5,7.5],[5.5,7.5],[6.5,7.5],[7.5,7.5]],"color":"#CFCFCF","thickness":8,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[4.5,8.5],[5.5,8.5],[6.5,8.5]],"color":"#CFCFCF","thickness":8,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[6.5,6.5]],"color":"#CFCFCF","thickness":8,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[6.5,4.5]],"color":"#CFCFCF","thickness":8,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[8.5,4.5]],"color":"#CFCFCF","thickness":8,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[8.5,2.5]],"color":"#CFCFCF","thickness":8,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[8.5,6.5]],"color":"#CFCFCF","thickness":8,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[7.5,8.5],[8.5,8.5]],"color":"#CFCFCF","thickness":8,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[7.5,0.5],[8.5,0.5]],"color":"#CFCFCF","thickness":8,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[6.5,2.5]],"color":"#CFCFCF","thickness":8,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[4.5,1.5],[5.5,1.5],[6.5,1.5]],"color":"#CFCFCF","thickness":8,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[4.5,3.5],[5.5,3.5],[6.5,3.5],[7.5,3.5]],"color":"#CFCFCF","thickness":8,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,8.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,8.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,8.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,8.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,8.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,8.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,6.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,6.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,6.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,6.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,4.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,4.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,5.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,4.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,2.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,2.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,2.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,2.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,0.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,0.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,0.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,1.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,0.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,3.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,5.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,7.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,8.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,1.5],"width":0.35,"height":0.35,"rounded":true,"fill":"#FF0000","stroke":"#FF0000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4.5],"width":0.35,"height":0.35,"rounded":true,"fill":"#FF0000","stroke":"#FF0000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7.5],"width":0.35,"height":0.35,"rounded":true,"fill":"#FF0000","stroke":"#FF0000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3.5],"width":0.35,"height":0.35,"rounded":true,"fill":"#FF0000","stroke":"#FF0000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,1.5],"width":0.35,"height":0.35,"rounded":true,"fill":"#FF0000","stroke":"#FF0000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,5.5],"width":0.35,"height":0.35,"rounded":true,"fill":"#FF0000","stroke":"#FF0000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,6.5],"width":0.35,"height":0.35,"rounded":true,"fill":"#FF0000","stroke":"#FF0000","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal Sudoku rules apply. The numbers in SQUARES are weights of that value. The lines on the grid are treated like a balanced mobile when lines are horizontal. All weights on the lines or attached and BELOW them calculate into completing the balance. The one tipped line is showing an imbalance. Balance all weights attached to the right and left of each RED circled balance point. The distance to the right or left of the balance point DOES NOT figure into the calculation, only the SUM of the weights. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. Numbers in cages sum to the number in the top left corner of the cage.
