---
name: Blocked Sight
url: https://rules.sudoku-sleuth.com/blocked-sight.md
kind: blocked-sight
shape: Outside
parameters:
  cell:
    type: optional<cell>
    description: The sight origin.
    default: Absent; required for origin-dependent modes.
  rays:
    type: list<list<cell>>
    description: Ordered rays, nearest first, each excluding the origin.
    default: Required.
  blockers:
    type: set<cell>
    description: Fixed blockers for listed mode.
    default: Empty set.
  includeBlocker:
    type: boolean
    description: Include the first blocker.
    default: false.
  includeOrigin:
    type: boolean
    description: Include the origin once across all rays.
    default: false.
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: D.
  offset:
    type: number
    description: Add this offset to the count or sum.
    default: "0."
  output:
    type: enum{count,sum}
    description: Count selected cells or sum their numbers.
    default: Required.
  records:
    type: boolean
    description: Keep only record highs within each unblocked ray.
    default: false.
  total:
    type: optional<number>
    description: A fixed target, replacing the origin or target-cell total.
    default: Absent; use targetCells or the origin number.
  blocking:
    type: SightBlock
    description: Block at listed cells, different parity, different shading colour, a different primary region, greater or at-least numbers, or numbers unequal to the origin.
    default: listed.
  targetCells:
    type: list<cell>
    description: The cells whose numbers supply the target sum.
    default: Empty list; use the origin number.
  occurrences:
    type: boolean
    description: Count ray occurrences instead of deduplicated cells.
    default: false.
layer: block
composition: Arbitrary rays, listed or value blockers, counts or totals, and origin/blocker inclusion.
---

# Blocked Sight

Each ray stops at its first blocker. Blockers may be listed cells or depend on numbers, shading colour or primary regions. Count the selected cells or add their numbers, then add the offset. The origin can be included once. Compare the result with a fixed total, a target-cell sum, or the origin number. Record-high sight keeps numbers greater than every earlier number on that ray.

A cell appearing on several rays contributes once. Rays exclude the origin; record highs are computed independently on each ray.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cell | `optional<cell>` | The sight origin. | Absent; required for origin-dependent modes. |
| rays | `list<list<cell>>` | Ordered rays, nearest first, each excluding the origin. | Required. |
| blockers | `set<cell>` | Fixed blockers for listed mode. | Empty set. |
| includeBlocker | `boolean` | Include the first blocker. | false. |
| includeOrigin | `boolean` | Include the origin once across all rays. | false. |
| channel | `Channel` | Read printed digits (D) or effective values (V). | D. |
| offset | `number` | Add this offset to the count or sum. | 0. |
| output | `enum{count,sum}` | Count selected cells or sum their numbers. | Required. |
| records | `boolean` | Keep only record highs within each unblocked ray. | false. |
| total | `optional<number>` | A fixed target, replacing the origin or target-cell total. | Absent; use targetCells or the origin number. |
| blocking | `SightBlock` | Block at listed cells, different parity, different shading colour, a different primary region, greater or at-least numbers, or numbers unequal to the origin. | listed. |
| targetCells | `list<cell>` | The cells whose numbers supply the target sum. | Empty list; use the origin number. |
| occurrences | `boolean` | Count ray occurrences instead of deduplicated cells. | false. |

## Maths

Class: **existential**.

The [shared predicates](predicates.md) define the notation and every named predicate.

```text
if occurrences then records ∧ blocking="listed" ∧ |blockers|=0 ∧ ¬includeOrigin ∧ present(total) ∧ Σ_{ray∈rays} |visibleRecords(ray,channel)|+offset=unwrap(total) else present(cell) ∧ ((∀ray∈rays:unwrap(cell)∉ray) ∧ (blocking="different-parity" → ∀c∈C: ⌊read(c,channel)⌋=read(c,channel)) ∧ let selected={c∈C: (includeOrigin ∧ c=unwrap(cell)) ∨ ∃ray∈rays: let prefix=blockedPrefix(ray,λb:cell:sightBlock(unwrap(cell),b,blocking,blockers,channel),includeBlocker); if records then c∈visibleRecords(prefix,channel) else c∈prefix};
aggregate(selected,channel,output)+offset=(if present(total) then unwrap(total) else if |targetCells|>0 then aggregate(targetCells,channel,"sum") else read(unwrap(cell),channel)))
```

## Example

````markdown
---
format: open-rules
title: Blocked Sight example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
blocked-sight cell "r1c1" rays [["r1c2","r1c3"]] blockers ["r1c3"] output "count"
```
````

Satisfies the rule: r1c1=1. The first ray cell is seen; its next cell blocks sight, giving count 1.

Breaks the rule: r1c1=2. The sight count is 1, which differs from the origin digit 2.
