---
format: open-rules
title: Stickman Event (Weightlifting)
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/stickman-event-weightlifting
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 9f1e054e1cc448e91e7dae865d3e7ca3
---

```rules
sudoku 9x9
cage-1: cage r8c4-r8c5-r9c4 total 19 connected true
cage-2: cage r7c8-r8c8-r8c9 total 10 connected true
cage-3: cage r4c7-r4c8-r5c7-r5c8 total 11 connected true
whispers-1: whispers r1c2-r1c3-r1c4-r2c4-r3c4-r3c3-r3c2 gap 5
whispers-2: whispers r3c2-r2c2-r1c2 gap 5
whispers-3: whispers r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7 gap 5
whispers-4: whispers r9c2-r8c1-r7c1 gap 5
whispers-5: whispers r7c6-r8c6-r9c6 gap 5
renban-1: renban r5c1-r6c1-r6c2-r5c2-r6c3-r5c3-r4c3-r3c3
renban-2: renban r6c4-r6c5-r6c6-r6c7-r6c8-r7c8-r8c8-r8c9
pair-1: pair r1c2-r1c3 sum 10
pair-2: pair r2c2-r3c2 sum 10
pair-3: pair r7c3-r7c4 sum 10
pair-4: pair r7c1-r8c1 sum 10
pair-5: pair r7c6-r8c6 sum 10
pair-6: pair r2c6-r2c7 sum 10
pair-7: pair r5c1-r6c1 sum 10
pair-8: pair r3c4-r4c4 sum 5
```

```drawing
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[0.5,7.5],[0.5,8.5]],"color":"#CCCCCC","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[1.5,7.5],[1.5,8.5]],"color":"#CCCCCC","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[2.5,7.5],[2.5,8.5]],"color":"#CCCCCC","thickness":8,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,2.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"100kg","textColor":"#000000","fontSize":12}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,2.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"100kg","textColor":"#000000","fontSize":12}}
```

Normal Sudoku rules apply. Numbers on green lines (weights and workout bench) are at least 5 apart from their neighbors on the line. Numbers may repeat on green lines. Numbers on purple lines (Stickman) are a set of consecutive numbers, in any order. Numbers on gray lines (towel rack) have the same remainder as all other numbers on the same line when divided by 3. Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. Not all possible X and V are given. Numbers in cages sum to the number in the top left corner of the cage.
