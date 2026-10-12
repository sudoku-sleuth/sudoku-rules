---
format: open-rules
title: "Equality Cages 143: Region SumDrone"
setter: gUBBLOR
source: https://sudokupad.app/ir6f5azekc
case: https://sudoku-sleuth.com/cases/equality-cages-143-region-sumdrone
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
equality-cage-1: equality-cage r4c3-r5c3
equality-cage-2: equality-cage r1c5-r2c4-r2c5-r3c4
equality-cage-3: equality-cage r8c3-r9c3
equality-cage-4: equality-cage r4c7-r4c8
equality-cage-5: equality-cage r3c2-r3c3
equality-cage-6: equality-cage r8c7-r8c8
equality-cage-7: equality-cage r7c5-r8c5
kropki-1: kropki r1c5-r2c5 colour "black"
kropki-2: kropki r2c7-r3c7 colour "black"
kropki-3: kropki r7c6-r8c6 colour "black"
region-sum-1: region-sum r5c3-r4c3-r3c4-r3c5-r3c6-r3c7-r2c7 segments [["r5c3","r4c3"],["r3c4","r3c5","r3c6"],["r3c7","r2c7"]]
region-sum-2: region-sum r9c3-r8c3-r7c4-r6c5-r6c6 segments [["r9c3","r8c3"],["r7c4"],["r6c5","r6c6"]]
region-sum-3: region-sum r1c8-r2c9-r3c9-r4c8-r4c7-r4c6-r4c5-r4c4-r5c4-r6c3-r6c2-r7c1-r8c1-r9c1 segments [["r1c8","r2c9","r3c9"],["r4c8","r4c7"],["r4c6","r4c5","r4c4","r5c4"],["r6c3","r6c2"],["r7c1","r8c1","r9c1"]]
region-sum-4: region-sum r6c9-r6c8-r7c7-r8c6-r8c5 segments [["r6c9","r6c8"],["r7c7"],["r8c6","r8c5"]]
region-sum-5: region-sum r5c1-r4c1-r3c2-r2c2 segments [["r5c1","r4c1"],["r3c2","r2c2"]]
pair r2c4-r3c4 relation {"op":"sum","value":10}
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are shown.

X: Adjacent cells connected with an X must sum to 10. Not all X's are shown.

Region SumDrome: Digits along lines have the same sum within each box the line passes through. In addition each segment (defined by the box borders) equidistant from the center must have the same digits in any order. For example, if R6C8 was 2 and R6C9 was 6, R7C7 would be 8, and R8C5+R8C6 would be 26 or 62.
