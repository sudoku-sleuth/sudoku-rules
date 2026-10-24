---
name: Profile Relation
url: https://rules.sudoku-sleuth.com/profile-relation.md
kind: profile-relation
shape: Cages
parameters:
  left:
    type: list<cell>
    description: Left cell occurrences.
    default: Required.
  right:
    type: list<cell>
    description: Right cell occurrences.
    default: Required.
  multiset:
    type: boolean
    description: Compare multiplicities as well as membership.
    default: true.
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: D.
  groups:
    type: optional<list<list<cell>>>
    description: Groups to compare pairwise in shared-support mode; absent uses left and right.
    default: Absent.
  maximumShared:
    type: optional<position>
    description: Bound the number of distinct shared values instead of requiring equal profiles.
    default: Absent.
layer: block
composition: Compare arbitrary numeric sets or multisets.
---

# Profile Relation

The two groups contain the same numbers. Multiset comparison requires the same number of occurrences of each number. Set comparison ignores multiplicities. Each side may list a cell more than once.

With `maximumShared`, every pair of supplied groups shares at most that many distinct values. Repeated occurrences count once. Without `groups`, compare left and right. This mode ignores `multiset`; with `maximumShared` absent, the original profile comparison applies.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| left | `list<cell>` | Left cell occurrences. | Required. |
| right | `list<cell>` | Right cell occurrences. | Required. |
| multiset | `boolean` | Compare multiplicities as well as membership. | true. |
| channel | `Channel` | Read printed digits (D) or effective values (V). | D. |
| groups | `optional<list<list<cell>>>` | Groups to compare pairwise in shared-support mode; absent uses left and right. | Absent. |
| maximumShared | `optional<position>` | Bound the number of distinct shared values instead of requiring equal profiles. | Absent. |

## Maths

Class: **with aggregates**.

The [shared predicates](predicates.md) define the notation and operations.

```text
if present(maximumShared) then unwrap(maximumShared)>=0 ∧ let inputs=if present(groups) then unwrap(groups) else ⟨if i=0 then left else right:i∈[0,2)⟩; ∀i,j∈[0,|inputs|): i<j → |{read(c,channel):c∈inputs[i]}∩{read(c,channel):c∈inputs[j]}|<=unwrap(maximumShared) else forall n∈({read(c,channel):c∈left} union {read(c,channel):c∈right}): if multiset then (classCount(left,{n},channel) = classCount(right,{n},channel)) else ((classCount(left,{n},channel) > 0) iff (classCount(right,{n},channel) > 0))
```

## Example

````markdown
---
format: open-rules
title: Profile Relation example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
profile-relation left ["r1c1","r1c2"] right ["r1c3","r1c4"]
```
````

Satisfies the rule: Digits 2,5 on the left and 5,2 on the right have the same multiset.

Breaks the rule: Digits 2,5 on the left and 2,2 on the right differ.
