---
format: open-rules
title: Power Lifting (Kraftdreikampf)
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/power-lifting-kraftdreikampf
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - The source describes Renban lines that are not yet included in our reading.
exported: b32d3544923973b416438052e4085e86
---

```rules
sudoku 9x9
cage-1: cage r5c1-r5c2-r6c1-r6c2-r6c3-r6c4-r7c1-r7c2 total 40 connected true
cage-2: cage r5c8-r5c9-r6c6-r6c7-r6c8-r6c9-r7c8-r7c9 total 40 connected true
cage-3: cage r2c8-r2c9 total 5 connected true
cage-4: cage r1c8-r1c9 total 6 connected true
cage-5: cage r2c6-r3c6 total 14 connected true
cage-6: cage r1c4-r2c4 total 15 connected true
cage-7: cage r1c1-r2c1 total 15 connected true
kropki-1: kropki r6c4-r6c5 white
kropki-2: kropki r6c5-r6c6 white
kropki-3: kropki r9c3-r9c4 white
kropki-4: kropki r9c6-r9c7 white
kropki-5: kropki r1c2-r1c3 white
kropki-6: kropki r3c4-r3c5 white
kropki-7: kropki r3c5-r3c6 white
kropki-8: kropki r4c4-r4c5 white
kropki-9: kropki r6c8-r7c8 black
whispers-1: whispers r6c4-r6c3-r6c2-r6c1-r7c1-r7c2 gap 4
whispers-2: whispers r7c2-r6c2-r5c2-r5c1-r6c1 gap 4
whispers-3: whispers r6c6-r6c7-r6c8-r6c9-r5c9-r5c8 gap 4
whispers-4: whispers r5c8-r6c8-r7c8-r7c9-r6c9 gap 4
pair r6c2-r6c3 sum 10
```

```drawing
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[5.5,3.5],[4.5,3.5],[3.5,3.5],[3.5,4.5],[3.5,5.5],[4.5,5.5],[5.5,5.5]],"color":"#94F3FA","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[5.5,4.5],[4.5,4.5],[3.5,4.5]],"color":"#94F3FA","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[8.5,2.5],[8.5,3.5],[7.5,3.5],[6.5,4.5],[7.5,5.5],[8.5,5.5],[8.5,6.5]],"color":"#94F3FA","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[2.5,4.5],[2.5,5.5],[1.5,5.5],[0.5,5.5],[0.5,4.5],[0.5,3.5],[1.5,3.5]],"color":"#94F3FA","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[2.5,3.5]],"color":"#94F3FA","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Dutch Whispers- Numbers on the two red lines are at least 4 apart from their neighbors on the line. RENBAN- Numbers on the three blue lines are each a set of consecutive numbers, in any order. Numbers do not repeat on any lines. Numbers in cages sum to the number in the top left corner of the cage. Numbers do not repeat in cages. Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Numbers with an X between them sum to 10. Not all possible dots and X are given.
