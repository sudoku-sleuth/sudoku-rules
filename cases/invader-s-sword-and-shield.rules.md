---
format: open-rules
title: Invader's Sword and Shield
setter: Tingo
source: https://sudokupad.app/fdjs9d3ukl
case: https://sudoku-sleuth.com/cases/invader-s-sword-and-shield
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
anti-king
thermo-1: thermo r2c3-r3c2-r3c1-r4c1-r5c1-r6c2-r7c3
thermo-2: thermo r2c3-r3c4-r3c5-r4c5-r5c5-r6c4-r7c3
thermo-3: thermo r9c8-r8c8-r7c8-r6c7
thermo-4: thermo r7c8-r6c9-r6c8-r5c8-r4c8-r3c8-r2c8
renban-1: renban r4c2-r3c3-r4c4
renban-2: renban r4c3-r5c3-r6c3
renban-3: renban r1c3-r1c4-r1c5
renban-4: renban r1c7-r1c8-r1c9
```

```drawing
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[5.5,8.5],[5.5,7.5],[4.5,7.5],[3.5,7.5],[2.5,7.5],[1.5,7.5]],"color":"#2E2E2E","thickness":8,"rounded":true}}
```

Normal Sudoku Rules Apply
Cells separated by a king's move (in chess) cannot contain the same digit.
Thermometer digits must strictly increase from the bulb end. The shield is made up of two therms, each sharing the bulb and the tip. Within the sword, a second thermometer begins. I've added a dark thin line to show the full length of that thermometer. There are no additional rules from the line, just demarkation to make seeing the therm easier.
Pink lines are renban lines. All digits along the line must be consecutive in any order.
