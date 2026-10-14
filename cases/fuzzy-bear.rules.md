---
format: open-rules
title: Fuzzy Bear
setter: Meggen033
source: https://sudokupad.app/bd9zf711ru
case: https://sudoku-sleuth.com/cases/fuzzy-bear
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: eb90239dd4f1932e688512e8782d994e
---

```rules
sudoku 9x9
cage-1: cage r2c3-r3c3 total 8 connected true
cage-2: cage r1c8-r2c8-r3c8-r3c9 total 10 connected true
cage-3: cage r7c8-r8c8 total 8 connected true
cage-4: cage r1c5-r1c6 total 3 connected true
cage-5: cage r4c1-r4c2 total 7 connected true
cage-6: cage r6c1-r6c2 total 7 connected true
cage-7: cage r3c6-r4c6 total 7 connected true
cage-8: cage r6c6-r6c7 total 4 connected true
cage-9: cage r8c1-r8c2-r9c1 total 21 connected true
cage-10: cage r9c6-r9c7 total 15 connected true
thermo r2c5-r3c5-r4c5-r5c5-r6c5
whispers r4c3-r5c2-r6c3-r7c2-r8c3-r7c4-r6c3-r5c4 gap 5 loop true
nabner r1c6-r2c6-r3c6-r3c7 distinct true
little-killer r1c3-r2c2-r3c1 sum 8
parity-cells r8c5-r7c6-r7c5-r9c5 parity "even"
```

```drawing
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[3.5,6.5],[3.5,5.5],[4.5,5.5],[5.5,5.5],[5.5,6.5],[5.5,7.5],[4.5,7.5],[4.5,6.5]],"color":"#F70019","thickness":12.8,"rounded":true}}
```

•	Normal Sudoku rules apply. 
•	Digits in a cage do not repeat and sum to the clue in the top left.
•	Digits along marked diagonals sum to the number indicated outside the grid.
•	Digits along each thermometer must increase starting from the bulb end.
•	Cells with a filled square must be even.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	Digits along a yellow Nabner line cannot contain repeated digits and no two digits along a line may be consecutive.
•	Digits along a red 10-line must be separated into sequential groups so that each group sums to a total of 10.
