---
format: open-rules
title: Criss Cross
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/criss-cross
library: https://rules.sudoku-sleuth.com/
status: read
givens: r9c1=5
---

```rules
sudoku 9x9
kropki-1: kropki r8c3-r9c3 colour "white"
kropki-2: kropki r8c1-r8c2 colour "white"
kropki-3: kropki r4c9-r5c9 colour "white"
kropki-4: kropki r5c4-r5c5 colour "white"
kropki-5: kropki r5c5-r5c6 colour "white"
kropki-6: kropki r2c2-r2c3 colour "white"
kropki-7: kropki r7c3-r8c3 colour "black"
kropki-8: kropki r2c7-r3c7 colour "black"
kropki-9: kropki r3c9-r4c9 colour "black"
kropki-10: kropki r3c2-r4c2 colour "black"
kropki-11: kropki r4c1-r5c1 colour "black"
kropki-12: kropki r5c9-r6c9 colour "black"
modular-1: modular r9c8-r8c8-r8c9
modular-2: modular r7c1-r8c1-r9c2-r9c3
modular-3: modular r5c1-r5c2-r6c2-r7c2-r8c2-r8c3-r7c3
modular-4: modular r5c6-r6c6-r6c5-r7c5-r7c6-r8c6-r8c7-r7c7-r7c8-r6c8-r6c7-r5c7
modular-5: modular r5c7-r5c6
modular-6: modular r3c2-r4c2-r4c3-r5c3-r5c4-r4c4-r4c5-r3c5-r3c4-r2c4-r2c3-r3c3
modular-7: modular r3c3-r3c2
modular-8: modular r2c1-r2c2-r1c2
modular-9: modular r1c7-r1c8-r2c9-r3c9
modular-10: modular r3c7-r2c7-r2c8-r3c8-r4c8-r5c8-r5c9
```

Standard sudoku constraints: every row, column, and box must contain a complete set of the digits 1-9.

Modular lines: every set of three sequential digits along a line must contain a complete set of residues modulo 3, i.e. one digit from {1,4,7}, one from {2,5,8}, and one from {3,6,9}. Digits may repeat on a line if allowed by other rules.

Kropki dots: Digits separated by a white dot are consecutive. Digits separated by a black dot are in a 2:1 ratio. Not all possible dots are given.
