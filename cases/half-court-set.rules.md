---
format: open-rules
title: Half Court Set
setter: Tingo
source: https://sudokupad.app/drwpx0wjpe
case: https://sudoku-sleuth.com/cases/half-court-set
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0df1a0f8abf8d97d7c2723b5dcd8a2d0
---

```rules
sudoku 9x9
thermo-1: thermo r3c5-r3c4-r3c3-r4c2-r4c1-r3c1
thermo-2: thermo r9c1-r8c1-r7c2-r6c2-r6c1
thermo-3: thermo r9c9-r8c8-r8c9
thermo-4: thermo r7c9-r6c9-r5c9
kropki-1: kropki r4c4-r5c4 white
kropki-2: kropki r6c5-r7c5 white
kropki-3: kropki r7c7-r7c8 white
kropki-4: kropki r9c7-r9c8 white
kropki-5: kropki r9c2-r9c3 white
whispers-1: whispers r9c3-r8c3-r7c3-r6c3-r5c3-r4c4-r4c5-r4c6-r5c7-r6c7-r7c7-r8c7-r9c7 gap 5
whispers-2: whispers r6c3-r6c4-r6c5-r6c6-r6c7 gap 5
pair-1: pair r5c4-r6c4 sum 10
pair-2: pair r3c5-r4c5 sum 10
pair-3: pair r9c1-r9c2 sum 10
pair-4: pair r9c8-r9c9 sum 10
pair-5: pair r7c8-r7c9 sum 10
little-killer-1: little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 55
little-killer-2: little-killer r9c5-r8c6-r7c7-r6c8-r5c9 sum 39
parity-cells r9c5 parity "odd"
```

This sudoku is my tip of the cap to basketball. The rules:

Normal Sudoku Rules Apply
Cells joined by white dots (Defenders) have consecutive values. Cells joined by Xs (Offensive players) sum to 10. Not all dots or Xs are given. 
Adjacent digits along the green line (The "Lane") must differ in value by at least 5.
Digits along thermometers (the paths of the offensive players during the play) must strictly increase from the bulb end.
Numbers outside the puzzle (the game's score: 55 - 39) indicate the sum of the digits along the marked diagonal.
The digit in the gray circle (the Hoop) is odd.
