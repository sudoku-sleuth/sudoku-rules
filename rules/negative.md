---
name: Negative
url: https://rules.sudoku-sleuth.com/negative.md
kind: negative
parameters:
  relations:
    description: The relationships to forbid, each with its operation and any required value.
    default: Required.
    type: list<PairRelation>
  except:
    allow_empty: true
    description: The cell pairs exempt from the negative rule.
    default: Required.
    type: list<list<cell>>
  within:
    description: Groups limiting the pairs covered by the rule.
    default: Absent; no inferred value.
    type: optional<list<set<cell>>>
  direction:
    description: The chosen diagonal or neighbour orientation, as named in the definition.
    default: Absent; no inferred value.
    type: optional<enum{horizontal,vertical}>
alias_of: relation-scope
alias_bind:
  cells: C
  relations: relations
  mode: '"moves"'
  move: '"orthogonal"'
  anchors: "{}"
  except: '{p∈cellLists(C,2): |p|=2 ∧ (graphEdge(except,p[0],p[1]) ∨ (present(within) ∧ ¬(∃G∈unwrap(within):p[0]∈G ∧ p[1]∈G)) ∨ (present(direction) ∧ ¬((unwrap(direction)="horizontal" ∧ row(p[0])=row(p[1])) ∨ (unwrap(direction)="vertical" ∧ col(p[0])=col(p[1])))))}'
  negative: "true"
  channel: '"D"'
layer: rule
---


# Negative

Orthogonally adjacent pairs outside the exception list fail every listed relationship. The scope, direction and exceptions state exactly which pairs are covered.

Neighbouring means orthogonally adjacent. Without an all-given setting or an explicit Negative, missing dots and X/V clues imply nothing. For all possible Xs, Vs, white dots or black dots given, collect the marks in [Marked Pairs](marked-pairs.md) and select their kinds with `allGiven`. Each kind exempts only its own marks.

Use Negative for other forbidden relationships, explicit exception sets, limited scopes or directions. Every exception exempts its pair from every relationship in that declaration. Separate declarations give different relationships different exceptions. A difference-1 Negative with no exceptions or scope limits is global orthogonal nonconsecutive: even a V marked 2+3 fails it. An X does not exempt an edge from a sum-5 Negative; an X pair already sums to ten and needs no sum-5 exemption.

Negative reads printed digits D; positive Pair, XV and Kropki read effective values V. An empty `except` list exempts no pairs. Supply `relations` and `except` explicitly.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| relations | `list<PairRelation>` | The relationships to forbid, each with its operation and any required value. | Required. |
| except | `list<list<cell>>` | The cell pairs exempt from the negative rule. | Required. |
| within | `optional<list<set<cell>>>` | Groups limiting the pairs covered by the rule. | Absent; no inferred value. |
| direction | `optional<enum{horizontal,vertical}>` | The chosen diagonal or neighbour orientation, as named in the definition. | Absent; no inferred value. |

## Definition

Defined by [relation-scope](relation-scope.md) with the settings in `alias_bind`.



The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

This is a bound shorthand for [relation-scope](relation-scope.md). Its header binds every canonical parameter.

Every orthogonally neighbouring pair in scope and outside except fails every listed relationHolds check over D digits. within limits pairs to a common listed group; direction limits their orientation. Each explicit exception applies to every relationship listed in that Negative.

The shift relation is defined for integer values.

## Example

````markdown
---
format: open-rules
title: Negative example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
negative relations [{"op":"difference","value":1}] except [] within [r1c1-r1c2]
```
````

Satisfies the rule: r1c2=3, r1c1=1. The unmarked pair does not have forbidden difference 1.

Breaks the rule: r1c2=2, r1c1=1. The unmarked pair has forbidden difference 1.
