---
format: open-rules
title: Antenna
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/30c7ed6zjj
case: https://sudoku-sleuth.com/cases/antenna
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c7=5 r4c5=1 r8c5=6
---

```rules
sudoku 9x9
modular-1: modular r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9
modular-2: modular r1c3-r2c4-r3c5-r4c6-r5c7-r6c8-r7c9
modular-3: modular r2c6-r3c7-r4c8
modular-4: modular r9c1-r8c2-r7c3-r6c4-r5c5-r4c6-r3c7-r2c8-r1c9
little-killer-1: little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 21
little-killer-2: little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 69
```

- Normal sudoku rules apply.
- Modular Lines: Every set of three adjacent digits along a teal modular line contains digits with three different remainders when divided by 3. Modular lines continue straight through intersections.
- Little killers: Clues outside the grid give the sum of the digits along the indicated diagonal.
