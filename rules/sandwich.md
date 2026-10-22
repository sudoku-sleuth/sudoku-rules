---
name: Sandwich
url: https://rules.sudoku-sleuth.com/sandwich.md
kind: sandwich
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: list<cell>
  sum:
    description: The total the digits or values must add up to.
    default: Required.
    type: number
  endpointOccurrences:
    description: Whether both endpoints must occur exactly once or at most once.
    default: No extra occurrence condition.
    type: enum{none,"exactly-one","at-most-one"}
  crusts:
    description: The two crust digits that bound the sandwich.
    default: Lowest and highest board symbols.
    type: optional<list<digit>>
---

# Sandwich

The clue gives the sum of digits strictly between the two crusts, counted from the clue side. State the crust digits and their occurrence policy.

On a standard 1–9 board the usual crusts are 1 and 9. The crust digits are excluded from the sum; adjacent crusts give a total of zero. List the row or column from the clue side.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| cells | The marked cells, for example r1c1-r1c2-r2c2. | Required. |
| sum | The total the digits or values must add up to. | Required. |
| endpointOccurrences | Whether both endpoints must occur exactly once or at most once. | No extra occurrence condition. |
| crusts | The two crust digits that bound the sandwich. | Lowest and highest board symbols. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
|𝔄|>0 ∧ (if present(crusts) then
  ∀i,j∈{t∈[0,|cells|):D(cells[t])∈unwrap(crusts)}: i<j ∧ ¬(∃k∈{t∈[0,|cells|):D(cells[t])∈unwrap(crusts)}:k<j ∧ k!=i) → sum_D(betweenPositions(cells,i,j))=sum
else let lo=𝔄[0]; let hi=𝔄[|𝔄|-1];
  (∀i,j∈[0,|cells|): firstOccurrence(cells,lo,i) ∧ firstOccurrence(cells,hi,j) → sum_D(betweenPositions(cells,i,j))=sum)
  ∧ (endpointOccurrences="exactly-one" → countWhere(cells,λc:cell:D(c)=lo)=1 ∧ countWhere(cells,λc:cell:D(c)=hi)=1)
  ∧ (endpointOccurrences="at-most-one" → countWhere(cells,λc:cell:D(c)=lo)<=1 ∧ countWhere(cells,λc:cell:D(c)=hi)<=1))
```

For custom crusts, sum digits strictly between the first two crust occurrences from the clue. Otherwise use the first lowest/highest symbols and require the between-sum only when both occur. exactly-one requires both once; at-most-one forbids repeated endpoints but allows missing endpoints.

## Example

````markdown
---
format: open-rules
title: Sandwich example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
sandwich r1c1-r1c2-r1c3 sum 2 endpointOccurrences "exactly-one"
```
````

Satisfies the rule: r1c1=1, r1c2=2, r1c3=9. The digit between crusts 1 and 9 totals the clue 2.

Breaks the rule: r1c1=1, r1c2=3, r1c3=9. The digit between the crusts totals 3 instead of 2.
