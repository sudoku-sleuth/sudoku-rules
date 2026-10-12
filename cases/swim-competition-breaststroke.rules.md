---
format: open-rules
title: Swim Competition Breaststroke
setter: Will Power
source: https://sudokupad.app/gdvetpxi8p
case: https://sudoku-sleuth.com/cases/swim-competition-breaststroke
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-king
thermo-1: thermo r5c1-r4c2-r3c3-r2c4-r1c5
thermo-2: thermo r9c5-r8c6-r7c7-r6c8-r5c9
kropki-1: kropki r6c4-r7c4 colour "black"
kropki-2: kropki r5c8-r6c8 colour "black"
kropki-3: kropki r2c3-r2c4 colour "black"
arrow-1: arrow r5c5-r6c4-r7c4-r8c4-r9c3 bulb ["r4c6"]
arrow-2: arrow r5c5-r6c4-r6c3-r6c2-r7c1 bulb ["r4c6"]
arrow-3: arrow r5c5-r5c6-r5c7-r4c8 bulb ["r4c6"]
arrow-4: arrow r5c5-r4c5-r3c5-r2c6 bulb ["r4c6"]
extremum r8c8-r4c4 type "max" exhaustive false
```

Normal Sudoku rules apply. ANTI-KING- Cells a chess king's move apart cannot have the same number. ARROWS- Numbers on arrows sum to the number in the arrow's circle. Numbers may repeat on arrows, if other rules allow. THERMOMETERS- Numbers on thermometers increase from the bulb end. KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. MAXIMUMS- Cells shaded gray are greater than all 4 orthogonally adjacent cells.
