---
format: open-rules
title: Elevens
setter: The Bard
source: https://sudokupad.app/a1pdhomk1f
case: https://sudoku-sleuth.com/cases/elevens
library: https://rules.sudoku-sleuth.com/
status: read
exported: fbff353df8ae038effc9a50091b42ad4
---

```rules
sudoku 9x9
cage-1: cage r8c5-r9c5-r9c6 total 11 connected true
cage-2: cage r7c5-r7c6-r8c6 total 11 connected true
cage-3: cage r5c5-r6c5-r6c6 total 11 connected true
cage-4: cage r5c6-r5c7-r6c7 total 11 connected true
cage-5: cage r5c8-r5c9 total 11 connected true
cage-6: cage r6c8-r6c9 total 11 connected true
cage-7: cage r1c4-r2c4-r3c4 total 11 connected true
cage-8: cage r1c1-r1c2-r2c1 total 11 connected true
cage-9: cage r3c1-r3c2 total 11 connected true
cage-10: cage r1c3-r2c3 total 11 connected true
cage-11: cage r4c3-r5c3-r6c3 total 11 connected true
cage-12: cage r1c6-r1c7-r2c6-r2c7 total 11 connected true
cage-13: cage r3c8-r4c8 total 11 connected true
anti-knight
```

Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
Anti-Knight: Cells that are a Knight's move apart (in chess) may not contain the same digit.
Killer: Digits in cages must sum to the number in the top left corner of the cage. Digits may not repeat within a cage.
