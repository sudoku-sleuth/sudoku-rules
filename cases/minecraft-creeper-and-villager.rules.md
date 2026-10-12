---
format: open-rules
title: Minecraft Creeper and Villager
setter: Will Power
source: https://sudokupad.app/g1autubqxz
case: https://sudoku-sleuth.com/cases/minecraft-creeper-and-villager
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c2-r4c3 total 10 connected true
cage-2: cage r6c2-r6c3 total 6 connected true
cage-3: cage r1c7-r2c7 total 7 connected true
cage-4: cage r9c8-r9c9 total 7 connected true
cage-5: cage r4c8-r4c9-r5c9-r6c9 total 26 connected true
cage-6: cage r8c7-r8c8 total 6 connected true
cage-7: cage r3c7-r3c8 total 13 connected true
whispers-1: whispers r1c1-r1c2-r1c3-r1c4-r1c5-r2c5-r3c5-r4c5-r5c5-r5c4-r5c3-r5c2-r5c1-r4c1-r3c1-r2c1 gap 5
whispers-2: whispers r1c1-r2c1 gap 5
whispers-3: whispers r7c5-r8c5-r9c5 gap 3
whispers-4: whispers r4c6-r4c7-r4c8-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 gap 3
parity-cells r2c2-r2c4-r3c3-r4c2-r4c3-r4c4-r6c6-r6c7-r6c8-r6c5 parity "even"
```

Normal Sudoku rules apply. GERMAN WHISPERS (Creeper head outline)- Numbers on the green line are at least 5 apart from their neighbors on the line. PINK LINES (Villager head outline)- Numbers on pink lines are at least 3 apart from their neighbors on the line. GRAY CELLS- Gray cells are even. DARK GREEN CELLS- Dark green cells are greater than 5. Other colored cells have no effect on the puzzle. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. NO NEGATIVE CONSTRAINTS FOR ANY RULES.
