---
format: open-rules
title: Hashtag Geruchten
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/zuddostsfp
case: https://sudoku-sleuth.com/cases/hashtag-geruchten
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c3-r3c2-r3c3-r3c4-r4c3 total 16 connected true
cage-2: cage r6c7-r7c6-r7c7-r7c8-r8c7 total 16 connected true
cage-3: cage r1c2-r2c1-r2c2 total 12 connected true
cage-4: cage r1c8-r2c8-r2c9 total 16 connected true
cage-5: cage r1c4-r1c5 total 10 connected true
cage-6: cage r2c5-r3c5 total 15 connected true
cage-7: cage r2c7-r3c6-r3c7-r3c8-r4c7 total 26 connected true
cage-8: cage r5c7-r5c8 total 13 connected true
cage-9: cage r4c1-r5c1 total 8 connected true
cage-10: cage r5c2-r5c3 total 10 connected true
cage-11: cage r6c3-r7c2-r7c3-r7c4-r8c3 total 27 connected true
cage-12: cage r8c1-r8c2-r9c2 total 16 connected true
cage-13: cage r7c5-r8c5 total 11 connected true
cage-14: cage r9c5-r9c6 total 17 connected true
cage-15: cage r8c8-r8c9-r9c8 total 18 connected true
cage-16: cage r5c9-r6c9 total 13 connected true
whispers-1: whispers r3c1-r3c2-r3c3-r2c3-r1c3 gap 4
whispers-2: whispers r3c4-r3c5-r3c6 gap 4
whispers-3: whispers r1c7-r2c7-r3c7-r3c8-r3c9 gap 4
whispers-4: whispers r4c7-r5c7-r6c7 gap 4
whispers-5: whispers r9c7-r8c7-r7c7-r7c8-r7c9 gap 4
whispers-6: whispers r7c4-r7c5-r7c6 gap 4
whispers-7: whispers r7c1-r7c2-r7c3-r8c3-r9c3 gap 4
whispers-8: whispers r4c3-r5c3-r6c3 gap 4
```

- Normal sudoku rules apply.
- Dutch Whispers: Adjacent digits along an orange Dutch Whispers line differ by at least 4.
- Cages: Within cages, digits cannot repeat and must sum to the value shown in the upper left corner of the cage.
