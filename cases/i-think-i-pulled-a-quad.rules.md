---
format: open-rules
title: I Think I Pulled a Quad
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/i-think-i-pulled-a-quad
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki r8c8-r8c9 colour "white"
pair-1: pair r3c1-r3c2 relation {"op":"sum","value":10}
pair-2: pair r8c1-r8c2 relation {"op":"sum","value":10}
pair-3: pair r2c8-r2c9 relation {"op":"sum","value":10}
pair-4: pair r9c8-r9c9 relation {"op":"sum","value":10}
```

Normal sudoku rules apply.  Pencilmarked cells contain all possible cell values.  Numbers with an X between them sum to 10.  Numbers with a white dot between them are consecutive.  Not all X's and dots are shown.
