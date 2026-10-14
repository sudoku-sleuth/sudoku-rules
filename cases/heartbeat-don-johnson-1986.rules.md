---
format: open-rules
title: Heartbeat (Don Johnson, 1986)
setter: Will Power
source: https://sudokupad.app/cff83p45y1
case: https://sudoku-sleuth.com/cases/heartbeat-don-johnson-1986
library: https://rules.sudoku-sleuth.com/
status: read
exported: b7ea108370456cbe6053ac96f896ac78
---

```rules
sudoku 9x9
cage r2c4-r3c4 total 11 connected true
thermo-1: thermo r6c8-r5c7-r5c6-r5c5
thermo-2: thermo r6c8-r5c7-r4c7-r3c7
thermo-3: thermo r6c8-r5c7-r4c6-r4c5-r4c4-r3c3
thermo-4: thermo r6c8-r5c7-r4c6-r3c6-r2c6-r1c5
arrow-1: arrow r5c3-r6c4-r6c5-r7c6-r8c7 bulb ["r4c2"]
arrow-2: arrow r5c3-r5c4-r5c5 bulb ["r4c2"]
arrow-3: arrow r5c3-r6c3-r7c3 bulb ["r4c2"]
arrow-4: arrow r5c3-r6c4-r7c4-r8c5-r9c6 bulb ["r4c2"]
arrow-5: arrow r2c8-r3c9-r4c9 bulb ["r1c7"]
whispers r9c1-r9c2-r8c2-r7c2-r8c3-r9c4-r9c5-r9c6-r9c7-r8c7-r7c7-r8c8-r9c8-r9c9 gap 4
```

'I've been standing by the fire, I just can't feel the heat.' Normal Sudoku rules apply. ARROWS- Numbers on arrows sum to the number in the arrow's circle. Numbers may repeat on arrows, if other rules allow. THERMOMETERS- Numbers on thermometers increase from the bulb end. DUTCH WHISPERS- Numbers on the red line (heartbeat) are at least 4 apart from their neighbors on the line. KILLER CAGE- Numbers in cages sum to the number in the top left corner of the cage.
