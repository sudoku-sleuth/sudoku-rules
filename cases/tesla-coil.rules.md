---
format: open-rules
title: Tesla Coil
setter: Jobo
source: https://tinyurl.com/4wwtkdhd
case: https://sudoku-sleuth.com/cases/tesla-coil
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
thermo r5c5-r6c5-r7c5-r8c5-r9c5
kropki r6c5-r7c5 colour "black"
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[0.5,3.5],[2.5,3.5],[3.5,4.5],[4.1,4.5]],"color":"#00bbff","thickness":10,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[4.2,4.8],[2.5,6.5],[1.5,6.5],[0.5,7.5]],"color":"#00bbff","thickness":10,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[3.5,1.5],[2.5,2.5],[3.5,3.5],[4.2,4.2]],"color":"#00bbff","thickness":10,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4.8,4.2],[5.5,3.5],[6.5,3.5],[6.5,2.5],[7.5,1.5]],"color":"#00bbff","thickness":10,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[2.5,7.5],[3.5,8.5],[4.5,7.5],[3.5,6.5],[4.5,5.5],[4.5,4.9]],"color":"#00bbff","thickness":10,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[4.5,4.1],[4.5,3.5],[5.5,2.5],[4.5,1.5],[5.5,0.5]],"color":"#00bbff","thickness":10,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[4.8,4.8],[5.5,5.5],[5.5,6.5],[6.5,6.5],[7.5,7.5]],"color":"#00bbff","thickness":10,"rounded":true}}
```

Normal sudoku rules apply.

Along the thermometer, digits must increase from the bulb end.

Digits along a blue line sum to the same value in each 3x3 box the line passes through (the central cell is part of all lines).

Digits separated by a black dot must be in a 1:2 ratio. Not all dots are given.
