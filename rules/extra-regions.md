---
name: Extra Regions
url: https://rules.sudoku-sleuth.com/extra-regions.md
kind: extra-regions
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: set<cell>
alias_of: relation-scope
alias_bind:
  cells: cells
  relations: ⟨relationSpec("difference",0):i∈[0,1)⟩
  mode: '"all"'
  move: '"orthogonal"'
  anchors: "{}"
  except: ⟨⟨c:c∈orderedCells(C),false⟩:i∈[0,0)⟩
  negative: "true"
  channel: '"D"'
layer: rule
---


# Extra Regions

All digits in the listed cells are different. Declare each row, column and region that needs this rule.

For an extra Sudoku region, list all its cells. With as many cells as allowed symbols, no repeats forces every symbol to appear. The same rule defines disjoint groups: declare one group for each relative box position, collecting that position from every box. Region geometry alone does not impose this rule.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cells | `set<cell>` | The marked cells, for example r1c1-r1c2-r2c2. | Required. |

## Definition

Block: [relation-scope](relation-scope.md) — `cells=cells; relations=⟨relationSpec("difference",0):i∈[0,1)⟩; mode="all"; move="orthogonal"; anchors={}; except=⟨⟨c:c∈orderedCells(C),false⟩:i∈[0,0)⟩; negative=true; channel="D"`.



The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

This is a bound shorthand for [relation-scope](relation-scope.md). Its header supplies every parameter of that rule.

Different cells in the group have different digits. This does not add missing-digit coverage when the group is shorter than the alphabet.

## Example

````markdown
---
format: open-rules
title: Extra Regions example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
extra-regions r1c1-r1c2
```
````

Satisfies the rule: r1c1=1, r1c2=2. The marked digits are different.

Breaks the rule: r1c1=1, r1c2=1. The marked digits repeat.
