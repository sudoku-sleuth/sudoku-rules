---
format: open-rules
title: X-Wing vs. TIE Fighter
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/x-wing-vs-tie-fighter
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: fbd3231ffa8cad5a1fd87c78cd69e767
---

```rules
sudoku 9x9
cage-1: cage r7c5-r7c6-r8c5-r8c6 total 24 connected true
cage-2: cage r5c9-r6c9-r7c9-r8c9-r9c9 total 15 connected true
cage-3: cage r3c1-r3c2-r3c3 total 10 connected true
cage-4: cage r1c7-r2c7-r3c7-r4c7 total 14 connected true
cage-5: cage r3c8-r4c8-r5c8 total 21 connected true
cage-6: cage r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 total 27 connected true
cage-7: cage r7c4-r8c4 total 11 connected true
cage-8: cage r4c1-r4c2 total 11 connected true
cage-9: cage r1c4-r2c4 total 5 connected true
cage-10: cage r1c9-r2c9 total 15 connected true
cage-11: cage r5c1-r6c1 total 8 connected true
cage-12: cage r7c1-r8c1 total 13 connected true
cage-13: cage r6c8-r7c8 total 13 connected true
cage-14: cage r4c4-r4c5 total 10 connected true
cage-15: cage r4c6-r5c6 total 10 connected true
cage-16: cage r5c5-r6c5 total 10 connected true
cage-17: cage r5c4-r6c4 total 10 connected true
renban-1: renban r1c7-r2c7-r3c7-r4c7
renban-2: renban r3c8-r4c8-r5c8
renban-3: renban r5c3-r6c3-r7c3-r8c3-r9c3
```

```drawing
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[2.5,2.5],[2.5,3.5],[2.5,4.5],[2.5,5.5],[2.5,6.5],[2.5,7.5]],"color":"#66F7FF","thickness":8,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[3.5,3.5],[2.5,4.5],[1.5,5.5],[0.5,6.5]],"color":"#66F7FF","thickness":8,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[4.5,5.5],[5.5,6.5],[6.5,7.5],[7.5,8.5]],"color":"#66F7FF","thickness":8,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[6.5,5.5],[6.5,4.5],[7.5,4.5],[7.5,5.5]],"color":"#66F7FF","thickness":8,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[7.5,5.5]],"color":"#66F7FF","thickness":8,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[7.5,2.5],[8.5,3.5],[7.5,4.5]],"color":"#66F7FF","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. DUTCH WHISPERS- Numbers on Blue lines are at least 4 apart from their neighbors on the line. Numbers can repeat on blue lines, if other rules allow. Numbers on red lines are each a set of non-repeating, consecutive numbers, in any order. Numbers in cages sum to the number in the top left corner of the cage.
