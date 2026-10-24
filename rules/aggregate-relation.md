---
name: Aggregate Relation
url: https://rules.sudoku-sleuth.com/aggregate-relation.md
kind: aggregate-relation
alias_of: aggregate-equation
---

# Aggregate Relation

Aggregate Relation has moved to [Aggregate Equation](aggregate-equation.md). Migrate existing declarations with the [migration guide](https://rules.sudoku-sleuth.com/migration.md): each operand becomes one weighted term with coefficient and power 1, with sum on each side.

## Example

````markdown
---
format: open-rules
title: Aggregate Equation example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
aggregate-relation left [{"operand":{"cells":["r1c1"],"channel":"D","operation":"sum","repeats":true},"coefficient":2,"power":1}] right [{"operand":{"cells":["r1c2"],"channel":"D","operation":"sum","repeats":true},"coefficient":1,"power":1}]
```
````

Satisfies the rule: Digits 3 and 6 give 2×3=6.

Breaks the rule: Digits 3 and 7 give unequal sides.
