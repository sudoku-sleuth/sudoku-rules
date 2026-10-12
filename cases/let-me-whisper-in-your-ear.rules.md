---
format: open-rules
title: Let Me Whisper in Your Ear
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/fgns93vji6
case: https://sudoku-sleuth.com/cases/let-me-whisper-in-your-ear
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c4-r4c3-r4c4 total 12 connected true
cage-2: cage r3c6-r4c6-r4c7 total 6 connected true
cage-3: cage r6c6-r6c7-r7c6 total 18 connected true
cage-4: cage r6c3-r6c4-r7c4 total 24 connected true
cage-5: cage r1c3-r1c4 total 5 connected true
cage-6: cage r1c6-r1c7 total 11 connected true
cage-7: cage r3c1-r4c1 total 9 connected true
cage-8: cage r6c1-r7c1 total 8 connected true
cage-9: cage r9c3-r9c4 total 9 connected true
cage-10: cage r9c6-r9c7 total 15 connected true
cage-11: cage r6c9-r7c9 total 11 connected true
cage-12: cage r3c9-r4c9 total 12 connected true
cage-13: cage r2c5-r3c5 total 12 connected true
cage-14: cage r5c7-r5c8 total 11 connected true
cage-15: cage r7c5-r8c5 total 5 connected true
cage-16: cage r5c2-r5c3 total 9 connected true
whispers-1: whispers r2c9-r3c8-r4c7-r5c7-r6c7-r7c8-r8c9 gap 5
whispers-2: whispers r8c3-r7c4-r7c5-r7c6-r8c7 gap 5
whispers-3: whispers r2c3-r3c4-r3c5-r3c6-r2c7 gap 5
whispers-4: whispers r2c1-r3c2-r4c3-r5c3-r6c3-r7c2-r8c1 gap 5
whispers-5: whispers r6c4-r7c3-r8c2-r9c1 gap 5
whispers-6: whispers r4c4-r3c3-r2c2-r1c1 gap 5
whispers-7: whispers r4c6-r3c7-r2c8-r1c9 gap 5
whispers-8: whispers r6c6-r7c7-r8c8-r9c9 gap 5
```

- Normal sudoku rules apply.
- German Whispers: Adjacent digits along green German Whispers lines must differ by at least 5.
- Cages: Digits in cages must sum to the value shown in the upper left corner of the cage.
