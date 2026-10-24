---
name: Extra Regions
url: https://rules.sudoku-sleuth.com/extra-regions.md
kind: extra-regions
alias_of: regions
---

# Extra Regions

Extra Regions uses the parameters and meaning of [Regions](regions.md).

## Example

````markdown
---
format: open-rules
title: Regions example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
extra-regions r1c1-r1c2
```
````

Satisfies the rule: r1c1=1, r1c2=2. The marked digits are different.

Breaks the rule: r1c1=1, r1c2=1. The marked digits repeat.
