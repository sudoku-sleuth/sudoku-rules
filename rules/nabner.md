---
name: Nabner
url: https://rules.sudoku-sleuth.com/nabner.md
kind: nabner
parameters:
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required. L has no repeated cell.
    type: path<cell>
  distinct:
    description: Whether repeated digits are forbidden.
    default: false (repeats allowed).
    type: boolean
---

# Nabner

No two digits anywhere on the line are consecutive. The distinct parameter also forbids repeats.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. L has no repeated cell. |
| distinct | Whether repeated digits are forbidden. | false (repeats allowed). |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∀i,j ∈ [0,|line|): i ≠ j →
  |D(line[i])−D(line[j])| ≠ 1 ∧ (distinct → D(line[i]) ≠ D(line[j]))
```

Digits at different path positions are never one apart. If distinct is true, their digits must also differ.

## Example

````markdown
---
format: open-rules
title: Nabner example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
nabner r1c1-r1c2
```
````

Satisfies the rule: r1c1=1, r1c2=3. 1 and 3 are not consecutive.

Breaks the rule: r1c1=1, r1c2=2. 1 and 2 are consecutive.
