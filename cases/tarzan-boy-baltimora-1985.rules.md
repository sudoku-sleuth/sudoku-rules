---
format: open-rules
title: Tarzan Boy (Baltimora 1985)
setter: Will Power
source: https://sudokupad.app/wrlxp4pnd5
case: https://sudoku-sleuth.com/cases/tarzan-boy-baltimora-1985
library: https://rules.sudoku-sleuth.com/
status: read
exported: b649a1d447575345ee3045e10759245c
---

```rules
sudoku 9x9
cage-1: cage r8c8-r8c9-r9c8 total 9 connected true
cage-2: cage r5c7-r5c8-r5c9 total 15 connected true
cage-3: cage r4c4-r4c5-r5c5 total 14 connected true
cage-4: cage r4c6-r5c6 total 6 connected true
cage-5: cage r6c4-r6c5-r6c6 total 22 connected true
cage-6: cage r6c1-r6c2 total 9 connected true
cage-7: cage r2c2-r2c3 total 10 connected true
cage-8: cage r3c2-r3c3 total 10 connected true
cage-9: cage r3c5-r3c6 total 5 connected true
cage-10: cage r1c5-r1c6 total 5 connected true
anti-king
whispers-1: whispers r1c9-r2c8-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 gap 5
whispers-2: whispers r2c2-r3c2-r3c3-r2c3 gap 4
whispers-3: whispers r2c2-r2c3 gap 4
whispers-4: whispers r5c1-r4c2-r4c3-r4c4-r4c5-r4c6-r3c7 gap 4
whispers-5: whispers r4c4-r5c5 gap 4
whispers-6: whispers r9c4-r9c5-r8c5-r7c5-r6c5-r6c4-r6c3-r7c3-r8c2 gap 4
```

Jungle life: We're living in the open. Normal Sudoku rules apply. ANTI-KING- Numbers a chess king's move apart cannot be the same number. GERMAN WHISPERS- Numbers on the green line (vine) are at least 5 apart from their neignbors on the line. DUTCH WHISPERS- Numbers on red lines (Tarzan Boy) are at least 4 apart from their neighbors on the line. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.
