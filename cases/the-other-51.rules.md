---
format: open-rules
title: The Other 51
setter: Alexander Hamilton (FullDeck and Missing a Few Cards)
source: https://sudokupad.app/znrbqdym3n
case: https://sudoku-sleuth.com/cases/the-other-51
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c7=5 r5c1=2 r5c2=9 r6c8=5 r6c9=1 r9c8=8 r9c9=5
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 5 connected true
cage-2: cage r7c8-r7c9 total 5 connected true
cage-3: cage r3c7-r4c7 total 5 connected true
cage-4: cage r8c3-r8c4 total 5 connected true
cage-5: cage r6c3-r6c4-r7c3-r7c4 total 29 connected true
cage-6: cage r3c5-r3c6-r4c4-r4c5 total 29 connected true
modular-1: modular r1c1-r1c2-r1c3-r1c4-r1c5
modular-2: modular r2c2-r2c3-r2c4-r2c5-r2c6
modular-3: modular r3c3-r3c4-r3c5-r3c6-r3c7
modular-4: modular r4c4-r4c5-r4c6-r4c7-r4c8
modular-5: modular r5c5-r5c6-r5c7-r5c8-r5c9
modular-6: modular r6c1-r6c2-r6c3-r6c4-r6c5
modular-7: modular r7c2-r7c3-r7c4-r7c5-r7c6
modular-8: modular r8c3-r8c4-r8c5-r8c6-r8c7
modular-9: modular r9c4-r9c5-r9c6-r9c7-r9c8
little-killer r3c1-r4c2-r5c3-r6c4-r7c5-r8c6-r9c7 sum 51
```

- Normal Sudoku rules apply.
- Digits in cages must sum to the number in the top left corner of the cage. Digits may not repeat within cages.
- Clues outside the grid are the sum of the digits along the indicated diagonal. Digits can repeat if allowed by other rules.
- Any set of three sequential cells along a teal Modular Line must contain a complete set of residues modulo 3, i.e. one digit from (1,4,7), one from (2,5,8), and one from (3,6,9). Digits may repeat on a line if allowed by other rules.
