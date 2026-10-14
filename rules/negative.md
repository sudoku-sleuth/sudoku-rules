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
reading:
  terms: [negative constraint, negative constraints]
  parts:
    scope:
      - when: {within: {length: 1}}
        text: "Inside the listed group of cells, no "
      - when: {within: present}
        text: "Inside each of the {within.length|words} listed groups of cells, no "
      - text: "no "
    direction:
      - when: {direction: horizontal}
        text: "horizontally "
      - when: {direction: vertical}
        text: "vertically "
      - text: ""
    except:
      - when: {except: {length: 0}}
        text: ""
      - when: {except: {length: 1}}
        text: ", except this pair"
      - text: ", except these {except.length|words} pairs"
  variants:
    - when: {within: absent, direction: absent, condition: exceptsAreMarked}
      join:
        kinds: [pair, kropki]
        note: "{names|every} is shown. No other neighbouring pair {relations|one}."
    - heading: "Negative constraint: pairs that {relations}"
      noun: pairs
      list: always
      item_over: except
      one: "{part:scope}{part:direction}neighbouring pair {relations|one}{part:except}."
      rule: "No neighbouring pair {relations|one}, except the marked pairs."
---

# Negative

Unmarked neighbouring pairs fail every listed relationship. The scope, direction and exceptions state exactly which pairs are covered.

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
