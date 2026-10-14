---
format: open-rules
title: Build Your Own Sandwich
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/fbk56qj2dx
case: https://sudoku-sleuth.com/cases/build-your-own-sandwich
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c8=5 r8c3=4 r9c9=8
exported: 29633bc7442058549fdc66a190360e6f
---

```rules
sudoku 9x9
sandwich-1: sandwich r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 sum 35
sandwich-2: sandwich r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 sum 21
sandwich-3: sandwich r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9 sum 21
sandwich-4: sandwich r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 sum 23
sandwich-5: sandwich r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 sum 15
sandwich-6: sandwich r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9 sum 18
sandwich-7: sandwich r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 sum 5
sandwich-8: sandwich r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9 sum 12
hidden-modular-1: hidden-modular r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 extent "between-ends"
hidden-modular-2: hidden-modular r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 extent "between-ends"
hidden-modular-3: hidden-modular r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9 extent "between-ends"
hidden-modular-4: hidden-modular r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 extent "between-ends"
hidden-modular-5: hidden-modular r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 extent "between-ends"
hidden-modular-6: hidden-modular r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9 extent "between-ends"
hidden-modular-7: hidden-modular r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 extent "between-ends"
hidden-modular-8: hidden-modular r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9 extent "between-ends"
```

Standard sudoku rules apply: every row, column, and box must contain a complete set of the digits 1-9.

Modular lines: every set of three adjacent digits along a modular line must contain digits with three different remainders when divided by 3. 

Sandwich sums: numbers outside the grid indicate the sum of all cells between 1 and 9 in that row or column, excluding 1 and 9 from the sum.

Every sandwich, including the crust, forms a hidden modular line. For example, a sandwich clue of 8 could be made of the three cells 189 but could not be 1269.
