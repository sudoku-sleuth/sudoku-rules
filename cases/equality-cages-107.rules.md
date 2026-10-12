---
format: open-rules
title: "Equality Cages 107: Archery requires balance"
setter: gUBBLOR
source: ""
case: https://sudoku-sleuth.com/cases/equality-cages-107
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
equality-cage-1: equality-cage r8c8-r9c7-r9c8-r9c9
equality-cage-2: equality-cage r7c7-r7c8
equality-cage-3: equality-cage r2c8-r3c8
equality-cage-4: equality-cage r1c8-r1c9
equality-cage-5: equality-cage r1c4-r1c5
equality-cage-6: equality-cage r2c1-r2c2
equality-cage-7: equality-cage r7c4-r7c5
equality-cage-8: equality-cage r9c4-r9c5
equality-cage-9: equality-cage r8c3-r8c4
arrow-1: arrow r9c8-r9c7-r8c8 bulb ["r9c9"]
arrow-2: arrow r7c7-r6c8-r5c8 bulb ["r7c8"]
arrow-3: arrow r1c1-r1c2-r1c3 bulb ["r2c2"]
arrow-4: arrow r2c3-r1c4 bulb ["r2c2"]
arrow-5: arrow r6c1-r5c1 bulb ["r7c2"]
arrow-6: arrow r8c1-r9c1 bulb ["r7c2"]
arrow-7: arrow r4c1-r5c1 bulb ["r3c1"]
arrow-8: arrow r7c5-r7c4 bulb ["r6c6"]
arrow-9: arrow r9c4-r9c3 bulb ["r9c5"]
arrow-10: arrow r4c4-r4c5-r3c6-r2c6 bulb ["r5c3"]
arrow-11: arrow r5c6-r6c7 bulb ["r5c7"]
arrow-12: arrow r5c6-r4c6 bulb ["r5c7"]
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

Arrows: The digits along each arrow must sum to the digit in the circled cell. Digits may repeat on arrows.
