---
format: open-rules
title: Whirligig
setter: Timotab
source: https://sudokupad.app/timotab/whirligig
case: https://sudoku-sleuth.com/cases/whirligig
library: https://rules.sudoku-sleuth.com/
status: read
exported: 06248072940d079697c2a94fc898c722
---

```rules
sudoku 9x9
kropki-1: kropki r3c2-r3c3 black
kropki-2: kropki r7c7-r7c8 black
kropki-3: kropki r6c5-r6c6 black
kropki-4: kropki r4c4-r4c5 black
kropki-5: kropki r5c8-r5c9 black
kropki-6: kropki r8c3-r9c3 white
kropki-7: kropki r1c7-r2c7 white
kropki-8: kropki r7c7-r8c7 white
kropki-9: kropki r3c2-r4c2 white
kropki-10: kropki r3c5-r4c5 white
kropki-11: kropki r5c3-r5c4 white
kropki-12: kropki r7c4-r8c4 white
region-sum-1: region-sum r1c3-r1c4-r1c5-r1c6-r2c7 segments [["r1c3"],["r1c4","r1c5","r1c6"],["r2c7"]]
region-sum-2: region-sum r3c9-r4c9-r5c9-r6c9-r7c8 segments [["r3c9"],["r4c9","r5c9","r6c9"],["r7c8"]]
region-sum-3: region-sum r9c7-r9c6-r9c5-r9c4-r8c3 segments [["r9c7"],["r9c6","r9c5","r9c4"],["r8c3"]]
region-sum-4: region-sum r7c1-r6c1-r5c1-r4c1-r3c2 segments [["r7c1"],["r6c1","r5c1","r4c1"],["r3c2"]]
region-sum-5: region-sum r3c3-r4c4 segments [["r3c3"],["r4c4"]]
region-sum-6: region-sum r3c7-r4c6 segments [["r3c7"],["r4c6"]]
region-sum-7: region-sum r6c6-r7c7 segments [["r6c6"],["r7c7"]]
region-sum-8: region-sum r6c4-r7c3 segments [["r6c4"],["r7c3"]]
```

• Normal Sudoku rules apply
• Box borders divide blue lines into segments with the same sum. Different lines can have different sums.
• Where digits are separated by a white dot, they are consecutive. Where digits are separated by a black dot, one is double the other. Not all dots are necessarily given.
