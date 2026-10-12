---
format: open-rules
title: G.A.S.-  Anti-Social Behavior
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/g-a-s-anti-social-behavior
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
pair-1: pair r1c1-r2c1 relation {"op":"sum","value":10}
pair-2: pair r3c1-r3c2 relation {"op":"sum","value":10}
pair-3: pair r1c3-r1c4 relation {"op":"sum","value":10}
pair-4: pair r1c4-r2c4 relation {"op":"sum","value":10}
pair-5: pair r2c7-r2c8 relation {"op":"sum","value":10}
pair-6: pair r2c9-r3c9 relation {"op":"sum","value":10}
pair-7: pair r4c8-r5c8 relation {"op":"sum","value":10}
pair-8: pair r4c4-r5c4 relation {"op":"sum","value":10}
pair-9: pair r5c5-r6c5 relation {"op":"sum","value":10}
pair-10: pair r5c3-r6c3 relation {"op":"sum","value":10}
pair-11: pair r9c2-r9c3 relation {"op":"sum","value":10}
pair-12: pair r7c4-r7c5 relation {"op":"sum","value":10}
pair-13: pair r7c6-r8c6 relation {"op":"sum","value":10}
pair-14: pair r8c7-r9c7 relation {"op":"sum","value":10}
pair-15: pair r3c6-r3c7 relation {"op":"sum","value":10}
pair-16: pair r3c8-r3c9 relation {"op":"sum","value":5}
pair-17: pair r2c4-r2c5 relation {"op":"sum","value":5}
pair-18: pair r1c2-r1c3 relation {"op":"sum","value":5}
pair-19: pair r6c1-r6c2 relation {"op":"sum","value":5}
pair-20: pair r5c5-r5c6 relation {"op":"sum","value":5}
pair-21: pair r4c7-r4c8 relation {"op":"sum","value":5}
pair-22: pair r3c8-r4c8 relation {"op":"sum","value":5}
negative relations [{"op":"difference","value":1},{"op":"ratio","value":2}] except [["r1c1","r2c1"],["r3c1","r3c2"],["r1c3","r1c4"],["r1c4","r2c4"],["r2c7","r2c8"],["r2c9","r3c9"],["r4c8","r5c8"],["r4c4","r5c4"],["r5c5","r6c5"],["r5c3","r6c3"],["r9c2","r9c3"],["r7c4","r7c5"],["r7c6","r8c6"],["r8c7","r9c7"],["r3c6","r3c7"],["r3c8","r3c9"],["r2c4","r2c5"],["r1c2","r1c3"],["r6c1","r6c2"],["r5c5","r5c6"],["r4c7","r4c8"],["r3c8","r4c8"]]
```

Normal Sudoku rules apply. No numbers can be orthogonally adjacent to (horizontally or vertically next to) any other number that is consecutive or in a ratio of 2:1. Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. Not all possible X and V are given.
