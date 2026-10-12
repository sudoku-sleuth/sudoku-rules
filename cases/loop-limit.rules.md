---
format: open-rules
title: Loop Limit
setter: Marty Sears
source: https://tinyurl.com/LoopLimit
case: https://sudoku-sleuth.com/cases/loop-limit
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
kropki-1: kropki r1c7-r2c7 colour "white"
kropki-2: kropki r4c6-r5c6 colour "white"
kropki-3: kropki r4c7-r4c8 colour "white"
kropki-4: kropki r8c2-r8c3 colour "white"
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,0.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CCCCCC","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,0.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CCCCCC","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,4.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CCCCCC","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,4.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CCCCCC","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CCCCCC","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CCCCCC","thickness":0,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,7.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CCCCCC","thickness":0,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,7.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CCCCCC","thickness":0,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,0.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CCCCCC","thickness":0,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,0.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CCCCCC","thickness":0,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,8.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CCCCCC","thickness":0,"opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,8.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CCCCCC","thickness":0,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,1.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CCCCCC","thickness":0,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,1.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CCCCCC","thickness":0,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,0.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CCCCCC","thickness":0,"opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,0.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CCCCCC","thickness":0,"opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,3.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CCCCCC","thickness":0,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,3.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CCCCCC","thickness":0,"opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,5.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CCCCCC","thickness":0,"opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,5.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CCCCCC","thickness":0,"opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,7.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CCCCCC","thickness":0,"opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,7.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CCCCCC","thickness":0,"opacity":0.5}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[0.5,1.5],[1.5,0.5]],"color":"#D8D8D8","thickness":11,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[1.5,3.5],[1.5,2.5]],"color":"#D8D8D8","thickness":11,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,8.5],[0.5,8.5]],"color":"#D8D8D8","thickness":11,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[2.5,7.5],[3.5,6.5]],"color":"#D8D8D8","thickness":11,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[4.5,0.5]],"color":"#D8D8D8","thickness":11,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[5.5,1.5]],"color":"#D8D8D8","thickness":11,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[4.5,8.5],[6.5,8.5]],"color":"#D8D8D8","thickness":11,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[8.5,3.5]],"color":"#D8D8D8","thickness":11,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[7.5,1.5],[8.5,2.5],[8.5,1.5]],"color":"#D8D8D8","thickness":11,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[8.5,5.5]],"color":"#D8D8D8","thickness":11,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[8.5,7.5],[7.5,7.5],[8.5,8.5],[7.5,8.5]],"color":"#D8D8D8","thickness":11,"rounded":true}}
```

• Normal Sudoku rules apply.
• Draw a loop (one cell wide) of orthogonally connected cells, which does not touch itself, not even diagonally.
• Each digit on the loop indicates exactly how many times that digit appears on the loop. Eg: If there's a 5 on the loop, it means there are five 5s on the loop.
• The loop must pass through the bulb of every thermometer.
• Digits along a thermometer increase from the bulb end.
• Digits separated by a white dot are consecutive.
