---
format: open-rules
title: Reflexology
setter: Will Power
source: https://sudokupad.app/f5c6dej6fx
case: https://sudoku-sleuth.com/cases/reflexology
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r2c2-r2c3-r2c4-r3c2-r3c3-r3c4-r4c2-r4c3-r4c4 total 45 connected true
cage-2: cage r2c6-r2c7-r2c8-r3c6-r3c7-r3c8-r4c6-r4c7-r4c8 total 45 connected true
cage-3: cage r6c6-r6c7-r6c8-r7c6-r7c7-r7c8-r8c6-r8c7-r8c8 total 45 connected true
cage-4: cage r6c2-r6c3-r6c4-r7c2-r7c3-r7c4-r8c2-r8c3-r8c4 total 45 connected true
kropki-1: kropki r4c5-r5c5 colour "white"
kropki-2: kropki r5c5-r6c5 colour "white"
kropki-3: kropki r3c3-r3c4 colour "black"
kropki-4: kropki r2c8-r2c9 colour "black"
kropki-5: kropki r4c8-r5c8 colour "black"
arrow-1: arrow r2c9-r1c9-r1c8 bulb ["r2c8"]
arrow-2: arrow r5c8-r6c8 bulb ["r6c7"]
arrow-3: arrow r5c8-r6c9 bulb ["r4c9"]
arrow-4: arrow r5c8-r4c8 bulb ["r4c7"]
arrow-5: arrow r8c5-r9c4 bulb ["r7c4"]
arrow-6: arrow r8c5-r8c6 bulb ["r7c6"]
whispers-1: whispers r7c7-r7c6-r7c5-r7c4-r7c3-r6c3-r5c3-r4c3-r3c3-r3c4-r3c5-r3c6-r3c7-r4c7-r5c7-r6c7 gap 4
whispers-2: whispers r6c7-r7c7 gap 4
pair-1: pair r4c4-r5c4 relation {"op":"sum","value":10}
pair-2: pair r6c4-r6c5 relation {"op":"sum","value":10}
pair-3: pair r3c6-r4c6 relation {"op":"sum","value":10}
pair-4: pair r6c6-r7c6 relation {"op":"sum","value":10}
```

```drawing
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[4.5,7.5],[5.5,8.5]],"color":"#FFA000","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[4.5,7.5],[5.5,7.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[3.5,6.5],[4.5,7.5],[3.5,7.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[7.5,4.5],[7.5,5.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[7.5,4.5],[8.5,3.5]],"color":"#FFA000","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. DUTCH WHISPER- Numbers on the red line are at least 4 apart from their neighbors on the line. The number 5 does not appear on the red line. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. Numbers do not repeat in cages. ARROWS- Numbers on arrows sum to the number in the arrow's circle. The Orange, Blue and Purple lines are only to distinguish between different arrows. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. XV PAIRS- Numbers with an X between them sum to 10. Not all possible dots and X are given.
