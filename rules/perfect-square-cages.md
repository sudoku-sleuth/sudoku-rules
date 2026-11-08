---
name: Perfect Square Cages
url: https://rules.sudoku-sleuth.com/perfect-square-cages.md
kind: perfect-square-cages
alias_of: cage-totals
---

# Perfect Square Cages

Each cage's effective values sum to a perfect square.

Perfect Square Cages reads as [Cage Totals](cage-totals.md) and takes the same `cells` and `totals` parameters. List the perfect squares the cage can reach in `totals`. Declare digit distinctness separately when required.

## Example

````markdown
---
format: open-rules
title: Perfect Square Cages example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
perfect-square-cages cells ["r1c1","r1c2"] totals [4,9,16]
```
````

Satisfies the rule: r1c1=4, r1c2=5. The cage total is 9, a perfect square.

Breaks the rule: r1c1=4, r1c2=6. The cage total is 10, which is not a perfect square.
