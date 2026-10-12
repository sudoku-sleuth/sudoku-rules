---
format: open-rules
title: Entresol
setter: Meggen033
source: https://sudokupad.app/8yzowt1xce
case: https://sudoku-sleuth.com/cases/entresol
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r5c4-r6c4-r6c5 total 9 connected true
cage-2: cage r4c5-r4c6-r5c6 total 21 connected true
cage-3: cage r1c5-r2c5 total 13 connected true
cage-4: cage r5c8-r5c9 total 13 connected true
cage-5: cage r8c5-r9c5 total 7 connected true
cage-6: cage r5c1-r5c2 total 7 connected true
cage-7: cage r3c5-r3c6 total 7 connected true
cage-8: cage r4c7-r5c7 total 7 connected true
cage-9: cage r7c4-r8c4 total 15 connected true
cage-10: cage r6c2-r6c3 total 14 connected true
cage-11: cage r2c2-r3c2 total 7 connected true
cage-12: cage r8c7-r8c8 total 7 connected true
cage-13: cage r1c8-r1c9-r2c9 total 9 connected true
cage-14: cage r7c2-r7c3-r8c3 total 9 connected true
diagonal direction "anti"
thermo-1: thermo r6c6-r5c5-r4c4
thermo-2: thermo r8c9-r8c8-r9c8
thermo-3: thermo r7c6-r7c7-r6c7
```

•	Normal Sudoku rules apply. 
•	Digits along the positive diagonal cannot repeat.
•	Digits in a cage do not repeat and sum to the clue in the top left.
•	Digits along each thermometer must increase starting from the bulb end.
