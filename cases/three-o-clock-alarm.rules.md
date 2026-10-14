---
format: open-rules
title: Three O'Clock Alarm
setter: Will Power
source: https://sudokupad.app/505zhiw5z9
case: https://sudoku-sleuth.com/cases/three-o-clock-alarm
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - The source describes Renban lines that are not yet included in our reading.
exported: da42badf9fb0c93e47987c14045383af
---

```rules
sudoku 9x9
cage-1: cage r1c4-r1c5 total 13 connected true
cage-2: cage r5c2-r6c2 total 13 connected true
cage-3: cage r8c4-r9c4 total 13 connected true
cage-4: cage r1c2-r2c2 total 10 connected true
cage-5: cage r1c3-r2c3 total 10 connected true
cage-6: cage r2c1-r3c1 total 10 connected true
cage-7: cage r3c2-r3c3 total 10 connected true
kropki-1: kropki r6c7-r6c8 white
kropki-2: kropki r6c8-r6c9 white
kropki-3: kropki r1c8-r1c9 white
kropki-4: kropki r5c4-r6c4 white
kropki-5: kropki r6c4-r7c4 white
kropki-6: kropki r8c5-r8c6 white
kropki-7: kropki r3c5-r3c6 white
kropki-8: kropki r7c9-r8c9 black
whispers-1: whispers r6c7-r5c7 gap 4
whispers-2: whispers r6c8-r5c8 gap 4
whispers-3: whispers r6c9-r5c9 gap 4
whispers-4: whispers r5c1-r6c1 gap 5
whispers-5: whispers r5c2-r6c3 gap 5
whispers-6: whispers r5c3-r6c2 gap 5
whispers-7: whispers r1c4-r2c5 gap 5
whispers-8: whispers r2c4-r1c5 gap 5
whispers-9: whispers r1c6-r2c6 gap 5
whispers-10: whispers r1c7-r2c7 gap 5
whispers-11: whispers r8c4-r9c5-r8c6 gap 5
whispers-12: whispers r8c7-r9c7 gap 5
pair-1: pair r1c2-r1c3 sum 5
pair-2: pair r3c1-r3c2 sum 5
```

```drawing
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[5.5,3.5],[4.5,4.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[4.5,5.5],[4.5,4.5]],"color":"#C77EFA","thickness":16,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[1.5,4.5],[2.5,4.5],[3.5,4.5],[4.5,4.5]],"color":"#C77EFA","thickness":12.8,"rounded":true}}
```

Normal Sudoku rules apply. GERMAN WHISPERS- Numbers on green lines are at least 5 apart from their neighbors on the line. DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. RENBAN- Numbers on the purple line are a non-repeating set of numbers, in any order. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. XV PAIRS- Numbers with an V between them sum to 5. Not all possible dots and V are given.
