---
format: open-rules
title: Water, Ice, Vapor
setter: Blobz
source: https://sudokupad.app/blobz/water-ice-vapor
case: https://sudoku-sleuth.com/cases/water-ice-vapor
library: https://rules.sudoku-sleuth.com/
status: read
exported: 8c6b05313feba46b05e69a89af2f5c8c
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1-r2c2-r3c1 total 21 connected true
cage-2: cage r1c2-r1c3-r2c3-r3c3 total 16 connected true
cage-3: cage r1c5-r1c6-r2c6 total 16 connected true
cage-4: cage r1c8-r2c8 total 15 connected true
cage-5: cage r2c5-r3c4-r3c5-r4c3-r4c4-r5c2-r5c3 connected true
cage-6: cage r4c1-r5c1-r6c1-r7c1 connected true
cage-7: cage r8c2-r9c2 total 7 connected true
cage-8: cage r6c2-r6c3-r7c3-r7c4 total 16 connected true
cage-9: cage r8c4-r9c4-r9c5 total 12 connected true
cage-10: cage r5c7-r5c8-r6c6-r6c7-r7c5-r7c6-r8c5 connected true
cage-11: cage r4c5-r4c6-r5c5-r6c4-r6c5 connected true
cage-12: cage r7c7-r8c7-r9c7-r9c8 total 26 connected true
cage-13: cage r7c9-r8c8-r8c9-r9c9 total 17 connected true
cage-14: cage r3c9-r4c9-r5c9-r6c9 connected true
cage-15: cage r3c6-r3c7-r4c7-r4c8 total 25 connected true
```

Normal sudoku rules apply.

Digits in cages do not repeat and must sum to the small clue, if given.

Digits in cages are either "water" (7,8,9), "ice" (4,5,6), or "vapor" (1,2,3). Cages may be a single type or a mix of types. Any row within a cage must be a single type and types must be ordered based on their density. Water is heaviest and must be below ice and vapor; ice is heavier than vapor.
