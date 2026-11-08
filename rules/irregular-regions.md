---
name: Irregular Regions
url: https://rules.sudoku-sleuth.com/irregular-regions.md
kind: irregular-regions
alias_of: regions
---

# Irregular Regions

The board has irregularly shaped regions in place of boxes. Declare each region as a group of cells whose digits are all different.

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
board:
  rows: 4
  cols: 4
  symbols: [1, 2, 3, 4]
  regions:
    - [r1c1, r1c2, r1c3, r2c1]
    - [r1c4, r2c2, r2c3, r2c4]
    - [r3c1, r3c2, r4c1, r4c2]
    - [r3c3, r3c4, r4c3, r4c4]
status: read
---

```rules
irregular-regions r1c1-r1c2-r1c3-r2c1
irregular-regions r1c4-r2c2-r2c3-r2c4
irregular-regions r3c1-r3c2-r4c1-r4c2
irregular-regions r3c3-r3c4-r4c3-r4c4
```
````

Satisfies the rule: r1c1=1, r1c2=2, r1c3=3, r2c1=4. The four cells of the first region hold 1 to 4 once.

Breaks the rule: r1c1=1, r1c2=2, r1c3=3, r2c1=1. Two cells of the first region both hold 1.
