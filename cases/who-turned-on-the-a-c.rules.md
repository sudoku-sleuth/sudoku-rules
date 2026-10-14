---
format: open-rules
title: Who Turned On The A/C?
setter: Tingo
source: https://tinyurl.com/whoturnedontheacsudoku
case: https://sudoku-sleuth.com/cases/who-turned-on-the-a-c
library: https://rules.sudoku-sleuth.com/
status: read
givens: ......3.............2...4.....1.3.4.3.......2.8.7.9.....6...8.............9......
exported: 3a1ca5cb1c497d044e8540a47317e937
---

```rules
sudoku 9x9
negative relations [{"op":"difference","value":1}] except []
```

Normal Sudoku Rules Apply
Orthogonally adjacent digits cannot be consecutive in value (Anti-consecutive rule)
