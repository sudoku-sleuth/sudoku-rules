---
format: open-rules
title: "Equality Cages 110: Between a cage and a hard place"
setter: gUBBLOR
source: ""
case: https://sudoku-sleuth.com/cases/sudoku-sleuth-live
library: https://rules.sudoku-sleuth.com/
status: read
exported: acb7ffd93cfd835707ec9b74dec38d56
---

```rules
sudoku 9x9
equality-cage-1: equality-cage r3c2-r3c3
equality-cage-2: equality-cage r6c2-r6c3
equality-cage-3: equality-cage r8c2-r9c2
equality-cage-4: equality-cage r8c4-r8c5-r8c6-r9c5
equality-cage-5: equality-cage r7c3-r8c3
equality-cage-6: equality-cage r1c3-r1c4-r2c3-r2c4
equality-cage-7: equality-cage r8c8-r9c8
equality-cage-8: equality-cage r3c5-r3c6
equality-cage-9: equality-cage r1c5-r2c5
equality-cage-10: equality-cage r6c8-r6c9-r7c8-r7c9
equality-cage-11: equality-cage r4c8-r5c8
equality-cage-12: equality-cage r5c5-r5c6
equality-cage-13: equality-cage r4c4-r4c5
equality-cage-14: equality-cage r1c9-r2c9
kropki r3c2-r3c3 black
between-1: between r4c3-r4c2 ends ["r3c3","r3c2"]
between-2: between r4c1-r5c1-r6c1 ends ["r3c2","r6c2"]
between-3: between r7c2 ends ["r6c2","r8c2"]
between-4: between r9c3-r8c4-r8c5-r8c6-r7c6-r7c7 ends ["r9c2","r8c7"]
between-5: between r2c4-r3c5-r2c6-r1c6-r1c7-r2c8 ends ["r2c3","r3c8"]
between-6: between r5c8-r5c7 ends ["r6c9","r5c6"]
between-7: between r5c5 ends ["r5c6","r4c5"]
between-8: between r5c4 ends ["r6c4","r4c4"]
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are shown.

Between lines: Cells along lines between two filled circles must have values between those in the circles. Digits may repeat on between lines.
