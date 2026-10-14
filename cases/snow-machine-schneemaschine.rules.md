---
format: open-rules
title: Snow Machine (Schneemaschine)
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/snow-machine-schneemaschine
library: https://rules.sudoku-sleuth.com/
status: read
exported: 5953d80b8eba36773653d6f002e0e8f2
---

```rules
sudoku 9x9
kropki-1: kropki r6c4-r6c5 white
kropki-2: kropki r4c5-r4c6 white
kropki-3: kropki r1c8-r2c8 white
kropki-4: kropki r1c8-r1c9 white
kropki-5: kropki r1c2-r1c3 white
kropki-6: kropki r1c2-r2c2 white
kropki-7: kropki r3c3-r3c4 white
kropki-8: kropki r3c5-r3c6 white
kropki-9: kropki r4c3-r4c4 white
kropki-10: kropki r4c3-r5c3 white
kropki-11: kropki r5c3-r5c4 white
kropki-12: kropki r6c6-r6c7 white
kropki-13: kropki r5c6-r5c7 white
kropki-14: kropki r7c4-r7c5 white
kropki-15: kropki r6c5-r7c5 white
kropki-16: kropki r7c2-r7c3 white
kropki-17: kropki r8c2-r8c3 white
kropki-18: kropki r7c3-r8c3 white
kropki-19: kropki r8c6-r8c7 white
kropki-20: kropki r7c1-r8c1 white
kropki-21: kropki r8c1-r9c1 white
kropki-22: kropki r9c1-r9c2 white
kropki-23: kropki r9c2-r9c3 white
kropki-24: kropki r7c9-r8c9 white
kropki-25: kropki r7c7-r7c8 white
kropki-26: kropki r6c9-r7c9 white
kropki-27: kropki r5c8-r6c8 white
kropki-28: kropki r4c7-r5c7 white
kropki-29: kropki r3c7-r3c8 white
kropki-30: kropki r2c8-r3c8 white
kropki-31: kropki r2c6-r2c7 white
kropki-32: kropki r1c5-r1c6 white
kropki-33: kropki r2c4-r2c5 white
kropki-34: kropki r3c2-r3c3 white
kropki-35: kropki r5c1-r5c2 white
kropki-36: kropki r6c1-r6c2 white
kropki-37: kropki r5c1-r6c1 white
kropki-38: kropki r4c5-r5c5 white
kropki-39: kropki r8c4-r8c5 white
pair-1: pair r5c4-r6c4 sum 10
pair-2: pair r4c4-r4c5 sum 10
pair-3: pair r4c6-r5c6 sum 10
pair-4: pair r6c5-r6c6 sum 10
pair-5: pair r5c6-r6c6 sum 5
```

Normal Sudoku rules apply. Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. Numbers with a white dot between them are consecutive. Not all X, V and dots are given.
