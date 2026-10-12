---
format: open-rules
title: Easter Box
setter: Katie Splendor
source: https://sudokupad.app/5t6spze10t
case: https://sudoku-sleuth.com/cases/easter-box
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c4=2 r4c9=9 r5c3=6 r5c7=1 r6c6=4 r7c3=3 r9c6=8
---

```rules
sudoku 9x9
arrow-1: arrow r4c6-r3c7-r2c8 bulb ["r5c5"]
arrow-2: arrow r6c4-r7c3-r8c2 bulb ["r5c5"]
arrow-3: arrow r4c4-r3c3 bulb ["r5c5"]
arrow-4: arrow r6c6-r7c7 bulb ["r5c5"]
arrow-5: arrow r4c5-r3c5 bulb ["r5c5"]
arrow-6: arrow r6c5-r7c5 bulb ["r5c5"]
arrow-7: arrow r3c2-r4c2 bulb ["r2c2"]
whispers-1: whispers r9c4-r9c5-r9c6 gap 5
whispers-2: whispers r1c4-r1c5-r1c6 gap 5
whispers-3: whispers r6c9-r5c9-r4c9 gap 5
whispers-4: whispers r6c1-r5c1-r4c1 gap 5
renban-1: renban r6c5-r6c6-r5c6-r4c6-r4c5-r4c4-r5c4-r6c4
renban-2: renban r7c7-r8c7-r9c7-r9c8-r9c9-r8c9-r7c9-r7c8
renban-3: renban r7c2-r7c3-r8c3-r9c3-r9c2-r9c1-r8c1-r7c1
renban-4: renban r1c7-r2c7-r3c7-r3c8-r3c9-r2c9-r1c9-r1c8
renban-5: renban r1c2-r1c3-r2c3-r3c3-r3c2-r3c1-r2c1-r1c1
```

- Normal Sudoku rules apply for columns, rows and boxes.
- Purple lines are Renban lines, each containing a group of consecutive digits, though neighbors do not have to be consecutive.
- Green lines are German Whisper lines, where each number on the line has a difference of at least five from its neighbor.
- Arrow rules apply - the digit in the bulb is the sum of the digits along the arrow.
