---
format: open-rules
title: Dutch Flat Mates (Sum/Difference Lines)
setter: sujoyku
source: https://sudokupad.app/6mwhl51hi2
case: https://sudoku-sleuth.com/cases/dutch-flat-mates-sum-difference-lines
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
flat-mates digit 5 above 1 below 9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[2.5,3.5],[2.5,5.5],[1.5,5.5]],"color":"#f90f","thickness":3.2,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[1.5,1.5],[0.5,1.5],[0.5,2.5]],"color":"#f90f","thickness":3.2,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[1.5,4.5],[0.5,5.5],[0.5,6.5]],"color":"#f90f","thickness":3.2,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[1.5,6.5],[2.5,6.5],[3.5,5.5],[4.5,5.5],[6.5,3.5],[8.5,5.5],[7.5,5.5],[7.5,6.5],[8.5,7.5],[7.5,8.5]],"color":"#f90f","thickness":3.2,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[3.5,1.5],[2.5,2.5],[1.5,2.5],[0.5,3.5]],"color":"#f90f","thickness":3.2,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[6.5,0.5]],"color":"#f90f","thickness":3.2,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[2.5,8.5],[5.5,8.5]],"color":"#f90f","thickness":3.2,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,2.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#f90f","thickness":2.56,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,0.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#f90f","thickness":2.56,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,3.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#f90f","thickness":2.56,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,5.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#f90f","thickness":2.56,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,6.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#f90f","thickness":2.56,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,4.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#f90f","thickness":2.56,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,7.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#f90f","thickness":2.56,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,5.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#f90f","thickness":2.56,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,8.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#f90f","thickness":2.56,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,8.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#f90f","thickness":2.56,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,0.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#f90f","thickness":2.56,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,0.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#f90f","thickness":2.56,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,3.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#f90f","thickness":2.56,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,5.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#f90f","thickness":2.56,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,8.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#f90f","thickness":2.56,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,3.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#f90f","thickness":2.56,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,2.5],"width":0.84,"height":0.84,"rounded":true,"fill":"#FFFFFF","stroke":"#f90f","thickness":2.56,"angle":0}}
```

- Normal sudoku rules apply, i.e. each, row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Dutch Flat Mates: Each 5 in the grid either has a 1 directly above or a 9 directly below it. (It may have both, but it does not need both.)

- Sum/Difference Lines: Each line connecting two circles is a so-called Sum/Difference Line. One of the circled digits indicates the sum of all digits along the line. The other circled digit indicates the difference between the highest and the lowest digit on the line. (Which circle indicates the sum and which the difference has to be determined by the solver. If a circle is bounding multiple lines, it may serve different purposes for those, i.e. it can indicate the sum for one line and the maximal difference of another one.) For example, a valid line could be 8_152_4 since 1+5+2=8 is the sum and 5-1=4 the maximal difference of the line.
