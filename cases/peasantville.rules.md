---
format: open-rules
title: Peasantville
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/peasantville
library: https://rules.sudoku-sleuth.com/
status: read
exported: 459f0779816764c1d835f6eba3f8526d
---

```rules
sudoku 9x9
anti-knight
anti-king
kropki-1: kropki r4c4-r5c4 white
kropki-2: kropki r5c4-r5c5 white
kropki-3: kropki r5c5-r5c6 white
kropki-4: kropki r4c5-r4c6 white
kropki-5: kropki r6c5-r6c6 white
kropki-6: kropki r4c1-r4c2 white
kropki-7: kropki r4c2-r4c3 white
kropki-8: kropki r3c3-r4c3 white
kropki-9: kropki r3c9-r4c9 white
kropki-10: kropki r4c6-r5c6 black
kropki-11: kropki r5c6-r6c6 black
kropki-12: kropki r5c4-r6c4 black
kropki-13: kropki r4c1-r5c1 black
kropki-14: kropki r2c3-r3c3 black
```

Normal Sudoku rules apply. Numbers of the same value cannot be a chess KING or KNIGHT's move apart. Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all dots are given.
