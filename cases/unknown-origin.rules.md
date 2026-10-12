---
format: open-rules
title: Unknown Origin
setter: Will Power
source: https://f-puzzles.com/?id=yb3vp35x
case: https://sudoku-sleuth.com/cases/unknown-origin
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r7c7-r7c8-r7c9 total 7 connected true
cage-2: cage r7c3-r8c3-r9c3 total 9 connected true
cage-3: cage r3c1-r3c2-r3c3 total 11 connected true
cage-4: cage r1c7-r2c7-r3c7 total 12 connected true
cage-5: cage r4c7-r4c8-r4c9 total 8 connected true
cage-6: cage r7c6-r8c6-r9c6 total 12 connected true
cage-7: cage r1c5-r2c5-r3c5 total 10 connected true
cage-8: cage r4c4-r5c4-r6c4 total 9 connected true
anti-king
arrow-1: arrow r5c7-r4c7-r3c7-r2c7-r1c7-r1c8-r1c9-r2c9-r2c8-r3c8-r3c9-r4c9-r4c8-r5c8-r5c9-r6c9-r6c8-r6c7-r7c7-r7c8-r7c9 bulb ["r5c5","r5c6"]
arrow-2: arrow r6c6-r7c6-r8c6-r8c7-r8c8-r8c9-r9c9-r9c8-r9c7-r9c6-r9c5-r8c5-r7c5-r7c4-r8c4-r9c4-r9c3-r8c3-r7c3 bulb ["r5c5","r5c6"]
arrow-3: arrow r6c5-r6c4-r6c3-r6c2-r7c2-r8c2-r9c2-r9c1-r8c1-r7c1-r6c1-r5c1-r5c2-r5c3-r4c3-r4c2-r4c1-r3c1-r3c2-r3c3 bulb ["r5c5","r5c6"]
arrow-4: arrow r4c6-r4c5-r4c4-r3c4-r3c5-r3c6-r2c6-r1c6-r1c5-r1c4-r1c3-r1c2-r1c1-r2c1-r2c2-r2c3-r2c4-r2c5 bulb ["r5c5","r5c6"]
pair-1: pair r5c9-r6c9 relation {"op":"sum","value":10}
pair-2: pair r9c2-r9c3 relation {"op":"sum","value":10}
pair-3: pair r2c1-r2c2 relation {"op":"sum","value":10}
pair-4: pair r2c7-r2c8 relation {"op":"sum","value":10}
pair-5: pair r9c4-r9c5 relation {"op":"sum","value":10}
pair-6: pair r7c9-r8c9 relation {"op":"sum","value":10}
pair-7: pair r4c1-r4c2 relation {"op":"sum","value":10}
pair-8: pair r5c1-r5c2 relation {"op":"sum","value":10}
pair-9: pair r2c4-r2c5 relation {"op":"sum","value":10}
pair-10: pair r4c4-r4c5 relation {"op":"sum","value":10}
```

Normal Sudoku rules apply. Numbers that are a chess King's move away from each other cannot contain the same digit. Numbers on arrows sum to the number in the pill at the origin of the arrows. Numbers on arrows repeat. Numbers in cages sum to the number in the top left corner of the cage.  All cages have something in common that is to be determined by the solver. Numbers with an X between them sum to 10.
