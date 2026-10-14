---
format: open-rules
title: "Equality Cages 131: Slingshots"
setter: gUBBLOR and Fahmi Sack
source: https://sudokupad.app/two1ayf8tk
case: https://sudoku-sleuth.com/cases/equality-cages-131-slingshots
library: https://rules.sudoku-sleuth.com/
status: read
exported: 739d5710049c4a6404b2c6505deb77e6
---

```rules
sudoku 9x9
equality-cage-1: equality-cage r2c8-r2c9-r3c8-r3c9
equality-cage-2: equality-cage r8c2-r8c3
equality-cage-3: equality-cage r2c2-r3c2
equality-cage-4: equality-cage r7c9-r8c9
equality-cage-5: equality-cage r6c8-r6c9
equality-cage-6: equality-cage r4c5-r4c6-r5c4-r5c5
equality-cage-7: equality-cage r1c5-r2c5
equality-cage-8: equality-cage r5c1-r6c1
equality-cage-9: equality-cage r1c2-r1c3
equality-cage-10: equality-cage r6c3-r6c4
equality-cage-11: equality-cage r9c6-r9c7
kropki-1: kropki r8c2-r8c3 black
kropki-2: kropki r3c8-r3c9 black
pair r2c8-r2c9 sum 10
pointing-arrow-1: pointing-arrow target "source" cell "r8c3" source "r8c2" ray ["r7c3","r6c3","r5c3","r4c3","r3c3","r2c3","r1c3"]
pointing-arrow-2: pointing-arrow target "source" cell "r8c2" source "r8c3" ray ["r7c2","r6c2","r5c2","r4c2","r3c2","r2c2","r1c2"]
pointing-arrow-3: pointing-arrow target "source" cell "r3c2" source "r2c2" ray ["r3c3","r3c4","r3c5","r3c6","r3c7","r3c8","r3c9"]
pointing-arrow-4: pointing-arrow target "source" cell "r8c9" source "r7c9" ray ["r8c8","r8c7","r8c6","r8c5","r8c4","r8c3","r8c2","r8c1"]
pointing-arrow-5: pointing-arrow target "source" cell "r7c9" source "r8c9" ray ["r7c8","r7c7","r7c6","r7c5","r7c4","r7c3","r7c2","r7c1"]
pointing-arrow-6: pointing-arrow target "source" cell "r6c9" source "r7c9" ray ["r6c8","r6c7","r6c6","r6c5","r6c4","r6c3","r6c2","r6c1"]
pointing-arrow-7: pointing-arrow target "source" cell "r5c5" source "r5c4" ray ["r4c5","r3c5","r2c5","r1c5"]
pointing-arrow-8: pointing-arrow target "source" cell "r4c5" source "r4c6" ray ["r5c5","r6c5","r7c5","r8c5","r9c5"]
pointing-arrow-9: pointing-arrow target "source" cell "r2c5" source "r3c5" ray ["r2c6","r2c7","r2c8","r2c9"]
pointing-arrow-10: pointing-arrow target "source" cell "r1c7" source "r2c7" ray ["r1c6","r1c5","r1c4","r1c3","r1c2","r1c1"]
pointing-arrow-11: pointing-arrow target "source" cell "r5c1" source "r6c1" ray ["r5c2","r5c3","r5c4","r5c5","r5c6","r5c7","r5c8","r5c9"]
pointing-arrow-12: pointing-arrow target "source" cell "r9c4" source "r9c3" ray ["r8c4","r7c4","r6c4","r5c4","r4c4","r3c4","r2c4","r1c4"]
pointing-arrow-13: pointing-arrow target "source" cell "r2c3" source "r1c3" ray ["r2c4","r2c5","r2c6","r2c7","r2c8","r2c9"]
pointing-arrow-14: pointing-arrow target "source" cell "r8c4" source "r8c5" ray ["r7c4","r6c4","r5c4","r4c4","r3c4","r2c4","r1c4"]
pointing-arrow-15: pointing-arrow target "source" cell "r3c7" source "r3c8" ray ["r4c7","r5c7","r6c7","r7c7","r8c7","r9c7"]
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are shown.

X: Adjacent cells connected with an X must sum to 10. Not all X's are shown.

Slingshots: If an arrow is present in a cell, the digit in the cell the arrow comes from appears in the grid in the direction of the arrow at a distance of N cells, where N is the digit in the arrow's cell. I.e. if the arrow in R8C2 was a 2, that means the digit in R8C3 also have to appear in R6C2. If R2C7 was a 9 and R1C7 was a 1 then R1C6 would also be a 9.
