---
format: open-rules
title: Pea Shooter
setter: Katie Splendor
source: https://sudokupad.app/tf5wft5zjg
case: https://sudoku-sleuth.com/cases/pea-shooter
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r5c3-r5c4 colour "black"
kropki-2: kropki r3c6-r3c7 colour "black"
kropki-3: kropki r7c5-r8c5 colour "black"
kropki-4: kropki r8c2-r9c2 colour "black"
kropki-5: kropki r2c7-r2c8 colour "black"
kropki-6: kropki r5c4-r6c4 colour "black"
kropki-7: kropki r4c2-r4c3 colour "black"
kropki-8: kropki r3c2-r4c2 colour "black"
kropki-9: kropki r3c1-r3c2 colour "black"
pair-1: pair r3c4-r3c5 sum 10
pair-2: pair r4c3-r5c3 sum 10
pair-3: pair r8c4-r8c5 sum 10
pair-4: pair r7c7-r8c7 sum 10
pair-5: pair r1c8-r1c9 sum 10
pair-6: pair r3c5-r3c6 sum 5
pair-7: pair r5c3-r6c3 sum 5
pair-8: pair r7c7-r7c8 sum 5
window-classes classes "entropy"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#39ed73ff","thickness":1.28,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#39ed73ff","thickness":1.28,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#39ed73ff","thickness":1.28,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[6.5,2.5],[6.5,6.5],[2.5,6.5],[2.5,5.5]],"color":"#39ed73ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[0.5,8.5],[1.5,8.5],[1.5,7.5]],"color":"#39ed73ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[4.5,4.5],[4.5,3.5],[3.5,3.5],[3.5,4.5]],"color":"#39ed73ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[2.5,3.5],[2.5,2.5],[3.5,2.5],[3.5,3.5]],"color":"#39ed73ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,7.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#39ed73ff","thickness":1.28,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,7.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#39ed73ff","thickness":1.28,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3.5],"width":0.78,"height":0.78,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,2.5],"width":0.78,"height":0.78,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5.5],"width":0.78,"height":0.78,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,7.5],"width":0.78,"height":0.78,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,7.5],"width":0.78,"height":0.78,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
```

- Normal sudoku rules apply.
- Global entropy - every 2 by 2 box of cells contains at least one low digit (1, 2, or 3), one medium digit (4, 5, or 6), and one high digit (7, 8 or 9).
- Split Peas - The sum of digits in cells connecting two circles is equal to a concatenation of the digits in the circles, in some order. For instance, 3-346-1 could be a valid line, as 3+4+6=13=1 concatenated with 3.
- XV sums - digits connected by V sum to 5; digits connected by X sum to 10. No negative constraint.
- Ratio Kropki - digits connected by a black Kropki dot have a value ratio of 2:1. No negative constraint.
