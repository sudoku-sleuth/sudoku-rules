---
name: Japanese Sums
url: https://rules.sudoku-sleuth.com/japanese-sums.md
kind: japanese-sums
shape: Outside
parameters:
  line:
    type: list<cell>
    description: Cells in clue order.
    default: Required.
  selectionRef:
    shared:
      role: read
      type: selection
    type: string
    description: The selection name; H means board shading.
    default: '"H".'
  totals:
    type: list<number>
    description: One total per maximal marked run.
    default: Required.
  channel:
    type: Channel
    description: Read face digits D or effective values V.
    default: D.
  repeats:
    type: boolean
    description: Allow equal numbers within a run.
    default: true.
layer: rule
---

# Japanese Sums

Read the maximal nonempty runs of marked cells in the supplied order. Their sums equal the clue list in that order. Every run has exactly one clue, including a run whose sum is zero. Unmarked cells separate runs and contribute nothing. Repeated cells are rejected; the list itself supplies order, without imposing adjacency.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| line | `list<cell>` | Cells in clue order. | Required. |
| selectionRef | `string` | The selection name; H means board shading. | "H". |
| totals | `list<number>` | One total per maximal marked run. | Required. |
| channel | `Channel` | Read face digits D or effective values V. | D. |
| repeats | `boolean` | Allow equal numbers within a run. | true. |

## Maths

Class: **existential**.

The [shared predicates](predicates.md) define the notation and operations.

```text
((allDifferent(line,λc:cell:cellIndex(c)) and (countWhere([0,|line|),λi:position:markedStart(line,i,selectionRef)) = |totals|)) and forall a∈[0,|line|): forall b∈[(a + 1),(|line| + 1)): (markedRun(line,a,b,selectionRef) implies let j=countWhere([0,a),λi:position:markedStart(line,i,selectionRef)); ((((0 <= j) and (j < |totals|)) and repeatPolicy(⟨line[i]:i∈[a,b)⟩,channel,repeats)) and (aggregate(⟨line[i]:i∈[a,b)⟩,channel,"sum") = totals[j]))))
```

## Example

````markdown
---
format: open-rules
title: Japanese Sums example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
japanese-sums line ["r1c1","r1c2","r1c3"] totals [3]
```
````

Satisfies the rule: r1c1=1 and r1c2=2 are shaded; r1c3 is unshaded.

Breaks the rule: Only r1c1=1 is shaded, giving total 1.
