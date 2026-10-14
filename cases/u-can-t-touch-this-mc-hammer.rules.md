---
format: open-rules
title: U Can't Touch This (MC Hammer)
setter: Will Power
source: https://sudokupad.app/qml9ret42t
case: https://sudoku-sleuth.com/cases/u-can-t-touch-this-mc-hammer
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: cb95cc4519e862bbef697eb08333332a
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1-r2c2-r3c1-r3c2 total 23 connected true
cage-2: cage r1c3-r1c4-r2c3-r3c3 total 29 connected true
cage-3: cage r1c5-r2c5 total 17 connected true
cage-4: cage r1c6-r2c6 total 6 connected true
cage-5: cage r3c5-r3c6 total 11 connected true
cage-6: cage r1c7-r1c8-r2c7-r2c8-r3c7 total 22 connected true
cage-7: cage r3c8-r3c9 total 13 connected true
cage-8: cage r4c9-r5c9 total 10 connected true
cage-9: cage r4c5-r5c5-r6c5 total 7 connected true
cage-10: cage r4c1-r4c2-r4c3 total 22 connected true
cage-11: cage r6c1-r6c2-r6c3-r7c2 total 17 connected true
cage-12: cage r7c1-r8c1-r9c1 total 12 connected true
kropki-1: kropki r1c1-r1c2 white
kropki-2: kropki r2c1-r2c2 white
kropki-3: kropki r3c1-r3c2 white
kropki-4: kropki r6c2-r6c3 white
kropki-5: kropki r9c1-r9c2 white
kropki-6: kropki r8c5-r9c5 white
kropki-7: kropki r8c8-r8c9 white
whispers-1: whispers r6c4-r5c5-r6c6-r7c5 gap 4
whispers-2: whispers r6c4-r7c5 gap 4
whispers-3: whispers r9c3-r9c4-r8c4-r8c5-r8c6-r9c6-r9c7 gap 4
whispers-4: whispers r8c8-r8c7-r7c7-r6c7-r5c8-r6c9-r7c8-r8c9 gap 4
whispers-5: whispers r2c9-r3c8-r4c7 gap 4
whispers-6: whispers r3c9-r4c8-r4c7 gap 4
renban-1: renban r5c8-r4c7-r3c7-r2c7-r1c7-r1c8-r2c8
renban-2: renban r8c5-r7c5-r6c5-r5c5-r4c5-r4c4-r5c4
```

```drawing
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[2.5,1.5],[1.5,1.5],[1.5,0.5],[0.5,0.5],[0.5,1.5],[0.5,2.5],[0.5,3.5]],"color":"#C9C9C9","thickness":8,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[1.5,2.5],[0.5,2.5]],"color":"#C9C9C9","thickness":8,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[1.5,4.5],[2.5,4.5],[2.5,5.5],[1.5,5.5],[0.5,5.5]],"color":"#C9C9C9","thickness":8,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[0.5,4.5]],"color":"#C9C9C9","thickness":8,"rounded":true}}
```

(Dancing) "Break it down! STOP! Hammer time!" Normal sudoku rules apply. DUTCH WHISPERS- Numbers on red lines (Arms and legs) are at least 4 apart from their neighbors on the line. RENBAN- Numbers on purple lines (heads and bodies) are each a set of non-repeating, consecutive numbers, in any order. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. Numbers do not repeat in cages. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are given. The gray letters "S, T and O" have no effect on the puzzle.
