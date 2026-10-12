---
format: open-rules
title: Vaulted Paths
setter: Blobz
source: https://sudokupad.app/blobz/vaulted-paths
case: https://sudoku-sleuth.com/cases/vaulted-paths
library: https://rules.sudoku-sleuth.com/
status: read
givens: r6c4=2 r7c8=4
---

```rules
sudoku 9x9
vault-1: vault r3c7-r3c8-r4c6-r4c7 neighbours ["r2c7","r2c8","r3c6","r3c9","r4c5","r4c8","r5c6","r5c7"]
vault-2: vault r2c4-r3c4-r3c5-r4c5 neighbours ["r1c4","r2c3","r2c5","r3c3","r3c6","r4c4","r4c6","r5c5"]
vault-3: vault r5c5-r5c6-r6c6-r6c7-r6c8-r7c7 neighbours ["r4c5","r4c6","r5c4","r5c7","r5c8","r6c5","r6c9","r7c6","r7c8","r8c7"]
vault-4: vault r2c2-r3c1-r3c2-r4c1 neighbours ["r1c2","r2c1","r2c3","r3c3","r4c2","r5c1"]
vault-5: vault r3c9-r4c9-r5c9 neighbours ["r2c9","r3c8","r4c8","r5c8","r6c9"]
vault-6: vault r5c2-r5c3-r5c4-r6c4 neighbours ["r4c2","r4c3","r4c4","r5c1","r5c5","r6c2","r6c3","r6c5","r7c4"]
vault-7: vault r6c3-r7c1-r7c2-r7c3-r7c4-r8c2-r8c4-r8c5-r9c4 neighbours ["r5c3","r6c1","r6c2","r6c4","r7c5","r8c1","r8c3","r8c6","r9c2","r9c3","r9c5"]
vault-8: vault r1c6-r1c7-r1c8-r1c9-r2c6-r2c8-r3c6 neighbours ["r1c5","r2c5","r2c7","r2c9","r3c5","r3c7","r3c8","r4c6"]
vault-9: vault r9c7-r9c8-r9c9 sum 10 neighbours ["r8c7","r8c8","r8c9","r9c6"]
vault-10: vault r8c1-r9c1 sum 6 neighbours ["r7c1","r8c2","r9c2"]
vault-11: vault r5c1-r6c1 sum 14 neighbours ["r4c1","r5c2","r6c2","r7c1"]
vault-12: vault r1c1-r1c2 sum 12 neighbours ["r1c3","r2c1","r2c2"]
vault-13: vault r5c7-r5c8 sum 12 neighbours ["r4c7","r4c8","r5c6","r5c9","r6c7","r6c8"]
vault-14: vault r1c5-r2c5 sum 8 neighbours ["r1c4","r1c6","r2c4","r2c6","r3c5"]
vault-15: vault r2c3-r3c3-r4c2-r4c3-r4c4 neighbours ["r1c3","r2c2","r2c4","r3c2","r3c4","r4c1","r4c5","r5c2","r5c3","r5c4"]
vault-16: vault r8c3-r9c2-r9c3 sum 22 neighbours ["r7c3","r8c2","r8c4","r9c1","r9c4"]
vault-17: vault r6c9-r7c9-r8c9 sum 24 neighbours ["r5c9","r6c8","r7c8","r8c8","r9c9"]
vault-18: vault r7c5-r7c6-r7c8-r8c6-r8c7-r8c8 neighbours ["r6c5","r6c6","r6c8","r7c4","r7c7","r7c9","r8c5","r8c9","r9c6","r9c7","r9c8"]
```

Normal sudoku rules apply.

The marked cages are "Vaults". Digits in vaults MAY repeat, but must sum to the total if given. Digits orthogonally adjacent to a vault may NOT be included within that Vault.

A path consisting of the digits 1 to 9, in order, moves from left to right across the grid with each digit in its corresponding column (1 in column 1, 2 in column 2, etc.) The cells along the path are connected orthogonally or diagonally. A similar path crosses the grid from top to bottom, starting with a 1 in row 1, then a 2 in row 2, ending with a 9 in row 9. Again, cells along the path are connected orthogonally or diagonally.

The two paths (which do not share cells) must be determined by the solver.
