---
format: open-rules
title: Cross About Dominoes
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/cross-about-dominoes
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c5-r5c4-r5c5-r5c6-r6c5 total 15 connected true
cage-2: cage r1c8-r2c8 total 11 connected true
cage-3: cage r2c1-r2c2 total 13 connected true
cage-4: cage r6c9-r7c9 total 13 connected true
cage-5: cage r9c3-r9c4 total 8 connected true
diagonal-lines classes "mod3" minLength 7
```

Normal sudoku rules apply: every row, column, and 3x3 box must include a complete set of the digits 1-9.

Killer cages: digits within cages marked by dashed lines must sum to the number shown in the upper left corner of the cage.

Every diagonal of length 7, 8, or 9 is either modular or unimodular. On modular lines, every set of three sequential digits contains one digit from {147}, one from {258}, and one from {369}. On unimodular lines, all digits are from the same class (all from {147} or all from {258} or all from {369}).
