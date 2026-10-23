---
name: Close Whispers
url: https://rules.sudoku-sleuth.com/close-whispers.md
kind: close-whispers
parameters:
  line:
    empty_when: edges
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
  gap:
    description: The greatest difference allowed between neighbours.
    default: Required.
    type: number
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: D.
  edges:
    type: optional<list<list<cell>>>
    description: Explicit undirected edges of one connected network; each edge lists two different cells.
    default: Absent; use the ordered line.
alias_of: difference-line
alias_bind:
  line: line
  edges: edges
  loop: "false"
  mode: '"at-most"'
  channel: channel
  diamonds: "{}"
  gap: gap
  turnDigits: "{}"
layer: rule
---


# Close Whispers

Neighbouring digits along the line differ by at most the stated maximum.

These are also called shout-n lines: use `gap n` for the largest permitted difference. Equal neighbours satisfy the rule when the gap is nonnegative. Digits may repeat when other rules allow.

With explicit `edges`, supply one connected network and write `line []` when no ordered list is needed. The window checks include every simple traversal through its junctions.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| line | `path<cell>` | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| gap | `number` | The greatest difference allowed between neighbours. | Required. |
| channel | `Channel` | Read printed digits (D) or effective values (V). | D. |
| edges | `optional<list<list<cell>>>` | Explicit undirected edges of one connected network; each edge lists two different cells. | Absent; use the ordered line. |

## Definition

Block: [difference-line](difference-line.md) — `line=line; edges=edges; loop=false; mode="at-most"; channel=channel; diamonds={}; gap=gap`.



The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

This is a bound shorthand for [difference-line](difference-line.md). Its header supplies every parameter of that rule.

Every drawn edge is compared, including branches and junctions.

## Example

````markdown
---
format: open-rules
title: Close Whispers example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
close-whispers r1c1-r1c2 gap 2
```
````

Satisfies the rule: r1c1=1, r1c2=3. The neighbours differ by the permitted maximum 2.

Breaks the rule: r1c1=1, r1c2=4. The neighbours differ by 3, exceeding the maximum 2.
