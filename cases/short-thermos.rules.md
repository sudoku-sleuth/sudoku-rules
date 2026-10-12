---
format: open-rules
title: Short Thermos
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/72161rnwb9
case: https://sudoku-sleuth.com/cases/short-thermos
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c3=7 r3c7=4 r7c3=2 r7c7=5
---

```rules
sudoku 9x9
thermo-1: thermo r2c3-r3c4-r4c3-r3c2
thermo-2: thermo r3c8-r4c7-r3c6-r2c7
thermo-3: thermo r8c7-r7c6-r6c7-r7c8
thermo-4: thermo r7c2-r6c3-r7c4-r8c3
thermo-5: thermo r5c4-r5c3-r5c2
thermo-6: thermo r4c5-r3c5-r2c5
thermo-7: thermo r5c6-r5c7-r5c8
thermo-8: thermo r6c5-r7c5-r8c5
thermo-9: thermo r1c3-r2c2-r3c1
thermo-10: thermo r3c9-r2c8-r1c7
thermo-11: thermo r9c7-r8c8-r7c9
thermo-12: thermo r7c1-r8c2-r9c3
thermo-13: thermo r2c1-r1c1-r1c2
thermo-14: thermo r1c8-r1c9-r2c9
thermo-15: thermo r8c9-r9c9-r9c8
thermo-16: thermo r9c2-r9c1-r8c1
thermo-17: thermo r4c1-r5c1-r6c1
thermo-18: thermo r1c6-r1c5-r1c4
thermo-19: thermo r6c9-r5c9-r4c9
thermo-20: thermo r9c4-r9c5-r9c6
kropki-1: kropki r5c3-r5c4 colour "white"
kropki-2: kropki r3c5-r4c5 colour "white"
kropki-3: kropki r1c2-r1c3 colour "black"
kropki-4: kropki r7c1-r8c1 colour "black"
kropki-5: kropki r7c9-r8c9 colour "black"
kropki-6: kropki r5c6-r5c7 colour "black"
kropki-7: kropki r6c5-r7c5 colour "black"
```

Normal sudoku rules apply: every row, column and box has to contain a complete set of the digits 1-9.

Normal thermo rules apply: digits along a thermo have to strictly increase from the bulb to the tip.

Exported from f-puzzles.
