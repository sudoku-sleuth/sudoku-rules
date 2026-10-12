---
format: open-rules
title: Darling Fountain
setter: BremSter, FullDeck and Missing a Few Cards
source: https://sudokupad.app/sn83d9a6vq
case: https://sudoku-sleuth.com/cases/darling-fountain
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c7-r2c8-r3c8 total 9 connected true
cage-2: cage r2c2-r2c3-r3c2 total 7 connected true
cage-3: cage r7c8-r8c7-r8c8 total 8 connected true
cage-4: cage r7c2-r8c2-r8c3 total 11 connected true
cage-5: cage r1c4-r1c5-r1c6 total 15 connected true
cage-6: cage r6c3-r6c4-r7c4 total 9 connected true
cage-7: cage r3c6-r4c6-r4c7 total 15 connected true
cage-8: cage r4c4-r4c5-r5c4 total 18 connected true
cage-9: cage r5c6-r6c5-r6c6 total 12 connected true
cage-10: cage r4c9-r5c9-r6c9 total 9 connected true
cage-11: cage r9c4-r9c5-r9c6 total 16 connected true
cage-12: cage r4c1-r5c1-r6c1 total 19 connected true
nabner-1: nabner r4c1-r3c2-r2c3-r1c4 distinct true
nabner-2: nabner r1c6-r2c7-r3c8-r4c9 distinct true
nabner-3: nabner r6c1-r7c2-r8c3-r9c4 distinct true
nabner-4: nabner r9c6-r8c7-r7c8-r6c9 distinct true
nabner-5: nabner r4c3-r3c4 distinct true
nabner-6: nabner r3c6-r4c7 distinct true
nabner-7: nabner r6c7-r7c6 distinct true
nabner-8: nabner r6c3-r7c4 distinct true
```

- Normal Sudoku rules apply.
- Digits in cages must sum to the number in the top left corner of the cage. Digits may not repeat within cages.
- Nabner Lines: No two digits on a gold line can be consecutive, regardless of their position on the line. Digits may not repeat on lines.
