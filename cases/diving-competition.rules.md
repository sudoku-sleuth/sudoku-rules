---
format: open-rules
title: Diving Competition
setter: Will Power
source: https://sudokupad.app/wv892ia1rl
case: https://sudoku-sleuth.com/cases/diving-competition
library: https://rules.sudoku-sleuth.com/
status: read
exported: 11fa10753aac77f9fe871311d042a0b3
---

```rules
sudoku 9x9
cage-1: cage r9c7-r9c8-r9c9 total 22 connected true
cage-2: cage r9c4-r9c5-r9c6 total 12 connected true
cage-3: cage r1c8-r2c8-r3c8 total 15 connected true
cage-4: cage r1c9-r2c9-r3c9 total 16 connected true
cage-5: cage r1c1-r2c1-r3c1 total 13 connected true
cage-6: cage r6c5-r7c5-r8c5 total 17 connected true
cage-7: cage r6c6-r7c6-r8c6 total 11 connected true
cage-8: cage r6c7-r7c7-r8c7 total 16 connected true
cage-9: cage r3c5-r3c6-r3c7 total 15 connected true
cage-10: cage r1c4-r2c4-r2c5-r3c4 total 10 connected true
cage-11: cage r4c4-r5c4 total 10 connected true
thermo-1: thermo r3c2-r4c2-r5c2-r6c2-r5c3-r6c3
thermo-2: thermo r3c2-r4c2-r3c3-r2c3
thermo-3: thermo r8c8-r9c8
thermo-4: thermo r4c6-r3c7-r3c6-r3c5
thermo-5: thermo r4c6-r3c7-r2c7-r2c6-r3c5-r4c4
thermo-6: thermo r3c2-r4c2-r5c2-r6c2-r7c2-r8c2
thermo-7: thermo r8c8-r7c8-r6c8-r5c8-r4c8-r3c8
whispers-1: whispers r8c1-r8c2-r8c3-r8c4 gap 4
whispers-2: whispers r1c9-r2c9-r3c9 gap 4
whispers-3: whispers r1c8-r2c8-r3c8 gap 4
whispers-4: whispers r6c6-r7c6-r8c6 gap 4
whispers-5: whispers r6c7-r7c7-r8c7 gap 4
whispers-6: whispers r6c5-r7c5-r8c5 gap 4
whispers-7: whispers r1c1-r2c1-r3c1 gap 4
```

Normal Sudoku rules apply. THERMOMETERS- Numbers on thermometers strictly increase from the bulb end. KILLER- Numbers in cages sum to the number in the top left corner of the cage. DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. The blue line is the water, and has no effect on the puzzle.
