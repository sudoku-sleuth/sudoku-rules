---
format: open-rules
title: 4 Corners
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/jeac3v6tdh
case: https://sudoku-sleuth.com/cases/4-corners
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c5=4
---

```rules
sudoku 9x9
cage-1: cage r6c8-r7c7-r7c8-r8c6-r8c7 total 16 connected true
cage-2: cage r2c3-r2c4-r3c2-r3c3-r4c2 total 26 connected true
cage-3: cage r1c7-r1c8-r1c9-r2c9 total 24 connected true
cage-4: cage r8c1-r9c1-r9c2-r9c3 total 21 connected true
cage-5: cage r8c8-r8c9 total 7 connected true
cage-6: cage r1c2-r2c2 total 8 connected true
cage-7: cage r5c4-r6c4-r6c5 total 9 connected true
cage-8: cage r4c5-r4c6-r5c6 total 16 connected true
cage-9: cage r2c7-r3c7-r3c8 total 7 connected true
double-arrow-1: double-arrow r4c2-r3c2-r2c2-r2c3-r2c4 ends ["r5c2","r2c5"]
double-arrow-2: double-arrow r8c6-r8c7-r8c8-r7c8-r6c8 ends ["r8c5","r5c8"]
double-arrow-3: double-arrow r1c8-r1c9-r2c9 ends ["r1c7","r3c9"]
double-arrow-4: double-arrow r8c1-r9c1-r9c2 ends ["r7c1","r9c3"]
double-arrow-5: double-arrow r9c8-r9c9-r8c9 ends ["r9c7","r7c9"]
double-arrow-6: double-arrow r2c1-r1c1-r1c2 ends ["r3c1","r1c3"]
double-arrow-7: double-arrow r6c6 ends ["r6c5","r5c6"]
double-arrow-8: double-arrow r4c4 ends ["r4c5","r5c4"]
```

- Normal sudoku rules apply.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Double Arrows: Digits along a line sum to same total as the digits in the circles connected to the line.
