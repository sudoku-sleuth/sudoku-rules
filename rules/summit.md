---
name: Summit
url: https://rules.sudoku-sleuth.com/summit.md
kind: summit
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
layer: rule
alias_of: difference-line
alias_bind:
  line: line
  edges: edges
  loop: loop
  mode: '"turning"'
  channel: '"D"'
  diamonds: "{}"
  gap: "0"
  turnDigits: "{1,9}"
---

# Summit

Neighbouring digits differ. Digits rise or fall along the line, changing direction only at 1 or 9.

With explicit `edges`, supply one connected network and write `line []` when no ordered list is needed. The window checks include every simple traversal through its junctions.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| line | `path<cell>` | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| loop | `boolean` | Whether the line closes, joining its last cell back to its first. | false (open path). |
| edges | `optional<list<list<cell>>>` | All edges of one connected network. | Absent; use the ordered line. |

## Definition

Block: [difference-line](difference-line.md), mode `turning`, channel `D`, turning digits `{1,9}`, retaining the supplied line, edges and loop.

## Example

````markdown
---
format: open-rules
title: Summit example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
summit r1c1-r1c2-r1c3
```
````

Satisfies the rule: r1c1=2, r1c2=9, r1c3=3. 2, 9, 3 changes direction at 9.

Breaks the rule: r1c1=2, r1c2=8, r1c3=3. 2, 8, 3 changes direction at 8.
