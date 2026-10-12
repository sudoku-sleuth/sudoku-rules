---
format: open-rules
title: Very Careless Whispers Indeed
setter: Marty Sears
source: https://tinyurl.com/39ptmnm2
case: https://sudoku-sleuth.com/cases/very-careless-whispers-indeed
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[0.5,0.5],[2.5,0.5]],"color":"#68E468","thickness":10.1,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[0.5,4.5],[1.5,4.5]],"color":"#68E468","thickness":10.1,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[0.5,8.5]],"color":"#68E468","thickness":10.1,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[1.5,2.5],[2.5,2.5]],"color":"#68E468","thickness":10.1,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[1.5,7.5]],"color":"#68E468","thickness":10.1,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[1.5,8.5],[2.5,8.5],[2.5,5.5],[1.5,5.5]],"color":"#68E468","thickness":10.1,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[2.5,4.5],[4.5,4.5]],"color":"#68E468","thickness":10.1,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[3.5,1.5],[3.5,0.5],[6.5,0.5],[6.5,2.5],[8.5,2.5],[8.5,0.5],[7.5,0.5],[7.5,1.5]],"color":"#68E468","thickness":10.1,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[3.5,2.5],[4.5,2.5],[4.5,3.5]],"color":"#68E468","thickness":10.1,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[3.5,7.5]],"color":"#68E468","thickness":10.1,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[4.5,7.5]],"color":"#68E468","thickness":10.1,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[5.5,5.5],[5.5,2.5]],"color":"#68E468","thickness":10.1,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[4.5,8.5],[5.5,8.5],[5.5,6.5],[4.5,6.5]],"color":"#68E468","thickness":10.1,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[7.5,4.5],[8.5,5.5]],"color":"#68E468","thickness":10.1,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[8.5,8.5]],"color":"#68E468","thickness":10.1,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[8.5,3.5]],"color":"#68E468","thickness":10.1,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[8.5,6.5],[7.5,7.5],[6.5,6.5],[6.5,5.5],[7.5,5.5]],"color":"#68E468","thickness":10.1,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[0,3],[9,3]],"color":"#000000","thickness":4.3,"rounded":true,"layer":"over"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[0,6],[9,6]],"color":"#000000","thickness":4.3,"rounded":true,"layer":"over"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[3,0],[3,9]],"color":"#000000","thickness":4.3,"rounded":true,"layer":"over"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[6,0],[6,9]],"color":"#000000","thickness":4.3,"rounded":true,"layer":"over"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.76,5],"width":0,"height":0,"rounded":false,"thickness":0,"text":">","fontSize":44.8}}
```

• Normal Sudoku rules apply.
• Usually, adjacent digits on a green 'German Whisper' line must have a difference of 5 or more. However, in this puzzle each green line is broken in exactly one place... ie; one pair of adjacent digits on each line has a difference lower than 5.
• The inequality sign points towards the smaller of the two digits it sits between.
