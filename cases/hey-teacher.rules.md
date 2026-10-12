---
format: open-rules
title: Hey! Teacher...
setter: Blobz
source: https://sudokupad.app/blobz/hey-teacher
case: https://sudoku-sleuth.com/cases/hey-teacher
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c5=5 r4c6=4 r5c4=3 r5c5=6 r6c4=8 r6c5=7 r6c6=9 r6c9=1 r7c7=2
---

```rules
sudoku 9x9
vault-1: vault r1c1-r1c2-r1c3 sum 13 neighbours ["r1c4","r2c1","r2c2","r2c3"]
cage-1: cage r1c1-r1c2-r1c3 connected true
vault-2: vault r1c4-r1c5-r1c6 sum 15 neighbours ["r1c3","r1c7","r2c4","r2c5","r2c6"]
cage-2: cage r1c4-r1c5-r1c6 connected true
vault-3: vault r1c7-r1c8-r1c9 neighbours ["r1c6","r2c7","r2c8","r2c9"]
cage-3: cage r1c7-r1c8-r1c9 connected true
vault-4: vault r2c1-r2c2 sum 5 neighbours ["r1c1","r1c2","r2c3","r3c1","r3c2"]
cage-4: cage r2c1-r2c2 connected true
vault-5: vault r2c3-r2c4-r2c5 neighbours ["r1c3","r1c4","r1c5","r2c2","r2c6","r3c3","r3c4","r3c5"]
cage-5: cage r2c3-r2c4-r2c5 connected true
vault-6: vault r2c6-r2c7-r2c8 sum 19 neighbours ["r1c6","r1c7","r1c8","r2c5","r2c9","r3c6","r3c7","r3c8"]
cage-6: cage r2c6-r2c7-r2c8 connected true
vault-7: vault r3c2-r3c3-r3c4 sum 18 neighbours ["r2c2","r2c3","r2c4","r3c1","r3c5","r4c2","r4c3","r4c4"]
cage-7: cage r3c2-r3c3-r3c4 connected true
vault-8: vault r3c8-r3c9 sum 5 neighbours ["r2c8","r2c9","r3c7","r4c8","r4c9"]
cage-8: cage r3c8-r3c9 connected true
vault-9: vault r4c1-r4c2-r4c3 neighbours ["r3c1","r3c2","r3c3","r4c4","r5c1","r5c2","r5c3"]
cage-9: cage r4c1-r4c2-r4c3 connected true
vault-10: vault r4c5-r4c6 neighbours ["r3c5","r3c6","r4c4","r4c7","r5c5","r5c6"]
cage-10: cage r4c5-r4c6 connected true
vault-11: vault r4c7-r4c8-r4c9 sum 23 neighbours ["r3c7","r3c8","r3c9","r4c6","r5c7","r5c8","r5c9"]
cage-11: cage r4c7-r4c8-r4c9 connected true
vault-12: vault r5c1-r5c2 sum 17 neighbours ["r4c1","r4c2","r5c3","r6c1","r6c2"]
cage-12: cage r5c1-r5c2 connected true
vault-13: vault r5c3-r5c4-r5c5 neighbours ["r4c3","r4c4","r4c5","r5c2","r5c6","r6c3","r6c4","r6c5"]
cage-13: cage r5c3-r5c4-r5c5 connected true
vault-14: vault r5c6-r5c7-r5c8 sum 8 neighbours ["r4c6","r4c7","r4c8","r5c5","r5c9","r6c6","r6c7","r6c8"]
cage-14: cage r5c6-r5c7-r5c8 connected true
vault-15: vault r6c2-r6c3-r6c4 neighbours ["r5c2","r5c3","r5c4","r6c1","r6c5","r7c2","r7c3","r7c4"]
cage-15: cage r6c2-r6c3-r6c4 connected true
vault-16: vault r6c5-r6c6-r6c7 neighbours ["r5c5","r5c6","r5c7","r6c4","r6c8","r7c5","r7c6","r7c7"]
cage-16: cage r6c5-r6c6-r6c7 connected true
vault-17: vault r6c8-r6c9 neighbours ["r5c8","r5c9","r6c7","r7c8","r7c9"]
cage-17: cage r6c8-r6c9 connected true
vault-18: vault r7c1-r7c2-r7c3 sum 19 neighbours ["r6c1","r6c2","r6c3","r7c4","r8c1","r8c2","r8c3"]
cage-18: cage r7c1-r7c2-r7c3 connected true
vault-19: vault r7c4-r7c5-r7c6 sum 11 neighbours ["r6c4","r6c5","r6c6","r7c3","r7c7","r8c4","r8c5","r8c6"]
cage-19: cage r7c4-r7c5-r7c6 connected true
vault-20: vault r7c7-r7c8-r7c9 neighbours ["r6c7","r6c8","r6c9","r7c6","r8c7","r8c8","r8c9"]
cage-20: cage r7c7-r7c8-r7c9 connected true
vault-21: vault r8c1-r8c2 sum 9 neighbours ["r7c1","r7c2","r8c3","r9c1","r9c2"]
cage-21: cage r8c1-r8c2 connected true
vault-22: vault r8c3-r8c4-r8c5 sum 17 neighbours ["r7c3","r7c4","r7c5","r8c2","r8c6","r9c3","r9c4","r9c5"]
cage-22: cage r8c3-r8c4-r8c5 connected true
vault-23: vault r8c6-r8c7-r8c8 neighbours ["r7c6","r7c7","r7c8","r8c5","r8c9","r9c6","r9c7","r9c8"]
cage-23: cage r8c6-r8c7-r8c8 connected true
vault-24: vault r9c2-r9c3-r9c4 sum 13 neighbours ["r8c2","r8c3","r8c4","r9c1","r9c5"]
cage-24: cage r9c2-r9c3-r9c4 connected true
vault-25: vault r9c5-r9c6 sum 17 neighbours ["r8c5","r8c6","r9c4","r9c7"]
cage-25: cage r9c5-r9c6 connected true
vault-26: vault r9c8-r9c9 sum 10 neighbours ["r8c8","r8c9","r9c7"]
cage-26: cage r9c8-r9c9 connected true
```

Normal sudoku rules apply.

Cages mark "Vaults". Digits in a vault do NOT repeat. Digits orthogonally adjacent to a vault may NOT be included within that vault.

Digits in a vault sum to the small clue, if given.
