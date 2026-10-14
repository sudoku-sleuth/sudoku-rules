---
format: open-rules
title: Roundabout
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/id4vk99k5t
case: https://sudoku-sleuth.com/cases/roundabout
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c4=9 r2c8=8 r4c2=6 r6c8=4 r8c2=1 r9c6=2
exported: c05e232d633fb11132099b3b1fd65d9d
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r4c3-r4c4 total 10 connected true
cage-2: cage r6c6-r6c7-r7c6-r7c7 total 30 connected true
cage-3: cage r6c3-r6c4-r7c3-r7c4 total 12 connected true
cage-4: cage r3c6-r3c7-r4c6-r4c7 total 28 connected true
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 6
little-killer-2: little-killer r7c9-r8c8-r9c7 sum 24
little-killer-3: little-killer r2c1-r1c2 sum 11
little-killer-4: little-killer r8c9-r9c8 sum 9
little-killer-5: little-killer r9c3-r8c2-r7c1 sum 9
little-killer-6: little-killer r1c7-r2c8-r3c9 sum 21
little-killer-7: little-killer r1c8-r2c9 sum 13
little-killer-8: little-killer r9c2-r8c1 sum 7
```

Cages, Little Killers

- Normal sudoku rules apply.
- Cages: Within cages, digits cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Little Killers: Clues outside the grid give the sum of the digits along the indicated diagonal.
