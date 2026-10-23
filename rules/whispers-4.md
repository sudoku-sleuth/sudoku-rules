---
name: Whispers 4
aliases: [Dutch Whispers]
url: https://rules.sudoku-sleuth.com/whispers-4.md
kind: whispers-4
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
alias_of: difference-line
alias_bind:
  line: line
  edges: edges
  loop: loop
  mode: '"at-least"'
  channel: '"V"'
  diamonds: "{}"
  gap: "4"
  turnDigits: "{}"
layer: rule
---


# Whispers 4

Neighbouring values along the line differ by at least 4.

Dutch Whispers is another name for Whispers 4. The gap is fixed; use [Whispers](whispers.md) for another gap. Consecutive means adjacent positions along the path. Values may repeat at non-neighbouring positions when other rules allow.

With explicit `edges`, supply one connected network and write `line []` when no ordered list is needed. The window checks include every simple traversal through its junctions.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| line | `path<cell>` | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| loop | `boolean` | Whether the line closes, joining its last cell back to its first. | false (open path). |
| edges | `optional<list<list<cell>>>` | Explicit undirected edges of one connected network; each edge lists two different cells. | Absent; use the ordered line. |

## Definition

Block: [difference-line](difference-line.md) — `line=line; edges=edges; loop=loop; mode="at-least"; channel="V"; diamonds={}; gap=4`.



The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

This is a bound shorthand for [difference-line](difference-line.md). Its header supplies every parameter of that rule.

Every drawn edge is compared, including branches and junctions.

## Example

````markdown
---
format: open-rules
title: Whispers 4 example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
whispers-4 r1c1-r1c2
```
````

Satisfies the rule: r1c1=1, r1c2=5. The values differ by 4.

Breaks the rule: r1c1=1, r1c2=4. The values differ by only 3.
