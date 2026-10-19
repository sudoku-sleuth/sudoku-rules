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
    D:
      type: path<cell>
      description: Three D in order from the marked start.
      default: Required.
  definition: The third face digit equals the first plus twice the second.
  maths: "|D| = 3 ∧ D(D[2]) = D(D[0]) + 2 × D(D[1])"
  example: "Satisfies: 1,2,5 because 5=1+2×2. Breaks: 1,2,6 because 6≠1+2×2."
```
