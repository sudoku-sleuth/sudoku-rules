---
name: Renban
url: https://rules.sudoku-sleuth.com/renban.md
kind: renban
parameters:
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required. L has no repeated cell.
    type: path<cell>
reading:
  terms: [renban, consecutive set, run of consecutive]
  variants:
    - heading: Renban lines
      noun: lines
      one: "The digits along {line} are different and form a run of consecutive numbers, in any order."
      many: "{count|Words} lines. On each, the digits are different and form a run of consecutive numbers, in any order."
---

# Renban

The line contains different values that form a consecutive run, in any order.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. L has no repeated cell. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
|line|>0 ∧ distinctAt(line,λoccurrence:cell: V(occurrence)) ∧ max_V(line)-min_V(line)=|line|-1 ∧ ∀k∈[0,|line|): ∃c∈line: V(c)=min_V(line)+k
```

The V values are distinct and max(V)−min(V)=length−1. On integer values, every integer in that interval appears.

## Example

````markdown
---
format: open-rules
title: Renban example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
renban r1c1-r1c2-r1c3
```
````

Satisfies the rule: r1c1=2, r1c2=1, r1c3=3. 2, 1, 3 contains the consecutive digits 1–3.

Breaks the rule: r1c1=2, r1c2=1, r1c3=4. 2, 1, 4 misses 3 and has a gap in its run.
