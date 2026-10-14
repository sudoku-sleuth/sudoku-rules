---
format: open-rules
title: Sailing with the pirates
setter: sujoyku
source: https://tinyurl.com/y6s6hpd4
case: https://sudoku-sleuth.com/cases/sailing-with-the-pirates
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - Some of the source rules still need to be included in our reading.
givens: .9.....7.3.......2..6...4..........9.2.......6..............9....4.....17......8.
exported: 3eda82205d4a93b79613dbefaddb0453
---

```rules
sudoku 9x9
```

Normal Sudoku rules apply. The digits 5 represent treasures which are protected by pirates (digits 1 to 4) from commoners (digits 6 to 9). Each treasure is orthogonally adjacent only to pirates and never orthogonally adjacent to a commoner. In other words: Any digit orthogonally adjacent to a 5 has a value of at most 4.
