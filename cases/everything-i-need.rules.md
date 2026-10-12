---
format: open-rules
title: Everything I Need
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/everything-i-need
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
pair-1: pair r1c1-r1c2 relation {"op":"sum","value":10}
pair-2: pair r1c6-r1c7 relation {"op":"sum","value":10}
pair-3: pair r3c3-r3c4 relation {"op":"sum","value":10}
pair-4: pair r3c5-r3c6 relation {"op":"sum","value":10}
pair-5: pair r5c3-r5c4 relation {"op":"sum","value":10}
pair-6: pair r5c7-r5c8 relation {"op":"sum","value":10}
pair-7: pair r7c2-r7c3 relation {"op":"sum","value":10}
pair-8: pair r8c6-r8c7 relation {"op":"sum","value":10}
pair-9: pair r8c8-r8c9 relation {"op":"sum","value":10}
pair-10: pair r9c4-r9c5 relation {"op":"sum","value":10}
pair-11: pair r1c8-r1c9 relation {"op":"sum","value":5}
pair-12: pair r2c4-r2c5 relation {"op":"sum","value":5}
pair-13: pair r3c2-r3c3 relation {"op":"sum","value":5}
pair-14: pair r4c1-r4c2 relation {"op":"sum","value":5}
pair-15: pair r5c5-r5c6 relation {"op":"sum","value":5}
pair-16: pair r7c7-r7c8 relation {"op":"sum","value":5}
negative relations [{"op":"difference","value":1},{"op":"ratio","value":2}] except [["r1c1","r1c2"],["r1c6","r1c7"],["r3c3","r3c4"],["r3c5","r3c6"],["r5c3","r5c4"],["r5c7","r5c8"],["r7c2","r7c3"],["r8c6","r8c7"],["r8c8","r8c9"],["r9c4","r9c5"],["r1c8","r1c9"],["r2c4","r2c5"],["r3c2","r3c3"],["r4c1","r4c2"],["r5c5","r5c6"],["r7c7","r7c8"]]
```

Normal Sudoku Rules apply. KROPKI DOTS- No orthogonal cells can have numbers that are consecutive or in a ratio of 2:1. NO KROPKI DOTS ARE POSSIBLE. XV PAIRS- Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. Not all possible X and V are given.
