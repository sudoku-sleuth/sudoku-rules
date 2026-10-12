---
format: open-rules
title: Fire Marshall Bill
setter: Will Power
source: https://sudokupad.app/wwgke3z15b
case: https://sudoku-sleuth.com/cases/fire-marshall-bill
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
thermo-1: thermo r2c4-r3c5-r4c6-r3c7
thermo-2: thermo r4c4-r3c5-r2c6-r3c7
thermo-3: thermo r4c4-r5c3-r6c2-r7c3
thermo-4: thermo r4c2-r5c3-r6c4-r7c3
thermo-5: thermo r6c6-r7c5-r8c4-r7c3
thermo-6: thermo r8c6-r7c5-r6c4-r7c3
thermo-7: thermo r6c6-r5c7-r4c8-r3c7
thermo-8: thermo r6c8-r5c7-r4c6-r3c7
kropki-1: kropki r5c7-r5c8 colour "white"
kropki-2: kropki r5c8-r6c8 colour "white"
kropki-3: kropki r6c7-r6c8 colour "white"
kropki-4: kropki r3c2-r4c2 colour "white"
kropki-5: kropki r2c1-r3c1 colour "white"
kropki-6: kropki r8c1-r9c1 colour "white"
kropki-7: kropki r3c5-r4c5 colour "black"
kropki-8: kropki r5c6-r5c7 colour "black"
arrow-1: arrow r2c6-r3c5 bulb ["r3c7"]
arrow-2: arrow r4c8-r5c7 bulb ["r3c7"]
arrow-3: arrow r6c2-r5c1 bulb ["r7c3"]
arrow-4: arrow r8c4-r9c5 bulb ["r7c3"]
```

```drawing
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[5.5,8.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[6.5,6.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[7.5,4.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[4.5,3.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[4.5,1.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[2.5,2.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[1.5,4.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[0.5,8.5],[1.5,8.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,2.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF7383","stroke":"#FF7383","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,6.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF7383","stroke":"#FF7383","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Lemme show ya somethin. Normal Sudoku rules apply. THERMOMETERS- Numbers on all thermometers increase from the gray bulb to the red dots. ARROWS- Numbers on arrows sum to the number in the arrow's circle. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. ORANGE LINES (Fire)- The sum of the numbers on each orange line are the same as one another.
