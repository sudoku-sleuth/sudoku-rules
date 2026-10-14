---
format: open-rules
title: Dutch Flat Mates (Sharing Cages)
setter: sujoyku
source: https://sudokupad.app/9sv1v1pxvs
case: https://sudoku-sleuth.com/cases/dutch-flat-mates-sharing-cages
library: https://rules.sudoku-sleuth.com/
status: read
exported: c9775365aff1cca2a10c35faae45fab9
---

```rules
sudoku 9x9
cage-1: cage r6c6-r7c6-r8c6 total 20 connected true
cage-2: cage r9c4-r9c5-r9c6 total 8 connected true
cage-3: cage r1c4-r1c5-r1c6 total 10 connected true
cage-4: cage r2c4-r3c4-r4c4 total 22 connected true
cage-5: cage r9c8-r9c9 total 12 connected true
cage-6: cage r1c1-r1c2 total 8 connected true
cage-7: cage r2c1-r3c1-r4c1 total 11 connected true
cage-8: cage r6c9-r7c9-r8c9 total 15 connected true
cage-9: cage r4c2-r5c2 total 12 connected true
cage-10: cage r5c8-r6c8 total 12 connected true
flat-mates digit 5 above 1 below 9
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Dutch Flat Mates: Each 5 in the grid either has a 1 directly above or a 9 directly below it. (It may have both, but it does not need both.)

- Killer cages: Digits in a cage sum to the clue in the top left. Moreover, if cages are adjacent to each other (i.e. share an edge), they have to contain at least one common digit.
