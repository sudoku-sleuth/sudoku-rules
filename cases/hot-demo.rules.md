---
format: open-rules
title: Hot Demo
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/hot-demo
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r5c2-r4c2-r3c2-r2c2-r2c3-r2c4-r2c5
thermo-2: thermo r5c8-r6c8-r7c8-r8c8-r8c7-r8c6-r8c5
thermo-3: thermo r5c5-r6c5-r7c5-r7c4-r7c3
thermo-4: thermo r5c5-r4c5-r3c5-r3c6-r3c7
thermo-5: thermo r9c1-r9c2-r9c3
thermo-6: thermo r9c1-r8c1-r7c1
thermo-7: thermo r1c8-r1c7
thermo-8: thermo r1c8-r1c9-r2c9-r3c9
kropki-1: kropki r5c6-r5c7 colour "white"
kropki-2: kropki r7c2-r7c3 colour "white"
kropki-3: kropki r3c7-r3c8 colour "white"
kropki-4: kropki r1c3-r2c3 colour "white"
kropki-5: kropki r8c7-r9c7 colour "white"
kropki-6: kropki r5c3-r5c4 colour "black"
```

Normal sudoku rules apply: every row, column, and box must include a complete set of the digits 1-9 without repetition.

Digits on thermometers must increase from bulb to tip.

Digits separated by white dots form a consecutive pair. Digits separated by black dots are in a 1:2 ratio. Not all possible dots are given.

Exported from f-puzzles.com
