---
format: open-rules
title: All killers are created equal
setter: sujoyku
source: https://sudokupad.app/xjn2zuwqms
case: https://sudoku-sleuth.com/cases/all-killers-are-created-equal
library: https://rules.sudoku-sleuth.com/
status: read
exported: 6f50dbf6e2d0011d4f72026efb5dae60
---

```rules
sudoku 9x9
cage-1: cage r9c1-r9c2-r9c3 connected true
cage-2: cage r9c4-r9c5-r9c6-r9c7 connected true
cage-3: cage r6c9-r7c9-r8c9-r9c8-r9c9 connected true
cage-4: cage r2c9-r3c9-r4c9-r5c9 connected true
cage-5: cage r1c7-r1c8-r1c9 connected true
cage-6: cage r1c3-r1c4-r1c5-r1c6 connected true
cage-7: cage r1c1-r1c2-r2c1-r3c1-r4c1 connected true
cage-8: cage r5c1-r6c1-r7c1-r8c1 connected true
cage-9: cage r6c2-r7c2-r8c2-r8c3 connected true
cage-10: cage r2c2-r2c3-r3c3-r4c3 connected true
cage-11: cage r3c2-r4c2-r5c2 connected true
cage-12: cage r5c3-r6c3-r7c3 connected true
cage-13: cage r6c4-r7c4-r7c5-r8c5 connected true
cage-14: cage r5c5-r6c5-r6c6-r6c7 connected true
cage-15: cage r2c4-r3c4-r3c5-r4c4 connected true
cage-16: cage r3c6-r3c7-r4c7-r5c6-r5c7 connected true
cage-17: cage r2c8-r3c8-r4c8-r5c8 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
kropki r6c6-r7c6 black
pair-1: pair r4c1-r5c1 sum 10
pair-2: pair r6c2-r6c3 sum 10
pair-3: pair r3c6-r4c6 sum 10
pair-4: pair r3c7-r3c8 sum 10
pair-5: pair r8c4-r8c5 sum 10
```

Normal sudoku rules apply. In a killer box digits do not repeat. EACH killer box in the grid sums to the same total which has to be determined by the solver. On the marked diagonals digits do not repeat. Digits joined by an X sum to 10. (Not all X are given.) Digits joined by a black dot have a 1:2 ratio. (Not all black dots are given.)
