---
format: open-rules
title: Circular Reasoning
setter: Marty Sears
source: https://tinyurl.com/5n8yyuzr
case: https://sudoku-sleuth.com/cases/circular-reasoning-2
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
arrow-1: arrow r4c2-r3c2 bulb ["r5c2"]
arrow-2: arrow r1c5-r1c4-r2c4-r2c3 bulb ["r1c6"]
arrow-3: arrow r7c7-r7c8 bulb ["r8c7"]
arrow-4: arrow r9c8-r9c9 bulb ["r8c8"]
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,0.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,2.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,6.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,0.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,0.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,3.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,4.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,6.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,8.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,2.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,6.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,8.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,0.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,3.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,4.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,5.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,6.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,7.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,2.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,4.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,6.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,4.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,0.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,2.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,5.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,8.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,0.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,2.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,4.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,6.5],"width":0.753,"height":0.753,"rounded":true,"fill":"#FFFFFF","stroke":"#999999","thickness":3.4}}
```

Normal Sudoku rules apply.

A circled digit indicates exactly how many circles contain that digit.

Digits along an arrow sum to the digit in the attached circle.
