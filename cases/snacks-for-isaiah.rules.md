---
format: open-rules
title: Snacks for Isaiah
setter: gUBBLOR
source: ""
case: https://sudoku-sleuth.com/cases/snacks-for-isaiah
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - The source describes Renban lines that are not yet included in our reading.
exported: 1a7c621d38db01359686c14b33359cf6
---

```rules
sudoku 9x9
kropki-1: kropki r4c8-r4c9 black
kropki-2: kropki r4c7-r4c8 black
kropki-3: kropki r4c3-r4c4 black
kropki-4: kropki r4c6-r4c7 black
kropki-5: kropki r8c8-r8c9 black
kropki-6: kropki r1c7-r2c7 black
kropki-7: kropki r9c5-r9c6 black
kropki-8: kropki r1c1-r2c1 black
pair-1: pair r3c8-r4c8 sum 10
pair-2: pair r1c8-r1c9 sum 10
pair-3: pair r3c7-r4c7 sum 5
pair-4: pair r6c4-r7c4 sum 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[4.5,2.3],[4.9,2.7],[5.3,2.7],[5.7,2.3],[5.7,1.7],[5.3,1.3],[4.9,1.3],[4.1,2.1],[4.3,2.1],[4.5,2.3]],"color":"#ed6ae3","thickness":6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[7.9,0.3],[8.3,0.7],[8.5,0.7],[8.7,0.9],[8.7,2.1],[8.1,2.7],[7.3,2.7],[7.1,2.5],[6.9,2.5],[6.5,2.1],[6.5,1.7],[6.3,1.7],[6.5,1.5],[6.3,1.3],[6.5,1.3],[6.5,0.9],[7.1,0.3],[7.9,0.3]],"color":"#ed6ae3","thickness":6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1.4,3.6],[1.7,3.9],[1.8,3.8]],"color":"#4ee61f","thickness":6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.7,3.9],[1.9,4.1],[2.3,4.1],[2.5,4.3],[3.1,4.3],[3.1,4.5],[2.3,4.5],[2.2,4.4],[2,4.4],[1.9,4.3],[1.7,4.3],[1.5,4.1],[1.3,4.1]],"color":"#4ee61f","thickness":6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.1,4.5],[2.8,4.8],[1.8,4.8],[1.7,4.9]],"color":"#4ee61f","thickness":6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.9,4.5],[2.8,4.6],[1.8,4.6],[1.7,4.7],[1.5,4.7],[1.3,4.9]],"color":"#4ee61f","thickness":6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1.4,2.4],[1.5,2.3],[1.5,1.9],[1.8,1.6],[2.2,1.6],[2.3,1.7],[2.7,1.7],[2.8,1.6],[3,1.6],[3.1,1.5],[3,1.4],[2.6,1.4],[2.5,1.3],[1.5,1.3],[1.3,1.5]],"color":"#4ee61f","thickness":6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[3.1,1.7],[3,1.8],[2.7,1.9],[1.7,1.9],[1.7,2.1],[1.6,2.2],[1.6,2.6]],"color":"#4ee61f","thickness":6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[6.7,7.7],[7.4,7],[7.4,5.6],[7.3,5.5],[7.3,5.3],[6.7,4.7],[6.4,4.6],[5.6,4.6],[5.5,4.7],[5.3,4.7],[4.6,5.4],[4.6,5.6],[4.2,6],[4.4,6],[4.6,6.2],[4.4,6.2],[4.3,6.3],[4.5,6.3],[4.6,6.4],[4.6,6.6],[5.1,7.1],[5.2,7.4],[5.6,7.8],[6.4,7.8],[6.7,7.7]],"color":"#d0a913","thickness":6,"rounded":true,"layer":"over"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#555","thickness":1}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,1.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#555","thickness":1}}
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Renban (red onions): Digits along a renban line must be a set of consecutive digits in any order, and must not repeat.

Dutch Whispers (yellow onion): Adjacent digits along a Dutch Whisper line must have a difference of at least 4. Digits may repeat on the line.

Arrows (green onions): The digits along each arrow must sum to the digit in the circled cell. Digits may repeat on arrows.

XV: Adjacent cells connected with an X must sum to 10. Adjacent cells connected with a V must sum to 5. Not all X's or V's are shown.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are shown.
