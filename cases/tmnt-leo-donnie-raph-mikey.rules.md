---
format: open-rules
title: TMNT Leo, Donnie, Raph, Mikey
setter: Will Power
source: https://sudokupad.app/v3l3bsoua1
case: https://sudoku-sleuth.com/cases/tmnt-leo-donnie-raph-mikey
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r1c8-r2c8-r3c8 total 8 connected true
cage-2: cage r1c9-r2c9 total 9 connected true
cage-3: cage r4c2-r4c3-r4c4-r4c5 total 13 connected true
cage-4: cage r6c1-r6c2 total 14 connected true
cage-5: cage r1c4-r1c5 total 10 connected true
cage-6: cage r1c2-r1c3 total 9 connected true
cage-7: cage r1c6-r1c7 total 11 connected true
cage-8: cage r8c2-r8c3 total 15 connected true
cage-9: cage r4c6-r4c7 total 9 connected true
cage-10: cage r9c4-r9c5-r9c6 total 15 connected true
cage-11: cage r2c5-r3c5 total 13 connected true
cage-12: cage r5c5-r6c5 total 4 connected true
whispers-1: whispers r6c2-r7c3-r6c4 gap 4
whispers-2: whispers r6c5-r7c6-r6c7 gap 4
whispers-3: whispers r2c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r2c8-r3c9 gap 5
whispers-4: whispers r6c2-r5c3-r6c4-r6c5-r5c6-r6c7-r6c8 gap 4
whispers-5: whispers r7c6-r6c6 gap 4
whispers-6: whispers r6c8-r7c9 gap 4
renban-1: renban r4c2-r4c3-r3c4-r4c5-r5c4-r4c4-r5c1
renban-2: renban r4c9-r4c8-r3c7-r4c6-r5c7
```

```drawing
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[1.5,1.5],[0.5,2.5],[1.5,3.5],[1.5,4.5],[0.5,5.5],[1.5,6.5],[1.5,7.5]],"color":"#78C9FF","thickness":16,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[2.5,2.5],[1.5,3.5]],"color":"#78C9FF","thickness":16,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[2.5,5.5],[1.5,6.5]],"color":"#78C9FF","thickness":16,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[6.5,3.5],[7.5,4.5],[7.5,5.5],[6.5,6.5],[7.5,7.5],[8.5,6.5]],"color":"#FFA666","thickness":16,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[8.5,6.5]],"color":"#FFA666","thickness":16,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[8.5,3.5],[7.5,2.5]],"color":"#FFA666","thickness":16,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[7.5,3.5]],"color":"#FFA666","thickness":16,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[8.5,6.5],[7.5,6.5]],"color":"#FFA666","thickness":16,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[1.5,5.5]],"color":"#78C9FF","thickness":16,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[8.5,1.5]],"color":"#FFA666","thickness":16,"rounded":true}}
```

"Emerge from the shadows to make their move."

Normal Sudoku rules apply.

GERMAN WHISPERS- Numbers on the GREEN line are at least 5 apart from their neighbors on the line.

ANTI-WHISPER(+)- Numbers on the BLUE line are NO MORE THAN 3 apart from their neighbors on the line.

RENBAN- Numbers on PURPLE lines are each a set of non-repeating, consecutive numbers, in any order.

DUTCH WHISPERS- Numbers on the RED line are at least 4 apart from their neighbors on the line.

PARITY PARTY(+)- Numbers on the ORANGE line alternate between high (6789) and LOW (1234) with neighbors on the line. Mikey is the party animal, after all 8-).

KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. The 15 is repeated in its cage because the orange line can obscure it in some puzzle formats.
