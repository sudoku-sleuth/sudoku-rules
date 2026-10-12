---
format: open-rules
title: 2 Turtle Doves
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/2-turtle-doves
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
  - The source describes Renban lines that are not yet included in our reading.
---

```rules
sudoku 9x9
cage-1: cage r4c5-r4c6 total 10 connected true
cage-2: cage r5c5-r5c6 total 10 connected true
cage-3: cage r6c6-r7c6 total 10 connected true
cage-4: cage r7c2-r7c3 total 10 connected true
cage-5: cage r1c6-r1c7 total 10 connected true
cage-6: cage r1c2-r2c2 total 10 connected true
cage-7: cage r1c8-r1c9 total 10 connected true
cage-8: cage r2c1-r3c1 total 10 connected true
cage-9: cage r3c2-r3c3 total 10 connected true
cage-10: cage r1c3-r2c3 total 10 connected true
cage-11: cage r4c2-r5c2 total 10 connected true
cage-12: cage r6c2-r6c3 total 10 connected true
cage-13: cage r9c2-r9c3 total 10 connected true
cage-14: cage r7c1-r8c1 total 10 connected true
cage-15: cage r7c4-r8c4 total 10 connected true
cage-16: cage r8c6-r9c6 total 10 connected true
cage-17: cage r4c8-r5c8 total 10 connected true
cage-18: cage r3c8-r3c9 total 10 connected true
cage-19: cage r2c7-r3c7 total 10 connected true
kropki-1: kropki r3c1-r4c1 colour "black"
kropki-2: kropki r4c1-r4c2 colour "black"
kropki-3: kropki r3c2-r4c2 colour "black"
kropki-4: kropki r2c3-r3c3 colour "black"
kropki-5: kropki r7c6-r8c6 colour "black"
kropki-6: kropki r6c2-r7c2 colour "black"
kropki-7: kropki r5c2-r5c3 colour "black"
whispers-1: whispers r5c6-r6c5-r7c4-r7c3-r7c2-r7c1 gap 4
whispers-2: whispers r9c8-r8c7-r7c6-r6c6-r5c6-r5c5-r4c5-r4c6-r5c7 gap 4
whispers-3: whispers r2c5-r1c6-r1c7-r2c7-r2c6-r3c6-r4c6 gap 4
```

```drawing
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[5.5,1.5],[5.5,2.5],[4.5,3.5],[3.5,3.5],[2.5,3.5],[2.5,2.5],[3.5,1.5],[4.5,0.5]],"color":"#D6A33E","thickness":8,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[5.5,3.5]],"color":"#8FA2FF","thickness":8,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[8.5,5.5]],"color":"#8FA2FF","thickness":8,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[6.5,3.5]],"color":"#8FA2FF","thickness":8,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[3.5,6.5],[2.5,6.5],[1.5,7.5],[1.5,8.5],[2.5,7.5],[3.5,7.5],[4.5,8.5],[5.5,8.5]],"color":"#CF8B35","thickness":8,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,7.5]],"color":"#9EAEF7","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. DUTCH WHISPERS- Numbers on yellow lines (birds' bodies) are at least 4 apart from their neighbors on the line. Numbers may repeat on the yellow line, if other rules allow. RENBAN- Numbers on brown lines (birds' wings) are each a set of non-repeating, consecutive numbers, in any order. RATIO LINES- Numbers on blue lines (birds beaks and legs) are in a ratio of 2:1 with their neighbors on the line. KILLER- Numbers in cages each sum to ten (10). KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. The two white dots are the doves eyes, and have no effect on the puzzle.
