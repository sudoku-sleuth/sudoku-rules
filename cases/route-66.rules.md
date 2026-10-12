---
format: open-rules
title: Route 66
setter: EPH
source: https://tinyurl.com/24w5na5t
case: https://sudoku-sleuth.com/cases/route-66
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r3c1=7
---

```rules
sudoku 9x9
cage-1: cage r2c4-r2c5-r2c6 total 17 connected true
cage-2: cage r8c4-r8c5-r8c6 total 17 connected true
cage-3: cage r4c8-r5c8-r6c8 total 16 connected true
cage-4: cage r4c2-r5c2-r6c2 total 16 connected true
cage-5: cage r3c6-r4c6-r4c7 total 11 connected true
cage-6: cage r3c4-r4c3-r4c4 total 7 connected true
cage-7: cage r6c3-r6c4-r7c4 total 14 connected true
cage-8: cage r6c6-r6c7-r7c6 total 9 connected true
kropki-1: kropki r4c4-r4c5 colour "white"
kropki-2: kropki r5c5-r5c6 colour "white"
kropki-3: kropki r6c8-r6c9 colour "white"
kropki-4: kropki r5c1-r6c1 colour "white"
```

```drawing
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[1.5,1.5],[2.5,2.5]],"color":"#C54B8B","thickness":4.8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[1.5,7.5],[2.5,6.5]],"color":"#C54B8B","thickness":4.8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[7.5,7.5],[8.5,8.5]],"color":"#C54B8B","thickness":4.8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[7.5,1.5],[8.5,0.5]],"color":"#C54B8B","thickness":4.8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,0.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#EAEAEA","stroke":"#C54B8B","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#EAEAEA","stroke":"#C54B8B","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#EAEAEA","stroke":"#C54B8B","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,6.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#EAEAEA","stroke":"#C54B8B","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,6.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#EAEAEA","stroke":"#C54B8B","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,8.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#EAEAEA","stroke":"#C54B8B","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,2.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#EAEAEA","stroke":"#C54B8B","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,0.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#EAEAEA","stroke":"#C54B8B","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Digits in cages cannot repeat and must sum to the number in the top left corner.

Digits in cells separated by white dots must be consecutive.  Not all dots are given.

Digits along a purple line must have a sum equal to the sum of the digits in the attached circles.
