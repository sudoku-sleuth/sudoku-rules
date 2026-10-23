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
    description: The cell pairs exempt from the negative rule.
    default: Empty list.
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

Neighbouring means orthogonally adjacent. Without this declaration, missing dots or X/V clues imply nothing. For all white dots given, forbid `{"op":"difference","value":1}`; for black dots, forbid `{"op":"ratio","value":2}`; for X clues, forbid `{"op":"sum","value":10}`; for V clues, forbid `{"op":"sum","value":5}`. List the marked pairs in `except`. An empty exceptions list exempts no pairs.

For relation-specific marking, use separate negative declarations and separate exception lists. A 1–2 pair satisfies both white and black relationships; exempting only black-marked pairs from a white negative does not exempt that pair. To apply both negatives only to completely unmarked pairs, put both relationships in one declaration and exempt every dotted pair. With no exceptions and no scope or direction limit, a difference-1 negative is the global non-consecutive rule. Negative reads printed digits; positive Pair and Kropki read effective values after modifiers.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| relations | `list<PairRelation>` | The relationships to forbid, each with its operation and any required value. | Required. |
| except | `list<list<cell>>` | The cell pairs exempt from the negative rule. | Empty list. |
| within | `optional<list<set<cell>>>` | Groups limiting the pairs covered by the rule. | Absent; no inferred value. |
| direction | `optional<enum{horizontal,vertical}>` | The chosen diagonal or neighbour orientation, as named in the definition. | Absent; no inferred value. |

## Definition

Defined by [relation-scope](relation-scope.md) with the settings in `alias_bind`.



The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

This is a bound shorthand for [relation-scope](relation-scope.md). Its header binds every canonical parameter.

Every orthogonally neighbouring pair in scope and outside except fails every listed relationHolds check over D digits. within limits pairs to a common listed group; direction limits their orientation. Either dot colour exempts the pair from both Kropki negatives when both share except.

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
negative relations [{"op":"difference","value":1}] except [] within [["r1c1","r1c2"]]
```
````

Satisfies the rule: r1c2=3, r1c1=1. The unmarked pair does not have forbidden difference 1.

Breaks the rule: r1c2=2, r1c1=1. The unmarked pair has forbidden difference 1.
