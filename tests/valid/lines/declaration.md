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
