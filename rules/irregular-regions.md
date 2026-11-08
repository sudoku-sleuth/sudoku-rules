---
name: Irregular Regions
url: https://rules.sudoku-sleuth.com/irregular-regions.md
kind: irregular-regions
alias_of: regions
---

# Irregular Regions

The boxes are replaced by irregularly shaped regions. Declare each region as a group of cells whose digits are all different.

Irregular Regions uses the parameters and meaning of [Regions](regions.md).

## Example

````markdown
---
format: open-rules
title: Irregular Regions example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
irregular-regions r1c1-r1c2-r1c3-r2c1-r2c2-r2c3-r3c1-r3c2-r4c1
```
````

Satisfies the rule: r1c1=1, r1c2=2, r1c3=3, r2c1=4, r2c2=5, r2c3=6, r3c1=7, r3c2=8, r4c1=9. The nine cells of the region hold the digits 1 to 9 once.

Breaks the rule: r1c1=1, r1c2=2, r1c3=3, r2c1=4, r2c2=5, r2c3=6, r3c1=7, r3c2=8, r4c1=1. The first and last cells of the region both hold 1.
