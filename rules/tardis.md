---
name: Tardis
url: https://rules.sudoku-sleuth.com/tardis.md
kind: tardis
parameters:
  cell:
    description: The clue cell.
    default: Required.
    type: cell
  neighbours:
    description: The cells counted or compared around the clue.
    default: Required. neighbours disjoint from {cell}.
    type: set<cell>
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: D.
layer: rule
alias_of: neighbour-extremum
alias_bind:
  type: '"max"'
  cells: "{cell}"
  exhaustive: "false"
  neighbourhood: '"orthogonal"'
  boundary: "false"
  channel: channel
  neighbours: some(neighbours)
---

# Tardis

The marked digit is greater than every listed neighbour.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cell | `cell` | The clue cell. | Required. |
| neighbours | `set<cell>` | The cells counted or compared around the clue. | Required. neighbours disjoint from {cell}. |
| channel | `Channel` | Read printed digits (D) or effective values (V). | D. |

## Definition

Block: [neighbour-extremum](neighbour-extremum.md) — `type="max"; cells={cell}; exhaustive=false; neighbourhood="orthogonal"; boundary=false; channel=channel; neighbours=some(neighbours)`.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.



The marked number exceeds every supplied neighbour in the selected channel.

## Example

````markdown
---
format: open-rules
title: Tardis example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
tardis cell "r1c1" neighbours ["r1c2"]
```
````

Satisfies the rule: r1c1=3, r1c2=2. The marked 3 is greater than its neighbour 2.

Breaks the rule: r1c1=2, r1c2=3. The marked 2 is smaller than its neighbour 3.
