---
name: Japanese Sums
url: https://rules.sudoku-sleuth.com/japanese-sums.md
kind: japanese-sums
shape: Outside
parameters:
  line:
    type: list<cell>
    description: "Cells in clue order."
    default: "Required."
  selectionRef:
    shared: {role: read, type: selection}
    type: string
    description: "The selection name; H means board shading."
    default: '"H".'
  totals:
    type: list<number>
    description: "One total per maximal marked run."
    default: "Required."
  channel:
    type: Channel
    description: "Read face digits D or effective values V."
    default: "D."
  repeats:
    type: boolean
    description: "Allow equal numbers within a run."
    default: "true."
---

# Japanese Sums

Read the maximal nonempty runs of marked cells in the supplied order. Their sums equal the clue list in that order. Every run has exactly one clue, including a run whose sum is zero. Unmarked cells separate runs and contribute nothing. Repeated cells are rejected; the list itself supplies order, without imposing adjacency.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | Cells in clue order. | Required. |
| selectionRef | The selection name; H means board shading. | "H". |
| totals | One total per maximal marked run. | Required. |
| channel | Read face digits D or effective values V. | D. |
| repeats | Allow equal numbers within a run. | true. |

## Maths

Class: **existential**.

The [shared predicates](predicates.md) define the notation and operations.

```text
japaneseSums(line,selectionRef,totals,channel,repeats)
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
