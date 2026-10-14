---
format: open-rules
title: Baccarat
setter: EPH
source: https://tinyurl.com/2uhm2w46
case: https://sudoku-sleuth.com/cases/baccarat
library: https://rules.sudoku-sleuth.com/
status: read
exported: 87f0b67ed00443358cd80422d048ed1d
---

```rules
sudoku 9x9
cage-1: cage r2c1-r3c1 total 7 connected true
cage-2: cage r2c2-r2c3 total 13 connected true
cage-3: cage r7c1-r8c1 total 8 connected true
cage-4: cage r7c2-r7c3 total 12 connected true
cage-5: cage r7c8-r8c8 total 7 connected true
cage-6: cage r1c7-r1c8-r2c7-r3c7 total 28 connected true
arrow-1: arrow r3c4-r2c4 bulb ["r4c3"]
arrow-2: arrow r5c4-r6c4-r7c4 bulb ["r4c4"]
arrow-3: arrow r5c1-r6c1-r6c2 bulb ["r4c1"]
arrow-4: arrow r5c8-r6c8-r6c7 bulb ["r4c8"]
between-1: between r5c6-r6c6-r7c6-r8c6 ends ["r4c6","r9c6"]
between-2: between r2c6-r3c6 ends ["r1c6","r4c6"]
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Digits along an arrow must sum to the value in the attached circle.

Digits in a cage must sum to the value shown in the left upper corner of the cage.

Digits on a between line must have values strictly between the digits in the circles on the ends of the line.
