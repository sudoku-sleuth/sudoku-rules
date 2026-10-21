---
name: Allowed Digits
url: https://rules.sudoku-sleuth.com/allowed-digits.md
kind: allowed-digits
parameters:
  line:
    description: The marked cells, listed with hyphens; their order does not affect this rule.
    default: Required.
    type: path<cell>
  digits:
    description: The permitted printed digits. Listing a digit does not require it to appear.
    default: Required.
    type: list<digit>
---

# Allowed Digits

Every marked cell contains one of the listed digits. The cells can form a line, a cage, a shaded area or a scattered group. The drawing does not add a sum or a no-repeat condition.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The marked cells, listed with hyphens; their order does not affect this rule. | Required. |
| digits | The permitted printed digits. Listing a digit does not require it to appear. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∀c∈line: D(c)∈digits
```

Every listed cell contains an allowed digit. Cell order and repeated entries in the allowed list do not change this condition. It does not require every allowed digit to occur.

A region whose category is chosen by the solver needs more than this rule. For example, “all cells use either {1,2,4,8} or {3,6,9}” requires one shared choice for the whole region. Allowing their union would also permit a mixture. Restrictions between neighbouring regions are separate conditions.

## Example

````markdown
---
format: open-rules
title: Allowed Digits example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
allowed-digits r1c1-r1c2 digits [2,3,5,7]
```
````

Satisfies the rule: r1c1=2, r1c2=3. Both marked digits belong to the allowed list.

Breaks the rule: r1c1=2, r1c2=4. 4 is absent from the allowed list.
