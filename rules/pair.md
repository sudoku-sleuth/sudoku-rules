---
name: Pair
url: https://rules.sudoku-sleuth.com/pair.md
kind: pair
parameters:
  relation:
    description: 'The relationship keyword and any required whole-number value, for example difference 1.'
    default: Required.
    type: PairRelation
    syntax:
      form: keywords
      tag: op
      choices:
        difference: {value: integer}
        at-least: {value: integer}
        ratio: {value: integer}
        sum: {value: integer}
        less: {}
        multiple: {}
        shift: {}
  cells:
    description: The two marked cells in order, for example r1c1-r1c2.
    default: Required.
    type: list<cell>
    syntax: {form: cells, count: 2}
reading:
  group_by: [relation]
  variants:
    - when: {relation: {op: sum, value: 10}}
      family: X/V pairs
      heading: X pairs
      name: X
      noun: pairs
      one: "The two digits in {cells} sum to 10."
      many: "{count|Words} X pairs: in each, the two digits sum to 10."
      short: "{count|words} X pairs sum to 10"
      rule: "In each, the two digits sum to 10."
      terms: ["=X", separated by an X, joined by an X, connected by an X, marked with an X]
    - when: {relation: {op: sum, value: 5}}
      family: X/V pairs
      heading: V pairs
      name: V
      noun: pairs
      one: "The two digits in {cells} sum to 5."
      many: "{count|Words} V pairs: in each, the two digits sum to 5."
      short: "{count|words} V pairs sum to 5"
      rule: "In each, the two digits sum to 5."
      terms: ["=V", separated by a V, joined by a V, connected by a V, marked with a V]
    - when: {relation: {op: shift}}
      heading: Shifter dots
      noun: dots
      one: "The two digits in {cells} share either parity (both odd or both even) or polarity (both low, 1 to 4, or both high, 6 to 9), never neither and never both. A shifter dot never has a 5."
      many: "{count|Words} shifter dots. On each, the two digits share either parity (both odd or both even) or polarity (both low, 1 to 4, or both high, 6 to 9), never neither and never both. A shifter dot never has a 5."
      rule: "On each, the two digits share either parity (both odd or both even) or polarity (both low, 1 to 4, or both high, 6 to 9), never neither and never both. A shifter dot never has a 5."
      terms: [shifter dot, shifter dots, "~parity", "~polarity"]
    - when: {relation: {op: difference}}
      heading: "Pairs differing by {relation.value}"
      noun: pairs
      one: "The two digits in {cells} {relation}."
      many: "{count|Words} pairs: in each, the two digits {relation}."
      rule: "In each, the two digits {relation}."
    - when: {relation: {op: at-least}}
      heading: "Pairs differing by at least {relation.value}"
      noun: pairs
      one: "The two digits in {cells} {relation}."
      many: "{count|Words} pairs: in each, the two digits {relation}."
      rule: "In each, the two digits {relation}."
    - when: {relation: {op: ratio}}
      heading: "Pairs with ratio {relation.value}:1"
      noun: pairs
      one: "The two digits in {cells} {relation}."
      many: "{count|Words} pairs: in each, the two digits {relation}."
      rule: "In each, the two digits {relation}."
    - when: {relation: {op: sum}}
      heading: "Pairs that sum to {relation.value}"
      noun: pairs
      one: "The two digits in {cells} {relation}."
      many: "{count|Words} pairs: in each, the two digits {relation}."
      rule: "In each, the two digits {relation}."
    - when: {relation: {op: less}}
      heading: Rising pairs
      noun: pairs
      one: "The two digits in {cells} {relation}."
      many: "{count|Words} pairs: in each, the two digits {relation}."
      rule: "In each, the two digits {relation}."
    - when: {relation: {op: multiple}}
      heading: Pairs where one is a multiple of the other
      noun: pairs
      one: "The two digits in {cells} {relation}."
      many: "{count|Words} pairs: in each, the two digits {relation}."
      rule: "In each, the two digits {relation}."
---

# Pair

The two values obey the stated relationship: a difference, ratio, total, multiple, inequality or shift.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| relation | The relationship keyword and any required whole-number value, for example difference 1. | Required. |
| cells | The two marked cells in order, for example r1c1-r1c2. | Required. |

## Rule lines

Write the two cells in order, then a relationship keyword. Values in rule lines are whole numbers. The `relation` parameter declares these keyword forms; tools derive the grammar from that declaration.

| Form | Meaning |
| --- | --- |
| `pair r1c1-r1c2 difference 2` | The values differ by exactly 2. |
| `pair r1c1-r1c2 at-least 3` | The values differ by at least 3. |
| `pair r1c1-r1c2 ratio 3` | One value is three times the other. |
| `pair r1c1-r1c2 sum 10` | The values total 10. |
| `pair r1c1-r1c2 less` | The first value is less than the second. |
| `pair r1c1-r1c2 multiple` | The larger is an integer multiple of the smaller; two zeros also satisfy it. |
| `pair r1c1-r1c2 shift` | Both values are integers other than 5; they share exactly one of parity and being greater than 5. |

A dot's colour is drawing metadata. State its relationship with `pair`, whether the dot is grey, brown or another colour. [Kropki](kropki.md) names the two usual relationships: white is `difference 1`, black is `ratio 2`. The former `relation {"op":...}` form is replaced by these keywords.

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
|cells|=2 ∧ pairRelation(relation,V(cells[0]),V(cells[1]))
```

The two cell values obey the supplied relation. The shared predicates define each relation: difference, ratio, sum, inequality, multiple or shift.

The shift relation is defined for integer values.

## Example

````markdown
---
format: open-rules
title: Pair example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
pair r1c1-r1c2 sum 10
```
````

Satisfies the rule: r1c1=3, r1c2=7. 3 and 7 add up to the stated total 10.

Breaks the rule: r1c1=3, r1c2=8. 3 and 8 add up to 11 instead of 10.
