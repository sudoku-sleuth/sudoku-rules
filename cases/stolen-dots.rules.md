---
format: open-rules
title: Stolen Dots
setter: Chip Sounder
source: https://sudokupad.app/anqbivdcat
case: https://sudoku-sleuth.com/cases/stolen-dots
library: https://rules.sudoku-sleuth.com/
status: read
exported: cbd15f1514ba24d54bcdecd18fee0781
---

```rules
sudoku 9x9
cage-1: cage r9c1-r9c2 total 6 connected true
cage-2: cage r7c3-r8c3-r9c3 total 15 connected true
cage-3: cage r1c3-r2c3 total 9 connected true
cage-4: cage r1c1-r1c2 total 6 connected true
cage-5: cage r3c3-r3c4 total 11 connected true
cage-6: cage r4c1-r5c1-r6c1 total 9 connected true
cage-7: cage r5c4-r5c5-r5c6 total 9 connected true
cage-8: cage r6c7-r6c8-r6c9 total 9 connected true
cage-9: cage r4c9-r5c9 total 13 connected true
cage-10: cage r4c5-r4c6-r4c7 total 10 connected true
cage-11: cage r1c5-r2c5 total 12 connected true
cage-12: cage r1c7-r1c8-r1c9 total 17 connected true
cage-13: cage r8c5-r9c5 total 10 connected true
thermo r2c7-r2c8-r3c8
negative relations [{"op":"ratio","value":2}] except []
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Digits in a dotted cage sum to the total given in the top left corner of the cage without repeat.
Cells separated by a black dot has one digit double the other (1:2 ratio). ALL dots are shown. (Negative constraint).
Digits on a thermometer must rise from the bulb end.
