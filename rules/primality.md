---
name: Primality
url: https://rules.sudoku-sleuth.com/primality.md
kind: primality
parameters:
  line:
    empty_when: edges
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
  loop:
    description: Whether the line closes, joining its last cell back to its first.
    default: false (open path).
    type: boolean
  edges:
    type: optional<list<list<cell>>>
    description: All edges of one connected network.
    default: Absent; use the ordered line.
---

# Primality

Prime and composite digits alternate along the line. On a standard board, primes are 2, 3, 5, 7 and composites are 4, 6, 8, 9.

With explicit `edges`, supply one connected network and write `line []` when no ordered list is needed. The window checks include every simple traversal through its junctions.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| loop | Whether the line closes, joining its last cell back to its first. | false (open path). |
| edges | All edges of one connected network. | Absent; use the ordered line. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
lineGeometry(line,edges,loop) ∧ (∀c∈line:D(c)>1) ∧ (present(edges) → ∀c∈graphVertices(unwrap(edges)):D(c)>1)
∧ ∀W∈lineWindows(line,edges,2,loop): |W|=2 → ¬(prime(D(W[0]))↔prime(D(W[1])))
```

Every digit is greater than one. Neighbouring path positions alternate prime and composite digits. Include last/first when loop is true.

## Example

````markdown
---
format: open-rules
title: Primality example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
primality r1c1-r1c2
```
````

Satisfies the rule: r1c1=2, r1c2=4. 2 is prime and 4 is composite.

Breaks the rule: r1c1=2, r1c2=3. 2 and 3 are both prime.
