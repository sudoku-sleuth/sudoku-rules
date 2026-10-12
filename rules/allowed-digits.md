---
name: Allowed Digits
url: https://rules.sudoku-sleuth.com/allowed-digits.md
kind: allowed-digits
parameters:
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
  digits:
    description: The allowed or required digits, listed explicitly; repeats in the list count where the rule says so.
    default: Required.
    type: list<digit>
---

# Allowed Digits

Every marked cell contains one of the listed digits.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| digits | The allowed or required digits, listed explicitly; repeats in the list count where the rule says so. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∀c∈line: D(c)∈digits
```

Every cell contains one of the listed digits.

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
