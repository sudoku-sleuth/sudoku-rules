---
name: Selected Stretch
url: https://rules.sudoku-sleuth.com/selected-stretch.md
kind: selected-stretch
layer: block
parameters:
  cells:
    type: list<cell>
    description: Occurrences in clue order.
    default: Required.
  selection:
    type: enum{prefix,crusts,balanced,consecutive}
    description: Select a prefix, between crusts, balanced endpoints or consecutive neighbours.
    default: prefix.
  sum:
    type: number
    description: Required selected total.
    default: "0."
  count:
    type: optional<position>
    description: Explicit prefix length; otherwise use the first digit.
    default: Absent.
  sums:
    type: list<number>
    description: Required balanced endpoint totals.
    default: Empty list.
  crusts:
    type: optional<list<digit>>
    description: Custom crust digits; otherwise alphabet endpoints.
    default: Absent.
  endpointOccurrences:
    type: enum{none,"exactly-one","at-most-one"}
    description: Default-crust occurrence policy.
    default: none.
---

# Selected Stretch

Sum selected positions of an ordered list: a counted prefix, the interval between crusts, a stretch balanced with its endpoints, or positions touching a consecutive step.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cells | `list<cell>` | Occurrences in clue order. | Required. |
| selection | `enum{prefix,crusts,balanced,consecutive}` | Select a prefix, between crusts, balanced endpoints or consecutive neighbours. | prefix. |
| sum | `number` | Required selected total. | 0. |
| count | `optional<position>` | Explicit prefix length; otherwise use the first digit. | Absent. |
| sums | `list<number>` | Required balanced endpoint totals. | Empty list. |
| crusts | `optional<list<digit>>` | Custom crust digits; otherwise alphabet endpoints. | Absent. |
| endpointOccurrences | `enum{none,"exactly-one","at-most-one"}` | Default-crust occurrence policy. | none. |

## Maths

Class: **with aggregates**.

The [predicates](predicates.md) define the mathematical functions.

```text
if selection="prefix" then (|cells|>0 ∧ let x=if present(count) then unwrap(count) else D(cells[0]); 1<=x<=|cells| ∧ aggregate(first(cells,x),"D","sum")=sum) else if selection="crusts" then (|𝔄|>0 ∧ (if present(crusts) then
  ∀i,j∈{t∈[0,|cells|):D(cells[t])∈unwrap(crusts)}: i<j ∧ ¬(∃k∈{t∈[0,|cells|):D(cells[t])∈unwrap(crusts)}:k<j ∧ k!=i) → aggregate(betweenPositions(cells,i,j),"D","sum")=sum
else let lo=𝔄[0]; let hi=𝔄[|𝔄|-1];
  (∀i,j∈[0,|cells|): firstOccurrence(cells,lo,i) ∧ firstOccurrence(cells,hi,j) → aggregate(betweenPositions(cells,i,j),"D","sum")=sum)
  ∧ (endpointOccurrences="exactly-one" → countWhere(cells,λc:cell:D(c)=lo)=1 ∧ countWhere(cells,λc:cell:D(c)=hi)=1)
  ∧ (endpointOccurrences="at-most-one" → countWhere(cells,λc:cell:D(c)=lo)<=1 ∧ countWhere(cells,λc:cell:D(c)=hi)<=1))) else if selection="balanced" then (∀s∈sums: ∃i,j∈[0,|cells|): i<j ∧ D(cells[i])+D(cells[j])=s
  ∧ aggregate(betweenPositions(cells,i,j),"D","sum")=s) else (countRun(cells)=sum)
```

## Example


````markdown
---
format: open-rules
title: X Sum example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
selected-stretch r1c1-r1c2-r1c3 sum 5
```
````

Satisfies the rule: r1c1=2, r1c2=3, r1c3=9. The first digit 2 selects two cells totalling 5.

Breaks the rule: r1c1=2, r1c2=4, r1c3=9. The first two digits total 6 instead of 5.
