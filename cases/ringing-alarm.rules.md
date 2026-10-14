---
format: open-rules
title: Ringing Alarm
setter: EPH
source: https://sudokupad.app/81oybc1fip
case: https://sudoku-sleuth.com/cases/ringing-alarm
library: https://rules.sudoku-sleuth.com/
status: read
exported: 750382fe2ecea4d3f8b29ccdd22e7a35
---

```rules
sudoku 9x9
cage-1: cage r1c8-r1c9-r2c8-r2c9 total 17 connected true
cage-2: cage r8c1-r8c2-r9c1-r9c2 total 18 connected true
cage-3: cage r8c8-r8c9-r9c8-r9c9 total 15 connected true
cage-4: cage r4c9-r5c9-r6c9 total 11 connected true
cage-5: cage r4c1-r5c1-r6c1 total 23 connected true
cage-6: cage r1c1-r1c2-r2c1-r2c2 total 19 connected true
whispers r3c4-r3c5-r3c6-r4c7-r5c7-r6c7-r7c6-r7c5-r7c4-r6c3-r5c3-r4c3 gap 5 loop true
renban-1: renban r3c5-r4c5-r5c5-r5c4-r5c3
renban-2: renban r9c4-r8c5-r9c6
renban-3: renban r2c4-r1c5-r2c6
```

Standard suduko rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.
Killer cages: digits in cages must not repeat, and must sum to the value in the corner.
Renban: each purple line must contain a non-repeating set of consecutive digits, in any order.
German whisper: adjacent digits on a green line must differ by at least 5.
