---
format: open-rules
title: So Much Negativity
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/so-much-negativity
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c5=2 r2c3=8 r3c7=3 r4c4=6 r5c1=3 r6c6=9 r6c9=1 r7c3=1 r8c7=5 r9c6=7
exported: fc510ed3dfb37225368a49c0e8a408e8
---

```rules
sudoku 9x9
pair-1: pair r1c1-r1c2 sum 10
pair-2: pair r6c1-r7c1 sum 10
pair-3: pair r9c1-r9c2 sum 10
pair-4: pair r8c9-r9c9 sum 10
pair-5: pair r1c8-r1c9 sum 5
pair-6: pair r3c1-r4c1 sum 5
pair-7: pair r9c8-r9c9 sum 5
negative relations [{"op":"sum","value":10},{"op":"sum","value":5}] except [["r1c1","r1c2"],["r1c8","r1c9"],["r3c1","r4c1"],["r6c1","r7c1"],["r9c1","r9c2"],["r9c8","r9c9"],["r8c9","r9c9"]]
```

Normal sudoku rules apply: every row, column, and box must contain a complete set of the digits 1-9.

XV: Digits separated by a V sum to 5. Digits separated by an X sum to 10. All possible Xs and Vs are given. (Negative constraint applies.)

Exported from f-puzzles.com
