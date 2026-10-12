---
format: open-rules
title: Krokus Pollen
setter: Blobz
source: https://sudokupad.app/blobz/krokus-pollen
case: https://sudoku-sleuth.com/cases/krokus-pollen
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r1c6-r2c6 colour "black"
kropki-2: kropki r8c4-r9c4 colour "black"
kropki-3: kropki r6c8-r6c9 colour "black"
kropki-4: kropki r4c1-r4c2 colour "black"
kropki-5: kropki r2c9-r3c9 colour "black"
kropki-6: kropki r9c7-r9c8 colour "black"
kropki-7: kropki r7c1-r8c1 colour "black"
kropki-8: kropki r1c2-r1c3 colour "black"
kropki-9: kropki r8c2-r8c3 colour "white"
kropki-10: kropki r3c5-r3c6 colour "white"
kropki-11: kropki r7c9-r8c9 colour "white"
kropki-12: kropki r4c7-r5c7 colour "white"
kropki-13: kropki r3c7-r3c8 colour "white"
kropki-14: kropki r1c9-r2c9 colour "white"
kropki-15: kropki r9c8-r9c9 colour "white"
kropki-16: kropki r6c9-r7c9 colour "white"
kropki-17: kropki r8c5-r8c6 colour "white"
kropki-18: kropki r9c2-r9c3 colour "white"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[6.5,3.5],[7.5,2.5],[7.5,1.5],[6.5,0.5],[4.5,0.5],[3.5,1.5]],"color":"#aaa","thickness":6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[3.5,2.5],[2.5,1.5],[1.5,1.5],[0.5,2.5],[0.5,4.5],[1.5,5.5]],"color":"#aaa","thickness":6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[2.5,5.5],[1.5,6.5],[1.5,7.5],[2.5,8.5],[4.5,8.5],[5.5,7.5]],"color":"#aaa","thickness":6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[5.5,6.5],[6.5,7.5],[7.5,7.5],[8.5,6.5],[8.5,4.5],[7.5,3.5]],"color":"#aaa","thickness":6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[0.5,7.5],[1.5,8.5]],"color":"#aaa","thickness":6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[8.5,1.5],[7.5,0.5]],"color":"#aaa","thickness":6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[1.5,0.5],[0.5,1.5]],"color":"#aaa","thickness":6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[7.5,8.5],[8.5,7.5]],"color":"#aaa","thickness":6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,3.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#fff","stroke":"#555","thickness":1,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,1.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#fff","stroke":"#555","thickness":1,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#fff","stroke":"#555","thickness":1,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#fff","stroke":"#555","thickness":1,"opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#fff","stroke":"#555","thickness":1,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,7.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#fff","stroke":"#555","thickness":1,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#fff","stroke":"#555","thickness":1,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#fff","stroke":"#555","thickness":1,"opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#fff","stroke":"#555","thickness":1,"opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,8.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#fff","stroke":"#555","thickness":1,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,3.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#fff","stroke":"#555","thickness":1,"opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#fff","stroke":"#555","thickness":1,"opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#fff","stroke":"#555","thickness":1,"opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,1.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#fff","stroke":"#555","thickness":1,"opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,8.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#fff","stroke":"#555","thickness":1,"opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,7.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#fff","stroke":"#555","thickness":1,"opacity":0.5}}
```

Normal sudoku rules apply. 

Digits along grey lines must be between the digits in the circled ends of the line.

Black dots separate digits where one is double the other. White dots separate consecutive digits. Not all such dots are shown.
