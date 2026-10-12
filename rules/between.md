---
name: Between
url: https://rules.sudoku-sleuth.com/between.md
kind: between
parameters:
  ends:
    description: The two end cells, in their stated order.
    default: Required.
    type: list<cell>
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
---

# Between

Every digit between the ends is strictly greater than the smaller end and strictly less than the larger end.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| ends | The two end cells, in their stated order. | Required. |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
|ends|=2 ∧ ∀c∈line: minimumPair(D(ends[0]),D(ends[1]))<D(c)<maximumPair(D(ends[0]),D(ends[1]))
```

Every interior digit is strictly between the two endpoint digits. cells excludes the ends.

## Example

````markdown
---
format: open-rules
title: Between example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
between r1c2 ends ["r1c1","r1c3"]
```
````

Satisfies the rule: r1c2=2, r1c1=1, r1c3=3. 2 lies strictly between end digits 1 and 3.

Breaks the rule: r1c2=4, r1c1=1, r1c3=3. 4 is outside the interval between 1 and 3.
