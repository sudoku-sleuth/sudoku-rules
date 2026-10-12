---
format: open-rules
title: Corporate Ladder
setter: Will Power
source: https://sudokupad.app/9bgtlke46g
case: https://sudoku-sleuth.com/cases/corporate-ladder
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r8c4-r9c4 total 15 connected true
cage-2: cage r1c4-r2c4-r3c4 total 19 connected true
kropki-1: kropki r8c3-r8c4 colour "white"
kropki-2: kropki r8c4-r8c5 colour "white"
kropki-3: kropki r8c2-r8c3 colour "white"
kropki-4: kropki r6c1-r6c2 colour "white"
kropki-5: kropki r6c2-r6c3 colour "white"
kropki-6: kropki r6c1-r7c1 colour "white"
kropki-7: kropki r3c3-r4c3 colour "black"
kropki-8: kropki r4c3-r5c3 colour "black"
kropki-9: kropki r7c5-r7c6 colour "black"
kropki-10: kropki r6c4-r6c5 colour "black"
kropki-11: kropki r6c5-r7c5 colour "black"
kropki-12: kropki r7c6-r8c6 colour "black"
kropki-13: kropki r8c6-r8c7 colour "black"
kropki-14: kropki r8c7-r9c7 colour "black"
kropki-15: kropki r9c7-r9c8 colour "black"
kropki-16: kropki r9c8-r9c9 colour "black"
kropki-17: kropki r3c1-r3c2 colour "black"
kropki-18: kropki r3c2-r3c3 colour "black"
kropki-19: kropki r2c1-r3c1 colour "black"
kropki-20: kropki r5c3-r5c4 colour "black"
kropki-21: kropki r5c4-r6c4 colour "black"
renban-1: renban r4c8-r5c8-r6c8-r7c8-r8c8-r7c7-r6c7-r5c7-r5c6
renban-2: renban r3c8-r2c8-r2c7-r3c7
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[34,43],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[52,61],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[51,60],"color":"#000000","labelColor":"#000000"}}
```

Double your efforts to climb the corporate ladder. Normal Sudoku rules apply. RENBAN- Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Numbers with a white dot between them are consecutive. Not all possible dots are given. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. The three cages with no sum given, have the same sum as one another.
