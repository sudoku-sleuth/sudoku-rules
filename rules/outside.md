---
name: Outside
url: https://rules.sudoku-sleuth.com/outside.md
kind: outside
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: list<cell>
  digits:
    description: The allowed or required digits, listed explicitly; repeats in the list count where the rule says so.
    default: Required.
    type: list<digit>
---

# Outside

The listed cells contain every stated digit, including its stated number of copies.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| cells | The marked cells, for example r1c1-r1c2-r2c2. | Required. |
| digits | The allowed or required digits, listed explicitly; repeats in the list count where the rule says so. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∀d∈digits: countWhere(cells,λc:cell: D(c)=d)>=multiplicity(digits,d)
```

For each listed digit d, occurrences in cells are at least its multiplicity in digits. Unlisted digits and additional copies are allowed.

## Example

````markdown
---
format: open-rules
title: Outside example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
outside r1c1-r1c2-r1c3 digits [1,2]
```
````

Satisfies the rule: r1c1=1, r1c2=2, r1c3=3. The listed digits occur in the indicated cells.

Breaks the rule: r1c1=1, r1c2=3, r1c3=4. A required digit is absent.
