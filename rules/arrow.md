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
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
---

# Arrow

The values on an arrow’s shaft sum to the value in its circle (the bulb). Here, a one-cell bulb uses effective values: the printed digits after any declared value modifiers. A bulb with several cells forms a decimal number from its printed digits, in the supplied order; the shaft’s printed digits sum to that number.

For an ordinary horizontal bulb, list its cells left to right; for a vertical bulb, list them top to bottom. The supplied order determines the number, including for an unusually shaped bulb.

`partial true` means the supplied shaft is incomplete, for example because fog hides at least one more shaft cell. It does not mean that some player entries are blank. The visible shaft’s printed digits must leave a sum that a non-empty sequence of allowed digits can supply. On a standard 1–9 board, the visible sum is strictly less than the bulb number. If zero is allowed, equality is possible because the omitted part can contain zero.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| bulb | The bulb cells in decimal reading order, normally left to right or top to bottom. | Required. |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| partial | Whether the declaration supplies only a shaft fragment, for example under fog. | false (complete arrow). |

## Maths

Class: **existential**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
|bulb|>0 ∧ let B = Σ_{i∈[0,|bulb|)} D(bulb[i])*10^(|bulb|-1-i);
  (partial → ∃remainder:list<digit>: |remainder|>0 ∧ (∀d∈remainder: d∈𝔄) ∧ sum_D(line)+Σ_{d∈remainder} d=B)
  ∧ (¬partial → (|bulb|=1 → valueSum(line)=V(bulb[0]))
    ∧ (|bulb|!=1 → sum_D(line)=B))
```

D(c) is the printed digit in cell c; V(c) is its value after declared modifiers. Without modifiers, V(c)=D(c). B is the decimal number formed by the listed bulb digits. A complete one-cell bulb uses V on both sides; a complete multi-cell bulb uses D.

For a partial shaft, remainder is a non-empty sequence of symbols from the board’s allowed alphabet 𝔄. Its sum fills the gap between the supplied shaft and B. Repeated digits are allowed by this relation; any house or other puzzle constraint still applies to the complete arrow. The sequence states the arithmetic remainder, not the identities or geometry of hidden cells.

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
