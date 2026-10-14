---
format: open-rules
title: 159 Killer
setter: Blobz
source: https://sudokupad.app/9271gm2xbx
case: https://sudoku-sleuth.com/cases/159-killer
library: https://rules.sudoku-sleuth.com/
status: read
exported: 03a335878207bba44cca741b8d850545
---

```rules
sudoku 9x9
cage-1: cage r3c2-r3c3 total 15 connected true
cage-2: cage r2c7-r3c7 total 15 connected true
cage-3: cage r7c7-r7c8 total 15 connected true
cage-4: cage r7c3-r8c3 total 15 connected true
cage-5: cage r4c5-r5c4-r5c5-r5c6-r6c5 total 17 connected true
cage-6: cage r4c9-r5c9 total 6 connected true
cage-7: cage r5c1-r6c1 total 7 connected true
cage-8: cage r1c4-r2c4 total 13 connected true
index r1c1-r1c5-r1c9-r2c1-r2c5-r2c9-r3c1-r3c5-r3c9-r4c1-r4c5-r4c9-r5c1-r5c5-r5c9-r6c1-r6c5-r6c9-r7c1-r7c5-r7c9-r8c1-r8c5-r8c9-r9c1-r9c5-r9c9 axis "column"
```

Normal sudoku rules apply.

159: Digits in column 1 indicate the column in which the digit 1 appears in that row (e.g. if r4c1 is a 6, r4c6 is a 1). The same applies to columns 5 and 9, with the digits 5 and 9 respectively.

Killer: Digits in a cage sum to the small number given.
