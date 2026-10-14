---
format: open-rules
title: A Hurricane Came
setter: The Cast of Hamilton (FullDeck and Missing a Few Cards)
source: https://sudokupad.app/hyg99yltbi
case: https://sudoku-sleuth.com/cases/a-hurricane-came
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=6 r2c2=7 r3c3=3 r4c6=3 r5c2=4 r5c8=2 r6c4=1 r7c7=4 r8c8=6 r9c9=8
exported: 558a15d0f994c0e79193f6fddcb38274
---

```rules
sudoku 9x9
anti-knight
arrow-1: arrow r2c1-r1c2-r1c3 bulb ["r3c1"]
arrow-2: arrow r1c8-r2c9-r3c9 bulb ["r1c7"]
arrow-3: arrow r8c9-r9c8-r9c7 bulb ["r7c9"]
arrow-4: arrow r9c2-r8c1-r7c1 bulb ["r9c3"]
arrow-5: arrow r5c3-r6c2-r6c1 bulb ["r4c3"]
arrow-6: arrow r5c7-r4c8-r4c9 bulb ["r6c7"]
arrow-7: arrow r7c5-r8c4 bulb ["r8c6"]
arrow-8: arrow r6c4-r7c3 bulb ["r5c5"]
arrow-9: arrow r4c6-r3c7 bulb ["r5c5"]
arrow-10: arrow r2c5-r3c4 bulb ["r1c4"]
```

- Normal Sudoku rules apply.
- Cells that are a Knight's move apart (in chess) may not contain the same digit.
- Digits placed on an arrow must sum to the digit placed in that arrow's circle.
