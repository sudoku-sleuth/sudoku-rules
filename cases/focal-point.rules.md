---
format: open-rules
title: Focal Point
setter: Will Power
source: https://sudokupad.app/4fo6tputwm
case: https://sudoku-sleuth.com/cases/focal-point
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r4c9-r5c9 colour "white"
kropki-2: kropki r5c9-r6c9 colour "white"
kropki-3: kropki r6c9-r7c9 colour "white"
kropki-4: kropki r6c8-r7c8 colour "white"
kropki-5: kropki r5c8-r6c8 colour "white"
kropki-6: kropki r4c8-r5c8 colour "white"
kropki-7: kropki r3c8-r4c8 colour "white"
kropki-8: kropki r1c2-r1c3 colour "white"
kropki-9: kropki r1c3-r2c3 colour "white"
kropki-10: kropki r2c3-r2c4 colour "white"
kropki-11: kropki r5c1-r5c2 colour "white"
kropki-12: kropki r5c2-r5c3 colour "white"
kropki-13: kropki r3c5-r4c5 colour "white"
kropki-14: kropki r7c2-r7c3 colour "white"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.782842712474619,8.217157287525382],[1.5,7.5],[2.5,6.5],[3.5,5.5],[4.5,4.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[8.217157287525382,8.217157287525382],[7.5,7.5],[6.5,6.5],[5.5,5.5],[4.5,4.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[8.217157287525382,0.782842712474619],[7.5,1.5],[6.5,2.5],[5.5,3.5],[4.5,4.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.782842712474619,0.782842712474619],[1.5,1.5],[2.5,2.5],[3.5,3.5],[4.5,4.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8],"width":0,"height":0,"rounded":false,"thickness":0,"text":"    2X+1","textColor":"#000000","fontSize":12}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,8],"width":0,"height":0,"rounded":false,"thickness":0,"text":"     X+3","textColor":"#000000","fontSize":12}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,1],"width":0,"height":0,"rounded":false,"thickness":0,"text":"2X+2    ","textColor":"#000000","fontSize":12}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,1],"width":0,"height":0,"rounded":false,"thickness":0,"text":"2X+3    ","textColor":"#000000","fontSize":12}}
```

Normal Sudoku rules apply. ARROWS- Numbers on arrows sum to the number on the arrow's circle. Numbers may repeat on arrows, if other rules allow. All four arrows point to the center of the grid. Determine the value of X, which is the same for all four corners, and then determine the values for all four corners using the formulas provided for each. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are given.
