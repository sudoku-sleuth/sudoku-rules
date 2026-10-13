---
format: open-rules
title: "Equality Cages 111: Searching for 5s"
setter: gUBBLOR
source: https://sudokupad.app/n99mgrve0t
case: https://sudoku-sleuth.com/cases/equality-cages-111
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
equality-cage-1: equality-cage r7c3-r8c3
equality-cage-2: equality-cage r2c3-r3c1-r3c2-r3c3
equality-cage-3: equality-cage r2c7-r2c8-r2c9-r3c9-r4c9-r5c9
equality-cage-4: equality-cage r4c1-r5c1
equality-cage-5: equality-cage r8c1-r9c1
kropki-1: kropki r2c3-r3c3 colour "black"
kropki-2: kropki r8c8-r9c8 colour "black"
kropki-3: kropki r8c3-r9c3 colour "white"
kropki-4: kropki r2c5-r2c6 colour "white"
kropki-5: kropki r1c9-r2c9 colour "white"
kropki-6: kropki r3c2-r4c2 colour "white"
kropki-7: kropki r3c1-r4c1 colour "white"
kropki-8: kropki r7c2-r8c2 colour "white"
kropki-9: kropki r3c6-r4c6 colour "white"
kropki-10: kropki r5c5-r6c5 colour "white"
pair-1: pair r3c1-r3c2 sum 10
pair-2: pair r1c1-r1c2 sum 10
pair-3: pair r3c9-r4c9 sum 10
pair-4: pair r9c3-r9c4 sum 10
pair-5: pair r9c5-r9c6 sum 10
pointing-arrow-1: pointing-arrow target "first-five" cell "r8c3" ray ["r8c4","r8c5","r8c6","r8c7","r8c8","r8c9"]
pointing-arrow-2: pointing-arrow target "first-five" cell "r4c2" ray ["r4c3","r4c4","r4c5","r4c6","r4c7","r4c8","r4c9"]
pointing-arrow-3: pointing-arrow target "first-five" cell "r5c9" ray ["r6c9","r7c9","r8c9","r9c9"]
pointing-arrow-4: pointing-arrow target "first-five" cell "r2c8" ray ["r3c8","r4c8","r5c8","r6c8","r7c8","r8c8","r9c8"]
pointing-arrow-5: pointing-arrow target "first-five" cell "r8c7" ray ["r8c6","r8c5","r8c4","r8c3","r8c2","r8c1"]
pointing-arrow-6: pointing-arrow target "first-five" cell "r7c8" ray ["r7c7","r7c6","r7c5","r7c4","r7c3","r7c2","r7c1"]
pointing-arrow-7: pointing-arrow target "first-five" cell "r7c3" ray ["r6c3","r5c3","r4c3","r3c3","r2c3","r1c3"]
pointing-arrow-8: pointing-arrow target "first-five" cell "r4c4" ray ["r5c5","r6c6","r7c7","r8c8","r9c9"]
pointing-arrow-9: pointing-arrow target "first-five" cell "r9c9" ray ["r8c8","r7c7","r6c6","r5c5","r4c4","r3c3","r2c2","r1c1"]
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

X: Adjacent cells connected with an X must sum to 10. Not all X's are shown.

Search 5: Each arrow points to the closest 5, where the digit on the arrow is how many cells away the 5 is. For example, lets say there's an arrow in R1C1 pointing to the right. If R1C1 was a 1, R1C2 would have to be 5. If R1C1 was 8, the 5 would have to be in R1C9. There may be multiple arrows pointing to the same 5, and it's not necessary for every 5 to have an arrow pointing to it.
