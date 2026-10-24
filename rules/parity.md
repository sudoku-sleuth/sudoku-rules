---
name: Parity
url: https://rules.sudoku-sleuth.com/parity.md
kind: parity
alias_of: parity-line
---

# Parity

Parity uses the parameters and meaning of [Parity Line](parity-line.md).

## Example

````markdown
---
format: open-rules
title: Parity Line example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
parity r1c1-r1c2
```
````

Satisfies the rule: r1c1=1, r1c2=2. 1 is odd and 2 is even.

Breaks the rule: r1c1=1, r1c2=3. 1 and 3 are both odd.
