---
format: open-rules
title: Sudoku Clock
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/sudoku-clock
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r2c7=1 r3c8=2
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[0.5,3.5],[0.5,4.5],[0.5,5.5],[0.5,6.5],[1.5,7.5],[2.5,8.5],[3.5,8.5],[4.5,8.5],[5.5,8.5],[6.5,8.5],[7.5,7.5],[8.5,6.5],[8.5,5.5],[8.5,4.5],[8.5,3.5],[8.5,2.5],[7.5,1.5],[6.5,0.5],[5.5,0.5],[4.5,0.5],[3.5,0.5],[2.5,0.5],[1.5,1.5]],"color":"#CCCCCC","thickness":8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[0.5,2.5]],"color":"#CCCCCC","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,6.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[1.782842712474619,6.217157287525381],[2.5,5.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[2.782842712474619,7.217157287525381],[3.5,6.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,7.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[6.217157287525381,7.217157287525381],[5.5,6.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,6.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[7.217157287525381,6.217157287525381],[6.5,5.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[7.1,4.5],[6.5,4.5],[5.5,4.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[7.217157287525381,2.782842712474619],[6.5,3.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,1.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[6.217157287525381,1.782842712474619],[5.5,2.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[4.5,1.9],[4.5,2.5],[4.5,3.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[4.1,7.5],[3.5,7.5],[3.5,6.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[1.9,4.5],[2.5,4.5],[3.5,5.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"under","center":[3,1.5],"width":0.83,"height":1.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[2.782842712474619,1.782842712474619],[3.5,2.5],[4.5,3.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[1.782842712474619,2.782842712474619],[2.5,3.5],[3.5,4.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[8.217157287525382,0.782842712474619],[7.5,1.5],[6.5,2.5],[5.5,3.5],[4.5,4.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[2.217157287525381,6.782842712474619],[1.5,7.5],[0.5,8.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
```

Normal Sudoku rules apply. Numbers on arrows sum to the SUM OF THE NUMBERS IN THAT ARROW'S CIRCLE OR PILL. Standard analog clock positions apply for the green circles and pills on the clock. The gray line has no purpose except to show the clock edge. BEWARE: Because of the special arrow rules, the numbers on the 10, 11, and 12 arrows of the clock will remain red, and the timer will not stop when you are complete.
