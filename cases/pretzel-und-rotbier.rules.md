---
format: open-rules
title: Pretzel und Rotbier
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/pretzel-und-rotbier
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 117090aa87996989ba6736bc03ab01f4
---

```rules
sudoku 9x9
cage-1: cage r1c4-r2c4-r3c4-r4c4-r5c4-r6c4 total 32 repeats true connected true
cage-2: cage r1c5-r1c6-r1c7-r1c8-r2c8-r3c8 total 30 repeats true connected true
cage-3: cage r8c5-r9c5 total 13 repeats true connected true
cage-4: cage r8c6-r8c7 total 10 repeats true connected true
cage-5: cage r2c5-r2c6-r2c7 total 11 repeats true connected true
cage-6: cage r3c6-r3c7 total 13 repeats true connected true
cage-7: cage r4c6-r4c7 total 5 repeats true connected true
cage-8: cage r5c6-r5c7 total 15 repeats true connected true
cage-9: cage r1c2-r2c2 total 15 repeats true connected true
cage-10: cage r4c8-r5c8-r6c5-r6c6-r6c7-r6c8 total 34 repeats true connected true
whispers-1: whispers r1c5-r1c6-r1c7-r1c8-r2c8-r3c8 gap 5
whispers-2: whispers r4c8-r5c8-r6c8-r6c7-r6c6-r6c5 gap 5
whispers-3: whispers r1c4-r2c4-r3c4-r4c4-r5c4-r6c4 gap 5
whispers-4: whispers r6c5-r7c6-r8c7 gap 5
pair r5c4-r6c4 sum 5
```

```drawing
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[1.5,1.5],[2.5,1.5],[3.5,1.5],[4.5,2.5]],"color":"#C4C4C4","thickness":22.4,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[7.5,2.5],[7.5,3.5],[7.5,4.5],[7.5,5.5],[7.5,6.5],[6.5,7.5],[5.5,8.5],[4.5,8.5],[3.5,8.5],[2.5,8.5],[1.5,7.5],[1.5,6.5],[1.5,5.5],[2.5,4.5]],"color":"#BDA33C","thickness":32,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[6.5,3.5],[5.5,4.5],[4.5,4.5],[3.5,4.5],[2.5,4.5],[1.5,3.5],[1.5,2.5],[1.5,1.5],[2.5,0.5],[3.5,0.5],[4.5,0.5],[5.5,0.5],[6.5,1.5]],"color":"#BDA33C","thickness":32,"rounded":true}}
```

Normal Sudoku rules apply. Numbers on the tan line (Pretzel) are at least 5 apart from their neighbors on the line. Numbers in cages sum to the number in the top left corner of the cage. Numbers on the gray (Stein handle) sum to 32. Numbers may repeat in cages if other rules allow. Numbers with a V between them sum to 5. Not all possible V are given.
