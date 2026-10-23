---
name: Lookup
url: https://rules.sudoku-sleuth.com/lookup.md
kind: lookup
shape: Cells
parameters:
  mode:
    type: enum{single,count,queries}
    description: One dynamic source, a list of dynamic sources, or explicit queries.
    default: single.
  cells:
    type: list<cell>
    description: The cells in lookup order, starting at position one.
    default: Empty list.
  cell:
    type: cell
    description: The cell whose number gives the lookup position.
    default: boardCell(1,1).
  indexChannel:
    type: Channel
    description: The channel supplying the position.
    default: D.
  channel:
    type: Channel
    description: The channel supplying the looked-up and target numbers.
    default: D.
  offset:
    type: position
    description: Add this offset to the index number before looking up the position.
    default: 0
  target:
    type: optional<number>
    description: A fixed comparison target, taking precedence over targetCell.
    default: Absent; use targetCell or the index cell.
  targetCell:
    type: optional<cell>
    description: The cell supplying the comparison target.
    default: Absent; use the index cell.
  relation:
    type: PairRelation
    description: The relation from the looked-up number to the target number.
    default: difference 0 (equal).
  sources:
    type: list<cell>
    description: Source occurrences in count mode.
    default: Empty list.
  queries:
    type: list<LookupQuery>
    description: Ordered lookups, each with its own cells, one-based index, target, channel and relation.
    default: Empty list.
  total:
    type: position
    description: Required number of successful queries.
    default: "1."
  firstMatch:
    type: boolean
    description: Exclude earlier matching targets in each query.
    default: false.
  increasing:
    type: list<cell>
    description: A source path required to increase in printed digits.
    default: Empty list.
  reverseRelation:
    type: boolean
    description: Compare the query target with the looked-up value.
    default: false.
  nonempty:
    type: boolean
    description: Require an increasing source path to be nonempty.
    default: false.
layer: block
---

# Lookup

Look up one-based positions in ordered cell lists and count successful relations. Single and count modes read indices from source cells; queries mode accepts explicit indices and targets. Repeated sources and queries count separately. Fractional and out-of-range indices miss. Targets may be fixed numbers, another cell, or each source itself.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| mode | `enum{single,count,queries}` | One dynamic source, a list of dynamic sources, or explicit queries. | single. |
| cells | `list<cell>` | The cells in lookup order, starting at position one. | Empty list. |
| cell | `cell` | The cell whose number gives the lookup position. | boardCell(1,1). |
| indexChannel | `Channel` | The channel supplying the position. | D. |
| channel | `Channel` | The channel supplying the looked-up and target numbers. | D. |
| offset | `position` | Add this offset to the index number before looking up the position. | 0 |
| target | `optional<number>` | A fixed comparison target, taking precedence over targetCell. | Absent; use targetCell or the index cell. |
| targetCell | `optional<cell>` | The cell supplying the comparison target. | Absent; use the index cell. |
| relation | `PairRelation` | The relation from the looked-up number to the target number. | difference 0 (equal). |
| sources | `list<cell>` | Source occurrences in count mode. | Empty list. |
| queries | `list<LookupQuery>` | Ordered lookups, each with its own cells, one-based index, target, channel and relation. | Empty list. |
| total | `position` | Required number of successful queries. | 1. |
| firstMatch | `boolean` | Exclude earlier matching targets in each query. | false. |
| increasing | `list<cell>` | A source path required to increase in printed digits. | Empty list. |
| reverseRelation | `boolean` | Compare the query target with the looked-up value. | false. |
| nonempty | `boolean` | Require an increasing source path to be nonempty. | false. |

## Maths

Class: **with aggregates**.

The [shared predicates](predicates.md) define the notation and operations.

```text
let activeQueries=if mode="queries" then queries else ⟨lookupQuery(cells,read(s,indexChannel)+offset,if present(target) then unwrap(target) else if present(targetCell) then read(unwrap(targetCell),channel) else read(s,channel),channel,relation):s∈(if mode="single" then ⟨cell:i∈[0,1)⟩ else sources)⟩; (nonempty → |increasing|>0) ∧ (∀i∈[0,|increasing|-1): D(increasing[i])<D(increasing[i+1])) ∧ total=countWhere(activeQueries,λq:LookupQuery:(if reverseRelation then ⌊q.index⌋=q.index ∧ (∃k∈[1,|q.cells|+1): k=q.index ∧ pairRelation(q.relation,q.target,read(lookup(q.cells,k),q.channel))) else queryHit(q)) ∧ (firstMatch → ∀i∈[0,|q.cells|): i<q.index-1 → ¬pairRelation(q.relation,read(q.cells[i],q.channel),q.target)))
```

## Example

````markdown
---
format: open-rules
title: Lookup example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
lookup r1c2-r1c3 cell "r1c1" target 4
```
````

Satisfies the rule: r1c1=2, r1c2=3, r1c3=4. Position two in the list contains 4.

Breaks the rule: r1c1=3. The list has only two positions.
