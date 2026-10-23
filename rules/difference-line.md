---
name: Difference Line
url: https://rules.sudoku-sleuth.com/difference-line.md
kind: difference-line
shape: Lines
parameters:
  line:
    empty_when: edges
    type: path<cell>
    description: The ordered line; supply an empty list when edges describe a network.
    default: Required.
  edges:
    type: optional<list<list<cell>>>
    description: Explicit undirected edges of one connected network; each edge lists two different cells.
    default: Absent; use the ordered line.
  loop:
    type: boolean
    description: Include the last-to-first edge.
    default: false.
  mode:
    type: enum{same,different,"signed-step","at-least","at-most",turning}
    description: Compare edge differences with each other, or with gap.
    default: Required.
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: D.
  diamonds:
    type: set<cell>
    description: Clue cells equal to the common absolute difference.
    default: Empty set.
  gap:
    type: number
    description: Bound for at-least and at-most modes.
    default: "0."
  turnDigits:
    type: set<number>
    description: Values at which successive differences must change sign in turning mode.
    default: Empty set.
layer: block
---


# Difference Line

At least and at most bound every drawn edge by `gap` in the chosen channel. Turning mode requires unequal neighbours and changes direction exactly at values in `turnDigits`; other internal values continue in the same direction. Same difference means every drawn edge has the same absolute difference. Different difference means every distinct drawn edge has a different absolute difference. Signed step means one signed step repeats along the ordered line.

A network is undirected. Signed steps use the supplied line order and do not accept network edges. Reversing a line reverses its signed step. Diamond clues apply only to same difference.

With explicit `edges`, supply one connected network and write `line []` when no ordered list is needed. The window checks include every simple traversal through its junctions.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| line | `path<cell>` | The ordered line; supply an empty list when edges describe a network. | Required. |
| edges | `optional<list<list<cell>>>` | Explicit undirected edges of one connected network; each edge lists two different cells. | Absent; use the ordered line. |
| loop | `boolean` | Include the last-to-first edge. | false. |
| mode | `enum{same,different,"signed-step","at-least","at-most",turning}` | Compare edge differences with each other, or with gap. | Required. |
| channel | `Channel` | Read printed digits (D) or effective values (V). | D. |
| diamonds | `set<cell>` | Clue cells equal to the common absolute difference. | Empty set. |
| gap | `number` | Bound for at-least and at-most modes. | 0. |
| turnDigits | `set<number>` | Values at which successive differences must change sign in turning mode. | Empty set. |

## Maths

Class: **with aggregates**.

The [shared predicates](predicates.md) define the notation and every named predicate.

```text
if mode="turning" then lineGeometry(line,edges,loop)
∧ (∀W∈lineWindows(line,edges,2,loop): |W|=2 → read(W[0],channel)!=read(W[1],channel))
∧ ∀W∈lineWindows(line,edges,3,loop): |W|=3 →
  ((read(W[1],channel)∈turnDigits → (read(W[1],channel)-read(W[0],channel))*(read(W[2],channel)-read(W[1],channel))<0)
  ∧ (read(W[1],channel)∉turnDigits → (read(W[1],channel)-read(W[0],channel))*(read(W[2],channel)-read(W[1],channel))>0)) else if mode="at-least" ∨ mode="at-most" then lineGeometry(line,edges,loop) ∧ |diamonds|=0 ∧ ∀W∈lineWindows(line,edges,2,loop): |W|=2 → (if mode="at-least" then edgeDifference(W,channel)>=gap else edgeDifference(W,channel)<=gap) else lineGeometry(line,edges,loop) ∧ let W=lineWindows(line,edges,2,loop); |W|>0 ∧
(mode="signed-step" → ¬present(edges) ∧ |diamonds|=0 ∧ ∀p,q∈W: |p|=2 ∧ |q|=2 → read(p[1],channel)-read(p[0],channel)=read(q[1],channel)-read(q[0],channel))
∧ (mode!="signed-step" → (∀p,q∈W: |p|=2 ∧ |q|=2 → ((mode="same" → |read(p[0],channel)-read(p[1],channel)|=|read(q[0],channel)-read(q[1],channel)|) ∧ (mode="different" ∧ {p[0],p[1]}!={q[0],q[1]} → |read(p[0],channel)-read(p[1],channel)|!=|read(q[0],channel)-read(q[1],channel)|))) ∧ (mode="different" → |diamonds|=0) ∧ (mode="same" → ∀g∈diamonds: ∀p∈W: |p|=2 → read(g,channel)=|read(p[0],channel)-read(p[1],channel)|))
```

## Example

````markdown
---
format: open-rules
title: Difference Line example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
difference-line r1c1-r1c2-r1c3 mode "same"
```
````

Satisfies the rule: Digits 2,4,2 have the same absolute difference 2.

Breaks the rule: Digits 2,4,7 have differences 2 and 3.
