---
name: Choice Count
url: https://rules.sudoku-sleuth.com/choice-count.md
kind: choice-count
shape: Global
parameters:
  names:
    type: list<string>
    description: "Distinct shared truth labels."
    default: "Required."
  minimum:
    type: position
    description: "Minimum true labels."
    default: "0."
  maximum:
    type: optional<position>
    description: "Maximum true labels."
    default: "Absent; no upper bound."
---

# Choice Count

Count true labels in one shared Boolean assignment. Names must be distinct, so a repeated label cannot create an extra vote. Reify each label against the complete intended rule meaning in a formula using reified(choiceAnswer("label"),meaning). For a liar this is equivalence to the truthful meaning; a false label requires that entire meaning to fail. An explicitly inverted rule uses conditionalMeaning with its separately stated true and false meanings.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| names | Distinct shared truth labels. | Required. |
| minimum | Minimum true labels. | 0. |
| maximum | Maximum true labels. | Absent; no upper bound. |

## Maths

Class: **existential**.

The [shared predicates](predicates.md) define the notation and operations.

```text
(∀i,j∈[0,|names|):i!=j → names[i]!=names[j]) ∧ minimum>=0 ∧ countWhere(names,λs:string:choiceAnswer(s))>=minimum ∧ (present(maximum) → unwrap(maximum)>=minimum ∧ countWhere(names,λs:string:choiceAnswer(s))<=unwrap(maximum))
```

## Example

````markdown
---
format: open-rules
title: Choice Count example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
choice-count names ["first","second"] minimum 1 maximum 1
#line-truth firstLine ["r1c1","r1c2"] secondLine ["r1c1","r1c3"]
```

## Definitions

```custom-rules
- id: line-truth
  name: Line truth labels
  class: existential
  parameters:
    firstLine:
      type: list<cell>
      description: Cells of the increasing clue.
    secondLine:
      type: list<cell>
      description: Cells of the consecutive-set clue.
  definition: Each truth label equals the complete meaning of its clue.
  maths: 'reified(choiceAnswer("first"),monotonic(firstLine,true,"forward","D")) ∧ reified(choiceAnswer("second"),consecutiveValues(secondLine,"D",false))'
  example: Digits 1,2 make the increasing clue true; digits 1,3 make the consecutive-set clue false.
```
````

Satisfies the rule: r1c1=1, r1c2=2, r1c3=3. The increasing clue is true and the consecutive-set clue is false.

Breaks the rule: r1c1=1, r1c2=2, r1c3=2. Both clues are true.
