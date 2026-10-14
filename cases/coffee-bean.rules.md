---
format: open-rules
title: Coffee Bean
setter: Blobz
source: https://sudokupad.app/blobz/coffee-bean
case: https://sudoku-sleuth.com/cases/coffee-bean
library: https://rules.sudoku-sleuth.com/
status: read
exported: bb62a8f52be6a99be4d83743cabe70ea
---

```rules
sudoku 9x9
whispers r9c7-r9c8-r8c9-r7c9-r6c9-r5c9-r4c8-r3c8-r2c7-r1c6-r1c5-r1c4-r2c3-r3c3-r4c4-r5c5-r6c6-r7c7-r8c7-r9c6-r9c5-r9c4-r8c3-r7c2-r6c2-r5c1-r4c1-r3c1-r2c1-r1c2-r1c3 gap 5
vault-1: vault r6c5-r7c5-r7c6-r8c3-r8c4-r8c5-r9c5 neighbours ["r5c5","r6c4","r6c6","r7c3","r7c4","r7c7","r8c2","r8c6","r9c3","r9c4","r9c6"]
vault-2: vault r1c5-r2c5-r2c6-r2c7-r3c4-r3c5-r4c5 neighbours ["r1c4","r1c6","r1c7","r2c4","r2c8","r3c3","r3c6","r3c7","r4c4","r4c6","r5c5"]
vault-3: vault r5c8-r5c9-r6c9-r7c7-r7c8-r7c9-r8c9 neighbours ["r4c8","r4c9","r5c7","r6c7","r6c8","r7c6","r8c7","r8c8","r9c9"]
vault-4: vault r2c1-r3c1-r3c2-r3c3-r4c1-r5c1-r5c2 neighbours ["r1c1","r2c2","r2c3","r3c4","r4c2","r4c3","r5c3","r6c1","r6c2"]
vault-5: vault r1c8-r1c9 sum 12 neighbours ["r1c7","r2c8","r2c9"]
vault-6: vault r3c8-r4c8 sum 8 neighbours ["r2c8","r3c7","r3c9","r4c7","r4c9","r5c8"]
vault-7: vault r4c7-r5c7 sum 8 neighbours ["r3c7","r4c6","r4c8","r5c6","r5c8","r6c7"]
vault-8: vault r3c6-r4c6 sum 10 neighbours ["r2c6","r3c5","r3c7","r4c5","r4c7","r5c6"]
vault-9: vault r4c2-r4c3 sum 7 neighbours ["r3c2","r3c3","r4c1","r4c4","r5c2","r5c3"]
vault-10: vault r5c3-r6c3 sum 7 neighbours ["r4c3","r5c2","r5c4","r6c2","r6c4","r7c3"]
vault-11: vault r6c4-r7c4 sum 10 neighbours ["r5c4","r6c3","r6c5","r7c3","r7c5","r8c4"]
vault-12: vault r9c1-r9c2 sum 10 neighbours ["r8c1","r8c2","r9c3"]
vault-13: vault r6c7-r6c8 sum 8 neighbours ["r5c7","r5c8","r6c6","r6c9","r7c7","r7c8"]
```

Normal sudoku rules apply.

Cages mark "Vaults". Digits in a vault MAY repeat. Digits orthogonally adjacent to a vault may NOT be included within that vault.

Digits in a vault sum to the small clue, if given.

Along the green line, adjacent digits differ by at least 5.
