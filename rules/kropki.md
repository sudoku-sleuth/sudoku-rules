---
name: Kropki
url: https://rules.sudoku-sleuth.com/kropki.md
kind: kropki
parameters:
  colour:
    description: "The relationship: white means difference 1; black means ratio 2."
    default: Required.
    type: enum{white,black}
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: list<cell>
---

# Kropki

A white relation joins values one apart. A black relation joins values where one is twice the other.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| colour | The relationship: white means difference 1; black means ratio 2. | Required. |
| cells | The marked cells, for example r1c1-r1c2-r2c2. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
|cells|=2 ∧ let a=V(cells[0]); let b=V(cells[1]);
  (colour="white" → |a-b|=1) ∧ (colour="black" → 2*a=b ∨ 2*b=a)
```

A white dot joins values differing by 1; a black dot joins values where one is double the other. The colour parameter names the relationship.

## Example

````markdown
---
format: open-rules
title: Kropki example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki r1c1-r1c2 colour "black"
```
````

Satisfies the rule: r1c1=2, r1c2=4. The black dot joins 2 and 4: 4 is double 2.

Breaks the rule: r1c1=2, r1c2=5. The black dot joins 2 and 5: neither is double the other.
