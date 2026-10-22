---
name: Mapped Values
url: https://rules.sudoku-sleuth.com/mapped-values.md
kind: mapped-values
shape: Global
parameters:
  name:
    type: string
    description: "Selection name; H means board shading."
    default: "Required."
  scope:
    type: set<cell>
    description: "Cells where the selected transformation applies."
    default: "Required."
  channel:
    type: string
    description: "Output channel; V or an independent name."
    default: '"V".'
  mode:
    type: enum{affine,map,free}
    description: "Transformation of selected digits."
    default: "affine."
  factor:
    type: number
    description: "Affine multiplier."
    default: "1."
  offset:
    type: number
    description: "Affine offset."
    default: "0."
  mapping:
    type: list<ValueMap>
    description: "Explicit digit and value records."
    default: "Empty list."
  allowed:
    type: list<number>
    description: "Allowed selected values in free mode."
    default: "Empty list."
  different:
    type: boolean
    description: "Require selected values to differ from face digits."
    default: "false."
  outside:
    type: enum{identity,free}
    description: "Policy for cells outside scope."
    default: "identity."
---

# Mapped Values

Constrain one numeric channel using a shared selection inside scope. Selected cells use an affine transformation, an explicit digit-to-value map, or a free value from the allowed list. Unselected cells in scope keep their digits. Outside scope, identity requires the face digit and free imposes no condition. Each digit has at most one map entry; every selected digit must have an entry in map mode. All declarations sharing a channel constrain the same values, so conflicting mappings are rejected together. Named channels are read through channelValue in formulas; the reserved channel V is the effective value used by existing valued rules. Channel D cannot be written.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| name | Selection name; H means board shading. | Required. |
| scope | Cells where the selected transformation applies. | Required. |
| channel | Output channel; V or an independent name. | "V". |
| mode | Transformation of selected digits. | affine. |
| factor | Affine multiplier. | 1. |
| offset | Affine offset. | 0. |
| mapping | Explicit digit and value records. | Empty list. |
| allowed | Allowed selected values in free mode. | Empty list. |
| different | Require selected values to differ from face digits. | false. |
| outside | Policy for cells outside scope. | identity. |

## Maths

Class: **existential**.

The [shared predicates](predicates.md) define the notation and operations.

```text
channel!="D" ∧ validValueMap(mapping) ∧ ∀c∈C: let v=channelValue(channel,c); if c∈scope then (if marked(name,c) then (if mode="affine" then v=factor*D(c)+offset else if mode="map" then mappedValue(D(c),v,mapping) else v∈allowed) ∧ (different → v!=D(c)) else v=D(c)) else (outside="identity" → v=D(c))
```

## Example

````markdown
---
format: open-rules
title: Mapped Values example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
mapped-values name "H" scope ["r1c1","r1c2"] factor 2
```
````

Satisfies the rule: r1c1=3 is shaded and has value 6; unshaded r1c2=2 has value 2. Other cells keep their digits.

Breaks the rule: The same shading with r1c1 value 3.
