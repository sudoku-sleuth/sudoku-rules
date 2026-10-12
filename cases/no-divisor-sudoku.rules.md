---
format: open-rules
title: No-divisor Sudoku
setter: sujoyku
source: https://tinyurl.com/2cbamexd
case: https://sudoku-sleuth.com/cases/no-divisor-sudoku
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c2=2 r2c4=9 r4c4=1 r4c9=8 r5c1=7 r5c6=5 r7c5=3 r7c9=2 r8c2=8 r8c7=4 r9c3=6
---

```rules
sudoku 9x9
```

Rules:
1. Normal Sudoku rules apply.
2. No digit is orthogonally adjacent to one of its divisors >1, e.g. 6 is never orthogonally adjacent to 2 or 3.
