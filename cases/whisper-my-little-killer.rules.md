---
format: open-rules
title: Whisper, My Little Killer
setter: Will Power
source: https://f-puzzles.com/?id=yjq67uqo
case: https://sudoku-sleuth.com/cases/whisper-my-little-killer
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c3=5 r1c9=2 r4c6=2 r6c6=6 r8c9=7 r9c1=5
---

```rules
sudoku 9x9
whispers-1: whispers r1c1-r2c1-r3c1 gap 5
whispers-2: whispers r8c1-r8c2-r8c3 gap 5
whispers-3: whispers r6c2-r7c3-r8c4 gap 5
whispers-4: whispers r9c5-r8c6-r7c7-r6c8-r5c9 gap 5
whispers-5: whispers r1c5-r2c4-r3c3-r4c2-r5c1 gap 5
whispers-6: whispers r2c6-r3c7-r4c8 gap 5
whispers-7: whispers r1c7-r1c8-r1c9 gap 5
whispers-8: whispers r7c8-r8c8-r9c8 gap 5
little-killer-1: little-killer r5c9-r6c8-r7c7-r8c6-r9c5 sum 35
little-killer-2: little-killer r1c5-r2c6-r3c7-r4c8-r5c9 sum 30
little-killer-3: little-killer r1c5-r2c4-r3c3-r4c2-r5c1 sum 22
little-killer-4: little-killer r5c1-r6c2-r7c3-r8c4-r9c5 sum 28
```

Normal Sudoku rules apply.  German Whispers Lines- Neigboring cells along green lines must be at least 5 apart.  Little Killer Clues-  Numbers outside the grid are the sum on the indicated diagonal.  Numbers may repeat on lines and diagonals, if other rules allow.
