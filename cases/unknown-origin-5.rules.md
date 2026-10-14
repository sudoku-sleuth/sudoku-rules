---
format: open-rules
title: Unknown Origin 5
setter: Will Power
source: https://f-puzzles.com/?id=y76htbpf
case: https://sudoku-sleuth.com/cases/unknown-origin-5
library: https://rules.sudoku-sleuth.com/
status: read
exported: 6a30f377c315949720a98b337acbb46b
---

```rules
sudoku 9x9
cage-1: cage r6c7-r6c8-r6c9 total 12 connected true
cage-2: cage r7c4-r7c5-r8c4-r8c5-r9c4-r9c5 total 30 connected true
cage-3: cage r1c3-r2c3-r3c3-r4c3-r4c4-r4c5-r4c6 total 33 connected true
kropki-1: kropki r2c6-r2c7 white
kropki-2: kropki r1c9-r2c9 white
kropki-3: kropki r4c8-r5c8 white
kropki-4: kropki r4c1-r5c1 white
kropki-5: kropki r3c8-r4c8 white
kropki-6: kropki r5c1-r5c2 black
kropki-7: kropki r4c1-r4c2 black
kropki-8: kropki r6c3-r7c3 black
kropki-9: kropki r1c2-r1c3 black
kropki-10: kropki r2c3-r3c3 black
kropki-11: kropki r7c2-r7c3 black
kropki-12: kropki r1c1-r1c2 black
kropki-13: kropki r1c3-r1c4 black
kropki-14: kropki r2c5-r3c5 black
kropki-15: kropki r7c4-r8c4 black
kropki-16: kropki r5c4-r6c4 black
kropki-17: kropki r5c8-r6c8 black
kropki-18: kropki r9c8-r9c9 black
kropki-19: kropki r7c6-r8c6 black
kropki-20: kropki r8c5-r8c6 black
kropki-21: kropki r8c1-r8c2 black
kropki-22: kropki r4c7-r4c8 black
kropki-23: kropki r9c1-r9c2 black
kropki-24: kropki r6c5-r6c6 black
arrow-1: arrow r6c6-r7c6-r8c6-r9c6-r9c7-r9c8-r9c9-r8c9-r7c9-r6c9-r6c8-r6c7-r7c7-r8c7-r8c8-r7c8 bulb ["r5c5","r5c6"]
arrow-2: arrow r6c5-r7c5-r8c5-r9c5-r9c4-r9c3-r9c2-r9c1-r8c1-r7c1-r7c2-r7c3-r7c4-r8c4-r8c3-r8c2 bulb ["r5c5","r5c6"]
arrow-3: arrow r5c7-r5c8-r5c9-r4c9-r3c9-r2c9-r1c9-r1c8-r1c7-r2c7-r3c7-r4c7-r4c8-r3c8-r2c8 bulb ["r5c5","r5c6"]
arrow-4: arrow r5c4-r5c3-r5c2-r4c2-r3c2-r2c2-r1c2-r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r6c2-r6c3-r6c4 bulb ["r5c5","r5c6"]
arrow-5: arrow r4c6-r3c6-r2c6-r1c6-r1c5-r1c4-r1c3-r2c3-r3c3-r4c3-r4c4-r4c5-r3c5-r2c5-r2c4-r3c4 bulb ["r5c5","r5c6"]
negative relations [{"op":"ratio","value":2}] except [["r2c6","r2c7"],["r1c9","r2c9"],["r4c8","r5c8"],["r4c1","r5c1"],["r3c8","r4c8"],["r5c1","r5c2"],["r4c1","r4c2"],["r6c3","r7c3"],["r1c2","r1c3"],["r2c3","r3c3"],["r7c2","r7c3"],["r1c1","r1c2"],["r1c3","r1c4"],["r2c5","r3c5"],["r7c4","r8c4"],["r5c4","r6c4"],["r5c8","r6c8"],["r9c8","r9c9"],["r7c6","r8c6"],["r8c5","r8c6"],["r8c1","r8c2"],["r4c7","r4c8"],["r9c1","r9c2"],["r6c5","r6c6"]]
```

Normal Sudoku rules apply. Numbers on arrows sum to the number in the pill attached to the arrows. Numbers in cages sum to the number in the top left corner of the cage. Numbers cannot repeat in cages. Numbers with a black dot between them are in a ratio of 2:1. ALL possible BLACK dots are given. Numbers with a white dot between them are consecutive. NOT all possible white dots are given.
