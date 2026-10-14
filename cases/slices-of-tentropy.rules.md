---
format: open-rules
title: Slices of Tentropy
setter: sujoyku
source: https://sudokupad.app/vwpjt20h65
case: https://sudoku-sleuth.com/cases/slices-of-tentropy
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: ae3fefb94ae59b4fac4040ada4bd8e26
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[7.5,7.5],[8.5,7.5],[8.5,5.5],[6.5,5.5],[6.5,6.5]],"color":"#fcaf","thickness":12.8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[2.5,4.5],[2.5,6.5],[0.5,6.5],[0.5,3.5]],"color":"#fcaf","thickness":12.8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[8.5,1.5],[8.5,0.5],[5.5,0.5],[5.5,2.5],[6.5,2.5]],"color":"#fcaf","thickness":12.8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[2.5,0.5],[0.5,0.5],[0.5,2.5]],"color":"#fcaf","thickness":12.8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[4.5,4.5],[3.5,5.5],[3.5,6.5]],"color":"#fcaf","thickness":12.8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[7.5,7.5],[8.5,7.5],[8.5,5.5],[6.5,5.5],[6.5,6.5]],"color":"#FFFFFF","thickness":3.2,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[2.5,4.5],[2.5,6.5],[0.5,6.5],[0.5,3.5]],"color":"#FFFFFF","thickness":3.2,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[8.5,1.5],[8.5,0.5],[5.5,0.5],[5.5,2.5],[6.5,2.5]],"color":"#FFFFFF","thickness":3.2,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[2.5,0.5],[0.5,0.5],[0.5,2.5]],"color":"#FFFFFF","thickness":3.2,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[4.5,4.5],[3.5,5.5],[3.5,6.5]],"color":"#FFFFFF","thickness":3.2,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,7],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#fcaf","thickness":6.4,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,6],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#fcaf","thickness":6.4,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,0.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#fcaf","thickness":6.4,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,2],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#fcaf","thickness":6.4,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,0.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#fcaf","thickness":6.4,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,4.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#FFFFFF","stroke":"#fcaf","thickness":6.4,"angle":0}}
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

Each line in the grid is both a Tentropy and an Equal Split Line.

- Tentropy Lines: Every set of 4 adjacent digits (those might cross dots) on a hollow peach line must contain a digit from each of the X-pair (ten-pair) subsets of {1,9}, {2,8}, {3,7}, and {4,6}. A 5 may not appear on a tentropy line. Digits on a line may repeat if allowed by other rules.

- Equal Split Lines: Dots split peach lines into segments with equal sums. Digits may repeat on lines but not within a segment. Different lines may have different sums. For example, a valid Equal Split Line could read 1234-127.
