---
format: open-rules
title: Kill Me Twice - Stage 1
setter: sujoyku
source: https://sudokupad.app/kd3k5f30fq
case: https://sudoku-sleuth.com/cases/kill-me-twice-stage-1
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 9
  cols: 9
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 9
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r2c3
      - r3c1
      - r3c2
      - r3c3
    - - r1c4
      - r1c5
      - r1c6
      - r2c4
      - r2c5
      - r2c6
      - r3c4
      - r3c5
      - r3c6
    - - r1c7
      - r1c8
      - r1c9
      - r2c7
      - r2c8
      - r2c9
      - r3c7
      - r3c8
      - r3c9
    - - r4c1
      - r4c2
      - r4c3
      - r5c1
      - r5c2
      - r5c3
      - r6c1
      - r6c2
      - r6c3
    - - r4c4
      - r4c5
      - r4c6
      - r5c4
      - r5c5
      - r5c6
      - r6c4
      - r6c5
      - r6c6
    - - r4c7
      - r4c8
      - r4c9
      - r5c7
      - r5c8
      - r5c9
      - r6c7
      - r6c8
      - r6c9
    - - r7c1
      - r7c2
      - r7c3
      - r8c1
      - r8c2
      - r8c3
      - r9c1
      - r9c2
      - r9c3
    - - r7c4
      - r7c5
      - r7c6
      - r8c4
      - r8c5
      - r8c6
      - r9c4
      - r9c5
      - r9c6
    - - r7c7
      - r7c8
      - r7c9
      - r8c7
      - r8c8
      - r8c9
      - r9c7
      - r9c8
      - r9c9
exported: 0867302e538783f284b42217b6855f91
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9
unique-9: unique r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9
unique-10: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1
unique-11: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2
unique-12: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3
unique-13: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4
unique-14: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5
unique-15: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6
unique-16: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7
unique-17: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8
unique-18: unique r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9
cage-1: cage r3c2-r3c3 total 7 connected true
cage-2: cage r1c1-r1c2 total 13 connected true
cage-3: cage r1c7-r1c8 total 12 connected true
cage-4: cage r3c8-r3c9 total 8 connected true
cage-5: cage r9c8-r9c9 total 10 connected true
cage-6: cage r6c8-r7c8 total 9 connected true
cage-7: cage r9c4-r9c5 total 8 connected true
kropki-1: kropki r1c3-r1c4 black
kropki-2: kropki r2c5-r3c5 black
kropki-3: kropki r6c1-r7c1 black
kropki-4: kropki r7c6-r7c7 black
kropki-5: kropki r3c6-r3c7 white
whispers-1: whispers r8c1-r7c2-r6c3 gap 5
whispers-2: whispers r7c4-r6c5-r5c6 gap 5
renban-1: renban r6c2-r5c3-r4c4
renban-2: renban r6c6-r5c7-r4c8
```

```drawing
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[67,68]}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[12,21]}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[39,48]}}
```

This puzzle must be solved in two stages.

Stage 1: 3x3s
Place the digits from 1 to 9 in the grid so that they do not repeat in any row or column. Digits can (and will) repeat in each 3x3 box. Each box will use exactly 3 of the digits from 1 to 9.

Stage 2: Normal Sudoku
Delete all digits except those in the unclued cells of Row 1 and Row 9 which are givens for the remaining solve. Normal Sudoku rules apply, i.e. each row, column, and 3x3 box has to contain the digits from 1 to 9 once each.
---
The following rules hold true in both stages:

- Killer cages: Digits in a cage sum to the clue in the top left, if given. Digits in a cage without a given clue must sum to the same total in both stages of the solve.

- German whispers: Adjacent digits on a green line must have a difference of at least 5.

- Renban: Each purple line must contain a set of consecutive non-repeating digits in any order.

- Kropki: Digits joined by a black dot have a 1:2 ratio. Digits joined by a white dot are consecutive. (Not all dots are given.)
