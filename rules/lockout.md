---
name: Lockout
url: https://rules.sudoku-sleuth.com/lockout.md
kind: lockout
parameters:
  ends:
    description: The two end cells, in their stated order.
    default: Required.
    type: list<cell>
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
  gap:
    description: The least difference between the two end digits.
    default: Required.
    type: number
layer: rule
alias_of: endpoint-range
alias_bind:
  ends: ends
  line: line
  outside: "true"
  gap: gap
---

# Lockout

The end digits differ by at least the stated gap. Every digit between them is below both ends or above both ends.

Use `gap 4` for the usual lockout rule. The `line` excludes the two diamond cells in `ends`. Each diamond ends a segment: declare each segment separately when a drawing contains more diamonds. Interior digits may repeat when other rules allow; they cannot equal either endpoint.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| ends | `list<cell>` | The two end cells, in their stated order. | Required. |
| line | `path<cell>` | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| gap | `number` | The least difference between the two end digits. | Required. |

## Definition

Block: [endpoint-range](endpoint-range.md) — `ends=ends; line=line; outside=true; gap=gap`.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.



The end gap holds and every interior digit is outside the closed interval between the ends.

## Example

````markdown
---
format: open-rules
title: Lockout example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
lockout r1c2 ends ["r1c1","r1c3"] gap 4
```
````

Satisfies the rule: r1c2=1, r1c1=2, r1c3=7. The ends differ by 5, and 1 is below both ends.

Breaks the rule: r1c2=4, r1c1=2, r1c3=7. 4 lies between the end digits.
