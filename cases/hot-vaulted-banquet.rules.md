---
format: open-rules
title: Hot Vaulted Banquet
setter: Blobz
source: https://sudokupad.app/blobz/hot-vaulted-banquet
case: https://sudoku-sleuth.com/cases/hot-vaulted-banquet
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c7=2 r7c3=1
exported: 6b806437683a68a6d24919003930a9b5
---

```rules
sudoku 9x9
thermo-1: thermo r2c1-r1c1-r1c2-r1c3-r1c4
thermo-2: thermo r1c5-r1c6-r1c7
thermo-3: thermo r1c8-r1c9-r2c9-r3c9-r4c9
thermo-4: thermo r5c9-r6c9-r7c9
thermo-5: thermo r8c9-r9c9-r9c8-r9c7-r9c6
thermo-6: thermo r9c5-r9c4-r9c3
thermo-7: thermo r9c2-r9c1-r8c1-r7c1-r6c1
thermo-8: thermo r5c1-r4c1-r3c1
thermo-9: thermo r4c4-r4c3-r3c3-r3c4
thermo-10: thermo r6c6-r6c7-r7c7-r7c6
vault-1: vault r3c1-r4c1-r4c2-r5c2-r5c3-r5c4-r5c5-r5c6-r6c3-r6c5-r6c6-r6c7-r7c5-r7c6-r8c3-r8c4-r8c5-r9c3 neighbours ["r2c1","r3c2","r4c3","r4c4","r4c5","r4c6","r5c1","r5c7","r6c2","r6c4","r6c8","r7c3","r7c4","r7c7","r8c2","r8c6","r9c2","r9c4","r9c5"]
vault-2: vault r5c1-r6c1-r7c1-r7c2-r8c1-r8c2-r9c2 neighbours ["r4c1","r5c2","r6c2","r7c3","r8c3","r9c1","r9c3"]
vault-3: vault r7c9-r8c7-r8c8-r8c9-r9c5-r9c6-r9c7 neighbours ["r6c9","r7c7","r7c8","r8c5","r8c6","r9c4","r9c8","r9c9"]
vault-4: vault r1c3-r1c4-r1c5-r1c6-r2c2-r2c3-r2c6-r2c7-r3c7-r3c8-r3c9-r4c5-r4c6-r4c7-r4c9 neighbours ["r1c2","r1c7","r2c1","r2c4","r2c5","r2c8","r2c9","r3c2","r3c3","r3c5","r3c6","r4c4","r4c8","r5c5","r5c6","r5c7","r5c9"]
```

Normal sudoku rules apply.

Digits on thermometers must increase from the bulb end.

Digits in "Vault" cages may repeat. Digits orthogonally adjacent to a Vault may NOT be included within that Vault.
