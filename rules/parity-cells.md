---
name: Parity Cells
url: https://rules.sudoku-sleuth.com/parity-cells.md
kind: parity-cells
alias_of: odd-even-cells
---

# Parity Cells

Parity Cells uses the parameters and meaning of [Odd Even Cells](odd-even-cells.md).

## Example

````markdown
---
format: open-rules
title: Odd Even Cells example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
parity-cells r1c1-r1c2 parity "odd"
```
````

Satisfies the rule: r1c1=1, r1c2=3. Both marked digits are odd.

Breaks the rule: r1c1=1, r1c2=2. A marked cell contains the even digit 2.
