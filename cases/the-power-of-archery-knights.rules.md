---
format: open-rules
title: The Power Of Archery Knights
setter: Tingo
source: https://tinyurl.com/powerofarcheryknights
case: https://sudoku-sleuth.com/cases/the-power-of-archery-knights
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
anti-knight
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[7.1,1.5],[6.5,1.5],[5.5,1.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.782842712474619,1.782842712474619],[2.5,2.5],[3.5,3.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,3.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[6.782842712474619,3.217157287525381],[7.5,2.5],[7.5,3.5],[7.5,4.5],[8.5,3.5],[8.5,2.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[6,0.5],"width":0.83,"height":1.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[6.9,0.5],[7.5,0.5],[8.5,0.5],[8.5,1.5],[8.5,2.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0.5,4.9],[0.5,5.5],[0.5,6.5],[1.5,7.5],[2.5,7.5],[3.5,6.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
```

Normal Sudoku Rules Apply
Any two cells separated by a knight's move (in chess) cannot contain the same digit.
Values along an arrow must sum to the value in the arrow's circle/oval. All ovals must be read left to right or top to bottom.
Arrows represent "Archery Knights". There are five unique knights in the puzzle, each represented by a single arrow. The sum of each arrow (circle/oval value) equals the Archery Knight's "rank" to the second power. In other words, each knight's arrow sum = X^2 where X is the rank of the knight. Example, if an arrow represented a knight ranked 8, then the arrow's oval that represented that knight would have a value of 8^2 or 64. The values along the line of that arrow would then have to sum to 64.
