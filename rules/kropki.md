---
name: Kropki
url: https://rules.sudoku-sleuth.com/kropki.md
kind: kropki
parameters:
  colour:
    description: "The relationship: white means difference 1; black means ratio 2."
    default: Required.
    type: enum{white,black}
    syntax:
      form: keywords
      named: true
      choices: {white: {}, black: {}}
  cells:
    description: The two marked cells in order, for example r1c1-r1c2.
    default: Required.
    type: list<cell>
    syntax: {form: cells, count: 2}
---

# Kropki

A white relation joins values one apart. A black relation joins values where one is twice the other.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| colour | The relationship: white means difference 1; black means ratio 2. | Required. |
| cells | The two marked cells in order, for example r1c1-r1c2. | Required. |

## Rule lines

Kropki is a named shorthand for [pair](pair.md):

- `kropki r1c1-r1c2 white` means `pair r1c1-r1c2 difference 1`.
- `kropki r1c1-r1c2 black` means `pair r1c1-r1c2 ratio 2`.

Here `white` and `black` name relationships, not paint instructions. A dot's actual colour stays drawing metadata. For ratio 3, grey or brown dots, difference n, sum n and every other relationship, use [pair's keyword forms](pair.md). Case files state the relationship explicitly. Existing `colour "white"` and `colour "black"` spellings are also accepted.

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
|cells|=2 ∧ let a=V(cells[0]); let b=V(cells[1]);
  (colour="white" → |a-b|=1) ∧ (colour="black" → 2*a=b ∨ 2*b=a)
```

A white dot joins values differing by 1; a black dot joins values where one is double the other. The colour parameter names the relationship.

## Example

````markdown
---
format: open-rules
title: Kropki example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki r1c1-r1c2 black
```
````

Satisfies the rule: r1c1=2, r1c2=4. The black dot joins 2 and 4: 4 is double 2.

Breaks the rule: r1c1=2, r1c2=5. The black dot joins 2 and 5: neither is double the other.
