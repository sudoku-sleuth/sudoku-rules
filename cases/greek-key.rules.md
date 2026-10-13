---
format: open-rules
title: Greek Key
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/greek-key
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=6 r1c9=4 r8c5=5
---

```rules
sudoku 9x9
modular-1: modular r4c1-r4c2-r3c2-r3c1-r2c1-r2c2-r1c2-r1c3-r2c3-r2c4-r1c4
modular-2: modular r1c6-r2c6-r2c7-r1c7-r1c8-r2c8-r2c9-r3c9-r3c8-r4c8-r4c9
modular-3: modular r6c9-r6c8-r7c8-r7c9-r8c9-r8c8-r9c8-r9c7-r8c7-r8c6-r9c6
modular-4: modular r9c4-r8c4-r8c3-r9c3-r9c2-r8c2-r8c1
modular-5: modular r6c1-r6c2-r7c2-r7c1-r8c1
pair-1: pair r4c3-r4c4 sum 10
pair-2: pair r3c1-r3c2 sum 10
pair-3: pair r8c8-r9c8 sum 10
pair-4: pair r3c6-r4c6 sum 5
pair-5: pair r6c4-r7c4 sum 5
pair-6: pair r6c6-r6c7 sum 5
```

Standard sudoku rules apply. 

Modular lines: Modular lines: every set of three sequential digits along a line must contain a complete set of residues modulo 3, i.e. one digit from {1,4,7}, one from {2,5,8}, and one from {3,6,9}. Digits may repeat on a line if allowed by other rules.

XV constraint: Digits separated by an X sum to 10. Digits separated by a V sum to 5. Not all possible X's or V's are necessarily shown.

Exported from f-puzzles.com
