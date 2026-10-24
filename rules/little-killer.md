---
name: Little Killer
url: https://rules.sudoku-sleuth.com/little-killer.md
kind: little-killer
alias_of: diagonal-sum
---

# Little Killer

Little Killer uses the parameters and meaning of [Diagonal Sum](diagonal-sum.md).

## Example

````markdown
---
format: open-rules
title: Diagonal Sum example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
little-killer r1c1-r1c2 sum 3
```
````

Satisfies the rule: r1c1=1, r1c2=2. The ray digits 1 and 2 total 3.

Breaks the rule: r1c1=1, r1c2=3. The ray digits 1 and 3 total 4 instead of 3.
