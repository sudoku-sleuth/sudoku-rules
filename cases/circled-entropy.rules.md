---
format: open-rules
title: Circled Entropy
setter: sujoyku
source: https://tinyurl.com/dzf9ez8r
case: https://sudoku-sleuth.com/cases/circled-entropy
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 0b7a986bbbc7a63b5f3a4594eb04e6c5
---

```rules
sudoku 9x9
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
arrow-1: arrow r9c4-r9c5 bulb ["r9c3"]
arrow-2: arrow r1c8-r1c7 bulb ["r2c8"]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[5.5,0.5],[4.5,1.5],[3.5,2.5],[2.5,3.5],[1.5,4.5],[2.5,5.5],[3.5,6.5],[4.5,7.5],[5.5,8.5],[6.5,8.5],[7.5,7.5],[7.5,6.5],[8.5,5.5],[7.5,4.5],[6.5,3.5],[5.5,3.5],[4.5,4.5]],"color":"#FF9E00","thickness":16,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,1.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,0.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,0.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,0.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,0.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,1.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,2.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,4.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,3.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,3.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,5.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,1.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,2.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,5.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,6.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,7.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,6.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,8.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,7.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,8.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,8.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,7.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,6.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,7.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,3.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,4.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5.5],"width":0.9,"height":0.9,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
```

Normal sudoku rules apply. On the main diagonals digits do not repeat. A circled digit indicates exactly how many circles contain that digit. (Note: This also includes circles with emerging arrows.) Each set of three consecutive digits on the orange line has to contain a low (1, 2 or 3), a medium (4, 5 and 6) and a high digit (7, 8 or 9). Digits on an arrow sum to the digit in the circle from which the arrow emerges.
