---
format: open-rules
title: Rugby Scrum
setter: Will Power
source: https://sudokupad.app/n1e9fz50l2
case: https://sudoku-sleuth.com/cases/rugby-scrum
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 890edc19dda4c39b3cc767f6a00a8ae5
---

```rules
sudoku 9x9
cage-1: cage r4c5-r4c6 total 10 connected true
cage-2: cage r6c5-r6c6 total 10 connected true
kropki-1: kropki r2c7-r2c8 white
kropki-2: kropki r2c8-r3c8 white
kropki-3: kropki r5c3-r5c4 black
kropki-4: kropki r5c6-r5c7 black
kropki-5: kropki r3c5-r4c5 black
kropki-6: kropki r5c2-r5c3 black
kropki-7: kropki r2c3-r3c3 black
kropki-8: kropki r2c2-r2c3 black
kropki-9: kropki r9c4-r9c5 black
arrow-1: arrow r7c3-r8c2 bulb ["r6c4"]
arrow-2: arrow r7c7-r8c8 bulb ["r6c6"]
arrow-3: arrow r3c3-r2c2 bulb ["r4c4"]
arrow-4: arrow r3c7-r2c8 bulb ["r4c6"]
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[4.5,6.5],[3.5,7.5],[2.5,8.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[4.5,6.5],[5.5,7.5],[6.5,8.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[4.5,2.5],[3.5,1.5],[2.5,0.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[4.5,2.5],[5.5,1.5],[6.5,0.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[2.5,4.5],[1.5,3.5],[0.5,2.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[2.5,4.5],[1.5,5.5],[0.5,6.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[6.5,4.5],[7.5,3.5],[8.5,2.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[6.5,4.5],[7.5,5.5],[8.5,6.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
```

Normal Sudoku rules apply.

THERMOMETERS- Numbers on thermometers incease from the bulb end.

ARROWS- Numbers on arrows sum to the number in the arrow's circle.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown.

KILLER CAGES- Numbers in cages sum to 10.
