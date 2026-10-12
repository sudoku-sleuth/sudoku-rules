---
format: open-rules
title: Evasive Operation
setter: Meggen033
source: https://sudokupad.app/x61xs42k0c
case: https://sudoku-sleuth.com/cases/evasive-operation
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c4-r4c5 total 6 connected true
cage-2: cage r5c6-r6c6 total 5 connected true
cage-3: cage r2c6-r3c6 total 7 connected true
cage-4: cage r4c7-r4c8 total 8 connected true
cage-5: cage r1c6-r1c7 total 8 connected true
cage-6: cage r3c9-r4c9 total 7 connected true
cage-7: cage r2c7-r3c7-r3c8 total 9 connected true
cage-8: cage r2c3-r2c4 total 9 connected true
cage-9: cage r3c2-r3c3 total 11 connected true
cage-10: cage r4c1-r5c1 total 13 connected true
cage-11: cage r7c7-r8c7 total 9 connected true
cage-12: cage r6c8-r7c8 total 13 connected true
cage-13: cage r9c5-r9c6 total 15 connected true
cage-14: cage r8c4-r9c4 total 11 connected true
cage-15: cage r6c1-r6c2 total 8 connected true
cage-16: cage r5c9-r6c9 total 9 connected true
cage-17: cage r1c4-r1c5 total 12 connected true
cage-18: cage r8c1-r9c1-r9c2 total 13 connected true
thermo-1: thermo r3c6-r3c7-r4c7
thermo-2: thermo r7c4-r7c3-r6c3-r5c4
```

•	Normal Sudoku rules apply. 
•	Digits in a cage do not repeat and sum to the clue in the top left.
•	Digits along thermometers increase from the bulb end.
