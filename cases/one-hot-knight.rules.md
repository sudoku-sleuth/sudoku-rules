---
format: open-rules
title: One Hot Knight
setter: Meggen033
source: https://sudokupad.app/omhuh7garp
case: https://sudoku-sleuth.com/cases/one-hot-knight
library: https://rules.sudoku-sleuth.com/
status: read
exported: ffeea682ed98b56102565deff0c6b83b
---

```rules
sudoku 9x9
cage-1: cage r6c7-r7c7 total 5 connected true
cage-2: cage r2c3-r3c3 total 15 connected true
cage-3: cage r6c3-r7c3 total 7 connected true
cage-4: cage r2c7-r3c7 total 13 connected true
cage-5: cage r2c1-r2c2 total 8 connected true
thermo-1: thermo r7c5-r6c5-r5c5-r4c5-r3c5-r2c5
thermo-2: thermo r6c3-r5c4-r4c4-r3c3
thermo-3: thermo r6c9-r5c8-r4c9
anti-knight
```

•	Normal Sudoku rules apply. 
•	Cells separated by a knight's move in chess cannot contain the same digit.
•	Digits in a cage do not repeat and sum to the clue in the top left.
•	Digits along each thermometer must increase starting from the bulb end.
