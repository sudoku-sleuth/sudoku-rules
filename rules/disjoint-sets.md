---
name: Disjoint Sets
url: https://rules.sudoku-sleuth.com/disjoint-sets.md
kind: disjoint-sets
alias_of: regions
---

# Disjoint Sets

Cells in the same position of every box contain different digits. Declare one group for each position, listing that cell from all nine boxes.

Disjoint Sets uses the parameters and meaning of [Regions](regions.md).

## Example

````markdown
---
format: open-rules
title: Disjoint Sets example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
disjoint-sets r1c1-r1c4-r1c7-r4c1-r4c4-r4c7-r7c1-r7c4-r7c7
disjoint-sets r1c2-r1c5-r1c8-r4c2-r4c5-r4c8-r7c2-r7c5-r7c8
```
````

Satisfies the rule: r1c1=1, r1c4=2, r1c7=3, r4c1=4, r4c4=5, r4c7=6, r7c1=7, r7c4=8, r7c7=9. The top-left cell of each box holds the digits 1 to 9 once.

Breaks the rule: r1c1=1, r1c4=2, r1c7=3, r4c1=4, r4c4=5, r4c7=6, r7c1=7, r7c4=8, r7c7=1. The top-left cells of the first and last boxes in the group both hold 1.
