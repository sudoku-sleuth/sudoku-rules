---
format: open-rules
title: Explicit liar groups
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
board:
  rows: 2
  cols: 2
  symbols: [1,2]
---

```rules
liar-cells groups [["r1c1","r1c2"]] count 2 values [1,2] distinctDigits false distinctValues false
```
