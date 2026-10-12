---
format: open-rules
title: Vaults
setter: Blobz
source: https://sudokupad.app/blobz/vaults
case: https://sudoku-sleuth.com/cases/vaults
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c5=4
---

```rules
sudoku 9x9
cage-1: cage r3c1-r4c1-r4c2-r5c2-r6c1-r6c2-r7c1 total 28 repeats true connected true
cage-2: cage r1c3-r1c4-r2c4 total 7 repeats true connected true
cage-3: cage r1c5-r1c6-r1c7 total 18 repeats true connected true
cage-4: cage r2c5-r3c5-r3c6-r4c6-r4c7-r5c7-r5c8 total 56 repeats true connected true
cage-5: cage r3c9-r4c8-r4c9-r5c9-r6c9 total 13 repeats true connected true
cage-6: cage r8c9-r9c9 total 15 repeats true connected true
cage-7: cage r7c7-r7c8-r8c5-r8c6-r8c7-r9c3-r9c4-r9c5 total 17 repeats true connected true
cage-8: cage r7c5-r7c6 total 14 repeats true connected true
```

Normal sudoku rules apply.

Digits in "Vault" cages may repeat, but must sum to the small clue, if given. Digits orthogonally adjacent to a Vault may NOT be included within that Vault.
