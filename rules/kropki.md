---
name: Kropki
url: https://rules.sudoku-sleuth.com/kropki.md
kind: kropki
aliases: [white dot, black dot, Kropki dots]
parameters:
  colour:
    description: "The relationship: white means difference 1; black means ratio 2."
    default: Required.
    type: enum{white,black}
    syntax:
      form: keywords
      named: true
      choices:
        white: {}
        black: {}
  cells:
    description: The two marked cells in order, for example r1c1-r1c2.
    default: Required.
    type: list<cell>
    syntax:
      form: cells
      count: 2
alias_of: aggregate-equation
alias_bind:
  left: ⟨weightedOperand(aggregateOperand(⟨cells[i]:i∈[0,|cells|),i=0⟩,"V","sum",true),1,1):termIndex∈[0,1)⟩
  right: ⟨weightedOperand(aggregateOperand(⟨cells[i]:i∈[0,|cells|),i=1⟩,"V","sum",true),1,1):termIndex∈[0,1)⟩
  leftOperation: '"sum"'
  rightOperation: '"sum"'
  relation: if |cells|=2 then relationSpec(if colour="white" then "difference" else "ratio",if colour="white" then 1 else 2) else relationSpec("difference",-1)
layer: rule
---


# Kropki

A white relation joins values one apart. A black relation joins values where one is twice the other.

A white dot without a number means difference 1; a black dot without a number means ratio 2. For a numbered dot, use [Pair](https://rules.sudoku-sleuth.com/pair.md) with `difference n` or `ratio n`. An unmarked pair has no restriction from Kropki alone. State “all possible dots are given” with a separate [Negative](https://rules.sudoku-sleuth.com/negative.md) declaration.

White dot, black dot and Kropki dots are also names for Kropki.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| colour | `enum{white,black}` | The relationship: white means difference 1; black means ratio 2. | Required. |
| cells | `list<cell>` | The two marked cells in order, for example r1c1-r1c2. | Required. |

## Rule lines

Kropki is a named shorthand for [pair](pair.md):

- `kropki r1c1-r1c2 white` means `pair r1c1-r1c2 difference 1`.
- `kropki r1c1-r1c2 black` means `pair r1c1-r1c2 ratio 2`.

Here `white` and `black` name relationships, not paint instructions. A dot's actual colour stays drawing metadata. Use [XV](xv.md) for sums of 10 or 5. For other differences, ratios, sums and pair relations, use [Pair](pair.md) with the stated relationship. Case files state the relationship explicitly. Existing `colour "white"` and `colour "black"` spellings are also accepted.

## Definition

Block: [aggregate-equation](aggregate-equation.md) — `left=⟨weightedOperand(aggregateOperand(⟨cells[i]:i∈[0,|cells|),i=0⟩,"V","sum",true),1,1):termIndex∈[0,1)⟩; right=⟨weightedOperand(aggregateOperand(⟨cells[i]:i∈[0,|cells|),i=1⟩,"V","sum",true),1,1):termIndex∈[0,1)⟩; leftOperation="sum"; rightOperation="sum"; relation=if |cells|=2 then relationSpec(if colour="white" then "difference" else "ratio",if colour="white" then 1 else 2) else relationSpec("difference",-1)`.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.


A white dot joins values differing by 1; a black dot joins values where one is double the other. The colour parameter names the relationship.

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
kropki r1c1-r1c2 black
```
````

Satisfies the rule: r1c1=2, r1c2=4. The black dot joins 2 and 4: 4 is double 2.

Breaks the rule: r1c1=2, r1c2=5. The black dot joins 2 and 5: neither is double the other.
