---
format: open-rules
title: Confederation of Pentominoes
setter: Will Power
source: https://sudokupad.app/apbr5j7d1m
case: https://sudoku-sleuth.com/cases/confederation-of-pentominoes
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 76b0992ccb712e31028cece1d6a1416e
---

```rules
sudoku 9x9
cage-1: cage r4c5-r5c4-r5c5-r5c6-r6c5 total 25 connected true
cage-2: cage r4c7-r4c8-r5c7-r6c7-r6c8 total 25 connected true
cage-3: cage r1c5-r2c5-r2c6-r3c4-r3c5 total 25 connected true
cage-4: cage r1c8-r1c9-r2c8-r2c9-r3c8 total 25 connected true
cage-5: cage r7c9-r8c7-r8c8-r8c9-r9c9 total 25 connected true
cage-6: cage r7c5-r7c6-r8c4-r8c5-r9c4 total 25 connected true
cage-7: cage r8c1-r8c2-r8c3-r9c2-r9c3 total 25 connected true
cage-8: cage r4c2-r5c1-r5c2-r5c3-r6c3 total 25 connected true
cage-9: cage r1c2-r1c3-r2c2-r3c1-r3c2 total 25 connected true
kropki-1: kropki r4c7-r4c8 white
kropki-2: kropki r4c7-r5c7 white
kropki-3: kropki r5c7-r6c7 white
kropki-4: kropki r6c7-r6c8 white
kropki-5: kropki r4c8-r4c9 white
kropki-6: kropki r4c9-r5c9 white
kropki-7: kropki r6c8-r6c9 white
kropki-8: kropki r4c2-r5c2 white
kropki-9: kropki r5c2-r5c3 white
kropki-10: kropki r5c4-r5c5 black
kropki-11: kropki r5c5-r5c6 black
whispers-1: whispers r7c9-r8c9-r9c9 gap 5
whispers-2: whispers r8c7-r8c8-r8c9 gap 5
whispers-3: whispers r8c2-r8c3-r9c3-r9c2 gap 4
renban-1: renban r3c4-r3c5
renban-2: renban r2c5-r2c6
parity-cells-1: parity-cells r7c6-r7c5-r8c5-r8c4-r9c4 parity "odd"
parity-cells-2: parity-cells r1c8-r2c8-r2c9-r3c8 parity "even"
magic-square places [["r1c1","r1c2","r1c3","r2c1","r2c2","r2c3","r3c1","r3c2","r3c3"]]
```

```drawing
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1],"width":0,"height":0,"rounded":false,"thickness":0,"text":"      MS","textColor":"#000000","fontSize":12}}
```

Normal Sudoku rules apply. KILLER CAGES- Numbers in cages sum to 25. WHISPERS- Numbers on the green line are at least 5 apart from their neighbors on the line. Numbers on the red line are at least 4 apart from their neighbors on the line. RENBAN- Numbers on the purple line are a set of non-repeating consecutive numbers, in any order. MAGIC SQUARE- Box 1 forms a magic square. All rows, columns and diagonals in Box 1 sum to 15. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. ODD/EVEN- Cells with a gray circle are odd. Cells with a gray square are even.
