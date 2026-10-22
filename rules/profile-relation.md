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
---

# Profile Relation

The two groups contain the same numbers. Multiset comparison requires the same number of occurrences of each number. Set comparison ignores multiplicities. Each side may list a cell more than once.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| left | Left cell occurrences. | Required. |
| right | Right cell occurrences. | Required. |
| multiset | Compare multiplicities as well as membership. | true. |
| channel | Read printed digits (D) or effective values (V). | D. |

## Maths

Class: **with aggregates**.

The [shared predicates](predicates.md) define the notation and operations.

```text
sameProfile(left,right,channel,multiset)
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
