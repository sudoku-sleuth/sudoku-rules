---
format: open-rules
title: Supernova
setter: Jobo
source: https://sudokupad.app/uw9jp9qwey
case: https://sudoku-sleuth.com/cases/supernova-2
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c2=4 r3c3=9 r3c4=8 r4c6=5 r4c7=9 r4c8=4 r7c4=3 r7c5=8 r7c6=6
exported: 84bd3d1ead78896364581fe1e6a209ea
---

```rules
sudoku 9x9
arrow-1: arrow r2c2-r1c1 bulb ["r3c3"]
arrow-2: arrow r2c4-r1c5 bulb ["r3c3"]
arrow-3: arrow r4c2-r5c1 bulb ["r3c3"]
arrow-4: arrow r4c4-r5c5 bulb ["r3c3"]
arrow-5: arrow r3c6-r2c5 bulb ["r4c7"]
arrow-6: arrow r5c6-r6c5 bulb ["r4c7"]
arrow-7: arrow r3c8-r2c9 bulb ["r4c7"]
arrow-8: arrow r5c8-r6c9 bulb ["r4c7"]
arrow-9: arrow r6c4-r5c3 bulb ["r7c5"]
arrow-10: arrow r6c6-r5c7 bulb ["r7c5"]
arrow-11: arrow r8c6-r9c7 bulb ["r7c5"]
arrow-12: arrow r8c4-r9c3 bulb ["r7c5"]
negative relations [{"op":"ratio","value":2}] except []
```

Normal sudoku rules apply.

Digits along an arrow must sum to the digit in that arrow's circle.

Any two orthogonally adjacent cells cannot contain digits in a 1:2 ratio.
