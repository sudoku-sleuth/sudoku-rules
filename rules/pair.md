---
name: Pair
url: https://rules.sudoku-sleuth.com/pair.md
kind: pair
parameters:
  relation:
    description: 'The relationship to enforce: its operation and any required value, for example {"op":"difference","value":1}.'
    default: Required.
    type: PairRelation
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: list<cell>
---

# Pair

The two values obey the stated relationship: a difference, ratio, total, multiple, inequality or shift.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| relation | The relationship to enforce: its operation and any required value, for example {"op":"difference","value":1}. | Required. |
| cells | The marked cells, for example r1c1-r1c2-r2c2. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
|cells|=2 ∧ pairRelation(relation,V(cells[0]),V(cells[1]))
```

The two cell values obey the supplied relation. The shared predicates define each relation: difference, ratio, sum, inequality, multiple or shift.

The shift relation is defined for integer values.

## Example

````markdown
---
format: open-rules
title: Pair example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
pair r1c1-r1c2 relation {"op":"sum","value":10}
```
````

Satisfies the rule: r1c1=3, r1c2=7. 3 and 7 add up to the stated total 10.

Breaks the rule: r1c1=3, r1c2=8. 3 and 8 add up to 11 instead of 10.
