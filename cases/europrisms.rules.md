---
format: open-rules
title: EuroPrisms
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/pq7kgp5wa7
case: https://sudoku-sleuth.com/cases/europrisms
library: https://rules.sudoku-sleuth.com/
status: read
exported: e2baec07ad1d09d55d247518a4ce9418
---

```rules
sudoku 9x9
cage-1: cage r3c6-r3c7 total 10 connected true
cage-2: cage r8c3-r8c4 total 10 connected true
cage-3: cage r4c9-r5c9 total 10 connected true
cage-4: cage r8c9-r9c9 total 10 connected true
cage-5: cage r2c6-r2c7 total 10 connected true
cage-6: cage r4c2-r4c3 total 10 connected true
cage-7: cage r3c4-r4c4 total 10 connected true
cage-8: cage r2c1-r2c2 total 10 connected true
cage-9: cage r5c2-r6c2 total 8 connected true
cage-10: cage r1c8-r1c9 total 11 connected true
whispers-1: whispers r3c1-r4c1-r4c2-r3c2 gap 5 loop true
whispers-2: whispers r3c1-r2c2-r2c3-r3c3-r4c2 gap 5
whispers-3: whispers r3c2-r2c3 gap 5
whispers-4: whispers r7c7-r8c7-r8c8-r7c8 gap 5 loop true
whispers-5: whispers r7c7-r6c8 gap 5
whispers-6: whispers r7c8-r6c9 gap 5
whispers-7: whispers r8c8-r7c9 gap 5
whispers-8: whispers r6c8-r6c9 gap 5
whispers-9: whispers r6c9-r7c9 gap 5
whispers-10: whispers r6c2-r7c2-r8c2-r8c3-r8c4-r7c4-r6c4-r6c3 gap 4 loop true
whispers-11: whispers r6c2-r5c3-r4c4-r3c5-r2c6-r1c7-r1c8-r1c9-r2c9-r3c9-r4c8-r5c7-r6c6-r7c5-r8c4 gap 4
whispers-12: whispers r6c4-r5c5-r4c6-r3c7-r2c8-r1c9 gap 4
```

**Standard Sudoku, Cages, German and Dutch Whispers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- German Whispers: Adjacent digits along German Whispers lines must differ by at least 5.
- Dutch Whispers: Adjacent digits along Dutch Whispers lines must differ by at least 4.

The green lines forming small prisms are German Whispers. The orange lines forming the long prism are Dutch Whispers.
