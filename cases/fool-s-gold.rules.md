---
format: open-rules
title: Fool's Gold
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/nu6n2hh5sd
case: https://sudoku-sleuth.com/cases/fool-s-gold
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c1=5 r3c2=2 r7c6=5 r7c7=2
---

```rules
sudoku 9x9
arrow-1: arrow r3c3-r4c4 bulb ["r3c2"]
arrow-2: arrow r4c1-r4c2 bulb ["r3c1"]
arrow-3: arrow r4c6-r4c5 bulb ["r3c7"]
arrow-4: arrow r3c6-r3c5 bulb ["r2c7"]
arrow-5: arrow r2c6-r2c5 bulb ["r1c7"]
arrow-6: arrow r5c6-r5c5 bulb ["r4c7"]
arrow-7: arrow r8c6-r9c7 bulb ["r7c7"]
arrow-8: arrow r7c5-r8c4 bulb ["r7c6"]
arrow-9: arrow r5c8-r5c7 bulb ["r4c9"]
arrow-10: arrow r6c8-r6c7 bulb ["r5c9"]
arrow-11: arrow r1c2-r2c3 bulb ["r1c1"]
arrow-12: arrow r9c2-r8c3 bulb ["r9c1"]
arrow-13: arrow r7c3-r6c2 bulb ["r7c4"]
```

- Normal sudoku rules apply.
- Digits along the shaft of an arrow sum to the value shown in the attached circle.
