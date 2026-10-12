---
name: Absent digits
url: https://rules.sudoku-sleuth.com/absent-digits.md
kind: absent-digits
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2.
    default: Required.
    type: set<cell>
  digits:
    description: The digits that must be absent, for example [2,4].
    default: Required.
    type: list<digit>
---

# Absent digits

None of the listed digits appears in the marked cells.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| cells | The marked cells, for example r1c1-r1c2. | Required. |
| digits | The digits that must be absent, for example [2,4]. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
excludes(cells,digits)
```

None of the listed face digits appears in the marked cells.
This general authoring-library rule represents absence directly, independently of clue type or shading.

## Example

````markdown
---
format: open-rules
title: Absent digits example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
board:
  rows: 1
  cols: 2
  symbols:
    - 1
    - 2
    - 3
    - 4
---

```rules
absent-digits r1c1-r1c2 digits [2,4]
```
````

Satisfies the rule: r1c1=1, r1c2=3. Neither 2 nor 4 appears.

Breaks the rule: r1c1=2, r1c2=3. The forbidden digit 2 appears.
