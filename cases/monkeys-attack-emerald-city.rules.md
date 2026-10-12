---
format: open-rules
title: Monkeys Attack Emerald City
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/monkeys-attack-emerald-city
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r7c5-r7c6-r8c5 total 15 connected true
cage-2: cage r1c9-r2c9 total 15 connected true
cage-3: cage r3c9-r4c9 total 15 connected true
cage-4: cage r1c7-r2c7-r3c7 total 10 connected true
cage-5: cage r3c6-r4c6-r5c6-r6c6 total 25 connected true
cage-6: cage r1c5-r1c6-r2c5-r2c6 total 30 connected true
cage-7: cage r3c5-r4c5-r5c5-r6c5 total 10 connected true
cage-8: cage r3c4-r4c4-r5c4-r6c4 total 20 connected true
cage-9: cage r1c1-r2c1-r3c1-r4c1-r5c1 total 20 connected true
kropki-1: kropki r2c4-r3c4 colour "black"
kropki-2: kropki r3c5-r4c5 colour "black"
kropki-3: kropki r5c4-r5c5 colour "black"
kropki-4: kropki r3c1-r4c1 colour "black"
kropki-5: kropki r5c8-r6c8 colour "black"
kropki-6: kropki r6c2-r7c2 colour "black"
kropki-7: kropki r4c3-r4c4 colour "black"
kropki-8: kropki r8c4-r8c5 colour "black"
kropki-9: kropki r3c8-r4c8 colour "black"
kropki-10: kropki r8c6-r8c7 colour "black"
kropki-11: kropki r8c7-r9c7 colour "black"
kropki-12: kropki r8c2-r8c3 colour "black"
kropki-13: kropki r9c1-r9c2 colour "black"
kropki-14: kropki r7c7-r7c8 colour "black"
pair-1: pair r6c6-r7c6 relation {"op":"sum","value":5}
pair-2: pair r6c5-r6c6 relation {"op":"sum","value":5}
pair-3: pair r5c8-r5c9 relation {"op":"sum","value":5}
pair-4: pair r6c8-r6c9 relation {"op":"sum","value":5}
pair-5: pair r7c6-r7c7 relation {"op":"sum","value":5}
pair-6: pair r9c6-r9c7 relation {"op":"sum","value":5}
pair-7: pair r8c6-r9c6 relation {"op":"sum","value":5}
pair-8: pair r1c7-r1c8 relation {"op":"sum","value":5}
pair-9: pair r3c7-r3c8 relation {"op":"sum","value":5}
pair-10: pair r4c5-r5c5 relation {"op":"sum","value":5}
pair-11: pair r3c4-r3c5 relation {"op":"sum","value":5}
pair-12: pair r1c4-r2c4 relation {"op":"sum","value":5}
pair-13: pair r1c3-r1c4 relation {"op":"sum","value":5}
pair-14: pair r1c3-r2c3 relation {"op":"sum","value":5}
pair-15: pair r2c3-r2c4 relation {"op":"sum","value":5}
pair-16: pair r8c3-r8c4 relation {"op":"sum","value":5}
pair-17: pair r4c2-r4c3 relation {"op":"sum","value":5}
pair-18: pair r4c1-r5c1 relation {"op":"sum","value":5}
pair-19: pair r7c2-r8c2 relation {"op":"sum","value":5}
pair-20: pair r2c1-r2c2 relation {"op":"sum","value":5}
pair-21: pair r6c9-r7c9 relation {"op":"sum","value":5}
negative relations [{"op":"ratio","value":2},{"op":"sum","value":5}] except [["r2c4","r3c4"],["r3c5","r4c5"],["r5c4","r5c5"],["r3c1","r4c1"],["r5c8","r6c8"],["r6c2","r7c2"],["r4c3","r4c4"],["r8c4","r8c5"],["r3c8","r4c8"],["r8c6","r8c7"],["r8c7","r9c7"],["r8c2","r8c3"],["r9c1","r9c2"],["r7c7","r7c8"],["r6c6","r7c6"],["r6c5","r6c6"],["r5c8","r5c9"],["r6c8","r6c9"],["r7c6","r7c7"],["r9c6","r9c7"],["r8c6","r9c6"],["r1c7","r1c8"],["r3c7","r3c8"],["r4c5","r5c5"],["r3c4","r3c5"],["r1c4","r2c4"],["r1c3","r1c4"],["r1c3","r2c3"],["r2c3","r2c4"],["r8c3","r8c4"],["r4c2","r4c3"],["r4c1","r5c1"],["r7c2","r8c2"],["r2c1","r2c2"],["r6c9","r7c9"]]
```

Normal Sudoku rules apply. Numbers in cages sum to the number in the top left corner of the cage. Numbers may not repeat in cages. Numbers with a V between them sum to 5. Numbers with a black dot between them are in a ratio of 2:1. ALL POSSIBLE V AND BLACK DOTS ARE GIVEN.
