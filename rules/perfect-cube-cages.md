---
name: Perfect Cube Cages
url: https://rules.sudoku-sleuth.com/perfect-cube-cages.md
kind: perfect-cube-cages
alias_of: cage-totals
---

# Perfect Cube Cages

Each cage's effective values sum to a perfect cube.

Perfect Cube Cages reads as [Cage Totals](cage-totals.md) and takes the same `cells` and `totals` parameters. List the perfect cubes the cage can reach in `totals`. Declare digit distinctness separately when required.

## Example

````markdown
---
format: open-rules
title: Perfect Cube Cages example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
perfect-cube-cages cells ["r1c1","r1c2"] totals [8,27]
```
````

Satisfies the rule: r1c1=3, r1c2=5. The cage total is 8, a perfect cube.

Breaks the rule: r1c1=3, r1c2=6. The cage total is 9, which is not a perfect cube.
