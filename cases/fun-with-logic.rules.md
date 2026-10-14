---
format: open-rules
title: Fun With Logic
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/fun-with-logic
library: https://rules.sudoku-sleuth.com/
status: read
exported: b5e98a7a54cb4db612faca139fc1f1ff
---

```rules
sudoku 9x9
kropki-1: kropki r3c3-r3c4 white
kropki-2: kropki r3c4-r3c5 white
kropki-3: kropki r4c6-r4c7 white
kropki-4: kropki r4c7-r4c8 white
kropki-5: kropki r7c5-r7c6 white
kropki-6: kropki r7c6-r7c7 white
kropki-7: kropki r6c2-r6c3 white
kropki-8: kropki r6c3-r6c4 white
kropki-9: kropki r2c6-r2c7 white
kropki-10: kropki r2c4-r3c4 black
kropki-11: kropki r3c4-r4c4 black
kropki-12: kropki r3c7-r4c7 black
kropki-13: kropki r4c7-r5c7 black
kropki-14: kropki r7c6-r8c6 black
kropki-15: kropki r6c6-r7c6 black
kropki-16: kropki r5c3-r6c3 black
kropki-17: kropki r6c3-r7c3 black
kropki-18: kropki r8c1-r9c1 black
kropki-19: kropki r8c2-r9c2 black
kropki-20: kropki r2c9-r3c9 black
extremum r4c8-r7c3-r7c7-r4c4 type "max" exhaustive false
```

Normal Sudoku rules apply. Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. MAXIMUMS- Numbers in shaded cells are greater than all 4 orthogonally adjacent cells (cells that share an edge).
