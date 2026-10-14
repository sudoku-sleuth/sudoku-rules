---
format: open-rules
title: Zip Down
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/qmyphfrib4
case: https://sudoku-sleuth.com/cases/zip-down
library: https://rules.sudoku-sleuth.com/
status: read
exported: 851c9a0003b37497e410a0dc1f751623
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3-r2c3 total 10 connected true
cage-2: cage r5c2-r5c3-r6c2 total 15 connected true
cage-3: cage r8c3-r9c2-r9c3 total 15 connected true
cage-4: cage r1c5-r2c4-r2c5 total 10 connected true
cage-5: cage r6c7-r7c6-r7c7 total 9 connected true
cage-6: cage r5c6-r6c5-r6c6 total 17 connected true
zipper-1: zipper r1c1-r1c2-r1c3-r2c3-r3c3
zipper-2: zipper r2c1-r3c1-r4c1
zipper-3: zipper r2c2-r3c2-r4c2
zipper-4: zipper r6c1-r6c2-r6c3-r5c3-r4c3
zipper-5: zipper r7c3-r7c2-r7c1-r8c1-r9c1
zipper-6: zipper r3c4-r2c4-r1c4-r1c5-r1c6
zipper-7: zipper r1c7-r1c8-r1c9-r2c9-r3c9
zipper-8: zipper r7c6-r6c6-r6c7
zipper-9: zipper r6c5-r5c5-r5c6
zipper-10: zipper r9c8-r9c9-r8c9
```

-Normal sudoku rules apply.
-Cages: Within cages, digits cannot repeat and must sum to the value shown in the upper left corner of the cage.
-Zipper Lines: Digits equidistant from the center of a purple Zipper Line must sum to the digit in the center of the line. Centers of Zipper Lines are marked by small purple dots.
