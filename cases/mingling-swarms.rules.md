---
format: open-rules
title: Mingling Swarms
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/mingling-swarms
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c4-r2c1-r2c2-r2c4-r3c2-r3c3-r3c4-r3c5-r4c3-r4c4-r4c5-r4c6-r5c3-r5c6-r5c7-r5c8-r6c2-r6c3-r6c8-r6c9-r7c1-r7c2-r7c7-r7c8-r8c1-r8c5-r8c6-r8c7-r9c1-r9c5-r9c6 total 79 repeats true connected true
cage-2: cage r7c9-r8c8-r8c9-r9c8 total 30 repeats true connected true
cage-3: cage r1c6-r2c5-r2c6-r2c7-r3c6-r3c7-r3c8-r3c9-r4c7-r4c8-r4c9 total 83 repeats true connected true
cage-4: cage r1c7-r1c8-r1c9-r2c9 total 10 repeats true connected true
cage-5: cage r5c4-r5c5-r6c4-r6c5-r7c4-r7c5-r7c6 total 52 repeats true connected true
cage-6: cage r4c1-r5c1-r5c2-r6c1 total 30 repeats true connected true
cage-7: cage r1c1-r1c2-r1c3-r2c3 total 30 repeats true connected true
cage-8: cage r8c2-r8c3-r9c3-r9c4 total 32 repeats true connected true
pair-1: pair r6c1-r6c2 relation {"op":"sum","value":10}
pair-2: pair r3c6-r4c6 relation {"op":"sum","value":10}
pair-3: pair r7c2-r8c2 relation {"op":"sum","value":10}
pair-4: pair r7c1-r8c1 relation {"op":"sum","value":5}
pair-5: pair r5c3-r6c3 relation {"op":"sum","value":5}
pair-6: pair r3c3-r4c3 relation {"op":"sum","value":5}
pair-7: pair r3c3-r3c4 relation {"op":"sum","value":5}
pair-8: pair r2c4-r3c4 relation {"op":"sum","value":5}
pair-9: pair r4c6-r5c6 relation {"op":"sum","value":5}
pair-10: pair r5c6-r5c7 relation {"op":"sum","value":5}
pair-11: pair r6c8-r7c8 relation {"op":"sum","value":5}
pair-12: pair r8c5-r9c5 relation {"op":"sum","value":5}
pair-13: pair r8c6-r9c6 relation {"op":"sum","value":5}
pair-14: pair r8c6-r8c7 relation {"op":"sum","value":5}
pair-15: pair r7c7-r8c7 relation {"op":"sum","value":5}
pair-16: pair r3c5-r4c5 relation {"op":"sum","value":5}
pair-17: pair r4c4-r4c5 relation {"op":"sum","value":5}
negative relations [{"op":"sum","value":10},{"op":"sum","value":5}] except [["r6c1","r6c2"],["r3c6","r4c6"],["r7c1","r8c1"],["r5c3","r6c3"],["r3c3","r4c3"],["r3c3","r3c4"],["r2c4","r3c4"],["r4c6","r5c6"],["r5c6","r5c7"],["r6c8","r7c8"],["r8c5","r9c5"],["r8c6","r9c6"],["r8c6","r8c7"],["r7c7","r8c7"],["r3c5","r4c5"],["r4c4","r4c5"],["r7c2","r8c2"]]
```

Normal Sudoku rules apply. Numbers in cages sum to the number in the top left corner of the cage. Numbers may repeat in cages. Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. ALL POSSIBLE X AND V ARE GIVEN.
