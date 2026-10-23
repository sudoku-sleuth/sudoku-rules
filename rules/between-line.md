---
name: Between Line
url: https://rules.sudoku-sleuth.com/between-line.md
kind: between-line
aliases: ["Between"]
parameters:
  ends:
    description: The two end cells, in their stated order.
    default: Required.
    type: list<cell>
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
layer: rule
alias_of: endpoint-range
alias_bind:
  ends: ends
  line: line
  outside: "false"
  gap: "0"
---

# Between Line

Every digit between the ends is strictly greater than the smaller end and strictly less than the larger end.

The `line` lists only the cells between the two ends; `ends` lists the circles. Interior digits may repeat when other rules allow. They need not increase or decrease along the line.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| ends | `list<cell>` | The two end cells, in their stated order. | Required. |
| line | `path<cell>` | The cells in order, for example r1c1-r1c2-r1c3. | Required. |

## Definition

Block: [endpoint-range](endpoint-range.md) — `ends=ends; line=line; outside=false; gap=0`.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.



Every interior digit lies strictly between the endpoint digits.

## Example

````markdown
---
format: open-rules
title: Between Line example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
between-line r1c2 ends ["r1c1","r1c3"]
```
````

Satisfies the rule: r1c2=2, r1c1=1, r1c3=3. 2 lies strictly between end digits 1 and 3.

Breaks the rule: r1c2=4, r1c1=1, r1c3=3. 4 is outside the interval between 1 and 3.
