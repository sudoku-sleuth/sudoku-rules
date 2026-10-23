---
name: Anti King
url: https://rules.sudoku-sleuth.com/anti-king.md
kind: anti-king
parameters: {}
alias_of: relation-scope
alias_bind:
  cells: C
  relations: ⟨relationSpec("difference",0):i∈[0,1)⟩
  mode: '"incident"'
  move: '"king"'
  anchors: "{c∈C:D(c)∈𝔄}"
  except: ⟨⟨c:c∈orderedCells(C),false⟩:i∈[0,0)⟩
  negative: "true"
  channel: '"D"'
layer: rule
---


# Anti King

Cells a chess king move apart contain different digits.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |

## Definition

Block: [relation-scope](relation-scope.md) — `cells=C; relations=⟨relationSpec("difference",0):i∈[0,1)⟩; mode="incident"; move="king"; anchors={c∈C:D(c)∈𝔄}; except=⟨⟨c:c∈orderedCells(C),false⟩:i∈[0,0)⟩; negative=true; channel="D"`.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.


For every distinct pair at Chebyshev distance 1: their digits differ.

## Example

````markdown
---
format: open-rules
title: Anti King example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-king
```
````

Satisfies the rule: r1c1=1, r2c2=5. The cells share a corner and contain different digits.

Breaks the rule: r1c1=1, r2c2=1. A king-related pair repeats a digit.
