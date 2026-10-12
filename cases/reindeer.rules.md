---
format: open-rules
title: Reindeer
setter: Kennet's Dad
source: https://sudokupad.app/MHHM4gJn2Q
case: https://sudoku-sleuth.com/cases/reindeer
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.5,8.5],[2.5,8.5],[3.5,7.5],[4.5,8.5],[5.5,7.5]],"color":"#E6261F","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[1.5,6.5],[1.5,5.5],[2.5,5.5]],"color":"#E6261F","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[2.5,2.5],[2.5,3.5],[3.5,2.5],[4.5,1.5]],"color":"#E6261F","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[2.5,0.5],[3.5,1.5],[3.5,0.5],[4.5,0.5]],"color":"#E6261F","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[8.5,1.5],[7.5,2.5],[7.5,3.5],[8.5,4.5],[7.5,5.5]],"color":"#E6261F","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[5.5,6.5],[6.5,6.5],[7.5,6.5],[6.5,5.5],[6.5,4.5],[6.5,3.5]],"color":"#E6261F","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,6.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#E6261F","stroke":"#FFFFFF","thickness":2,"opacity":0.5,"text":"","fontSize":12}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,7.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#E6261F","stroke":"#FFFFFF","thickness":2,"opacity":0.5,"text":"","fontSize":12}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,6],"width":0.3,"height":0.3,"rounded":true,"fill":"#E6261F","stroke":"#FFFFFF","thickness":2,"opacity":0.5,"text":"","fontSize":12}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,3.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#E6261F","stroke":"#FFFFFF","thickness":2,"opacity":0.5,"text":"","fontSize":12}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,1.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#E6261F","stroke":"#FFFFFF","thickness":2,"opacity":0.5,"text":"","fontSize":12}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#E6261F","stroke":"#FFFFFF","thickness":2,"opacity":0.5,"text":"","fontSize":12}}
```

Normal sudoku rules apply. Along any individual line, each line segment within a different 3x3 box must sum to the same total. Different lines may have different totals. Additionally, along ALL these same lines, digits an equal distance from the centre of the line sum to the same total. For odd length lines, the total is the digit in the centre of the line. (In other words, the lines in this puzzle are simultaneously 'region sum' and 'zipper' lines.)
