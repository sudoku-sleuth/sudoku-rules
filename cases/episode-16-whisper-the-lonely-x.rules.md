---
format: open-rules
title: Episode 16- whisper- The lonely X
setter: Chip Sounder
source: https://sudokupad.app/czl46gmq8l
case: https://sudoku-sleuth.com/cases/episode-16-whisper-the-lonely-x
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c4=6 r2c7=2 r5c2=2 r9c6=2
exported: 272f65312f2503e39165dc546c5b1950
---

```rules
sudoku 9x9
whispers-1: whispers r7c1-r8c1-r9c2-r9c3-r9c4 gap 5
whispers-2: whispers r6c4-r6c3-r6c2-r5c1-r4c1 gap 5
whispers-3: whispers r4c3-r3c4-r3c3-r3c2-r2c1-r1c1 gap 5
whispers-4: whispers r3c7-r3c8-r2c9-r1c9 gap 5
whispers-5: whispers r5c7-r5c8-r4c9-r3c9 gap 5
whispers-6: whispers r8c7-r8c8-r7c9-r6c9 gap 5
whispers-7: whispers r2c5-r3c6-r4c5-r5c6-r6c5-r7c6-r8c5 gap 5
whispers-8: whispers r8c9-r9c8 gap 5
whispers-9: whispers r8c3-r8c4 gap 5
pair r3c1-r3c2 sum 10
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Adjacent digits along a green line must differ by at least 5.
Cells separated by an X sum to 10. 
Not all Xs are given.
