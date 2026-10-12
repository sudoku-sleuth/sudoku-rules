---
format: open-rules
title: Nuclear Fusion
setter: Will Power
source: https://sudokupad.app/cr7i33hh5v
case: https://sudoku-sleuth.com/cases/nuclear-fusion
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage r2c3-r2c4 total 13 connected true
arrow-1: arrow r8c8-r7c7-r6c6 bulb ["r9c9"]
arrow-2: arrow r2c2-r3c3-r4c4 bulb ["r1c1"]
arrow-3: arrow r2c5-r3c5 bulb ["r1c5"]
arrow-4: arrow r6c3-r5c4 bulb ["r7c2"]
arrow-5: arrow r4c7-r5c6 bulb ["r3c8"]
arrow-6: arrow r8c6-r7c6 bulb ["r9c6"]
whispers-1: whispers r3c4-r3c5-r4c5-r5c4-r5c3-r4c3 gap 5
whispers-2: whispers r4c3-r3c4 gap 5
whispers-3: whispers r5c6-r5c7-r6c7-r7c6-r7c5-r6c5 gap 5
whispers-4: whispers r6c5-r5c6 gap 5
parity-cells-1: parity-cells r6c7-r5c6-r7c5 parity "odd"
parity-cells-2: parity-cells r3c4-r3c5-r4c5-r4c3-r5c3-r5c4-r6c5-r5c7-r7c6 parity "even"
```

```drawing
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[7.5,5.5],[6.5,4.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[2.5,1.5],[3.5,2.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[1.5,8.5],[1.5,7.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[4.5,7.5],[5.5,8.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
```

Caution: Contents under EXTREME pressure. Normal Sudoku rules apply. GERMAN WHISPERS- Numbers on green lines are at least 5 apart from their neighbors on the line. ARROWS- Numbers on arrows sum to the number in the arrow's (unshaded) circle. Numbers may repeat on lines and arrows, if other rules allow. KILLER CAGE- Numbers in cages sum to the number in the top left corner of the cage. ODD/EVEN CELLS- Numbers on gray shaded squares are EVEN. Numbers on gray shaded circles are ODD. Numbers on all blue lines contain the same set of 3 numbers each.
