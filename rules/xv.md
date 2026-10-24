---
name: XV
url: https://rules.sudoku-sleuth.com/xv.md
kind: xv
aliases: [X and V, XV clues]
shape: Edges
parameters:
  cells:
    description: The two marked cells in order, for example r1c1-r1c2.
    default: Empty list.
    type: list<cell>
    syntax:
      form: cells
      count: 2
  mark:
    type: enum{x,v}
    description: X gives a sum of ten; V gives a sum of five.
    default: '"x".'
    syntax:
      form: keywords
      named: true
      choices:
        x: {}
        v: {}
  x:
    type: list<list<cell>>
    description: Pairs marked x; each pair has exactly two cells.
    default: Empty list.
  v:
    type: list<list<cell>>
    description: Pairs marked v; each pair has exactly two cells.
    default: Empty list.
  allGiven:
    type: list<enum{x,v}>
    description: Kinds for which every possible orthogonal mark is given.
    default: Empty list.
alias_of: marked-pairs
alias_bind:
  x: 'if |cells|>0 ∧ mark="x" then ⟨if i<|x| then x[i] else cells:i∈[0,|x|+1)⟩ else x'
  v: 'if |cells|>0 ∧ mark="v" then ⟨if i<|v| then v[i] else cells:i∈[0,|v|+1)⟩ else v'
  white: '⟨cells:i∈[0,0)⟩'
  black: '⟨cells:i∈[0,0)⟩'
  allGiven: allGiven
layer: rule
---

# XV

An X joins two values that sum to ten. A V joins two values that sum to five.

Use `x` or `v` after the two cells. For another sum, use [pair](pair.md). An unmarked pair has no XV restriction. For all possible Xs and Vs given, use `xv x [r1c1-r1c2] v [r2c1-r2c2] allGiven ["x","v"]`. Select only `"x"` or `"v"` when only that kind is all given.

X and V and XV clues are also names for XV.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cells | `list<cell>` | The two marked cells in order, for example r1c1-r1c2. | Empty list. |
| mark | `enum{x,v}` | Relationship for a single pair. | `"x"`. |
| x | `list<list<cell>>` | Pairs marked x. | Empty list. |
| v | `list<list<cell>>` | Pairs marked v. | Empty list. |
| allGiven | `list<enum{x,v}>` | Kinds for which all marks are given. | Empty list. |

Grouped marks use the same rule name: `xv x [r1c1-r1c2] v [r2c1-r2c2] allGiven ["x","v"]`. Each selected kind exempts only its own pairs.

## Definition

This binds [Marked Pairs](marked-pairs.md) with the supplied pair lists and `allGiven`; a single pair is added to its selected kind. Marked relationships read effective values V.

## Example

````markdown
---
format: open-rules
title: XV example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
xv x [r1c1-r1c2] allGiven ["x","v"]
```
````

Satisfies the rule: r1c1=4, r1c2=6. The values sum to ten, and every other orthogonal pair sums to neither ten nor five.

Breaks the rule: r1c1=4, r1c2=5. The values sum to nine.
