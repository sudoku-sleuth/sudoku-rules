---
format: open-rules
title: Tic-Tac-Toe
setter: Meggen033
source: ""
case: https://sudoku-sleuth.com/cases/tic-tac-toe-3
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c4-r2c5-r2c6 total 15 connected true
cage-2: cage r4c2-r5c2-r6c2 total 15 connected true
cage-3: cage r4c8-r5c8-r6c8 total 15 connected true
cage-4: cage r8c4-r8c5-r8c6 total 15 connected true
cage-5: cage r1c5-r1c6 total 5 connected true
cage-6: cage r5c1-r6c1 total 9 connected true
cage-7: cage r4c9-r5c9 total 12 connected true
cage-8: cage r9c4-r9c5 total 11 connected true
kropki-1: kropki r5c7-r5c8 colour "white"
kropki-2: kropki r2c5-r3c5 colour "white"
kropki-3: kropki r6c2-r6c3 colour "white"
kropki-4: kropki r7c4-r8c4 colour "white"
whispers-1: whispers r3c1-r2c2-r1c3-r1c4 gap 5
whispers-2: whispers r3c3-r2c2-r1c1 gap 5
whispers-3: whispers r3c7-r2c8-r1c9 gap 5
whispers-4: whispers r3c9-r2c8-r1c7 gap 5
whispers-5: whispers r9c7-r8c8-r7c9 gap 5
whispers-6: whispers r9c9-r8c8-r7c7 gap 5
whispers-7: whispers r9c1-r8c2-r7c3 gap 5
whispers-8: whispers r9c3-r8c2-r7c1 gap 5
parity-cells r3c5-r5c7-r7c5-r5c3 parity "even"
```

Normal Sudoku rules apply. 

Adjacent digits along each german whisper line must have a difference of at least 5.

The digits in a cage must sum to the number printed in its corner. Digits may not repeat within a cage.

A white dot between cells indicates cells with consecutive values. Not all dots are shown.

Cells with a filled square must be even.

Exported from sudokulab.net
