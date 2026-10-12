---
format: open-rules
title: Bastille Day
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/bastille-day
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c5=1 r1c6=4 r1c9=7 r6c1=5 r9c4=1 r9c5=7 r9c6=8 r9c7=9
---

```rules
sudoku 9x9
thermo-1: thermo r4c4-r3c4-r2c4
thermo-2: thermo r4c4-r4c3-r4c2
thermo-3: thermo r6c6-r7c6-r8c6
thermo-4: thermo r6c6-r6c7-r6c8
thermo-5: thermo r4c6-r3c6-r2c6
thermo-6: thermo r4c6-r4c7-r4c8
thermo-7: thermo r6c4-r6c3-r6c2
thermo-8: thermo r6c4-r7c4-r8c4
thermo-9: thermo r9c2-r8c2-r7c2
thermo-10: thermo r9c2-r8c2-r7c3
thermo-11: thermo r9c2-r8c2-r7c1
thermo-12: thermo r3c8-r2c8-r1c9
thermo-13: thermo r3c8-r2c8-r1c8
thermo-14: thermo r3c8-r2c8-r1c7
thermo-15: thermo r2c2-r2c1
thermo-16: thermo r2c2-r1c2
thermo-17: thermo r2c2-r2c3
thermo-18: thermo r2c2-r3c2
thermo-19: thermo r8c8-r7c8
thermo-20: thermo r8c8-r8c7
thermo-21: thermo r8c8-r8c9
thermo-22: thermo r8c8-r9c8
extremum r4c2-r4c3-r3c4-r2c4-r2c6-r3c6-r4c7-r4c8-r6c8-r6c7-r7c6-r8c6-r8c4-r7c4-r6c3-r6c2 type "max" exhaustive false
```

Bastille Day, 14 July, commemorates the storming of the Bastille fortress in Paris in 1789. There was some debate and it was almost celebrated on 5 May instead. Boxes 1 and 9 are firework explosions, while boxes 3 and 7 contain the fleur-de-lis often associated with the fallen French monarchy.

Normal sudoku rules apply: every row, column, and box must contain a complete set of the digits 1-9.

Gray cells are fortress cells and must be larger than orthogonally adjacent unshaded cells.

Thermometers must increase from bulb to tip but do not need to be consecutive.
