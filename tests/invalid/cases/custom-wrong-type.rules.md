---
format: open-rules
title: Example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
weighted_1: #weighted-triple r1c1-r1c2-r1c3
```

## Definitions

### Arbitrary heading

```custom-rules
- id: weighted-triple
  name: Weighted triple
  parameters:
    cells:
      type: path<cell>
      description: Three cells in order from the marked start.
      default: Required.
  definition: The third face digit equals the first plus twice the second.
  maths: "cells + 1 = 3"
  example: "Satisfies: 1,2,5 because 5=1+2×2. Breaks: 1,2,6 because 6≠1+2×2."
```
