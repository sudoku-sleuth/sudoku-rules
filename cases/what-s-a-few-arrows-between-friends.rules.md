---
format: open-rules
title: What's A Few Arrows Between Friends
setter: EPH
source: https://sudokupad.app/3jgtb9q2w3
case: https://sudoku-sleuth.com/cases/what-s-a-few-arrows-between-friends
library: https://rules.sudoku-sleuth.com/
status: read
givens: r8c1=1 r9c2=2
exported: 1d386122618eef954ee1a5971e1c9d93
---

```rules
sudoku 9x9
arrow-1: arrow r4c1-r5c1 bulb ["r3c1"]
arrow-2: arrow r3c2-r2c2-r1c2 bulb ["r3c1"]
arrow-3: arrow r4c6-r5c6-r6c6 bulb ["r3c7"]
arrow-4: arrow r4c6-r4c5-r4c4 bulb ["r3c7"]
arrow-5: arrow r6c3-r5c3 bulb ["r7c3"]
arrow-6: arrow r7c4-r7c5 bulb ["r7c3"]
arrow-7: arrow r9c6-r9c5 bulb ["r9c7"]
arrow-8: arrow r8c7-r8c8-r8c9 bulb ["r9c7"]
arrow-9: arrow r3c9-r4c9-r5c9 bulb ["r2c8"]
arrow-10: arrow r1c7-r1c6-r1c5 bulb ["r2c8"]
between-1: between r6c4 ends ["r5c4","r6c5"]
between-2: between r2c4-r2c5-r3c6-r4c7-r5c8-r6c8 ends ["r1c3","r7c9"]
between-3: between r4c2-r5c2-r6c2 ends ["r3c1","r7c3"]
between-4: between r8c4-r8c5-r8c6 ends ["r7c3","r9c7"]
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.
Arrows: digits on a thin grey line must sum to the value in the attached circle 
Between lines: digits on a thick grey line must have values strictly between the values in the circles at the ends of the line.  Lines do not pass through circles.
