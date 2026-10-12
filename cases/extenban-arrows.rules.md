---
format: open-rules
title: Extenban Arrows
setter: Blobz
source: https://sudokupad.app/omp2ektixx
case: https://sudoku-sleuth.com/cases/extenban-arrows
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
arrow-1: arrow r5c5-r4c5-r3c5-r3c6 bulb ["r6c5"]
arrow-2: arrow r5c1-r4c1-r4c2 bulb ["r6c1"]
arrow-3: arrow r2c3-r3c2 bulb ["r2c4"]
arrow-4: arrow r2c7-r3c8 bulb ["r1c6"]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[2.5,3.5],[1.5,4.5],[2.5,5.5]],"color":"#EE66CCcc","thickness":11.2,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[3.5,3.5],[4.5,3.5],[5.5,3.5],[6.5,2.5]],"color":"#EE66CCcc","thickness":11.2,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[5.5,6.5],[5.5,7.5],[5.5,8.5]],"color":"#EE77CCcc","thickness":11.2,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[1.5,0.5],[2.5,1.5],[3.5,1.5]],"color":"#EE77CCcc","thickness":11.2,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[7.5,4.5],[6.5,5.5],[5.5,5.5]],"color":"#EE77CCcc","thickness":11.2,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[8.5,5.5],[7.5,6.5],[7.5,7.5],[6.5,8.5]],"color":"#EE77CCcc","thickness":11.2,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[5.5,1.5],[5.5,0.5],[6.5,0.5]],"color":"#EE77CCcc","thickness":11.2,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[3.5,6.5],[2.5,6.5],[2.5,7.5],[2.5,8.5]],"color":"#EE77CCcc","thickness":11.2,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[0.5,4.5],[0.5,3.5],[1.5,3.5],[2.5,2.5]],"color":"#EE77CCcc","thickness":11.2,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[6.5,1.5],[7.5,2.5],[8.5,3.5]],"color":"#EE77CCcc","thickness":11.2,"rounded":true}}
```

Normal sudoku rules apply.

Arrows: Digits along an arrow sum to the value in the attached circle. Digits may repeat along an arrow if allowed by other rules.

Extended Renbans: Digits along a pink line form a consecutive group in any order. Digits do not repeat on the line EXCEPT for the ends, which are the SAME digit.

For example, possible fills for a line of length 5 might be 64756, 25342, 34123, etc.
