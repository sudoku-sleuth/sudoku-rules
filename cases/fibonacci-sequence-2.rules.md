---
format: open-rules
title: "Fibonacci Sequence #2"
setter: Will Power
source: https://sudokupad.app/h9ctokknmw
case: https://sudoku-sleuth.com/cases/fibonacci-sequence-2
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r3c8=5 r4c9=5
exported: 1e048b8ef544ebcc33e6be72dbeebad1
---

```rules
sudoku 9x9
cage-1: cage r2c4-r3c4 connected true
cage-2: cage r7c7-r8c7 connected true
cage-3: cage r1c7-r2c7-r2c8 connected true
cage-4: cage r4c3-r4c4 connected true
kropki-1: kropki r1c6-r1c7 white
kropki-2: kropki r4c5-r4c6 white
kropki-3: kropki r7c1-r7c2 white
arrow-1: arrow r6c6-r7c5 bulb ["r5c7"]
arrow-2: arrow r4c7-r5c7 bulb ["r3c7"]
arrow-3: arrow r2c6-r3c7 bulb ["r1c5"]
arrow-4: arrow r1c4-r1c5 bulb ["r1c3"]
arrow-5: arrow r2c2-r1c3 bulb ["r3c1","r4c1"]
arrow-6: arrow r8c4-r7c3-r6c2-r5c2-r4c2 bulb ["r9c5","r9c6"]
arrow-7: arrow r4c2-r3c2-r2c2 bulb ["r4c3","r5c3"]
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.5,8.5],[5.5,8.5],[6.5,7.5],[7.5,6.5],[7.5,5.5],[7.5,4.5],[7.5,3.5]],"color":"#949494","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,8.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
```

Normal Sudoku rules apply.

ARROWS(+)- Numbers on arrows sum to the number in the arrow's circle or pill. Pills are read from left to right or top to bottom. Numbers may repeat on arrows, if other rules allow. Arrow circles and pills also follow the Fibonacci Sequence (circles and pills are also the sum of the two circles or pills before it). The two given 5 circles are intended to be a diagonal 55 pill. ie: The gray line with no arrow tip sums to 55.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are shown.

KILLER CAGES- Numbers in cages each sum to four unique numbers in the same Fibonacci Sequence. The solver must determine which.
