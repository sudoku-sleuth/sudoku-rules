---
format: open-rules
title: "Equality Cages 104: Even the lines split their sums equally"
setter: gUBBLOR
source: ""
case: https://sudoku-sleuth.com/cases/equality-cages
library: https://rules.sudoku-sleuth.com/
status: read
exported: c2e9da62ba5f98654067699cc5d20570
---

```rules
sudoku 9x9
equality-cage-1: equality-cage r3c1-r3c2-r3c3-r4c3
equality-cage-2: equality-cage r2c9-r3c9-r4c9-r5c9
equality-cage-3: equality-cage r1c4-r1c5-r2c5-r2c6
equality-cage-4: equality-cage r4c7-r5c7-r6c7-r6c8
equality-cage-5: equality-cage r4c8-r5c8
equality-cage-6: equality-cage r7c8-r8c8
equality-cage-7: equality-cage r7c9-r8c9-r9c8-r9c9
equality-cage-8: equality-cage r9c1-r9c2
equality-cage-9: equality-cage r6c3-r7c3
equality-cage-10: equality-cage r5c1-r5c2
equality-cage-11: equality-cage r1c2-r2c2
kropki-1: kropki r3c6-r3c7 black
kropki-2: kropki r2c9-r3c9 black
kropki-3: kropki r1c4-r1c5 black
kropki-4: kropki r5c7-r6c7 black
kropki-5: kropki r4c8-r5c8 black
kropki-6: kropki r9c8-r9c9 black
kropki-7: kropki r6c3-r7c3 black
kropki-8: kropki r4c1-r5c1 black
region-sum-1: region-sum r3c1-r3c2-r3c3-r4c3-r4c4-r4c5-r3c4-r2c5-r1c5 segments [["r3c1","r3c2","r3c3"],["r4c3"],["r4c4","r4c5"],["r3c4","r2c5","r1c5"]]
region-sum-2: region-sum r2c9-r3c9-r4c9-r5c9 segments [["r2c9","r3c9"],["r4c9","r5c9"]]
region-sum-3: region-sum r6c7-r5c7-r5c6 segments [["r6c7","r5c7"],["r5c6"]]
region-sum-4: region-sum r1c6-r1c7-r1c8-r1c9 segments [["r1c6"],["r1c7","r1c8","r1c9"]]
region-sum-5: region-sum r5c5-r6c5-r7c6-r7c5-r8c4-r8c5-r8c6-r7c7-r7c8-r8c7-r9c7 segments [["r5c5","r6c5"],["r7c6","r7c5","r8c4","r8c5","r8c6"],["r7c7","r7c8","r8c7","r9c7"]]
region-sum-6: region-sum r9c2-r9c3-r8c3-r7c4-r6c3-r5c3 segments [["r9c2","r9c3","r8c3"],["r7c4"],["r6c3","r5c3"]]
region-sum-7: region-sum r4c1-r5c1-r6c1-r7c1-r8c2 segments [["r4c1","r5c1","r6c1"],["r7c1","r8c2"]]
region-sum-8: region-sum r4c8-r5c8-r6c8-r7c9-r8c9-r9c8 segments [["r4c8","r5c8","r6c8"],["r7c9","r8c9","r9c8"]]
negative relations [{"op":"difference","value":1},{"op":"ratio","value":2}] except [["r3c6","r3c7"],["r2c9","r3c9"],["r1c4","r1c5"],["r5c7","r6c7"],["r4c8","r5c8"],["r9c8","r9c9"],["r6c3","r7c3"],["r4c1","r5c1"]] within [["r3c1","r3c2","r3c3","r4c3"],["r2c9","r3c9","r4c9","r5c9"],["r1c4","r1c5","r2c5","r2c6"],["r4c7","r5c7","r6c7","r6c8"],["r4c8","r5c8"],["r7c8","r8c8"],["r7c9","r8c9","r9c8","r9c9"],["r9c1","r9c2"],["r6c3","r7c3"],["r5c1","r5c2"],["r1c2","r2c2"]]
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are shown. However, all dots WITHIN EQUALITY CAGES are shown.

Region sum lines: Digits along region sum lines have the same sum within each box the line passes through. I.e. if a line has 1,2,3 on it in one box, and only 1 digit in another box that digit has to be 6. If the line enters a third box with 2 digits on it, those would have to be either 2,4 or 1,5, so the total is 6 in all the boxes. Digits may repeat on lines.
