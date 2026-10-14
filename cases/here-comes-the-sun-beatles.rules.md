---
format: open-rules
title: Here Comes the Sun (Beatles)
setter: Will Power
source: https://sudokupad.app/qhfb12tc6q
case: https://sudoku-sleuth.com/cases/here-comes-the-sun-beatles
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r4c6=5
exported: 14a46b3b9c256e72a5c97e22b6e8a4a1
---

```rules
sudoku 9x9
cage-1: cage r5c6-r6c5-r6c6 total 9 connected true
cage-2: cage r6c4-r7c4-r8c4 total 14 connected true
cage-3: cage r7c2-r8c2-r9c2 total 15 connected true
cage-4: cage r1c1-r2c1-r3c1 total 18 connected true
cage-5: cage r6c1-r6c2 total 13 connected true
cage-6: cage r1c8-r1c9 total 8 connected true
kropki-1: kropki r3c3-r3c4 black
kropki-2: kropki r3c2-r3c3 black
kropki-3: kropki r3c2-r4c2 black
whispers-1: whispers r3c3-r2c3-r1c4-r1c5-r2c6-r3c6 gap 4
whispers-2: whispers r4c1-r4c2-r3c3-r4c4-r4c5-r3c6-r2c7-r3c8-r3c9 gap 5
whispers-3: whispers r7c8-r8c7-r8c6 gap 4
whispers-4: whispers r7c7-r7c6 gap 4
whispers-5: whispers r6c5-r5c5-r4c6-r4c7-r4c8-r5c9-r6c9-r7c9-r8c9-r9c8-r9c7-r9c6 gap 4
whispers-6: whispers r7c5-r8c5 gap 4
renban-1: renban r3c3-r3c4-r3c5-r3c6-r3c2-r4c1
renban-2: renban r6c8-r6c7
renban-3: renban r6c6-r6c5
```

```drawing
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[7.5,3.5],[6.5,3.5],[5.5,3.5],[4.5,3.5],[3.5,3.5],[4.5,2.5],[5.5,2.5],[5.5,1.5],[5.5,0.5]],"color":"#DEDEDE","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[6.5,1.5],[7.5,1.5],[8.5,1.5],[8.5,0.5]],"color":"#DEDEDE","thickness":8,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[7.5,0.5]],"color":"#DEDEDE","thickness":8,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[6.5,0.5]],"color":"#DEDEDE","thickness":8,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[6.5,0.5],[7.5,0.5],[8.5,0.5]],"color":"#DEDEDE","thickness":8,"rounded":true}}
```

(Beatles, 1969) "Here comes the sun. Here comes the sun, and I say it's alright."  Normal Sudoku rules apply. German Whispers (mountains)- Numbers on the green line are at least 5 apart fom their neighbors on the line. RENBAN (horizon and person's eyes)- Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. DUTCH WHISPERS(+)- Numbers on RED (head, nose and mouth) AND YELLOW (sun) lines are at least 4 apart from their neighbors on the line. The only digit 5 on the RED, YELLOW or GRAY (thumbs up) lines is given. KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.
