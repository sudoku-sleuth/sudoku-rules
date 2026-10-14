---
format: open-rules
title: Hungry little killers
setter: sujoyku
source: https://tinyurl.com/4d9vdenu
case: https://sudoku-sleuth.com/cases/hungry-little-killers
library: https://rules.sudoku-sleuth.com/
status: read
exported: 4e64c8e40e2a5b9a4501afa2f04f227f
---

```rules
sudoku 9x9
little-killer-1: little-killer r9c1-r8c2-r7c3-r6c4-r5c5-r4c6-r3c7-r2c8-r1c9 sum 21
little-killer-2: little-killer r1c6-r2c5-r3c4-r4c3-r5c2-r6c1 sum 14
little-killer-3: little-killer r9c4-r8c5-r7c6-r6c7-r5c8-r4c9 sum 15
little-killer-4: little-killer r5c9-r4c8-r3c7-r2c6-r1c5 sum 26
sandwich-1: sandwich r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9 sum 30
sandwich-2: sandwich r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9 sum 2
sandwich-3: sandwich r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4 sum 31
sandwich-4: sandwich r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 sum 24
sandwich-5: sandwich r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9 sum 18
```

Normal sudoku rules apply. Clues outside the grid with an arrow are Little Killer clues and indicate the sum of all digits along that diagonal. Clues outside the grid without an arrow are Sandwich clues and indicate the sum of all digits between 1 and 9 in the resp. row or column.
