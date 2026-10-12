---
format: open-rules
title: Light The Fuse, Chain Reaction
setter: Will Power
source: https://sudokupad.app/za9q97lazo
case: https://sudoku-sleuth.com/cases/light-the-fuse-chain-reaction
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r6c7-r6c8 total 7 connected true
cage-2: cage r4c3-r5c3 total 6 connected true
cage-3: cage r6c5-r7c5 total 8 connected true
cage-4: cage r2c9-r3c9 total 12 connected true
kropki-1: kropki r3c1-r3c2 colour "white"
kropki-2: kropki r2c1-r3c1 colour "white"
kropki-3: kropki r2c7-r2c8 colour "white"
kropki-4: kropki r5c1-r6c1 colour "white"
kropki-5: kropki r4c1-r5c1 colour "white"
whispers-1: whispers r4c2-r5c3-r6c4-r7c5-r8c6-r7c7-r6c8-r5c7-r4c6-r3c5-r2c4-r3c3 gap 4
whispers-2: whispers r3c3-r4c2 gap 4
whispers-3: whispers r4c3-r3c4-r4c5-r5c6-r6c7-r7c6-r6c5-r5c4 gap 5
whispers-4: whispers r4c3-r5c4 gap 5
renban r9c6-r9c5-r9c4-r9c3-r8c2-r7c1-r6c1-r5c1-r5c2
```

```drawing
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[3.217157287525381,5.782842712474619],[2.5,6.5],[2.5,7.5],[2.5,8.5],[1.5,8.5],[0.5,8.5],[0.5,7.5],[0.5,6.5],[1.5,6.5],[1.5,7.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[2.217157287525381,2.217157287525381],[1.5,1.5],[0.5,1.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[6.9,6.5],[7.5,6.5],[8.5,7.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[6.5,6.9],[6.5,7.5],[7.5,8.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[7.217157287525381,1.782842712474619],[6.5,2.5],[5.5,3.5],[4.5,4.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,4],"width":0,"height":0,"rounded":false,"thickness":0,"text":"     8","textColor":"#000000","fontSize":12}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,6],"width":0,"height":0,"rounded":false,"thickness":0,"text":"     7","textColor":"#000000","fontSize":12}}
```

Normal Sudoku rules apply.

ARROWS- Numbers in arrows sum to the number in the arrow's circle. Numbers may repeat on arrows if other rules allow. 

DUTCH WHISPERS- Numbers on the red line are at least 4 apart from their neighbors on the line.

GERMAN WHISPERS- Numbers on the green line are at least 5 apart from their neighbors on the line. Numbers may repeat on red and green lines, if other rules allow.

RENBAN LINE- Numbers on the purple line are a set of non-repeating, consecutive numbers, in any order. 

KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. The 8 and 7 are duplicaed in their cages because the green line can obscure them in some puzzle formats.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are shown.
