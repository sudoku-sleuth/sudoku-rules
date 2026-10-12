---
format: open-rules
title: Balance of Power II
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/balance-of-power-ii
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r1c5-r2c5 total 17 connected true
cage-2: cage r9c4-r9c5 total 10 connected true
kropki-1: kropki r8c8-r9c8 colour "white"
kropki-2: kropki r8c7-r8c8 colour "white"
kropki-3: kropki r6c8-r7c8 colour "white"
kropki-4: kropki r5c8-r6c8 colour "white"
kropki-5: kropki r7c8-r7c9 colour "white"
kropki-6: kropki r3c7-r4c7 colour "white"
kropki-7: kropki r3c6-r3c7 colour "white"
kropki-8: kropki r7c2-r7c3 colour "black"
kropki-9: kropki r7c3-r7c4 colour "black"
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[1.5,2.5],[1.5,3.5],[1.5,4.5],[1.5,5.5],[1.5,6.5]],"color":"#E07802","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[3.5,1.5],[3.5,2.5]],"color":"#E07802","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[5.5,2.5],[5.5,3.5],[5.5,4.5]],"color":"#E07802","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[7.5,1.5],[6.5,2.5]],"color":"#E07802","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[7.5,4.5],[7.5,5.5],[7.5,6.5],[7.5,7.5]],"color":"#E07802","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[4.5,6.5],[4.5,7.5],[4.5,8.5]],"color":"#E07802","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[2.5,3.5],[2.5,4.5]],"color":"#E07802","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[2.5,1.5],[3.5,1.5]],"color":"#C4C4C4","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[2.5,3.5]],"color":"#C4C4C4","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[3.5,4.5]],"color":"#C4C4C4","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[2.5,5.5]],"color":"#C4C4C4","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,6.5],[3.5,6.5],[4.5,6.5]],"color":"#C4C4C4","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[5.5,5.5],[6.5,5.5],[7.5,5.5]],"color":"#C4C4C4","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[4.5,8.5],[5.5,8.5],[6.5,8.5]],"color":"#C4C4C4","thickness":8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[5.5,7.5],[6.5,7.5]],"color":"#C4C4C4","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[7.5,7.5],[8.5,7.5]],"color":"#C4C4C4","thickness":8,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[8.5,6.5]],"color":"#C4C4C4","thickness":8,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[8.5,3.5]],"color":"#C4C4C4","thickness":8,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[8.5,4.5]],"color":"#C4C4C4","thickness":8,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[6.5,4.5]],"color":"#C4C4C4","thickness":8,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[6.5,3.5]],"color":"#C4C4C4","thickness":8,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[6.5,1.5],[7.5,1.5]],"color":"#C4C4C4","thickness":8,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[4.5,0.5],[5.5,0.5],[6.5,0.5],[7.5,0.5]],"color":"#C4C4C4","thickness":8,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[1.5,4.5]],"color":"#C4C4C4","thickness":8,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[4.5,2.5],[5.5,2.5]],"color":"#C4C4C4","thickness":8,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,1.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,1.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,0.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,0.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,0.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,0.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,0.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,0.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,1.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,2.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,1.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,3.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,4.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,3.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,4.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,6.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,6.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,7.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,7.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,8.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,8.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,7.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,7.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,8.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,6.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,6.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,6.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,4.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,4.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,5.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FFA8F6","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,1.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FFA8F6","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,1.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FFA8F6","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,2.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FFA8F6","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,3.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FFA8F6","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FFA8F6","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,6.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FFA8F6","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"0","textColor":"#000000","fontSize":20}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"7","textColor":"#000000","fontSize":20}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"23","textColor":"#000000","fontSize":20}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"22","textColor":"#000000","fontSize":20}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"19","textColor":"#000000","fontSize":20}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"28","textColor":"#000000","fontSize":20}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"41","textColor":"#000000","fontSize":20}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"33","textColor":"#000000","fontSize":20}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"27","textColor":"#000000","fontSize":20}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"39","textColor":"#000000","fontSize":20}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,1.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"24","textColor":"#000000","fontSize":20}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,2.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"12","textColor":"#000000","fontSize":20}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,3.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"21","textColor":"#000000","fontSize":20}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,4.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"25","textColor":"#000000","fontSize":20}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,5.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"4","textColor":"#000000","fontSize":20}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,6.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"26","textColor":"#000000","fontSize":20}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,7.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"28","textColor":"#000000","fontSize":20}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,8.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"21","textColor":"#000000","fontSize":20}}
```

Normal Sudoku rules apply. The numbers in SQUARES are weights of that value. The lines on the grid are treated like a balanced mobile when lines are horizontal. All weights on the lines or attached and BELOW them calculate into completing the balance. The one tipped line is showing an imbalance. Balance all weights attached to the right and left of each pink circled balance point. The distance to the right or left of the balance point DOES NOT figure into the calculation, only the SUM of the weights. The sum of all weights in each row and column are shown outside the grid. Example: The sum of the weights in row 3 is 23. Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown. Numbers in cages sum to the number in the top left corner of the cage.
