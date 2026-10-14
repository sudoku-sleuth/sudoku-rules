---
format: open-rules
title: Multiplicity
setter: Sir Moose
source: https://sudokupad.app/ncbel4drb1
case: https://sudoku-sleuth.com/cases/multiplicity
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 86b43b2d88d85bcce783559d9219f27b
---

```rules
sudoku 9x9
pair-1: pair r3c1-r3c2 sum 10
pair-2: pair r5c8-r5c9 sum 10
pair-3: pair r7c4-r7c5 sum 10
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[7.22,3.7800000000000002],[6.5,4.5],[5.5,4.5],[5.5,5.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[7.22,6.78],[6.5,7.5],[5.5,8.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.7800000000000002,6.22],[3.5,5.5],[4.5,5.5],[4.5,4.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.9,3.5],[5.5,3.5],[6.5,2.5],[7.5,1.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[2.2199999999999998,5.78],[1.5,6.5],[0.5,7.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[3.1,1.5],[2.5,1.5],[1.5,1.5],[1.5,2.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[7.78,7.22],[8.5,6.5],[8.5,7.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[8.22,3.2199999999999998],[7.5,2.5],[7.5,1.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[8.5,4.9],[8.5,5.5],[7.5,5.5],[7.5,4.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[3.1,3.5],[2.5,3.5],[1.5,3.5],[0.5,3.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3.5],"width":0.83,"height":0.83,"rounded":true,"fill":"#ffffff","stroke":"#a1a1a1","thickness":5,"opacity":0.5,"text":"","fontSize":16}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,6.5],"width":0.83,"height":0.83,"rounded":true,"fill":"#ffffff","stroke":"#a1a1a1","thickness":5,"opacity":0.5,"text":"","fontSize":16}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,7.5],"width":2.83,"height":0.83,"rounded":true,"fill":"#ffffff","stroke":"#a1a1a1","thickness":5,"opacity":0.5,"text":"","fontSize":16}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,3.5],"width":0.83,"height":0.83,"rounded":true,"fill":"#ffffff","stroke":"#a1a1a1","thickness":5,"opacity":0.5,"text":"","fontSize":16}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5.5],"width":0.83,"height":0.83,"rounded":true,"fill":"#ffffff","stroke":"#a1a1a1","thickness":5,"opacity":0.5,"text":"","fontSize":16}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,1.5],"width":0.83,"height":0.83,"rounded":true,"fill":"#ffffff","stroke":"#a1a1a1","thickness":5,"opacity":0.5,"text":"","fontSize":16}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7.5],"width":0.83,"height":0.83,"rounded":true,"fill":"#ffffff","stroke":"#a1a1a1","thickness":5,"opacity":0.5,"text":"","fontSize":16}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,3.5],"width":0.83,"height":0.83,"rounded":true,"fill":"#ffffff","stroke":"#a1a1a1","thickness":5,"opacity":0.5,"text":"","fontSize":16}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,4.5],"width":0.83,"height":0.83,"rounded":true,"fill":"#ffffff","stroke":"#a1a1a1","thickness":5,"opacity":0.5,"text":"","fontSize":16}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3.5],"width":0.83,"height":0.83,"rounded":true,"fill":"#ffffff","stroke":"#a1a1a1","thickness":5,"opacity":0.5,"text":"","fontSize":16}}
```

Normal sudoku rules apply.

Digits separated by an X sum to 10.

When digits along an arrow are multiplied, they equal the number in the circle.  Multi-digit numbers are read from left to right.
