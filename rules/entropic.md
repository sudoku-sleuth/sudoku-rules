---
name: Entropic
url: https://rules.sudoku-sleuth.com/entropic.md
kind: entropic
parameters:
  line:
    empty_when: edges
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
  loop:
    description: Whether the path closes, joining its last cell back to its first.
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
  classification: '"entropy"'
  modulus: "3"
  length: "3"
  geometry: '"line"'
  mode: '"distinct"'
  fixedClass: absent(|{}|)
  channel: '"D"'
layer: rule
---



# Entropic

On a standard 1–9 board, every three consecutive cells on the path contain one low digit (1–3), one middle digit (4–6) and one high digit (7–9), in any order. On a two-cell open path, the digits come from different groups.

For other boards, divide the puzzle’s ordered list of allowed symbols into three equal-sized groups. This list is called the ordered alphabet. The groups follow its supplied order, not necessarily numerical order; its length must be divisible by three. On a loop, triples also cross the join between the last and first cells.

For an ordered alphabet of 1–6, the three groups are 1–2, 3–4 and 5–6. Digits may repeat more than two positions apart when other rules allow.

With explicit `edges`, supply one connected network and write `line []` when no ordered list is needed. The window checks include every simple traversal through its junctions.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| line | `path<cell>` | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| loop | `boolean` | Whether the path closes, joining its last cell back to its first. | false (open path). |
| edges | `optional<list<list<cell>>>` | Explicit undirected edges of one connected network; each edge lists two different cells. | Absent; use the ordered line. |

## Definition

Block: [class-pattern](class-pattern.md) — `line=line; edges=edges; loop=loop; classification="entropy"; modulus=3; length=3; geometry="line"; mode="distinct"; fixedClass=absent(|{}|); channel="D"`.



The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

This is a bound shorthand for [class-pattern](class-pattern.md). Its header supplies every parameter of that rule.

Every three-cell window uses different alphabet thirds. An open two-cell line uses different thirds. Network windows include every junction traversal.

## Example

````markdown
---
format: open-rules
title: Entropic example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
entropic r1c1-r1c2-r1c3
```
````

Satisfies the rule: r1c1=1, r1c2=4, r1c3=7. 1, 4, 7 gives one digit from each of 1–3, 4–6 and 7–9.

Breaks the rule: r1c1=1, r1c2=4, r1c3=6. 1, 4, 6 uses the middle third twice and misses the upper third.
