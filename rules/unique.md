---
name: Unique
url: https://rules.sudoku-sleuth.com/unique.md
kind: unique
alias_of: regions
---

# Unique

Unique uses the parameters and meaning of [Regions](regions.md).

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
unique r1c1-r1c2
```
````

Satisfies the rule: r1c1=1, r1c2=2. The marked digits are different.

Breaks the rule: r1c1=1, r1c2=1. The marked digits repeat.
