---
format: open-rules
title: Tell me fives, tell me sweet little fives!
setter: Timotab
source: https://sudokupad.app/way66fxn7e
case: https://sudoku-sleuth.com/cases/tell-me-fives-tell-me-sweet-little-fives
library: https://rules.sudoku-sleuth.com/
status: read
givens: r8c5=5
---

```rules
sudoku 9x9
whispers-1: whispers r4c6-r4c5-r4c4-r5c4-r5c5-r5c6-r6c6-r6c5-r6c4 gap 4
whispers-2: whispers r2c3-r2c2-r3c2-r3c3-r4c3-r4c2 gap 4
whispers-3: whispers r1c9-r1c8-r2c8-r2c9-r3c9-r3c8 gap 4
whispers-4: whispers r6c8-r6c7-r7c7-r7c8-r8c8-r8c7 gap 4
whispers-5: whispers r7c2-r7c1-r8c1-r8c2-r9c2-r9c1 gap 4
pair-1: pair r3c4-r4c4 relation {"op":"sum","value":5}
pair-2: pair r5c9-r6c9 relation {"op":"sum","value":5}
pair-3: pair r8c7-r9c7 relation {"op":"sum","value":5}
pair-4: pair r2c7-r3c7 relation {"op":"sum","value":5}
pair-5: pair r1c4-r1c5 relation {"op":"sum","value":5}
little-killer-1: little-killer r4c1-r3c2-r2c3-r1c4 sum 5
little-killer-2: little-killer r6c9-r7c8-r8c7-r9c6 sum 5
little-killer-3: little-killer r1c8-r2c9 sum 5
little-killer-4: little-killer r9c2-r8c1 sum 5
```

• Normal sudoku rules apply: Place the digits 1 to 9 once each in every row, column, and box.
• Adjacent digits on an orange Whispers-4 line must differ by at least 4. 
• Clues outside the grid indicate the sum of the digits on the indicated diagonal.
• Digits separated by a V must sum to 5. Not all possible V clues are necessarily given.
