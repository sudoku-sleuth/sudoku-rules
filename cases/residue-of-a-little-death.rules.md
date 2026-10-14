---
format: open-rules
title: Residue of a Little Death
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/residue-of-a-little-death
library: https://rules.sudoku-sleuth.com/
status: read
exported: b47e3cf80d669a4bb733198135ee7b2f
---

```rules
sudoku 9x9
modular-1: modular r7c1-r8c1-r9c2-r9c3
modular-2: modular r6c1-r7c2-r8c3-r9c4
modular-3: modular r8c6-r7c6-r6c7-r6c8
modular-4: modular r9c6-r8c7-r7c8-r6c9
modular-5: modular r9c7-r9c8-r8c9-r7c9
modular-6: modular r1c6-r2c7-r3c8-r4c9
modular-7: modular r1c7-r1c8-r2c9-r3c9
modular-8: modular r4c1-r3c2-r2c3-r1c4
modular-9: modular r3c1-r2c1-r1c2-r1c3
modular-10: modular r4c2-r4c3-r3c4-r2c4
little-killer-1: little-killer r4c1-r3c2-r2c3-r1c4 sum 28
little-killer-2: little-killer r1c6-r2c7-r3c8-r4c9 sum 30
little-killer-3: little-killer r9c4-r8c3-r7c2-r6c1 sum 30
little-killer-4: little-killer r3c1-r2c2-r1c3 sum 10
little-killer-5: little-killer r7c9-r8c8-r9c7 sum 19
little-killer-6: little-killer r1c7-r2c8-r3c9 sum 8
little-killer-7: little-killer r6c9-r7c8-r8c7-r9c6 sum 25
little-killer-8: little-killer r9c2-r8c1 sum 4
little-killer-9: little-killer r8c9-r9c8 sum 3
little-killer-10: little-killer r9c3-r8c2-r7c1 sum 13
```

Standard sudoku constraints: Every row, column, and box must contain a complete set of the digits 1-9.

Little killers: Numbers outside the box are the sum of the digits along the diagonal indicated by the arrow. Digits may repeat along little killers if allowed by other rules.

Modular lines: Every set of three contiguous digits along a line must contain a complete set of residues modulo 3, i.e. one digit from {1,4,7}, one from {2,5,8}, and one from {3,6,9}. Digits may repeat on a line if allowed by other rules.
