---
name: Derived Count
url: https://rules.sudoku-sleuth.com/derived-count.md
kind: derived-count
shape: Cages
parameters:
  quantities:
    type: list<DerivedQuantity>
    description: Ordered aggregate pairs and their sum, product, absolute difference or directed ratio.
    default: Required.
  mode:
    type: enum{matches,distinct,rank}
    description: Count matches, distinct results, or one plus the number of smaller results.
    default: matches.
  target:
    type: number
    description: Comparison target; unused in distinct mode.
    default: '0.'
  relation:
    type: PairRelation
    description: Relation from each result to the target in matches mode.
    default: difference 0 (equal).
  total:
    type: position
    description: Required count or rank.
    default: Required.
---

# Derived Count

Derive one number from every operand pair, then count matching occurrences, distinct results, or rank a target among those results. Rank is one plus the number of occurrences strictly below the target; ties share that rank. Ratios divide left by right and require a nonzero right result. Distinct mode removes equal results only after every quantity has been calculated.

In distinct mode, omit target and relation.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| quantities | Ordered aggregate pairs and their sum, product, absolute difference or directed ratio. | Required. |
| mode | Count matches, distinct results, or one plus the number of smaller results. | matches. |
| target | Comparison target; unused in distinct mode. | 0. |
| relation | Relation from each result to the target in matches mode. | difference 0 (equal). |
| total | Required count or rank. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](predicates.md) define the notation and operations.

```text
(∀q∈quantities: quantityValid(q)) ∧ (if mode="distinct" then total=|{quantity(q):q∈{x∈quantities:quantityValid(x)}}| else if mode="rank" then total=1+countWhere(quantities,λq:DerivedQuantity:quantityValid(q) ∧ quantity(q)<target) else total=countWhere(quantities,λq:DerivedQuantity:quantityValid(q) ∧ pairRelation(relation,quantity(q),target)))
```

## Example

````markdown
---
format: open-rules
title: Derived Count example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
derived-count quantities [{"left":{"cells":["r1c1"],"channel":"D","operation":"sum","repeats":true},"right":{"cells":["r1c2"],"channel":"D","operation":"sum","repeats":true},"operation":"difference"}] target 2 total 1
```
````

Satisfies the rule: Digits 3 and 5 have absolute difference 2.

Breaks the rule: Digits 3 and 6 have absolute difference 3.
