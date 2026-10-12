---
format: open-rules
title: Seven Bridges Road (Eagles)
setter: Will Power
source: https://sudokupad.app/sqhp2p78e7
case: https://sudoku-sleuth.com/cases/seven-bridges-road-eagles
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r5c8-r5c9-r6c7-r6c8 total 30 connected true
cage-2: cage r1c7-r2c7-r3c7 total 18 connected true
cage-3: cage r1c5-r2c5-r2c6 total 21 connected true
cage-4: cage r3c8-r3c9 total 3 connected true
cage-5: cage r7c1-r7c2-r8c1-r9c1-r9c2 total 25 connected true
cage-6: cage r6c5-r7c5 total 3 connected true
renban-1: renban r3c2-r4c2-r5c1-r6c1-r7c1-r7c2-r8c3-r8c4-r7c4
renban-2: renban r9c7-r8c7-r7c7-r6c7-r5c7-r4c6-r5c5-r6c4-r7c4
renban-3: renban r3c2-r3c3-r3c4-r3c5-r2c5-r1c4-r1c3-r2c2-r2c1
```

```drawing
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,6.5],"width":0.8,"height":0.3,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000","angle":90}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,6.5],"width":0.8,"height":0.3,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000","angle":90}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,3.5],"width":0.8,"height":0.3,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000","angle":90}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,2],"width":0.8,"height":0.3,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000","angle":135}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,4.5],"width":0.8,"height":0.3,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000","angle":135}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2.5],"width":0.8,"height":0.3,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,3.5],"width":0.8,"height":0.3,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
```

Normal Sudoku rules apply. RENBAN: Numbers on the three gray lines (road) are each a set of the numbers 1-9, without repeats, in any order. SEVEN BRIDGES- Numbers ON THE GRAY LINES with a rectangle (bridge) BETWEEN them are in a ratio of 2:1. If the bridge is in the center of a cell, the doubling does NOT apply to that cell, but to those on either side. Example: The bridge at R3C3 requires R3C2 and R3C4 to be 2:1. KILLER CAGES(+)- Orthogonally adjacent numbers in cages ARE CONSECUTIVE AND all numbers in cages sum to the number in the top left corner of the cage. The blue line (river) has no effect on the puzzle.
