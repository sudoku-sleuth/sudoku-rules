---
name: Lockout
url: https://rules.sudoku-sleuth.com/lockout.md
kind: lockout
parameters:
  ends:
    description: The two end cells, in their stated order.
    default: Required.
    type: list<cell>
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
  gap:
    description: The least difference between the two end digits.
    default: Required.
    type: number
---

# Lockout

The end digits differ by at least the stated gap. Every digit between them is below both ends or above both ends.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| ends | The two end cells, in their stated order. | Required. |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| gap | The least difference between the two end digits. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
|ends|=2 ∧ |D(ends[0])-D(ends[1])|>=gap ∧ ∀c∈line: D(c)<minimumPair(D(ends[0]),D(ends[1])) ∨ D(c)>maximumPair(D(ends[0]),D(ends[1]))
```

The endpoint digits differ by at least gap. Every interior digit is strictly below both ends or strictly above both ends.

## Example

````markdown
---
format: open-rules
title: Lockout example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
lockout r1c2 ends ["r1c1","r1c3"] gap 4
```
````

Satisfies the rule: r1c2=1, r1c1=2, r1c3=7. The ends differ by 5, and 1 is below both ends.

Breaks the rule: r1c2=4, r1c1=2, r1c3=7. 4 lies between the end digits.
