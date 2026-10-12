---
format: open-rules
title: Residual Death Spiral
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/xl0l6snkmn
case: https://sudoku-sleuth.com/cases/residual-death-spiral
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c6=7 r4c2=5 r5c5=9 r6c8=4 r8c4=3
---

```rules
sudoku 9x9
modular-1: modular r8c1-r9c2
modular-2: modular r9c3-r8c2-r7c1
modular-3: modular r9c4-r8c3-r7c2-r6c1-r5c1
modular-4: modular r1c2-r2c1
modular-5: modular r3c1-r2c2-r1c3
modular-6: modular r4c1-r3c2-r2c3-r1c4-r1c5
modular-7: modular r1c8-r2c9
modular-8: modular r1c7-r2c8-r3c9
modular-9: modular r1c6-r2c7-r3c8-r4c9-r5c9
modular-10: modular r8c9-r9c8
modular-11: modular r7c9-r8c8-r9c7
modular-12: modular r6c9-r7c8-r8c7-r9c6-r9c5
little-killer-1: little-killer r2c1-r1c2 sum 5
little-killer-2: little-killer r1c7-r2c8-r3c9 sum 9
little-killer-3: little-killer r9c2-r8c1 sum 8
little-killer-4: little-killer r7c9-r8c8-r9c7 sum 15
little-killer-5: little-killer r4c1-r3c2-r2c3-r1c4 sum 25
little-killer-6: little-killer r6c9-r7c8-r8c7-r9c6 sum 18
little-killer-7: little-killer r1c6-r2c7-r3c8-r4c9 sum 22
little-killer-8: little-killer r9c4-r8c3-r7c2-r6c1 sum 24
little-killer-9: little-killer r9c3-r8c2-r7c1 sum 21
little-killer-10: little-killer r3c1-r2c2-r1c3 sum 12
little-killer-11: little-killer r1c8-r2c9 sum 6
little-killer-12: little-killer r8c9-r9c8 sum 15
```

- Normal sudoku rules apply.
- Modular lines: Every set of three adjacent digits along a teal modular line must contain digits with three different remainders when divided by 3. On teal lines of length two, the digits must have different remainders when divided by 3.
- Little killers: Clues outside the grid give the sum of the digits along the indicated diagonal.
