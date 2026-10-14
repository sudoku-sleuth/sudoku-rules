---
format: open-rules
title: Swimming with the Jellies
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/swimming-with-the-jellies
library: https://rules.sudoku-sleuth.com/
status: read
exported: b4c6ad5a65537496e4fcf7ed8b6f9f17
---

```rules
sudoku 9x9
pair-1: pair r2c1-r2c2 sum 5
pair-2: pair r1c7-r1c8 sum 5
pair-3: pair r1c5-r2c5 sum 5
pair-4: pair r6c9-r7c9 sum 5
pair-5: pair r6c2-r6c3 sum 5
```

Normal Sudoku rules apply. Pencilmarks already in the grid are the only remaining possibilities for the cell they are in. Numbers with a V between them sum to 5. Not all V are given.
