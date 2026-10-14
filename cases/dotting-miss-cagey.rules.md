---
format: open-rules
title: Dotting Miss Cagey
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/5uqmx4815i
case: https://sudoku-sleuth.com/cases/dotting-miss-cagey
library: https://rules.sudoku-sleuth.com/
status: read
exported: 1bb0511a3952b9f0ba84c5eddeacd4bb
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r4c3 total 8 connected true
cage-2: cage r6c7-r7c6-r7c7 total 9 connected true
cage-3: cage r6c3-r7c3-r7c4 total 22 connected true
cage-4: cage r3c6-r3c7-r4c7 total 21 connected true
cage-5: cage r2c2-r3c1-r3c2 total 9 connected true
cage-6: cage r7c8-r7c9-r8c8 total 8 connected true
cage-7: cage r1c7-r2c7-r2c8 total 20 connected true
cage-8: cage r8c2-r8c3-r9c3 total 21 connected true
cage-9: cage r3c9-r4c8-r4c9 total 10 connected true
cage-10: cage r6c1-r6c2-r7c1 total 18 connected true
kropki-1: kropki r6c6-r7c6 white
kropki-2: kropki r4c6-r4c7 white
kropki-3: kropki r7c3-r8c3 white
kropki-4: kropki r3c2-r3c3 white
kropki-5: kropki r3c4-r4c4 black
kropki-6: kropki r6c3-r6c4 black
kropki-7: kropki r2c7-r3c7 black
kropki-8: kropki r7c7-r7c8 black
kropki-9: kropki r8c1-r8c2 black
kropki-10: kropki r2c8-r2c9 black
kropki-11: kropki r8c8-r9c8 black
```

- Normal sudoku rules apply.
- Cages: Within cages, digits cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Kropki pairs: Digits separated by a black dot are in a 1:2 ratio. Digits separated by a white dot are consecutive. Not all possible dots are necessarily given.
