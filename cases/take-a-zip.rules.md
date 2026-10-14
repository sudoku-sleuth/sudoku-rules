---
format: open-rules
title: Take a Zip
setter: sujoyku
source: https://sudokupad.app/ghtow9r5km
case: https://sudoku-sleuth.com/cases/take-a-zip
library: https://rules.sudoku-sleuth.com/
status: read
exported: 5379b30e011e53c0fb4e37a1843076bd
---

```rules
sudoku 9x9
cage-1: cage r1c2-r2c2 total 8 connected true
cage-2: cage r2c1-r3c1 total 8 connected true
cage-3: cage r2c3-r3c3 total 8 connected true
cage-4: cage r7c7-r8c7 total 7 connected true
cage-5: cage r8c8-r9c8 total 7 connected true
cage-6: cage r7c9-r8c9 total 7 connected true
cage-7: cage r2c9-r3c8-r3c9 total 21 connected true
cage-8: cage r7c2-r7c3-r8c3 total 20 connected true
cage-9: cage r5c2-r5c3-r5c4 total 9 connected true
zipper-1: zipper r2c1-r1c1-r1c2
zipper-2: zipper r2c2-r3c2-r3c3
zipper-3: zipper r9c8-r9c9-r8c9
zipper-4: zipper r7c7-r7c8-r8c8
zipper-5: zipper r2c8-r2c7-r1c7-r1c8-r1c9
zipper-6: zipper r8c2-r8c1-r9c1-r9c2-r9c3
zipper-7: zipper r1c4-r2c5-r3c6-r4c7-r5c8-r6c9
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Zippers: On a lavender line, digits at the same distance to the center (marked by a dot) must add to the same sum. If the line has odd length, that sum must equal the digit at the line's center.

- Killer cages: Digits in a cage must sum to the clue in the top left.
