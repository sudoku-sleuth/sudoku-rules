---
format: open-rules
title: Anti Ratio Miracle
setter: Jobo
source: https://tinyurl.com/mwsv6k8j
case: https://sudoku-sleuth.com/cases/anti-ratio-miracle
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c6=4 r4c7=2 r6c5=1
---

```rules
sudoku 9x9
negative relations [{"op":"ratio","value":2}] except []
```

Normal sudoku rules apply.

Any two orthogonally adjacent cells cannot contain digits in a 1:2, 1:3, 1:4 or 1:5 ratio.

Every horizontal set of three orthogonally connected cells within any 3x3 box is a modular sequence (i.e. must contain one digit from [1 4 7], one digit from [2 5 8] and one digit from [3 6 9]).

Every vertical set of three orthogonally connected cells within any 3x3 box is an entropic sequence (i.e. must contain one digit from [1 2 3], one digit from [4 5 6] and one digit from [7 8 9]).

There are no 3's in a corner. :(
(of the grid)
