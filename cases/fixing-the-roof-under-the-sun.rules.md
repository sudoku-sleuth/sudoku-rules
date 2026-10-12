---
format: open-rules
title: Fixing the Roof Under the Sun
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/fixing-the-roof-under-the-sun
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r7c3-r8c3 total 12 connected true
cage-2: cage r1c1-r2c1 total 17 connected true
cage-3: cage r3c2-r4c2 total 14 connected true
cage-4: cage r8c4-r8c5-r8c6 total 22 connected true
cage-5: cage r2c6-r3c6 total 3 connected true
cage-6: cage r1c7-r2c7 total 6 connected true
cage-7: cage r1c9-r2c8-r2c9 total 21 connected true
kropki-1: kropki r6c5-r7c5 colour "white"
kropki-2: kropki r6c5-r6c6 colour "white"
kropki-3: kropki r6c6-r7c6 colour "white"
kropki-4: kropki r7c6-r7c7 colour "white"
whispers-1: whispers r6c1-r6c2-r6c3-r7c3-r8c3-r8c2-r8c1-r7c1 gap 5
whispers-2: whispers r6c1-r7c1 gap 5
whispers-3: whispers r7c1-r7c2-r7c3 gap 5
whispers-4: whispers r6c2-r7c2-r8c2 gap 5
whispers-5: whispers r3c1-r4c2-r5c3-r6c4-r7c5-r8c6 gap 5
renban-1: renban r2c4-r3c4-r3c5-r2c5-r4c5-r5c4-r5c3
renban-2: renban r5c5-r5c6-r6c6-r7c7-r8c6-r6c5-r7c6-r7c5
renban-3: renban r4c4-r3c3-r2c3
renban-4: renban r2c3-r1c4
renban-5: renban r1c7-r2c7-r3c8-r3c9-r1c8-r1c9-r2c9
```

```drawing
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,3.5],"width":0.5,"height":0.25,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000","angle":-135}}
```

Normal Sudoku rules apply. GERMAN WHISPERS- Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers may repeat on green lines. RENBAN- Numbers on ALL purple, red and orange lines are each a set of non-repeating, consecutive numbers, in any order. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are given. The rectangle is the hammer head, and has no effect on the puzzle.
