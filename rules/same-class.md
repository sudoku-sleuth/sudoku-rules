---
name: Same Class
url: https://rules.sudoku-sleuth.com/same-class.md
kind: same-class
parameters:
  classes:
    description: "The digit classes to use: parity, remainder or alphabet thirds."
    default: Required.
    type: ClassSystem
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: set<cell>
---

# Same Class

All marked digits belong to the same stated class: parity, remainder or alphabet third.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| classes | The digit classes to use: parity, remainder or alphabet thirds. | Required. |
| cells | The marked cells, for example r1c1-r1c2-r2c2. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
(classes!="entropy" ∨ (|𝔄|>0 ∧ |𝔄| mod 3=0)) ∧ ∃k∈classIds(classes): ∀c∈cells: digitClass(classes,D(c))=k
```

Every digit in cells belongs to one common class named by classes.

## Example

````markdown
---
format: open-rules
title: Same Class example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
same-class r1c1-r1c2 classes "parity"
```
````

Satisfies the rule: r1c1=1, r1c2=3. Both marked digits have odd parity.

Breaks the rule: r1c1=1, r1c2=2. The marked digits have different parity.
