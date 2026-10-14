---
format: open-rules
title: Framing the Answer
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/vd9n9jupkv
case: https://sudoku-sleuth.com/cases/framing-the-answer
library: https://rules.sudoku-sleuth.com/
status: read
exported: effb199980f3f74a39388c7d4dc69f09
---

```rules
sudoku 9x9
cage-1: cage r2c4-r3c3-r3c4-r4c2-r4c3 total 17 connected true
cage-2: cage r6c7-r6c8-r7c6-r7c7-r8c6 total 17 connected true
cage-3: cage r6c2-r6c3-r7c3-r7c4-r8c4 total 17 connected true
cage-4: cage r2c6-r3c6-r3c7-r4c7-r4c8 total 17 connected true
cage-5: cage r1c1-r1c2-r1c3-r1c4-r1c5-r2c1-r3c1-r4c1-r5c1 connected true
cage-6: cage r5c9-r6c9-r7c9-r8c9-r9c5-r9c6-r9c7-r9c8-r9c9 connected true
cage-7: cage r8c1-r9c1-r9c2 total 18 connected true
cage-8: cage r5c3-r5c4 total 13 connected true
cage-9: cage r1c8-r1c9-r2c9 total 8 connected true
kropki-1: kropki r2c1-r3c1 black
kropki-2: kropki r1c2-r1c3 black
kropki-3: kropki r1c1-r1c2 black
kropki-4: kropki r1c6-r1c7 black
kropki-5: kropki r8c1-r9c1 black
kropki-6: kropki r4c9-r5c9 black
kropki-7: kropki r6c7-r7c7 black
renban-1: renban r5c1-r6c1-r7c1-r8c1-r9c1-r9c2-r9c3-r9c4-r9c5
renban-2: renban r1c5-r1c6-r1c7-r1c8-r1c9-r2c9-r3c9-r4c9-r5c9
```

- Normal sudoku rules apply.
- Renban lines: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.
- Ratio dots: Digits separated by a black dot are in a 1:2 ratio.
- Cages: Digits within cages cannot repeat and must sum to the value in the upper left corner of the cage, if given.
