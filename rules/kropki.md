---
name: Kropki
url: https://rules.sudoku-sleuth.com/kropki.md
kind: kropki
aliases: [white dot, black dot, Kropki dots]
parameters:
  colour:
    description: "The relationship: white means difference 1; black means ratio 2."
    default: '"white".'
    type: enum{white,black}
    syntax:
      form: keywords
      named: true
      choices:
        white: {}
        black: {}
  cells:
    description: The two marked cells in order, for example r1c1-r1c2.
    default: Empty list.
    type: list<cell>
    syntax:
      form: cells
      count: 2
  white:
    type: list<list<cell>>
    description: Pairs marked white; each pair has exactly two cells.
    default: Empty list.
  black:
    type: list<list<cell>>
    description: Pairs marked black; each pair has exactly two cells.
    default: Empty list.
  allGiven:
    type: list<enum{white,black}>
    description: Kinds for which every possible orthogonal mark is given.
    default: Empty list.
alias_of: marked-pairs
alias_bind:
  x: '⟨cells:i∈[0,0)⟩'
  v: '⟨cells:i∈[0,0)⟩'
  white: 'if |cells|>0 ∧ colour="white" then ⟨if i<|white| then white[i] else cells:i∈[0,|white|+1)⟩ else white'
  black: 'if |cells|>0 ∧ colour="black" then ⟨if i<|black| then black[i] else cells:i∈[0,|black|+1)⟩ else black'
  allGiven: allGiven
layer: rule
---


# Kropki

A white relation joins values one apart. A black relation joins values where one is twice the other.

A white dot without a number means difference 1; a black dot without a number means ratio 2. For a numbered dot, use [Pair](https://rules.sudoku-sleuth.com/pair.md) with `difference n` or `ratio n`. An unmarked pair has no restriction from Kropki alone. For all possible dots given, use `kropki white [r1c1-r1c2] black [r2c1-r2c2] allGiven ["white","black"]`. Select only `"white"` or `"black"` when only that kind is all given.

White dot, black dot and Kropki dots are also names for Kropki.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| colour | `enum{white,black}` | Relationship for a single pair. | `"white"`. |
| cells | `list<cell>` | The two marked cells in order, for example r1c1-r1c2. | Empty list. |
| white | `list<list<cell>>` | Pairs marked white. | Empty list. |
| black | `list<list<cell>>` | Pairs marked black. | Empty list. |
| allGiven | `list<enum{white,black}>` | Kinds for which all marks are given. | Empty list. |

## Rule lines

Kropki is a named shorthand for [pair](pair.md):

- `kropki r1c1-r1c2 white` means `pair r1c1-r1c2 difference 1`.
- `kropki r1c1-r1c2 black` means `pair r1c1-r1c2 ratio 2`.

Here `white` and `black` name relationships, not paint instructions. A dot's actual colour stays drawing metadata. Use [XV](xv.md) for sums of 10 or 5. For other differences, ratios, sums and pair relations, use [Pair](pair.md) with the stated relationship. Case files state the relationship explicitly. Existing `colour "white"` and `colour "black"` spellings are also accepted.

Grouped marks use the same rule name: `kropki white [r1c1-r1c2] black [r2c1-r2c2] allGiven ["white","black"]`. Each selected kind exempts only its own pairs.

## Definition

This binds [Marked Pairs](marked-pairs.md) with the supplied pair lists and `allGiven`; a single pair is added to its selected kind. Marked relationships read effective values V.

## Example

````markdown
---
format: open-rules
title: Kropki example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki black [r1c1-r1c2] allGiven ["white","black"]
```
````

Satisfies the rule: r1c1=2, r1c2=4. The black dot joins 2 and 4: 4 is double 2. Every other orthogonal pair neither differs by one nor has ratio two.

Breaks the rule: r1c1=2, r1c2=5. The black dot joins 2 and 5: neither is double the other.
