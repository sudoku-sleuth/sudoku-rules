---
format: open-rules
title: Last Resort
setter: SamuPiano and sujoyku
source: https://sudokupad.app/zbg1w1g0x5
case: https://sudoku-sleuth.com/cases/last-resort
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: ae06cfe4a9620284ec367c03a22b612f
---

```rules
sudoku 9x9
region-sum-1: region-sum r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 segments [["r2c1","r3c1"],["r4c1","r5c1","r6c1"],["r7c1","r8c1","r9c1"]]
region-sum-2: region-sum r9c9-r8c9-r7c9-r6c9-r5c9-r4c9-r3c9-r2c9 segments [["r9c9","r8c9","r7c9"],["r6c9","r5c9","r4c9"],["r3c9","r2c9"]]
region-sum-3: region-sum r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8 segments [["r1c2","r1c3"],["r1c4","r1c5","r1c6"],["r1c7","r1c8"]]
region-sum-4: region-sum r3c3-r4c4-r5c5-r6c6-r5c7-r4c7-r3c7-r3c8 segments [["r3c3"],["r4c4","r5c5","r6c6"],["r5c7","r4c7"],["r3c7","r3c8"]]
region-sum-5: region-sum r4c2-r5c3-r6c3-r7c4-r8c5-r7c6-r7c7 segments [["r4c2","r5c3","r6c3"],["r7c4","r8c5","r7c6"],["r7c7"]]
region-sum-6: region-sum r7c2-r8c3-r9c4-r9c5-r8c6 segments [["r7c2","r8c3"],["r9c4","r9c5","r8c6"]]
pair r4c6-r4c5 less
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[0.5,0.5]],"color":"#83e680ff","thickness":3,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[8.5,1.5],[8.5,0.5],[1.5,0.5],[1.5,1.5],[5.5,5.5],[4.5,6.5],[2.5,6.5],[2.5,7.5],[1.5,7.5],[1.5,8.5],[8.5,8.5],[8.5,7.5]],"color":"#83e680ff","thickness":3,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[6.5,1.5],[8.5,3.5],[8.5,4.5],[7.5,5.5],[7.5,6.5]],"color":"#83e680ff","thickness":3,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[3.5,1.5],[4.5,2.5],[5.5,2.5],[7.5,4.5],[6.5,5.5],[6.5,6.5],[5.5,7.5]],"color":"#83e680ff","thickness":3,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,0.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":3,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":3,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":3,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,1.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":3,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,7.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":3,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,7.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":3,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,1.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":3,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,7.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":3,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,1.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":3,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,6.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#83e680ff","thickness":3,"angle":0}}
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Region sum lines: Box borders divide the blue lines into segments with the same sum. (Different lines may have different sums.)

- Pea lines: The sum of the digits on a line strictly between two circles is equal to a concatenation of the two values in the circles, in some order. For instance, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3. (Note: The bounding circles are not part of the region sums.)

- Inequality: The > is a "greater than" and points to the lower digit.
