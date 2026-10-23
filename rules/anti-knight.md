---
name: Anti Knight
url: https://rules.sudoku-sleuth.com/anti-knight.md
kind: anti-knight
parameters: {}
alias_of: relation-scope
alias_bind:
  cells: C
  relations: ⟨relationSpec("difference",0):i∈[0,1)⟩
  mode: '"incident"'
  move: '"knight"'
  anchors: "{c∈C:D(c)∈𝔄}"
  except: ⟨⟨c:c∈orderedCells(C),false⟩:i∈[0,0)⟩
  negative: "true"
  channel: '"D"'
layer: rule
---


# Anti Knight

Cells a chess knight move apart contain different digits.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |

## Definition

Block: [relation-scope](relation-scope.md) — `cells=C; relations=⟨relationSpec("difference",0):i∈[0,1)⟩; mode="incident"; move="knight"; anchors={c∈C:D(c)∈𝔄}; except=⟨⟨c:c∈orderedCells(C),false⟩:i∈[0,0)⟩; negative=true; channel="D"`.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.


For every in-board pair separated by (±1,±2) or (±2,±1): their digits differ.

## Example

````markdown
---
format: open-rules
title: Anti Knight example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-knight
```
````

Satisfies the rule: r1c1=1, r2c3=6. The cells are a knight move apart and contain different digits.

Breaks the rule: r1c1=1, r2c3=1. A knight-related pair repeats a digit.
