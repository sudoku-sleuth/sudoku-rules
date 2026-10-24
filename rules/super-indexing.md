---
name: Super Indexing
url: https://rules.sudoku-sleuth.com/super-indexing.md
kind: super-indexing
shape: Global
aliases: ["Cyclic super indexing", "Super index cycle", "Cyclic row column digit indexing"]
parameters: {}
layer: rule
---

# Super Indexing

A digit d in row r, column c requires digit r in row c, column d, and digit c in row d, column r. Apply this cycle to every cell. Row and column numbers start at one.

## Parameters

None.

## Maths

Class: **first-order**.

The [shared predicates](predicates.md) define the notation and operations.

```text
rows=cols ∧ (∀a∈C:1<=D(a)<=rows ∧ 1<=D(a)<=cols ∧ boardCell(col(a),D(a)-1)∈C ∧ boardCell(D(a)-1,row(a))∈C ∧ D(boardCell(col(a),D(a)-1))=row(a)+1 ∧ D(boardCell(D(a)-1,row(a)))=col(a)+1)
```

## Example

````markdown
---
format: open-rules
title: Super Indexing example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
board: {"rows": 2, "cols": 2, "symbols": [1, 2]}
---

```rules
super-indexing
```
````

Satisfies the rule: r1c1=1, r1c2=2, r2c1=2, r2c2=1. Each row-column-digit triple has both cyclic partners.

Breaks the rule: r1c1=1, r1c2=2, r2c1=2, r2c2=2. The two in r1c2 requires a one in r2c2.
