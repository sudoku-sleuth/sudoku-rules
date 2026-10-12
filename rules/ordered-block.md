---
name: Ordered Block
url: https://rules.sudoku-sleuth.com/ordered-block.md
kind: ordered-block
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: list<cell>
  digits:
    description: The allowed or required digits, listed explicitly; repeats in the list count where the rule says so.
    default: Required.
    type: list<digit>
---

# Ordered Block

The listed digits appear as a consecutive block of cells, in exactly that order.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| cells | The marked cells, for example r1c1-r1c2-r2c2. | Required. |
| digits | The allowed or required digits, listed explicitly; repeats in the list count where the rule says so. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∃p∈[0,|cells|-|digits|+1): ∀i∈[0,|digits|): D(cells[p+i])=digits[i]
```

There is a starting position where the contiguous subsequence of D(cells) equals digits in its listed order.

## Example

````markdown
---
format: open-rules
title: Ordered Block example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
ordered-block r1c1-r1c2-r1c3 digits [2,3]
```
````

Satisfies the rule: r1c1=1, r1c2=2, r1c3=3. 2 then 3 appears as a contiguous block.

Breaks the rule: r1c1=1, r1c2=3, r1c3=2. The digits occur in the wrong order.
