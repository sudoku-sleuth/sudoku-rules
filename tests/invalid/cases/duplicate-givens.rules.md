---
format: open-rules
title: Example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=1
board: {rows: 9, cols: 9, symbols: [1,2,3,4,5,6,7,8,9], givens: [{cell: r2c1, digit: 2}]}
---

```rules
sudoku 9x9
thermo r1c1-r1c2
```
