---
name: Route Clue
url: https://rules.sudoku-sleuth.com/route-clue.md
kind: route-clue
shape: Lines
parameters:
  name:
    type: string
    description: The shared route name.
    default: Required.
  loop:
    type: boolean
    description: Include the closing pair and cyclic windows.
    default: false.
  channel:
    type: Channel
    description: Channel supplying route numbers.
    default: D.
  relations:
    type: list<PairRelation>
    description: Inclusive alternatives required on every directed step.
    default: Empty list; no step relation.
  total:
    type: optional<number>
    description: Required sum of visited numbers.
    default: Absent; no sum condition.
  distinct:
    type: boolean
    description: Require all visited numbers to differ.
    default: false.
  classes:
    type: optional<list<list<number>>>
    description: Each full window must contain one number from each listed class.
    default: Absent; no class windows.
  length:
    type: position
    description: Window length, independent of class count.
    default: '3.'
---

# Route Clue

Apply numeric clues to a shared route. Every step satisfies an inclusive relation alternative when alternatives are supplied. Sum counts visited cells once. Class windows have the chosen length; each class must occur exactly once in every full window. Windows include the closing join when loop is true. A window longer than the route supplies no class condition.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| name | The shared route name. | Required. |
| loop | Include the closing pair and cyclic windows. | false. |
| channel | Channel supplying route numbers. | D. |
| relations | Inclusive alternatives required on every directed step. | Empty list; no step relation. |
| total | Required sum of visited numbers. | Absent; no sum condition. |
| distinct | Require all visited numbers to differ. | false. |
| classes | Each full window must contain one number from each listed class. | Absent; no class windows. |
| length | Window length, independent of class count. | 3. |

## Maths

Class: **with aggregates**.

The [shared predicates](predicates.md) define the notation and operations.

```text
let L=routeAnswer(name); (|relations|>0 → ∀i,j∈[0,|L|): next(L,i,j,loop) → relatedAny(relations,read(L[i],channel),read(L[j],channel))) ∧ (present(total) → aggregate(L,channel,"sum")=unwrap(total)) ∧ (distinct → repeatPolicy(L,channel,false)) ∧ (present(classes) → length>=1 ∧ ∀s∈[0,|L|): start(L,length,s,loop) ∧ (loop → |L|>0) → ∀ns∈unwrap(classes): classCount(window(L,length,s,loop),ns,channel)=1)
```

## Example

````markdown
---
format: open-rules
title: Route Clue example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
route-clue name "trail" relations [{"op":"difference","value":1}] total 6
```
````

Satisfies the rule: A shared three-cell trail reading 1,2,3 has consecutive steps and sum 6.

Breaks the rule: The same trail reading 1,3,2 has a step of difference 2.
