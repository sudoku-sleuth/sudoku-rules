---
format: open-rules
title: Carrefour
setter: sujoyku
source: https://sudokupad.app/ul9o968502
case: https://sudoku-sleuth.com/cases/carrefour
library: https://rules.sudoku-sleuth.com/
status: read
exported: cfb4d62511d7c307a0b6a327eca2bbed
---

```rules
sudoku 9x9
cage-1: cage r1c4-r2c4 total 14 connected true
cage-2: cage r4c1-r4c2 total 7 connected true
cage-3: cage r4c7-r4c8-r4c9 total 10 connected true
cage-4: cage r7c4-r8c4-r9c4 total 19 connected true
cage-5: cage r6c3-r7c3-r8c3 total 11 connected true
cage-6: cage r3c6-r3c7-r3c8 total 11 connected true
cage-7: cage r1c1-r1c2-r2c1-r2c2 total 21 connected true
cage-8: cage r8c8-r8c9-r9c8-r9c9 total 24 connected true
cage-9: cage r7c1-r8c1 total 14 connected true
cage-10: cage r1c7-r1c8 total 9 connected true
whispers-1: whispers r6c1-r6c2-r5c3-r4c4-r3c5-r2c6-r1c6 gap 5
whispers-2: whispers r9c6-r8c6-r7c5-r6c6-r5c7-r6c8-r6c9 gap 5
```

- Normal sudoku rules apply, i.e. each Row, Column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer Cages: Digits in a cage must sum to the clue in the top left.

- German Whispers: Adjacent digits on a green line must have a difference of at least 5.
