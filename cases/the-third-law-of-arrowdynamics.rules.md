---
format: open-rules
title: The Third Law of Arrowdynamics
setter: EPH
source: https://tinyurl.com/2wxtj93m
case: https://sudoku-sleuth.com/cases/the-third-law-of-arrowdynamics
library: https://rules.sudoku-sleuth.com/
status: read
exported: e746e6005a07c1fee9b8529cb384b481
---

```rules
sudoku 9x9
arrow-1: arrow r2c2-r1c3 bulb ["r3c1"]
arrow-2: arrow r2c4-r2c5-r2c6 bulb ["r3c3"]
arrow-3: arrow r8c6-r8c5-r8c4 bulb ["r7c7"]
arrow-4: arrow r8c8-r9c7 bulb ["r7c9"]
arrow-5: arrow r8c2-r8c3 bulb ["r7c1"]
arrow-6: arrow r2c8-r2c7 bulb ["r3c9"]
arrow-7: arrow r4c5-r3c5 bulb ["r5c5"]
arrow-8: arrow r6c5-r6c4 bulb ["r6c6"]
arrow-9: arrow r5c1-r4c1 bulb ["r5c2"]
arrow-10: arrow r5c9-r6c9 bulb ["r5c8"]
entropic-1: entropic r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r4c8-r4c7-r5c7-r6c7-r6c8-r7c8-r7c7-r7c6-r7c5-r7c4-r7c3-r7c2-r6c2-r6c3-r5c3-r4c3-r4c2 loop true
entropic-2: entropic r9c5-r9c4-r9c3
entropic-3: entropic r1c7-r1c6-r1c5
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Digits along an arrow must sum to the value in the attached circle.

Any group of three consecutive cells along a pink entropic line must contain one low digit (1,2,3), one middle digit (4,5,6), and one high digit (7,8,9).
