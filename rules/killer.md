---
name: Killer Cage
url: https://rules.sudoku-sleuth.com/killer.md
kind: killer
alias_of: cage
---

# Killer Cage

Killer Cage uses the parameters and meaning of [Cage](cage.md).

## Example

````markdown
---
format: open-rules
title: Cage example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
killer r1c1-r1c2 total 3
```
````

Satisfies the rule: r1c1=1, r1c2=2. The different digits 1 and 2 total 3.

Breaks the rule: r1c1=1, r1c2=3. The digits 1 and 3 total 4 instead of 3.
