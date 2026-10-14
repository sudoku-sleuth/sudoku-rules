---
format: open-rules
title: In Vino Veritas
setter: Blobz
source: https://sudokupad.app/9bgx59s970
case: https://sudoku-sleuth.com/cases/in-vino-veritas
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r5c9=1 r6c9=9 r7c9=7 r8c9=3
exported: 65ebb17e67aea7992dbbd1e737c077df
---

```rules
sudoku 9x9
cage-1: cage r2c1-r3c1 total 11 connected true
cage-2: cage r4c2-r4c3 total 14 connected true
cage-3: cage r1c5-r1c6 total 9 connected true
cage-4: cage r5c1-r5c2 total 10 connected true
cage-5: cage r5c9-r6c9-r7c9-r8c9 connected true
parity-cells r9c2-r8c2-r8c3-r7c3-r7c1-r8c4-r8c5-r7c5-r6c2-r6c4-r6c6-r5c3-r5c5-r4c4-r4c5-r3c5-r3c6 parity "odd"
```

```drawing
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,7.5],[1.5,8.5],[0.5,7.5],[0.5,6.5],[1.5,5.5],[2.5,5.5],[3.5,4.5],[4.5,4.5],[3.5,3.5],[2.5,4.5],[1.5,4.5],[0.5,3.5],[1.5,2.5],[1.5,1.5],[2.5,1.5],[2.5,2.5]],"color":"#67f067c4","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply.

Along the green vine, adjacent digits differ by 5 or more.

Purple grapes (circles) denote odd digits.

Digits in cages sum to the given total.
