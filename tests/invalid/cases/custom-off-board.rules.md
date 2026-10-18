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
weighted-1: #weighted-triple r1c1-r1c2-r10c3
```

## Definitions

### Weighted triple

```custom-rules
- url: "#weighted-triple"
  name: Weighted triple
  parameters:
    cells:
      type: path<cell>
      description: Three cells in order from the marked start.
      default: Required.
  definition: The third face digit equals the first plus twice the second.
  maths: "|cells| = 3 ∧ D(cells[2]) = D(cells[0]) + 2 × D(cells[1])"
  example: "Satisfies: 1,2,5 because 5=1+2×2. Breaks: 1,2,6 because 6≠1+2×2."
```
