---
name: Arrow
url: https://rules.sudoku-sleuth.com/arrow.md
kind: arrow
parameters:
  partial:
    type: boolean
    description: Whether the declaration supplies only a shaft fragment, for example under fog.
    default: false (complete arrow).
  bulb:
    description: The bulb cells in decimal reading order, normally left to right or top to bottom.
    default: Required.
    type: list<cell>
  line:
    description: The shaft cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
---

# Arrow

An arrow’s shaft sums to its bulb. Complete one-cell arrows compare effective values (printed digits after declared value modifiers) on both sides; every other case compares printed digits. A bulb with several cells forms a decimal number from its printed digits, in the supplied order. Digits may repeat on complete and partial arrows unless another puzzle rule forbids it.

For an ordinary horizontal bulb, list its cells left to right; for a vertical bulb, list them top to bottom. The supplied order determines the number, including for an unusually shaped bulb.

`partial true` means the supplied shaft is incomplete, for example because fog hides at least one more shaft cell. It does not mean that some player entries are blank. The visible shaft’s printed digits must leave a sum that a non-empty sequence of allowed digits can supply. On a standard 1–9 board, the visible sum is strictly less than the bulb number. If zero is allowed, equality is possible because the omitted part can contain zero.

When several shafts leave the same bulb, declare each shaft separately with the same `bulb` list. Each shaft must reach the bulb total on its own; their sums are not combined. The `line` lists shaft cells only, excluding the bulb.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| partial | Whether the declaration supplies only a shaft fragment, for example under fog. | false (complete arrow). |
| bulb | The bulb cells in decimal reading order, normally left to right or top to bottom. | Required. |
| line | The shaft cells in order, for example r1c1-r1c2-r1c3. | Required. |

## Maths

Class: **existential**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
|bulb|>0 ∧ decimalValid(bulb) ∧ let B=decimal(bulb);
(partial → ∃remainder:list<digit>: |remainder|>0 ∧ (∀d∈remainder:d∈𝔄) ∧ aggregate(line,"D","sum")+Σ_{d∈remainder}d=B)
∧ (¬partial → (|bulb|=1 → aggregate(line,"V","sum")=V(bulb[0])) ∧ (|bulb|!=1 → aggregate(line,"D","sum")=B))
```

The shared decimal reading forms the bulb. Complete one-cell arrows use V on both sides; all other arrows use D. A partial shaft leaves a nonempty arithmetic remainder from the allowed alphabet.

## Example

````markdown
---
format: open-rules
title: Arrow example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow r1c2-r1c3 bulb ["r1c1"]
```
````

Satisfies the rule: r1c2=2, r1c3=3, r1c1=5. The shaft digits 2 and 3 total the bulb 5.

Breaks the rule: r1c2=2, r1c3=4, r1c1=5. The shaft digits 2 and 4 total 6, exceeding the bulb 5.

### Shaft fragments

```rules
arrow r1c2 bulb ["r1c1"] partial true
```

With bulb 5, a supplied shaft digit 4 satisfies the rule on a standard 1–9 board: an omitted digit 1 completes the sum. A supplied shaft digit 5 breaks the rule on that board: no non-empty sequence of positive digits sums to zero.

If the board allows zero, the latter assignment satisfies the partial rule with an omitted zero. The alphabet matters beyond the strict inequality. With allowed symbols [2,5], bulb 5 and visible digit 2 leave 3, which no non-empty sequence of 2s and 5s can supply.
