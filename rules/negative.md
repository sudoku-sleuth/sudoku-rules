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
---

# Negative

Orthogonally adjacent pairs outside the exception list fail every listed relationship. The scope, direction and exceptions state exactly which pairs are covered.

Neighbouring means orthogonally adjacent. Without this declaration, missing dots or X/V clues imply nothing. For all white dots given, forbid `{"op":"difference","value":1}`; for black dots, forbid `{"op":"ratio","value":2}`; for X clues, forbid `{"op":"sum","value":10}`; for V clues, forbid `{"op":"sum","value":5}`. List the marked pairs in `except`. An empty exceptions list exempts no pairs.

For relation-specific marking, use separate negative declarations and separate exception lists. A 1–2 pair satisfies both white and black relationships; exempting only black-marked pairs from a white negative does not exempt that pair. To apply both negatives only to completely unmarked pairs, put both relationships in one declaration and exempt every dotted pair. With no exceptions and no scope or direction limit, a difference-1 negative is the global non-consecutive rule. Negative reads printed digits; positive Pair and Kropki read effective values after modifiers.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| relations | The relationships to forbid, each with its operation and any required value. | Required. |
| except | The cell pairs exempt from the negative rule. | Required. |
| within | Groups limiting the pairs covered by the rule. | Absent; no inferred value. |
| direction | The chosen diagonal or neighbour orientation, as named in the definition. | Absent; no inferred value. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∀a,b∈C: ∀r∈relations:
  cellIndex(a)<cellIndex(b) ∧ orth(a,b)
  ∧ (if present(within) then ∃G∈unwrap(within): a∈G ∧ b∈G else true)
  ∧ (if present(direction) then (unwrap(direction)="horizontal" ∧ row(a)=row(b)) ∨ (unwrap(direction)="vertical" ∧ col(a)=col(b)) else true)
  ∧ ¬(∃p∈except: |p|=2 ∧ {a,b}={p[0],p[1]})
  → ¬pairRelation(r,D(a),D(b))
```

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
