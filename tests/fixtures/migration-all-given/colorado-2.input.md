```rules
sudoku 9x9
pair-1: pair r1c2-r1c3 sum 5
pair-2: pair r1c7-r1c8 sum 5
pair-3: pair r1c1-r1c2 sum 10
pair-4: pair r2c1-r2c2 sum 5
pair-5: pair r2c2-r2c3 sum 10
pair-6: pair r2c4-r2c5 sum 5
pair-7: pair r3c5-r3c6 sum 5
pair-8: pair r3c6-r3c7 sum 10
pair-9: pair r3c8-r3c9 sum 5
pair-10: pair r4c4-r4c5 sum 5
pair-11: pair r5c6-r5c7 sum 5
pair-12: pair r6c6-r6c7 sum 10
pair-13: pair r7c1-r7c2 sum 10
pair-14: pair r7c6-r7c7 sum 10
pair-15: pair r8c5-r8c6 sum 10
pair-16: pair r9c7-r9c8 sum 10
pair-17: pair r2c1-r3c1 sum 10
pair-18: pair r4c1-r5c1 sum 10
pair-19: pair r6c1-r7c1 sum 10
pair-20: pair r3c5-r4c5 sum 5
pair-21: pair r4c6-r5c6 sum 5
pair-22: pair r4c8-r5c8 sum 10
pair-23: pair r3c9-r4c9 sum 5
pair-24: pair r8c9-r9c9 sum 5
negative-5: negative relations [{"op": "sum", "value": 5}] except [["r1c2", "r1c3"], ["r1c7", "r1c8"], ["r2c1", "r2c2"], ["r2c4", "r2c5"], ["r3c5", "r3c6"], ["r3c8", "r3c9"], ["r4c4", "r4c5"], ["r5c6", "r5c7"], ["r3c5", "r4c5"], ["r4c6", "r5c6"], ["r3c9", "r4c9"], ["r8c9", "r9c9"]]
negative-10: negative relations [{"op": "sum", "value": 10}] except [["r1c1", "r1c2"], ["r2c2", "r2c3"], ["r3c6", "r3c7"], ["r6c6", "r6c7"], ["r7c1", "r7c2"], ["r7c6", "r7c7"], ["r8c5", "r8c6"], ["r9c7", "r9c8"], ["r2c1", "r3c1"], ["r4c1", "r5c1"], ["r6c1", "r7c1"], ["r4c8", "r5c8"]]
anti-knight
little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 55
```
