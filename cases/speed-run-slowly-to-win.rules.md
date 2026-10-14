---
format: open-rules
title: Speed Run Slowly, To Win
setter: Will Power
source: https://sudokupad.app/8byptzz4xt
case: https://sudoku-sleuth.com/cases/speed-run-slowly-to-win
library: https://rules.sudoku-sleuth.com/
status: read
exported: fc7b18f2bb668f89b84e8862e7e43884
---

```rules
sudoku 9x9
cage-1: cage r8c5-r8c6 total 13 connected true
cage-2: cage r5c8-r6c8 total 9 connected true
slow-thermo-1: slow-thermo r9c1-r8c1-r7c1-r7c2-r8c2-r9c2-r9c3
slow-thermo-2: slow-thermo r8c9-r7c9-r7c8
slow-thermo-3: slow-thermo r6c9-r5c9-r4c9-r3c9-r2c8
slow-thermo-4: slow-thermo r7c5-r7c4-r6c3-r5c3-r4c3-r3c4-r3c5-r3c6-r4c7-r5c7-r6c7-r7c6
slow-thermo-5: slow-thermo r4c2-r3c3-r2c4-r2c5-r2c6-r3c7-r4c8-r5c8-r6c8-r7c7-r8c6-r8c5-r8c4-r7c3-r6c2-r5c2
```

Normal Sudoku rules apply. 

SLOW THERMOS- Numbers on thermos must not decrease from the bulb end. Note: The SudokuPad and F-Puzzles tools cannot check slow thermos. Incorrect cells will not cause an error to show. I used circles and lines to simulate thermos.

KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.

Post your time on Logic Masters Deutschland, if you like. Bonus for less than 10 minutes. Double bonus for less than 8 minutes.
