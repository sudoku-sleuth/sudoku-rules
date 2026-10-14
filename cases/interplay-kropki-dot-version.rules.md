---
format: open-rules
title: Interplay (Kropki Dot Version)
setter: Will Power
source: https://sudokupad.app/z5ib30iso7
case: https://sudoku-sleuth.com/cases/interplay-kropki-dot-version
library: https://rules.sudoku-sleuth.com/
status: read
givens: r7c9=1
exported: faa21c36e86697e6a5add6cb8735dc94
---

```rules
sudoku 9x9
kropki-1: kropki r3c3-r4c4 black
kropki-2: kropki r3c4-r4c3 black
kropki-3: kropki r3c6-r4c7 black
kropki-4: kropki r3c7-r4c6 black
kropki-5: kropki r6c3-r7c4 black
kropki-6: kropki r6c4-r7c3 black
kropki-7: kropki r6c6-r7c7 black
kropki-8: kropki r6c7-r7c6 black
kropki-9: kropki r8c5-r9c5 black
kropki-10: kropki r1c5-r2c5 black
kropki-11: kropki r1c2-r2c2 black
kropki-12: kropki r2c8-r2c9 black
kropki-13: kropki r2c4-r3c5 white
kropki-14: kropki r2c5-r3c4 white
kropki-15: kropki r2c5-r3c6 white
kropki-16: kropki r2c6-r3c5 white
kropki-17: kropki r2c8-r3c9 white
kropki-18: kropki r2c9-r3c8 white
kropki-19: kropki r5c7-r6c8 white
kropki-20: kropki r5c8-r6c7 white
kropki-21: kropki r7c7-r8c8 white
kropki-22: kropki r7c8-r8c7 white
kropki-23: kropki r8c8-r9c9 white
kropki-24: kropki r8c9-r9c8 white
kropki-25: kropki r5c2-r6c3 white
kropki-26: kropki r5c3-r6c2 white
kropki-27: kropki r5c4-r6c5 white
kropki-28: kropki r5c5-r6c4 white
kropki-29: kropki r7c2-r8c2 white
parity-cells r3c3-r4c7-r4c6-r8c8-r7c4 parity "odd"
```

Normal Sudoku rules apply. 

KROPKI PAIRS-  Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Dots on cell corners apply to BOTH DIAGONAL PAIRS around them. Not all possible dots are given.

ODD- Numbers on gray circles are ODD.
