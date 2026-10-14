---
format: open-rules
title: Near Maximum Torque
setter: Will Power
source: https://sudokupad.app/a1fbx9trku
case: https://sudoku-sleuth.com/cases/near-maximum-torque
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: fd7523108baa14cd732b9a9200fe3a49
---

```rules
sudoku 9x9
thermo-1: thermo r1c1-r1c2-r1c3-r1c4-r1c5
thermo-2: thermo r1c9-r1c8-r1c7-r1c6
thermo-3: thermo r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1
thermo-4: thermo r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9
kropki-1: kropki r2c8-r3c8 white
kropki-2: kropki r5c8-r6c8 white
kropki-3: kropki r8c5-r9c5 white
kropki-4: kropki r3c4-r4c4 white
kropki-5: kropki r2c5-r3c5 white
kropki-6: kropki r4c6-r5c6 white
kropki-7: kropki r7c3-r8c3 white
kropki-8: kropki r2c2-r2c3 black
kropki-9: kropki r2c4-r2c5 black
kropki-10: kropki r3c4-r3c5 black
kropki-11: kropki r3c5-r3c6 black
kropki-12: kropki r4c5-r4c6 black
kropki-13: kropki r5c5-r5c6 black
kropki-14: kropki r7c6-r7c7 black
kropki-15: kropki r9c5-r9c6 black
kropki-16: kropki r9c4-r9c5 black
kropki-17: kropki r6c4-r6c5 black
kropki-18: kropki r3c8-r3c9 black
kropki-19: kropki r4c7-r4c8 black
kropki-20: kropki r5c7-r5c8 black
kropki-21: kropki r6c7-r6c8 black
kropki-22: kropki r8c7-r8c8 black
kropki-23: kropki r6c1-r6c2 black
kropki-24: kropki r7c1-r7c2 black
kropki-25: kropki r5c2-r5c3 black
kropki-26: kropki r4c2-r4c3 black
kropki-27: kropki r1c2-r1c3 black
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[0.5,1.5],[0.5,2.5],[0.5,3.5],[0.5,4.5],[0.5,5.5],[0.5,6.5],[0.5,7.5],[0.5,8.5]],"color":"#FFA000","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[1.5,1.5],[2.5,1.5],[3.5,1.5],[4.5,1.5],[5.5,1.5],[6.5,1.5],[7.5,1.5],[8.5,1.5]],"color":"#D1D1D1","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[1.5,2.5],[2.5,2.5],[3.5,2.5],[4.5,2.5],[5.5,2.5],[6.5,2.5],[7.5,2.5],[8.5,2.5]],"color":"#D1D1D1","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[1.5,3.5],[2.5,3.5],[3.5,3.5],[4.5,3.5],[5.5,3.5],[6.5,3.5],[7.5,3.5],[8.5,3.5]],"color":"#D1D1D1","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[1.5,5.5],[2.5,5.5],[3.5,5.5],[4.5,5.5],[5.5,5.5],[6.5,5.5],[7.5,5.5]],"color":"#D1D1D1","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[1.5,6.5],[2.5,6.5],[3.5,6.5],[4.5,6.5],[5.5,6.5],[6.5,6.5],[7.5,6.5],[8.5,6.5]],"color":"#D1D1D1","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,7.5],[2.5,7.5],[3.5,7.5],[4.5,7.5],[5.5,7.5],[6.5,7.5],[7.5,7.5],[8.5,7.5]],"color":"#D1D1D1","thickness":8,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,0.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,0.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,0.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,0.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,0.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,0.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,0.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,0.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,1.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,1.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,1.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,1.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,1.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,1.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,1.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,2.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,2.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,2.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,2.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,2.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,3.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,3.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,3.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,3.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,3.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,3.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,5.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,5.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,5.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,5.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,5.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,5.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,6.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,6.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,6.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,6.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,6.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,6.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,6.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,6.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,7.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,7.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,7.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,7.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,7.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,7.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,7.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,8.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,8.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,8.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,8.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,8.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,8.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,8.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-103","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,8.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-104","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,4.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF0000","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-105","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"4","textColor":"#000000","fontSize":20}}
- {"id":"drawing-106","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,1.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"3","textColor":"#000000","fontSize":20}}
- {"id":"drawing-107","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,2.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"2","textColor":"#000000","fontSize":20}}
- {"id":"drawing-108","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,3.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"1","textColor":"#000000","fontSize":20}}
- {"id":"drawing-109","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,4.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"0","textColor":"#000000","fontSize":20}}
- {"id":"drawing-110","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,5.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"1","textColor":"#000000","fontSize":20}}
- {"id":"drawing-111","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,6.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"2","textColor":"#000000","fontSize":20}}
- {"id":"drawing-112","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,7.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"3","textColor":"#000000","fontSize":20}}
- {"id":"drawing-113","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,8.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"4","textColor":"#000000","fontSize":20}}
```

SIGNIFICANT ADDITION AND MULTIPLICATION REQUIRED AT THE END, TO SOLVE. Normal Sudoku rules apply. The numbers in SQUARES are weights of that value. The line on the grid is treated like a balanced mobile. All weights on the line or attached and BELOW it calculate into completing the balance. TORQUE- Torque is the weight multiplied by the distance from the red balance point. Distances for each column are listed above the grid. Balance all TORQUES attached to the right and left of the RED balance point at a total of 414 on each side. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. THERMOMETERS- Numbers on thermometers increase from the bulb end.
