---
name: Unique
url: https://rules.sudoku-sleuth.com/unique.md
kind: unique
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: set<cell>
reading:
  group_by: []
  parts:
    housesTitle:
      - when: {condition: housesStandAlone}
        text: "Normal sudoku rules"
      - text: "Unique houses"
  variants:
    - when: {condition: isHouse}
      heading: "{part:housesTitle}"
      list: never
      terms: [normal sudoku, standard sudoku, classic sudoku, regular sudoku]
      one: "All the digits in {cells} are different. It is one of the rows, columns or boxes."
      many: "The {count|words} lines are the {houses}."
      rule: "All the digits in each are different."
    - heading: Extra regions
      noun: regions
      one: "All the digits in {cells} are different."
      many: "{count|Words} extra regions. In each, all the digits are different."
      rule: "In each, all the digits are different."
---

# Unique

All digits in the listed cells are different. Declare each row, column and region that needs this rule.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| cells | The marked cells, for example r1c1-r1c2-r2c2. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
distinct_D(cells)
```

Different cells in the group have different digits. This does not add missing-digit coverage when the group is shorter than the alphabet.

## Example

````markdown
---
format: open-rules
title: Unique example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
unique r1c1-r1c2
```
````

Satisfies the rule: r1c1=1, r1c2=2. The marked digits are different.

Breaks the rule: r1c1=1, r1c2=1. The marked digits repeat.
