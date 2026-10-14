---
format: open-rules
title: Vaulted Lattice
setter: Blobz
source: https://sudokupad.app/blobz/vaulted-lattice
case: https://sudoku-sleuth.com/cases/vaulted-lattice
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c7=1 r5c5=2 r9c3=3
exported: a166ca4d6f43b233315bec4556b04bd9
---

```rules
sudoku 9x9
cage-1: cage r3c2-r3c3 total 3 repeats true connected true
cage-2: cage r7c7-r7c8 total 5 repeats true connected true
cage-3: cage r8c1-r9c1 total 7 repeats true connected true
cage-4: cage r1c9-r2c9 total 6 repeats true connected true
cage-5: cage r8c5-r9c5 total 10 repeats true connected true
cage-6: cage r1c5-r2c5 total 10 repeats true connected true
```

Normal sudoku rules apply.

Digits along pink “renban” lines form a consecutive sequence in any order. 

Cages mark “Vaults” in which digits MAY repeat, but must sum to the total, if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.
