---
format: open-rules
title: Angel Fish
setter: Blobz
source: https://sudokupad.app/blobz/angel-fish
case: https://sudoku-sleuth.com/cases/angel-fish
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c6=7
exported: 4c6179a26e76c60b5f81d9a3bfff92f2
---

```rules
sudoku 9x9
cage r7c8-r8c8-r8c9-r9c9 total 26 repeats true connected true
```

Normal sudoku rules apply.

Digits along a pink line form a consecutive sequence in any order.

White dots separate digits that are consecutive. 

Black dots separate digits where one is double the other.

Cages mark “vaults” in which digits MAY repeat, but must sum to the total if given. Digits orthogonally adjacent to a vault may NOT be included within that vault.
