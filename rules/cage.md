---
name: Killer cage
url: https://rules.sudoku-sleuth.com/cage.md
kind: cage
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: set<cell>
  total:
    description: The total the digits or values must add up to.
    default: No total imposed.
    type: optional<number>
  repeats:
    description: Whether repeated digits are allowed.
    default: false (distinct digits).
    type: boolean
reading:
  group_by: [repeats]
  terms: [cage, cages, killer cage, killer cages]
  parts:
    totals:
      - when: {total: {varies: true}}
        text: " Totals run from {total.min} to {total.max}."
      - text: " Every total is {total.min}."
  variants:
    - when: {total: present, repeats: false}
      heading: Cages
      noun: cages
      item: "{cells} = {total}"
      one: "The digits in {cells} are different and sum to {total}."
      many: "{count|Words} cages cover {covered} cells. In each, the digits are different and sum to the cage's total.{part:totals}"
    - when: {total: present, repeats: true}
      heading: Cages that allow repeats
      noun: cages
      item: "{cells} = {total}"
      one: "The digits in {cells} sum to {total}, and may repeat."
      many: "{count|Words} cages cover {covered} cells. In each, the digits sum to the cage's total and may repeat.{part:totals}"
    - when: {repeats: false}
      heading: Cages without totals
      noun: cages
      one: "The digits in {cells} are different."
      many: "{count|Words} cages cover {covered} cells. In each, the digits are different. No totals are given."
    - heading: Cages without totals that allow repeats
      noun: cages
      one: "{cells} is a cage with no total that allows repeats, so it adds no rule."
      many: "{count|Words} cages cover {covered} cells. Each has no total and allows repeats, so they add no rule."
---

# Killer cage

Cage digits add up to the stated total value. Digits are different unless repeats are allowed. A cage without a total supplies the repeat rule alone.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| cells | The marked cells, for example r1c1-r1c2-r2c2. | Required. |
| total | The total the digits or values must add up to. | No total imposed. |
| repeats | Whether repeated digits are allowed. | false (distinct digits). |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
(¬repeats → distinct_D(cells)) ∧ (present(total) → valueSum(cells)=unwrap(total))
```

Digits differ unless repeats are allowed; when a total is supplied, the cage values add up to it.

## Example

````markdown
---
format: open-rules
title: Killer cage example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage r1c1-r1c2 total 3
```
````

Satisfies the rule: r1c1=1, r1c2=2. The different digits 1 and 2 total 3.

Breaks the rule: r1c1=1, r1c2=3. The digits 1 and 3 total 4 instead of 3.
