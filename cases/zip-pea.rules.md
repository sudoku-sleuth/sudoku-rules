---
format: open-rules
title: Zip-Pea
setter: sujoyku
source: https://sudokupad.app/ngv4fdzbrt
case: https://sudoku-sleuth.com/cases/zip-pea
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
zipper-1: zipper r3c1-r4c1-r5c1-r6c1-r7c1
zipper-2: zipper r3c9-r4c9-r5c9-r6c9-r7c9
zipper-3: zipper r8c2-r7c3-r6c4-r5c5-r4c6-r3c7-r2c8
zipper-4: zipper r6c7-r5c7-r4c7-r3c8-r4c8
zipper-5: zipper r3c3-r2c3-r1c3-r1c4-r1c5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[7.5,0.5]],"color":"#83e680ff","thickness":3,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.5,8.5],[7.5,8.5],[7.5,6.5],[6.5,5.5],[5.5,6.5],[3.5,6.5],[2.5,7.5],[4.5,7.5]],"color":"#83e680ff","thickness":3,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[8.5,0.5]],"color":"#83e680ff","thickness":3,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[0.5,4.5],[0.5,2.5],[2.5,2.5],[3.5,3.5]],"color":"#83e680ff","thickness":3,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,0.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":3,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,0.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":3,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,8.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":3,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,8.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":3,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,0.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":3,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":3,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,7.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":3,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,5.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":3,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":3,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":3,"angle":0}}
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Split pill arrows/Pea lines: The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.

- Zipper lines: Cells on a lavender line at an equal distance to the center, which is marked with a dot, sum to the digit at the center. (Note: The circles of pea lines are NOT part of the zipper lines.)
