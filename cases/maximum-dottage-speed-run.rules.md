---
format: open-rules
title: Maximum Dottage Speed Run
setter: Will Power
source: https://sudokupad.app/4yrvwf4j6d
case: https://sudoku-sleuth.com/cases/maximum-dottage-speed-run
library: https://rules.sudoku-sleuth.com/
status: read
exported: 6a84ad76d876bbf486f9939d40d87943
---

```rules
sudoku 9x9
kropki-1: kropki r3c1-r3c2 white
kropki-2: kropki r1c1-r2c1 white
kropki-3: kropki r1c2-r1c3 white
kropki-4: kropki r2c3-r3c3 white
kropki-5: kropki r2c7-r2c8 white
kropki-6: kropki r1c8-r2c8 white
kropki-7: kropki r1c9-r2c9 white
kropki-8: kropki r2c9-r3c9 white
kropki-9: kropki r3c7-r3c8 white
kropki-10: kropki r4c5-r4c6 white
kropki-11: kropki r4c5-r5c5 white
kropki-12: kropki r5c5-r6c5 white
kropki-13: kropki r4c4-r5c4 white
kropki-14: kropki r5c6-r6c6 white
kropki-15: kropki r9c2-r9c3 white
kropki-16: kropki r8c2-r8c3 white
kropki-17: kropki r8c3-r9c3 white
kropki-18: kropki r8c7-r9c7 white
kropki-19: kropki r7c7-r7c8 white
kropki-20: kropki r7c8-r7c9 white
kropki-21: kropki r8c8-r8c9 white
kropki-22: kropki r8c9-r9c9 white
kropki-23: kropki r4c6-r5c6 white
kropki-24: kropki r1c1-r1c2 black
kropki-25: kropki r1c7-r1c8 black
kropki-26: kropki r2c8-r2c9 black
kropki-27: kropki r2c7-r3c7 black
kropki-28: kropki r2c2-r2c3 black
kropki-29: kropki r3c2-r3c3 black
kropki-30: kropki r4c4-r4c5 black
kropki-31: kropki r5c5-r5c6 black
kropki-32: kropki r6c4-r6c5 black
kropki-33: kropki r7c1-r8c1 black
kropki-34: kropki r8c1-r9c1 black
kropki-35: kropki r9c1-r9c2 black
kropki-36: kropki r7c7-r8c7 black
kropki-37: kropki r7c9-r8c9 black
kropki-38: kropki r9c7-r9c8 black
extremum r6c7 type "min" exhaustive false
```

Normal Sudoku rules apply. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. All possible dots fully inside odd numbered boxes are given. MIN/MAX- The gray cell, with the arrows pointed inward, is less than all of its orthogonal neighbors. Record your time in the Logic Masters Deutschland website, if you like. Bonus for less than 10 minutes. Double bonus for less than 8 minutes.
