---
name: Vault
url: https://rules.sudoku-sleuth.com/vault.md
kind: vault
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: set<cell>
  sum:
    description: The total the digits or values must add up to.
    default: No total imposed.
    type: optional<number>
  neighbours:
    description: The cells counted or compared around the clue.
    default: Required. neighbours disjoint from cells.
    type: set<cell>
layer: rule
---

# Vault

No digit inside the vault appears in its listed neighbours. A stated sum fixes its total.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cells | `set<cell>` | The marked cells, for example r1c1-r1c2-r2c2. | Required. |
| sum | `optional<number>` | The total the digits or values must add up to. | No total imposed. |
| neighbours | `set<cell>` | The cells counted or compared around the clue. | Required. neighbours disjoint from cells. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
(∀a∈cells: ∀b∈neighbours: D(a)!=D(b)) ∧ (present(sum) → aggregate(cells,"D","sum")=unwrap(sum))
```

No digit in cells occurs in neighbours. If sum is present, the cell digits sum to it. Repetition inside the vault is otherwise allowed.

## Example

````markdown
---
format: open-rules
title: Vault example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
vault r1c1 neighbours ["r1c2"] sum 1
```
````

Satisfies the rule: r1c1=1, r1c2=2. The inside digits are absent from the listed neighbours.

Breaks the rule: r1c1=1, r1c2=1. An inside digit also appears in a listed neighbour.
