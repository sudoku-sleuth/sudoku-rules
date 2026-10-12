---
format: open-rules
title: Restricted Skylines
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/restricted-skylines
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r6c7-r7c6-r7c7 total 11 connected true
cage-2: cage r4c3-r4c4-r5c3 total 14 connected true
cage-3: cage r1c5-r1c6 total 10 connected true
skyscraper-1: skyscraper r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9 visible 5
skyscraper-2: skyscraper r9c9-r8c9-r7c9-r6c9-r5c9-r4c9-r3c9-r2c9-r1c9 visible 2
skyscraper-3: skyscraper r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 visible 2
same-class-1: same-class r1c1-r1c4-r1c7-r4c1-r4c4-r4c7-r7c1-r7c4-r7c7 classes "entropy"
same-class-2: same-class r1c2-r1c5-r1c8-r4c2-r4c5-r4c8-r7c2-r7c5-r7c8 classes "entropy"
same-class-3: same-class r1c3-r1c6-r1c9-r4c3-r4c6-r4c9-r7c3-r7c6-r7c9 classes "entropy"
same-class-4: same-class r2c1-r2c4-r2c7-r5c1-r5c4-r5c7-r8c1-r8c4-r8c7 classes "entropy"
same-class-5: same-class r2c2-r2c5-r2c8-r5c2-r5c5-r5c8-r8c2-r8c5-r8c8 classes "entropy"
same-class-6: same-class r2c3-r2c6-r2c9-r5c3-r5c6-r5c9-r8c3-r8c6-r8c9 classes "entropy"
same-class-7: same-class r3c1-r3c4-r3c7-r6c1-r6c4-r6c7-r9c1-r9c4-r9c7 classes "entropy"
same-class-8: same-class r3c2-r3c5-r3c8-r6c2-r6c5-r6c8-r9c2-r9c5-r9c8 classes "entropy"
same-class-9: same-class r3c3-r3c6-r3c9-r6c3-r6c6-r6c9-r9c3-r9c6-r9c9 classes "entropy"
```

Normal sudoku and killer cage rules apply.

Each digit in the grid is a "skyscraper" whose height is the digit in that cell. Taller skyscrapers obscure the view of smaller ones. Clues outside the grid tell how many skyscrapers are visible looking across the row or column from the direction of the clue.

Isotropic groups: Each group of nine cells occupying the same relative position in the nine boxes is isotropic: all nine are from {123} or all nine are from {456} or all nine are from {789}.
