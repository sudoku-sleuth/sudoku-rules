---
name: Hidden Modular
url: https://rules.sudoku-sleuth.com/hidden-modular.md
kind: hidden-modular
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: list<cell>
  extent:
    description: "How to choose the span: to-max, between-ends or first-x."
    default: Required.
    type: enum{"to-max","between-ends","first-x"}
---

# Hidden Modular

Choose the span by its stated extent. Every three consecutive digits in that span have different remainders when divided by 3.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| cells | The marked cells, for example r1c1-r1c2-r2c2. | Required. |
| extent | How to choose the span: to-max, between-ends or first-x. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
|𝔄|>0 ∧ ∀a,b∈[0,|cells|):
  a<=b ∧ ((extent="to-max" ∧ a=0 ∧ firstOccurrence(cells,𝔄[|𝔄|-1],b))
    ∨ (extent="between-ends" ∧ ∃i,j∈[0,|cells|): firstOccurrence(cells,𝔄[0],i)
       ∧ firstOccurrence(cells,𝔄[|𝔄|-1],j) ∧ a=minimumPosition(i,j) ∧ b=maximumPosition(i,j))
    ∨ (extent="first-x" ∧ a=0 ∧ |cells|>0 ∧ 1<=D(cells[0])<=|cells| ∧ b=D(cells[0])-1))
  → ∀s∈[a,b-1): distinct_f(window(cells,3,s,false),λc:cell: classMod3(D(c)))
```

Choose the span from the clue through the maximum (to-max), between minimum and maximum inclusive (between-ends), or the first D(cells[0]) positions (first-x). Every triple in that span has three distinct remainders modulo 3.

## Example

````markdown
---
format: open-rules
title: Hidden Modular example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
hidden-modular r1c1-r1c2-r1c3 extent "first-x"
```
````

Satisfies the rule: r1c1=3, r1c2=1, r1c3=2. The first digit selects a three-cell span with all three remainders.

Breaks the rule: r1c1=3, r1c2=1, r1c3=4. The selected span repeats a remainder.

Missing endpoints or an invalid first-x extent select no span, so there are no triples to check.
