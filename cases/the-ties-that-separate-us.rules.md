---
format: open-rules
title: The Ties That Separate Us
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/je11t0zn1j
case: https://sudoku-sleuth.com/cases/the-ties-that-separate-us
library: https://rules.sudoku-sleuth.com/
status: read
exported: 189d4c80c1ab33345caf3cb485788566
---

```rules
sudoku 9x9
cage-1: cage r3c4-r4c3-r4c4 total 7 connected true
cage-2: cage r2c2-r2c3-r3c2 total 8 connected true
cage-3: cage r1c1-r1c2-r2c1 total 13 connected true
cage-4: cage r6c6-r6c7-r7c6 total 8 connected true
cage-5: cage r7c8-r8c7-r8c8 total 7 connected true
cage-6: cage r7c2-r8c2-r8c3 total 9 connected true
cage-7: cage r2c7-r2c8-r3c8 total 13 connected true
cage-8: cage r6c1-r6c2-r7c1 total 12 connected true
cage-9: cage r3c9-r4c8-r4c9 total 9 connected true
cage-10: cage r8c9-r9c8-r9c9 total 16 connected true
cage-11: cage r9c3-r9c4 total 7 connected true
cage-12: cage r1c6-r1c7 total 10 connected true
cage-13: cage r3c1-r4c1 total 10 connected true
cage-14: cage r6c9-r7c9 total 8 connected true
cage-15: cage r9c6-r9c7 total 10 connected true
cage-16: cage r1c3-r1c4 total 13 connected true
kropki r8c9-r9c9 white
nabner-1: nabner r5c3-r4c3-r3c4-r3c5 distinct true
nabner-2: nabner r4c2-r3c2-r2c3-r2c4 distinct true
nabner-3: nabner r3c1-r2c1-r1c2-r1c3 distinct true
nabner-4: nabner r7c5-r7c6-r6c7-r5c7 distinct true
nabner-5: nabner r8c6-r8c7-r7c8-r6c8 distinct true
nabner-6: nabner r9c7-r9c8-r8c9-r7c9 distinct true
nabner-7: nabner r6c2-r7c2-r8c3-r8c4 distinct true
nabner-8: nabner r2c6-r2c7-r3c8-r4c8 distinct true
nabner-9: nabner r1c7-r1c8-r2c9-r3c9 distinct true
nabner-10: nabner r7c1-r8c1-r9c2-r9c3 distinct true
```

- Normal sudoku rules apply.
- Nabner line: No two digits along a gold Nabner line can be consecutive, regardless of their position on the line. Digits may not repeat on Nabner lines.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Consecutive Pairs: Digits separated by a white dot are consecutive. Not all possible dots are necessarily shown.
