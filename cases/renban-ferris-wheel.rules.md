---
format: open-rules
title: RENBAN Ferris Wheel
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/renban-ferris-wheel
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r3c3=8 r3c6=4 r4c4=4 r4c5=3 r5c4=7 r5c5=6 r6c3=9 r6c6=5
exported: 296fe902175e56127b771657ee88adc7
---

```rules
sudoku 9x9
cage-1: cage r3c1-r4c1-r5c1-r6c1 total 26 connected true
cage-2: cage r1c3-r1c4-r1c5-r1c6 total 18 connected true
cage-3: cage r3c8-r4c8-r5c8-r6c8 total 18 connected true
cage-4: cage r8c3-r8c4-r8c5-r8c6 total 21 connected true
cage-5: cage r1c1-r1c2-r2c1 total 18 connected true
cage-6: cage r1c7-r1c8-r2c8 total 14 connected true
cage-7: cage r7c8-r8c7-r8c8 total 15 connected true
cage-8: cage r7c1-r8c1-r9c1 total 6 connected true
cage-9: cage r7c4-r7c5 total 7 connected true
kropki-1: kropki r2c3-r2c4 white
kropki-2: kropki r1c5-r2c5 white
kropki-3: kropki r2c7-r3c7 white
kropki-4: kropki r3c7-r3c8 white
kropki-5: kropki r4c8-r5c8 white
kropki-6: kropki r5c8-r5c9 white
kropki-7: kropki r7c8-r7c9 white
kropki-8: kropki r9c6-r9c7 white
kropki-9: kropki r8c2-r8c3 white
kropki-10: kropki r6c1-r6c2 white
kropki-11: kropki r5c1-r6c1 white
kropki-12: kropki r4c1-r4c2 white
kropki-13: kropki r3c1-r4c1 white
kropki-14: kropki r1c1-r2c1 white
kropki-15: kropki r3c5-r3c6 white
renban-1: renban r7c9-r7c8-r6c8
renban-2: renban r5c9-r5c8-r4c8
renban-3: renban r3c8-r3c7-r2c7
renban-4: renban r2c6-r2c5-r1c5
renban-5: renban r2c4-r2c3-r1c3
renban-6: renban r4c2-r4c1-r3c1
renban-7: renban r3c1-r2c2-r1c3-r1c4-r1c5-r1c6-r2c7-r3c8-r4c8
renban-8: renban r5c8-r6c8-r7c7-r8c6-r8c5-r8c4-r8c3-r7c2-r6c1
renban-9: renban r6c2-r6c1-r5c1
```

```drawing
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[3.5,3.5],[4.5,4.5],[5.5,5.5]],"color":"#ABABAB","thickness":8,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[3.5,4.5],[4.5,3.5],[5.5,2.5]],"color":"#ABABAB","thickness":8,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[8.5,3.5],[7.5,3.5]],"color":"#CCCCCC","thickness":8,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[8.5,6.5],[8.5,5.5],[7.5,5.5]],"color":"#CCCCCC","thickness":8,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[7.5,1.5],[6.5,1.5]],"color":"#CCCCCC","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. RENBAN LINES- Numbers on orange AND purple lines are each a set of non-repeating, consecutive digits, in any order. The three lowest chairs on the grid are gray, and do not meet this requirement. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. The 18 and 21 are duplicated in their respective cages because the orange line can obscure them in some puzzle formats. KROPKI PAIRS+- Numbers with a white dot between them are consecutive. Not all possible dots are given. HOWEVER, all possible dots BETWEEN CHAIR CELLS ARE GIVEN.
