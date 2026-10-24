---
name: Between
url: https://rules.sudoku-sleuth.com/between.md
kind: between
alias_of: between-line
---

# Between

Between uses the parameters and meaning of [Between Line](between-line.md).

## Example

````markdown
---
format: open-rules
title: Between Line example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
between r1c2 ends ["r1c1","r1c3"]
```
````

Satisfies the rule: r1c2=2, r1c1=1, r1c3=3. 2 lies strictly between end digits 1 and 3.

Breaks the rule: r1c2=4, r1c1=1, r1c3=3. 4 is outside the interval between 1 and 3.
