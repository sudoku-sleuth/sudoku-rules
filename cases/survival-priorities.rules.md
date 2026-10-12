---
format: open-rules
title: Survival Priorities
setter: Will Power
source: https://sudokupad.app/q0whysshuw
case: https://sudoku-sleuth.com/cases/survival-priorities
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r6c6-r5c6 bulb ["r6c5"]
arrow-2: arrow r4c4-r5c4 bulb ["r4c5"]
whispers-1: whispers r9c5-r8c4-r7c3-r6c2 gap 5
whispers-2: whispers r5c1-r4c2-r3c3-r2c4 gap 5
whispers-3: whispers r1c5-r2c6-r3c7-r4c8 gap 5
whispers-4: whispers r5c9-r6c8-r7c7-r8c6 gap 5
little-killer-1: little-killer r5c1-r4c2-r3c3-r2c4-r1c5 sum 22
little-killer-2: little-killer r3c1-r2c2-r1c3 sum 13
little-killer-3: little-killer r1c5-r2c6-r3c7-r4c8-r5c9 sum 27
little-killer-4: little-killer r1c7-r2c8-r3c9 sum 17
little-killer-5: little-killer r9c3-r8c2-r7c1 sum 11
little-killer-6: little-killer r5c9-r6c8-r7c7-r8c6-r9c5 sum 17
little-killer-7: little-killer r7c9-r8c8-r9c7 sum 9
little-killer-8: little-killer r9c5-r8c4-r7c3-r6c2-r5c1 sum 24
```

Air, Shelter, Fire, Water, Food, Sudoku. HINT: Track your progress with pencilmarks, more than you may normally, to find surprising deductions. Normal Sudoku rules apply. GERMAN WHISPERS(+)- Numbers on green lines are at least 5 apart from their neighbors on the line. ALL NUMBERS ON ANY GREEN LINE DO NOT APPEAR ON OTHER GREEN LINES. ARROWS- Numbers on arrows sum to the number in the arrow's circle. LITTLE KILLER- Numbers outside the grid are the sum of the numbers on the indicated diagonal.
