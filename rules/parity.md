---
name: Parity
url: https://rules.sudoku-sleuth.com/parity.md
kind: parity
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
    description: Explicit undirected edges of one connected network; each edge lists two different cells.
    default: Absent; use the ordered line.
alias_of: class-pattern
alias_bind:
  line: line
  edges: edges
  loop: loop
  classification: '"residue"'
  modulus: "2"
  length: "2"
  geometry: '"line"'
  mode: '"distinct"'
  fixedClass: absent(|{}|)
  channel: '"D"'
layer: rule
---



# Parity

Digits alternate between odd and even along the line.

With explicit `edges`, supply one connected network and write `line []` when no ordered list is needed. The window checks include every simple traversal through its junctions.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| line | `path<cell>` | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| loop | `boolean` | Whether the line closes, joining its last cell back to its first. | false (open path). |
| edges | `optional<list<list<cell>>>` | Explicit undirected edges of one connected network; each edge lists two different cells. | Absent; use the ordered line. |

## Definition

Block: [class-pattern](class-pattern.md) — `line=line; edges=edges; loop=loop; classification="residue"; modulus=2; length=2; geometry="line"; mode="distinct"; fixedClass=absent(|{}|); channel="D"`.



The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

This is a bound shorthand for [class-pattern](class-pattern.md). Its header supplies every parameter of that rule.

Every drawn adjacency has different digit parity, including network edges and a loop join.

## Example

````markdown
---
format: open-rules
title: Parity example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
parity r1c1-r1c2
```
````

Satisfies the rule: r1c1=1, r1c2=2. 1 is odd and 2 is even.

Breaks the rule: r1c1=1, r1c2=3. 1 and 3 are both odd.
