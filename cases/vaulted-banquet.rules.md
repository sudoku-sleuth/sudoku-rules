---
format: open-rules
title: Vaulted Banquet
setter: Blobz
source: https://sudokupad.app/blobz/vaulted-banquet
case: https://sudoku-sleuth.com/cases/vaulted-banquet
library: https://rules.sudoku-sleuth.com/
status: read
exported: 80236f65817791b1fa5c64883c692afd
---

```rules
sudoku 9x9
quadruple-1: quadruple r3c3-r3c4-r4c3-r4c4 digits [6,6]
quadruple-2: quadruple r6c6-r6c7-r7c6-r7c7 digits [2,2]
index-1: index r1c1-r1c9-r2c1-r2c9-r3c1-r3c9-r4c1-r4c9-r5c1-r5c9-r6c1-r6c9-r7c1-r7c9-r8c1-r8c9-r9c1-r9c9 axis "column"
index-2: index r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9-r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9 axis "row"
vault-1: vault r1c4-r2c4-r2c5-r3c1-r3c2-r3c3-r3c4-r4c1-r4c4 neighbours ["r1c3","r1c5","r2c1","r2c2","r2c3","r2c6","r3c5","r4c2","r4c3","r4c5","r5c1","r5c4"]
vault-2: vault r3c5-r3c6-r4c5-r5c5-r5c6-r5c8-r6c6-r6c7-r6c8-r7c7-r8c5-r8c6-r8c7 neighbours ["r2c5","r2c6","r3c4","r3c7","r4c4","r4c6","r4c8","r5c4","r5c7","r5c9","r6c5","r6c9","r7c5","r7c6","r7c8","r8c4","r8c8","r9c5","r9c6","r9c7"]
vault-3: vault r5c1-r5c3-r6c1-r6c2-r6c3-r6c4-r6c5-r7c1-r7c2-r8c1 neighbours ["r4c1","r4c3","r5c2","r5c4","r5c5","r6c6","r7c3","r7c4","r7c5","r8c2","r9c1"]
vault-4: vault r3c7-r3c8-r4c8-r4c9-r5c9-r6c9-r7c9 neighbours ["r2c7","r2c8","r3c6","r3c9","r4c7","r5c8","r6c8","r7c8","r8c9"]
vault-5: vault r7c8-r8c8-r8c9-r9c4-r9c5-r9c6-r9c7-r9c8 neighbours ["r6c8","r7c7","r7c9","r8c4","r8c5","r8c6","r8c7","r9c3","r9c9"]
vault-6: vault r8c2-r8c3-r8c4-r9c2 neighbours ["r7c2","r7c3","r7c4","r8c1","r8c5","r9c1","r9c3","r9c4"]
```

Normal sudoku rules apply.

Digits in row 1 index the row in which the 1 appears for the corresponding column. Digits in column 1 index the column in which the 1 appears for the corresponding row. Similarly, 9's are indexed in row 9 and column 9. For example, a 4 in r5c1 will place a 1 in r5c4 and a 5 in r1c4.

Digits in small circles must appear in (at least) one of the cells touching the circle.

Digits in "Vault" cages may repeat. Digits orthogonally adjacent to a Vault may NOT be included within that Vault.
