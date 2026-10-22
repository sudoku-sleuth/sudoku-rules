---
name: Digit Profile
url: https://rules.sudoku-sleuth.com/digit-profile.md
kind: digit-profile
shape: Cages
parameters:
  cells:
    type: list<cell>
    description: The occurrences to count.
    default: Required.
  classes:
    type: list<list<number>>
    description: Arbitrary numeric classes; a class may overlap another.
    default: Required.
  counts:
    type: list<position>
    description: Required count for each class, in the same order.
    default: Required.
  exhaustive:
    type: boolean
    description: Require every read number to belong to at least one class.
    default: false.
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: D.
  selfCount:
    type: boolean
    description: Require every occurring number to equal its own frequency.
    default: false.
  windowLength:
    type: optional<position>
    description: Apply class counts to every full window of this length.
    default: Absent; count over the whole list.
  loop:
    type: boolean
    description: Include cyclic windows when windowLength is present.
    default: false.
---

# Digit Profile

Each listed class occurs its stated number of times. Overlapping classes count independently. Repeating a number inside a class does not count it twice. Repeated cell occurrences count separately. Exhaustive profiles allow only numbers belonging to the listed classes. With `selfCount true`, each occurring number equals its frequency in the whole list. Optional `windowLength` applies the listed class counts to each full window instead of the whole list; `loop true` includes cyclic windows. Longer windows than the list supply no class condition. Exhaustiveness and self-count still apply to the whole list.

[Counting Circles](counting-circles.md) is the printed-digit shorthand with each cell listed once, selfCount true, empty classes and counts, exhaustive false and no windowLength.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| cells | The occurrences to count. | Required. |
| classes | Arbitrary numeric classes; a class may overlap another. | Required. |
| counts | Required count for each class, in the same order. | Required. |
| exhaustive | Require every read number to belong to at least one class. | false. |
| selfCount | Require each occurring number to equal its frequency. | false. |
| windowLength | Apply class counts to every full window of this length. | Absent; count over the whole list. |
| loop | Include cyclic windows. | false. |
| channel | Read printed digits (D) or effective values (V). | D. |

## Maths

Class: **with aggregates**.

The [shared predicates](predicates.md) define the notation and operations.

```text
|classes|=|counts| ∧ (∀n∈counts:n>=0) ∧ (selfCount → ownFrequencies(cells,channel)) ∧ (if present(windowLength) then classWindows(cells,classes,counts,unwrap(windowLength),loop,channel) else ∀i∈[0,|classes|): 0<=i ∧ i<|counts| ∧ classCount(cells,classes[i],channel)=counts[i]) ∧ (exhaustive → ∀c∈cells: ∃ns∈classes:read(c,channel)∈ns)
```

## Example

````markdown
---
format: open-rules
title: Digit Profile example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
digit-profile cells ["r1c1","r1c2","r1c3"] classes [[1,3,5,7,9],[2,4,6,8]] counts [2,1] exhaustive true
```
````

Satisfies the rule: Digits 1,3,4 give two odd and one even occurrence.

Breaks the rule: Digits 1,2,4 give one odd and two even occurrences.
