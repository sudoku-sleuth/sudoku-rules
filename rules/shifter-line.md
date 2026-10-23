---
name: Shifter Line
url: https://rules.sudoku-sleuth.com/shifter-line.md
kind: shifter-line
parameters:
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
    empty_when: edges
  edges:
    type: optional<list<list<cell>>>
    description: The edges of a connected network.
    default: Absent; use the listed cells.
layer: rule
---

# Shifter Line

Digits on the line cannot be 5. Within a region, neighbours are both odd or both even and both below or both above 5. At each region crossing, exactly one of those relationships changes.

With explicit `edges`, every edge in the connected network follows the same region-crossing rule. Write `line []` when no ordered list is needed.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| line | `path<cell>` | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| edges | `optional<list<list<cell>>>` | The edges of a connected network. | Absent; use the listed cells. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
lineGeometry(line,edges,false) ∧ (∀c∈line:D(c)!=5) ∧ (present(edges) → ∀c∈allCells(unwrap(edges)):D(c)!=5)
∧ ∀W∈lineWindows(line,edges,2,false): |W|=2 →
  let P=(odd(D(W[0]))↔odd(D(W[1]))); let Q=(high(D(W[0]))↔high(D(W[1])));
  (samePartition(Regions,W[0],W[1]) → P ∧ Q) ∧ (¬samePartition(Regions,W[0],W[1]) → pairRelation(relationSpec("shift",0),D(W[0]),D(W[1])))
```

No digit is 5. Neighbours within the same authored region share parity and polarity (below/above 5). Across a region boundary exactly one of parity and polarity changes.

## Example

````markdown
---
format: open-rules
title: Shifter Line example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
shifter-line r1c1-r1c2
```
````

Satisfies the rule: r1c1=1, r1c2=3. 1 and 3 are both odd and below 5 within the same box.

Breaks the rule: r1c1=1, r1c2=2. 1 and 2 have different parity within the same box.
