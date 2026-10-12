---
name: Line Choice
url: https://rules.sudoku-sleuth.com/line-choice.md
kind: line-choice
parameters:
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
  kinds:
    description: The line rules available to choose from.
    default: Required.
    type: list<enum{renban,nabner,modular,entropic,parity}>
  min:
    description: The least number of listed rules that must hold.
    default: Required.
    type: number
  max:
    description: The greatest number of listed rules or different digits allowed.
    default: Required.
    type: number
  loop:
    description: Whether the line closes, joining its last cell back to its first.
    default: false (open path).
    type: boolean
---

# Line Choice

The line satisfies between the stated minimum and maximum number of the listed line rules.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| kinds | The line rules available to choose from. | Required. |
| min | The least number of listed rules that must hold. | Required. |
| max | The greatest number of listed rules or different digits allowed. | Required. |
| loop | Whether the line closes, joining its last cell back to its first. | false (open path). |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
let selected=λoption:enum{renban,nabner,modular,entropic,parity}:
  (option="renban" ∧ |line|>0 ∧ distinctAt(line,λoccurrence:cell: D(occurrence)) ∧ max_D(line)-min_D(line)=|line|-1)
  ∨ (option="nabner" ∧ ∀i,j∈[0,|line|): i!=j → |D(line[i])-D(line[j])|!=1)
  ∨ (option="modular" ∧ ∀s∈[0,|line|): start(line,3,s,loop) → distinctAt(window(line,3,s,loop),λc:cell: classMod3(D(c))))
  ∨ (option="entropic" ∧ |𝔄|>0 ∧ |𝔄| mod 3=0 ∧ ∀s∈[0,|line|): start(line,3,s,loop) → distinctAt(window(line,3,s,loop),λc:cell: classEntropy(D(c))))
  ∨ (option="parity" ∧ ∀s∈[0,|line|): start(line,2,s,loop) → distinctAt(window(line,2,s,loop),λc:cell: classParity(D(c))));
min<=countWhere(kinds,selected)<=max
```

Count the entries of kinds whose defining checks accept this path; min ≤ count ≤ max. nabner permits repeats here. Class windows use three-position choice windows; parity uses two-position windows. An open two-cell modular or entropic choice is therefore vacuous, unlike its standalone kind.

## Example

````markdown
---
format: open-rules
title: Line Choice example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
line-choice r1c1-r1c2-r1c3 kinds ["renban","nabner"] min 1 max 1
```
````

Satisfies the rule: r1c1=1, r1c2=2, r1c3=3. Exactly one listed rule holds: renban.

Breaks the rule: r1c1=1, r1c2=2, r1c3=5. Neither renban nor nabner holds.
