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
    allow_empty: true
    type: list<list<number>>
    description: Arbitrary numeric classes; a class may overlap another.
    default: Required.
  counts:
    allow_empty: true
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
  comparison:
    type: enum{exact,"at-least"}
    description: Compare each class frequency exactly or by a lower bound.
    default: exact.
  maximumDistinct:
    type: optional<number>
    description: Largest permitted number of different read values.
    default: Absent; no bound.
  repeats:
    type: boolean
    description: Allow equal read values in the whole occurrence list.
    default: true.
  balancePairs:
    type: list<list<number>>
    description: Adjacent pairs of numeric classes whose frequencies must match.
    default: Empty list.
  sumFree:
    type: optional<position>
    description: Forbid sums of two members modulo this positive modulus from the support.
    default: Absent.
layer: block
---


# Digit Profile

Each listed class occurs its stated number of times. Overlapping classes count independently. Repeating a number inside a class does not count it twice. Repeated cell occurrences count separately. Exhaustive profiles allow only numbers belonging to the listed classes. With `selfCount true`, each occurring number equals its frequency in the whole list. Optional `windowLength` applies the listed class counts to each full window instead of the whole list; `loop true` includes cyclic windows. Longer windows than the list supply no class condition. Exhaustiveness and self-count still apply to the whole list.

[Counting Circles](counting-circles.md) is the printed-digit shorthand with each cell listed once, selfCount true, empty classes and counts, exhaustive false and no windowLength.

Class counts use `comparison exact` or `comparison "at-least"`. `maximumDistinct` bounds the support, and `repeats false` requires all occurrences to read different values.

With `sumFree`, sums of any two read values, including a value with itself, must have a remainder outside the support. The modulus is a positive integer and all read values are integers.

Empty `classes` and `counts` add no class-frequency condition; other profile settings still apply. These inputs must be supplied explicitly.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cells | `list<cell>` | The occurrences to count. | Required. |
| classes | `list<list<number>>` | Arbitrary numeric classes; a class may overlap another. | Required. |
| counts | `list<position>` | Required count for each class, in the same order. | Required. |
| exhaustive | `boolean` | Require every read number to belong to at least one class. | false. |
| channel | `Channel` | Read printed digits (D) or effective values (V). | D. |
| selfCount | `boolean` | Require every occurring number to equal its own frequency. | false. |
| windowLength | `optional<position>` | Apply class counts to every full window of this length. | Absent; count over the whole list. |
| loop | `boolean` | Include cyclic windows when windowLength is present. | false. |
| comparison | `enum{exact,"at-least"}` | Compare each class frequency exactly or by a lower bound. | exact. |
| maximumDistinct | `optional<number>` | Largest permitted number of different read values. | Absent; no bound. |
| repeats | `boolean` | Allow equal read values in the whole occurrence list. | true. |
| balancePairs | `list<list<number>>` | Adjacent pairs of numeric classes whose frequencies must match. | Empty list. |
| sumFree | `optional<position>` | Forbid sums of two members modulo this positive modulus from the support. | Absent. |

## Maths

Class: **with aggregates**.

The [shared predicates](predicates.md) define the notation and operations.

```text
((|classes|=|counts| ∧ (∀n∈counts:n>=0) ∧ repeatPolicy(cells,channel,repeats) ∧ (present(maximumDistinct) → |{read(c,channel):c∈cells}|<=unwrap(maximumDistinct)) ∧ (selfCount → ownFrequencies(cells,channel)) ∧ (if present(windowLength) then classWindows(cells,classes,counts,unwrap(windowLength),loop,channel,comparison) else classProfile(cells,classes,counts,channel,comparison)) ∧ (exhaustive → ∀c∈cells: ∃ns∈classes:read(c,channel)∈ns)) ∧ |balancePairs| mod 2=0 ∧ (∀i∈[0,|balancePairs|): i<⌊|balancePairs|/2⌋ → 0<=2*i ∧ 2*i<|balancePairs| ∧ 0<=2*i+1 ∧ 2*i+1<|balancePairs| ∧ classCount(cells,balancePairs[2*i],channel)=classCount(cells,balancePairs[2*i+1],channel))) ∧ (present(sumFree) → unwrap(sumFree)>=1 ∧ ⌊unwrap(sumFree)⌋=unwrap(sumFree) ∧ (∀c∈cells: ⌊read(c,channel)⌋=read(c,channel)) ∧ repeatPolicy(cells,channel,repeats) ∧ (∀a,b,c∈cells: ⌊(read(a,channel)+read(b,channel))⌋=read(a,channel)+read(b,channel) ∧ rem(read(a,channel)+read(b,channel),unwrap(sumFree))!=read(c,channel)))
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
