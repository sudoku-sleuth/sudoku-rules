---
format: open-rules
title: Helium Neon GAS Lasers
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/helium-neon-gas-lasers
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage r1c1-r1c2-r1c3 total 18 connected true
anti-knight
kropki r2c8-r2c9 colour "white"
whispers-1: whispers r6c5-r6c6-r6c7-r6c8-r6c9 gap 5
whispers-2: whispers r7c4-r7c5-r7c6-r7c7-r7c8-r7c9 gap 5
whispers-3: whispers r7c1-r7c2 gap 5
whispers-4: whispers r6c1-r6c2-r6c3 gap 5
whispers-5: whispers r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9 gap 5
whispers-6: whispers r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8 gap 5
whispers-7: whispers r2c1-r2c2-r2c3-r2c4 gap 5
```

Normal Sudoku rules apply. Anti-Knight- The same number cannot be a chess knight's move away from each other. German Whisper Lines- Numbers on green lines are at least 5 apart from their neighbors on the line. Kropki Pairs- Numbers with a white dot between them are consecutive. Not all possible dots are given. Killer Cage- Numbers in the cage sum to the number in the top left corner of the cage.
