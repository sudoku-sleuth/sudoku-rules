---
name: Modular
url: https://rules.sudoku-sleuth.com/modular.md
kind: modular
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
  modulus:
    description: The divisor used to take remainders.
    default: 3; modulus ≥ 1.
    type: position
  edges:
    type: optional<list<list<cell>>>
    description: Explicit undirected edges of one connected network; each edge lists two different cells.
    default: Absent; use the ordered line.
  length:
    type: position
    description: The number of consecutive cells in each window, independent of the modulus.
    default: 3; length ≥ 2.
alias_of: class-pattern
alias_bind:
  line: line
  edges: edges
  loop: loop
  classification: '"residue"'
  modulus: modulus
  length: length
  geometry: '"line"'
  mode: '"distinct"'
  fixedClass: absent(|{}|)
  channel: '"D"'
layer: rule
---



# Modular

Every window of consecutive cells has different remainders modulo the stated modulus. The window length defaults to three and is independent of the modulus. An open two-cell line has different remainders.

With explicit edges, every simple traversal of the stated length is checked, including every turn through a junction. A cell is not revisited within a window. With an ordered line, loop windows cross the last-to-first join.

With explicit `edges`, supply one connected network and write `line []` when no ordered list is needed. The window checks include every simple traversal through its junctions.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| line | `path<cell>` | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| loop | `boolean` | Whether the line closes, joining its last cell back to its first. | false (open path). |
| modulus | `position` | The divisor used to take remainders. | 3; modulus ≥ 1. |
| edges | `optional<list<list<cell>>>` | Explicit undirected edges of one connected network; each edge lists two different cells. | Absent; use the ordered line. |
| length | `position` | The number of consecutive cells in each window, independent of the modulus. | 3; length ≥ 2. |

## Definition

Block: [class-pattern](class-pattern.md) — `line=line; edges=edges; loop=loop; classification="residue"; modulus=modulus; length=length; geometry="line"; mode="distinct"; fixedClass=absent(|{}|); channel="D"`.



The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

This is a bound shorthand for [class-pattern](class-pattern.md). Its header supplies every parameter of that rule.

Every window has distinct remainders. An open two-cell list retains its different-remainders condition.

## Example

````markdown
---
format: open-rules
title: Modular example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
modular r1c1-r1c2-r1c3
```
````

Satisfies the rule: r1c1=1, r1c2=2, r1c3=3. 1, 2, 3 have remainders 1, 2, 0 modulo 3.

Breaks the rule: r1c1=1, r1c2=2, r1c3=4. 1, 2, 4 repeats remainder 1.

### A branching network

```rules
modular line [] edges [["r1c1","r1c2"],["r1c2","r1c3"],["r1c2","r2c2"]] modulus 4 length 3
```

Each three-cell traversal through the junction has different remainders modulo four. This includes the turn from r1c1 through r1c2 to r2c2.
