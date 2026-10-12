---
format: open-rules
title: Peter Rabbit
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/kuqhxdfcx0
case: https://sudoku-sleuth.com/cases/peter-rabbit
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c5=8 r4c2=1 r4c8=4 r6c1=2 r6c9=7 r7c5=5 r9c2=3 r9c8=6
---

```rules
sudoku 9x9
thermo-1: thermo r5c4-r4c4-r3c4-r2c3-r1c2
thermo-2: thermo r5c6-r4c6-r3c6-r2c7-r1c8
thermo-3: thermo r6c5-r7c5
thermo-4: thermo r8c5-r8c4-r7c3
thermo-5: thermo r8c5-r8c4-r8c3
thermo-6: thermo r8c5-r8c4-r9c3
thermo-7: thermo r8c5-r8c6-r8c7
thermo-8: thermo r8c5-r8c6-r7c7
thermo-9: thermo r8c5-r8c6-r9c7
kropki-1: kropki r8c2-r8c3 colour "white"
kropki-2: kropki r8c7-r8c8 colour "white"
kropki-3: kropki r1c1-r1c2 colour "white"
kropki-4: kropki r1c8-r1c9 colour "white"
kropki-5: kropki r3c3-r3c4 colour "white"
kropki-6: kropki r3c6-r3c7 colour "white"
kropki-7: kropki r7c6-r7c7 colour "white"
kropki-8: kropki r5c9-r6c9 colour "white"
kropki-9: kropki r8c5-r9c5 colour "white"
```

-Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
- Consecutive Dots: Digits separated by a white dot are consecutive.
