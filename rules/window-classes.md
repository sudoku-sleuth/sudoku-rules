---
name: Window Classes
url: https://rules.sudoku-sleuth.com/window-classes.md
kind: window-classes
parameters:
  classes:
    description: "The digit classes to use: parity, remainder or alphabet thirds."
    default: Required.
    type: ClassSystem
alias_of: class-pattern
alias_bind:
  line: ⟨c:c∈orderedCells(C),false⟩
  edges: absent(⟨⟨c:c∈orderedCells(C),false⟩:i∈[0,0)⟩)
  loop: "false"
  classification: if classes="entropy" then "entropy" else "residue"
  modulus: if classes="parity" then 2 else 3
  length: "3"
  geometry: '"squares"'
  mode: '"cover"'
  fixedClass: absent(|{}|)
  channel: '"D"'
layer: rule
---


# Window Classes

Every two-by-two window contains every stated digit class.

Use `classes "entropy"` for global entropy and `classes "mod3"` for global modularity. On a 1–9 board, entropy requires a digit from each of 1–3, 4–6 and 7–9; modularity requires remainders 0, 1 and 2 on division by 3. Each 2×2 has four cells, so a class may occur more than once. Entropy divides the ordered alphabet into equal thirds; on 1–6 these are 1–2, 3–4 and 5–6.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| classes | `ClassSystem` | The digit classes to use: parity, remainder or alphabet thirds. | Required. |

## Definition

Defined by [class-pattern](class-pattern.md) with the settings in `alias_bind`.



The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

This is a bound shorthand for [class-pattern](class-pattern.md).

Every 2×2 board window contains all classes named by classes at least once.

## Example

````markdown
---
format: open-rules
title: Window Classes example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
window-classes classes "parity"
```
````

Satisfies the rule: r1c1=1, r1c2=2, r2c1=4, r2c2=5. This two-by-two window includes both parities.

Breaks the rule: r1c1=1, r1c2=3, r2c1=5, r2c2=7. A two-by-two window contains only odd digits.
