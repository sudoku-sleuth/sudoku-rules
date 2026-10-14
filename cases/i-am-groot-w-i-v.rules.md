---
format: open-rules
title: I Am Groot -- W/I/V
setter: Blobz
source: https://link.sudokupad.app/i-am-groot-wiv-blobz
case: https://sudoku-sleuth.com/cases/i-am-groot-w-i-v
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r8c8=1 r9c1=8
exported: af707779d787b6d2271b41ed0b9edf60
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 11 connected true
cage-2: cage r1c8-r1c9-r2c9 connected true
cage-3: cage r2c6-r3c6 total 11 connected true
cage-4: cage r4c5-r4c6-r5c6 connected true
cage-5: cage r5c4-r5c5-r6c4 connected true
cage-6: cage r4c1-r5c1-r5c2 connected true
cage-7: cage r4c9-r5c8-r5c9 connected true
cage-8: cage r7c9-r8c9 total 11 connected true
cage-9: cage r8c8-r9c8-r9c9 connected true
cage-10: cage r8c1-r9c1-r9c2 connected true
cage-11: cage r6c1-r7c1 total 9 connected true
cage-12: cage r7c2-r8c2 total 9 connected true
cage-13: cage r7c5-r8c5-r9c5 connected true
parity-cells r5c4-r5c6 parity "odd"
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[6.5,5.5]],"color":"#0002","thickness":13.44,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[2.5,1.5],[5.5,1.5],[8.5,4.5],[5.5,7.5],[2.5,7.5],[1.5,6.5],[2.5,5.5],[1.5,4.5],[2.5,3.5],[1.5,2.5]],"color":"#0002","thickness":13.44,"rounded":true}}
```

Normal sudoku rules apply.

Digits in cages sum to the small clue, if given.

Digits in cages are either "water" (7,8,9), "ice" (4,5,6), or "vapor" (1,2,3). Cages may be a single type or a mix of types. Any row within a cage must be a single type and types must be ordered based on their density. Water is heaviest and must be below ice and vapor; ice is heavier than vapor.

Grey lines are "entropic": every set of three adjacent digits along the line must include one water, one ice, and one vapor.

Grey circles contain odd digits.
