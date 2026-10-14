---
format: open-rules
title: Why the caged bird whispers
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/why-the-caged-bird-whispers
library: https://rules.sudoku-sleuth.com/
status: read
exported: bdcfb6c3d7566b8e12ca58b8888f1363
---

```rules
sudoku 9x9
cage-1: cage r5c1-r5c2-r6c1-r6c2 total 23 connected true
cage-2: cage r1c4-r1c5-r2c4-r2c5 total 18 connected true
cage-3: cage r4c8-r4c9-r5c8-r5c9 total 24 connected true
cage-4: cage r8c5-r8c6-r9c5-r9c6 total 21 connected true
thermo-1: thermo r6c3-r5c3-r4c3-r4c2-r4c1
thermo-2: thermo r3c4-r3c5-r3c6-r2c6-r1c6
thermo-3: thermo r4c7-r5c7-r6c7-r6c8-r6c9
thermo-4: thermo r7c6-r7c5-r7c4-r8c4-r9c4
whispers-1: whispers r1c2-r2c2-r3c2 gap 5
whispers-2: whispers r7c8-r8c8-r9c8 gap 5
whispers-3: whispers r6c3-r5c2-r6c1 gap 5
whispers-4: whispers r4c7-r5c8-r4c8 gap 5
renban-1: renban r1c1-r2c1-r3c1
renban-2: renban r1c3-r2c3-r3c3
renban-3: renban r1c7-r1c8-r1c9
renban-4: renban r3c7-r3c8-r3c9
renban-5: renban r9c7-r8c7-r7c7
renban-6: renban r7c9-r8c9-r9c9
renban-7: renban r7c1-r7c2-r7c3
renban-8: renban r9c3-r9c2-r9c1
```

Normal sudoku rules apply. Each row, column, and box must contain a complete set of the digits 1-9.

Normal killer cage rules apply: digits in cages cannot repeat and must sum to the number shown in the upper left corner of the cage.

Digits along a thermometer must strictly increase from bulb to top. Digits along the thermometer do not have to be consecutive.

Green lines are German whispers lines. Adjacent digits along the line must differ by 5 or more. 

Purple lines are Renban lines. Digits along a renban line form a set of consecutive digits in any order.
