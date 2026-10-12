---
format: open-rules
title: Modular repulsion
setter: sujoyku
source: https://tinyurl.com/bp93rzhd
case: https://sudoku-sleuth.com/cases/modular-repulsion
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r6c1-r7c1 total 14 connected true
cage-2: cage r7c2-r8c1-r8c2-r8c3-r9c2 total 15 connected true
cage-3: cage r1c8-r2c7-r2c8-r2c9-r3c8 total 35 connected true
cage-4: cage r9c3-r9c4 total 12 connected true
cage-5: cage r9c7-r9c8 total 12 connected true
cage-6: cage r1c2-r1c3 total 8 connected true
cage-7: cage r1c6-r1c7 total 8 connected true
cage-8: cage r3c9-r4c9 total 6 connected true
```

Normal sudoku rules apply. Digits in a cage do not repeat and sum to the clue in the top left.
Adjacency restriction: Orthogonally adjacent digits never differ by a multiple of 3, e.g. the digit 1 may not be orthogonally adjacent to either 4 or 7. In other words, the integers from 1 to 9 are divided into the three groups with respect to their remainder mod 3 (147, 258 and 369) and no two digits from the same group may be orthogonally adjacent.
