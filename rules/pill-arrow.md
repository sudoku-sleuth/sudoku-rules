---
name: Pill Arrow
url: https://rules.sudoku-sleuth.com/pill-arrow.md
kind: pill-arrow
alias_of: arrow
---

# Pill Arrow

The shaft sums to the number read from a bulb of two or three cells.

Pill Arrow reads as [Arrow](arrow.md) and takes the same `bulb`, `line` and `partial` parameters. List the pill's cells in decimal reading order: left to right for a horizontal pill, top to bottom for a vertical one.

## Example

````markdown
---
format: open-rules
title: Pill Arrow example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
pill-arrow r2c1-r2c2 bulb ["r1c1", "r1c2"]
```
````

Satisfies the rule: r1c1=1, r1c2=2, r2c1=4, r2c2=8. The shaft digits 4 and 8 total the pill number 12.

Breaks the rule: r1c1=1, r1c2=2, r2c1=4, r2c2=9. The shaft digits 4 and 9 total 13, not 12.
