---
format: open-rules
title: Residual Effect
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/residual-effect
library: https://rules.sudoku-sleuth.com/
status: read
givens: r6c1=4
---

```rules
sudoku 9x9
little-killer-1: little-killer r1c4-r2c3-r3c2-r4c1 sum 26
little-killer-2: little-killer r9c6-r8c7-r7c8-r6c9 sum 21
little-killer-3: little-killer r4c1-r5c2-r6c3-r7c4-r8c5-r9c6 sum 36
little-killer-4: little-killer r4c9-r3c8-r2c7-r1c6 sum 28
diagonal-lines classes "mod3" minLength 1
```

Normal sudoku rules apply.

Little killers: Numbers outside the grid give the sum of the digits along the indicated diagonal. Digits can repeat along the little killer diagonal if allowed by the other rules.

Modular lines: every set of three sequential digits along a line must contain a complete set of residues modulo 3, i.e. one digit from {1,4,7}, one from {2,5,8}, and one from {3,6,9}. Digits on two-cell lines cannot be from the same residue set. Digits may repeat on a line if allowed by other rules.

Unimodular lines: every digit along the line is from the same residue class modulo 3, i.e. all from {1,4,7} or all from {2,5,8} or all from {3,6,9}.

EVERY diagonal in the grid, including those marked as little killers, is either modular or unimodular. It is up to the solver to determine the nature of each diagonal.

Exported from f-puzzles.com
