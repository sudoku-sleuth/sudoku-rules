```rules
sudoku-1: sudoku 9x9
anti-knight-1: anti-knight
pair-1: pair r1c2-r1c3 sum 5
pair-2: pair r2c1-r3c1 sum 5
pair-3: pair r2c4-r3c4 sum 5
pair-4: pair r2c9-r3c9 sum 5
pair-5: pair r4c8-r5c8 sum 5
pair-6: pair r8c7-r9c7 sum 5
pair-7: pair r8c5-r8c6 sum 5
pair-8: pair r7c5-r8c5 sum 10
pair-9: pair r8c8-r9c8 sum 10
pair-10: pair r1c7-r1c8 sum 10
pair-11: pair r3c3-r3c4 sum 10
pair-12: pair r3c4-r4c4 sum 10
pair-13: pair r5c1-r5c2 sum 10
pair-14: pair r5c5-r5c6 sum 5
pair-15: pair r2c6-r3c6 sum 5
arrow-1: arrow r8c1-r7c1 bulb ["r9c1"]
arrow-2: arrow r8c2-r9c3 bulb ["r9c1"]
negative-1: negative relations [{"op":"sum","value":5}] except [["r1c2","r1c3"],["r2c1","r3c1"],["r2c4","r3c4"],["r2c9","r3c9"],["r4c8","r5c8"],["r8c7","r9c7"],["r8c5","r8c6"],["r5c5","r5c6"],["r2c6","r3c6"]]
negative-2: negative relations [{"op":"sum","value":10}] except [["r7c5","r8c5"],["r8c8","r9c8"],["r1c7","r1c8"],["r3c3","r3c4"],["r3c4","r4c4"],["r5c1","r5c2"]]
```
