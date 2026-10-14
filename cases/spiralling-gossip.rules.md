---
format: open-rules
title: Spiralling Gossip
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/6ljqu55g6n
case: https://sudoku-sleuth.com/cases/spiralling-gossip
library: https://rules.sudoku-sleuth.com/
status: read
exported: 7d4c526e3c2b2922b12f79ebbfdebde0
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3 total 10 connected true
cage-2: cage r1c7-r2c7-r3c7 total 12 connected true
cage-3: cage r6c5-r6c6-r6c7 total 10 connected true
cage-4: cage r4c3-r5c3-r6c3 total 12 connected true
cage-5: cage r3c3-r3c4-r3c5 total 18 connected true
cage-6: cage r3c6-r4c6-r5c6 total 13 connected true
cage-7: cage r8c1-r9c1-r9c2 total 13 connected true
cage-8: cage r8c9-r9c8-r9c9 total 10 connected true
cage-9: cage r9c4-r9c5-r9c6 total 14 connected true
cage-10: cage r4c4-r5c4-r6c4 total 16 connected true
whispers-1: whispers r1c1-r1c2-r1c3 gap 5
whispers-2: whispers r1c7-r2c7-r3c7 gap 5
whispers-3: whispers r6c7-r6c6-r6c5 gap 5
whispers-4: whispers r6c3-r5c3-r4c3 gap 5
whispers-5: whispers r3c3-r3c4-r3c5 gap 5
whispers-6: whispers r3c6-r4c6-r5c6 gap 5
whispers-7: whispers r8c1-r9c1-r9c2 gap 5
whispers-8: whispers r9c8-r9c9-r8c9 gap 5
whispers-9: whispers r4c4-r5c4-r6c4 gap 5
whispers-10: whispers r4c9-r5c9-r6c9 gap 5
whispers-11: whispers r4c1-r4c2-r3c2 gap 5
whispers-12: whispers r7c8-r8c7-r7c7 gap 5
whispers-13: whispers r7c2-r8c3 gap 5
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
