---
format: open-rules
title: The Maine Problem
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mvh2bkds2g
case: https://sudoku-sleuth.com/cases/the-maine-problem
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r4c5-r3c5-r3c4-r3c3-r2c4-r2c5-r3c6
thermo-2: thermo r6c5-r7c5-r7c6-r7c7-r8c6-r8c5-r7c4
thermo-3: thermo r5c6-r6c7-r5c8-r4c7
thermo-4: thermo r7c8-r6c9-r7c9-r8c9-r9c8-r8c8
thermo-5: thermo r3c2-r4c1-r3c1-r2c1-r1c2-r2c2
thermo-6: thermo r7c2-r8c1-r9c2-r8c3
thermo-7: thermo r1c8-r2c7-r3c8-r2c9
thermo-8: thermo r5c4-r4c3-r5c2-r6c3
thermo-9: thermo r6c1-r5c1-r6c2
thermo-10: thermo r4c8-r5c9-r4c9
kropki-1: kropki r8c1-r8c2 colour "white"
kropki-2: kropki r7c2-r8c2 colour "white"
kropki-3: kropki r1c8-r2c8 colour "black"
kropki-4: kropki r2c8-r2c9 colour "black"
```

- Normal sudoku rules apply.
- Thermometers: Digits along Thermos must strictly increase from bulb to tip.
- Kropki Pairs: Digits separated by a black dot are in a 1:2 ratio. Digits separated by a white dot are consecutive. Not all possible dots are necessarily given.
