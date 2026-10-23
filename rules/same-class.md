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
alias_of: class-pattern
alias_bind:
  line: orderedCells(cells)
  edges: absent(⟨⟨c:c∈orderedCells(C),false⟩:i∈[0,0)⟩)
  loop: "false"
  classification: if classes="entropy" then "entropy" else "residue"
  modulus: if classes="parity" then 2 else 3
  length: "3"
  geometry: '"cells"'
  mode: '"same"'
  fixedClass: absent(|{}|)
  channel: '"D"'
layer: rule
---


# Same Class

All marked digits belong to the same stated class: parity, remainder or alphabet third.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| classes | `ClassSystem` | The digit classes to use: parity, remainder or alphabet thirds. | Required. |
| cells | `set<cell>` | The marked cells, for example r1c1-r1c2-r2c2. | Required. |

## Definition

Defined by [class-pattern](class-pattern.md) with the settings in `alias_bind`.



The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

This is a bound shorthand for [class-pattern](class-pattern.md).

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
