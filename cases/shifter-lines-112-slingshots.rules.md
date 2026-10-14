---
format: open-rules
title: "Shifter Lines 112: Slingshots"
setter: gUBBLOR
source: https://sudokupad.app/ik2ckn3hcj
case: https://sudoku-sleuth.com/cases/shifter-lines-112-slingshots
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 4edd9ca0d6741da189f4d340f29f887c
---

```rules
sudoku 9x9
shifter-line-1: shifter-line r4c4-r4c5-r3c6-r2c6
shifter-line-2: shifter-line r4c1-r4c2-r3c2-r3c3
shifter-line-3: shifter-line r3c8-r4c9-r3c9
pointing-arrow-1: pointing-arrow target "source" cell "r4c6" source "r4c5" ray ["r3c6","r2c6","r1c6"]
pointing-arrow-2: pointing-arrow target "source" cell "r4c4" source "r3c4" ray ["r4c3","r4c2","r4c1"]
pointing-arrow-3: pointing-arrow target "source" cell "r3c3" source "r4c3" ray ["r3c4","r3c5","r3c6","r3c7","r3c8","r3c9"]
pointing-arrow-4: pointing-arrow target "source" cell "r7c3" source "r7c4" ray ["r6c3","r5c3","r4c3","r3c3","r2c3","r1c3"]
pointing-arrow-5: pointing-arrow target "source" cell "r8c4" source "r7c4" ray ["r8c5","r8c6","r8c7","r8c8","r8c9"]
pointing-arrow-6: pointing-arrow target "source" cell "r7c8" source "r8c8" ray ["r7c7","r7c6","r7c5","r7c4","r7c3","r7c2","r7c1"]
pointing-arrow-7: pointing-arrow target "source" cell "r6c7" source "r6c8" ray ["r5c7","r4c7","r3c7","r2c7","r1c7"]
pointing-arrow-8: pointing-arrow target "source" cell "r2c9" source "r2c8" ray ["r3c9","r4c9","r5c9","r6c9","r7c9","r8c9","r9c9"]
pointing-arrow-9: pointing-arrow target "source" cell "r2c3" source "r2c2" ray ["r3c3","r4c3","r5c3","r6c3","r7c3","r8c3","r9c3"]
pointing-arrow-10: pointing-arrow target "source" cell "r7c9" source "r8c9" ray ["r7c8","r7c7","r7c6","r7c5","r7c4","r7c3","r7c2","r7c1"]
pointing-arrow-11: pointing-arrow target "source" cell "r8c1" source "r8c2" ray ["r7c1","r6c1","r5c1","r4c1","r3c1","r2c1","r1c1"]
pointing-arrow-12: pointing-arrow target "source" cell "r1c5" source "r2c5" ray ["r1c6","r1c7","r1c8","r1c9"]
pointing-arrow-13: pointing-arrow target "source" cell "r5c8" source "r5c9" ray ["r4c8","r3c8","r2c8","r1c8"]
pointing-arrow-14: pointing-arrow target "source" cell "r8c6" source "r9c6" ray ["r8c7","r8c8","r8c9"]
pointing-arrow-15: pointing-arrow target "source" cell "r8c9" source "r8c8" ray ["r7c9","r6c9","r5c9","r4c9","r3c9","r2c9","r1c9"]
```

```drawing
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[6.5,7.5],[5.5,7.5],[5.5,6.5],[6.5,6.5]],"color":"#d8ee25","thickness":10,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[7.5,3.5],[7.5,2.5],[6.5,2.5],[6.5,3.5]],"color":"#d8ee25","thickness":10,"rounded":true}}
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Shifter lines: Adjacent digits within the same box on a shifter line share both parity (even/odd) AND polarity (low/high). Whenever the line enters a new box either the parity OR the polarity shifts, never both. Shifter lines can never have 5 on it. Digits may repeat on lines.

Slingshots: If an arrow is present in a cell, the digit in the cell the arrow comes from appears in the grid in the direction of the arrow at a distance of N cells, where N is the digit in the arrow's cell. I.e. if the arrow in R8C1 was a 4, that means the digit in R8C2 also have to appear in R4C1. If R2C8 was a 6 and R2C9 was a 5 then R7C9 would also be a 6.
