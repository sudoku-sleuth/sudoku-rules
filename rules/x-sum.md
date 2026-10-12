---
name: X Sum
url: https://rules.sudoku-sleuth.com/x-sum.md
kind: x-sum
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: list<cell>
  sum:
    description: The total the digits or values must add up to.
    default: Required.
    type: number
  count:
    description: The number of cells or occurrences to count.
    default: First digit supplies the extent.
    type: optional<position>
---

# X Sum

The first digit gives how many cells to count from the clue. Those digits add up to its total. A stated count replaces the first digit.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| cells | The marked cells, for example r1c1-r1c2-r2c2. | Required. |
| sum | The total the digits or values must add up to. | Required. |
| count | The number of cells or occurrences to count. | First digit supplies the extent. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
|cells|>0 ∧ let x=if present(count) then unwrap(count) else D(cells[0]); 1<=x<=|cells| ∧ sum_D(first(cells,x))=sum
```

Use count when supplied, otherwise the nearest digit, as the number of cells to read. It must name a nonempty prefix within cells. The prefix digits sum to sum.

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
x-sum r1c1-r1c2-r1c3 sum 5
```
````

Satisfies the rule: r1c1=2, r1c2=3, r1c3=9. The first digit 2 selects two cells totalling 5.

Breaks the rule: r1c1=2, r1c2=4, r1c3=9. The first two digits total 6 instead of 5.
