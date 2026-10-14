---
format: open-rules
title: Out Of Bounds
setter: sujoyku
source: https://sudokupad.app/9rtkit5oiv
case: https://sudoku-sleuth.com/cases/out-of-bounds
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A source line layer still needs to be included in our reading.
  - We have only read part of the published answer so far.
  - Some of the source rules still need to be included in our reading.
board:
  rows: 11
  cols: 11
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 9
exported: cdd0901467e1ed708ec4e7f1f22cc0b0
---

```rules

```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1,9],[0,9],[0,10],[1,10],[1,11],[0,11],[0,10]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1,11],[11,11],[11,0],[10,0],[10,1],[11,1]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2,11],[2,10]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3,11],[3,10]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4,11],[4,10]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[5,11],[5,10]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[6,11],[6,10]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[7,11],[7,10]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[8,11],[8,10]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[9,11],[9,10]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[10,11],[10,10],[11,10]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[11,9],[10,9]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[11,8],[10,8]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[11,7],[10,7]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[11,6],[10,6]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[11,5],[10,5]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[11,4],[10,4]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[11,3],[10,3]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[11,2],[10,2]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[10,0],[9,0],[9,1]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[0,9],[0,8],[1,8]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[9,0],[8,0],[8,1]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[0,8],[0,7],[1,7]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[8,0],[7,0],[7,1]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[0,7],[0,6],[1,6]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[7,0],[6,0],[6,1]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[0,6],[0,5],[1,5]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[6,0],[5,0],[5,1]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[0,5],[0,4],[1,4]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[5,0],[4,0],[4,1]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[0,4],[0,3],[1,3]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[4,0],[3,0],[3,1]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[0,3],[0,2],[1,2]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[3,0],[2,0],[2,1]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[0,2],[0,1],[1,1],[1,0],[2,0]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[0,1],[0,0],[1,0]],"color":"#FFFFFF","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[5,7],[7,7],[7,10],[10,10],[10,7],[7,7]],"color":"#000000","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[5,7],[4,7],[4,10],[7,10]],"color":"#000000","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[7,7],[7,4],[10,4],[10,7]],"color":"#000000","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[10,4],[10,1],[7,1],[7,4],[4,4],[4,7],[1,7],[1,10],[4,10]],"color":"#000000","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[7,1],[4,1],[4,4],[1,4],[1,7]],"color":"#000000","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[4,1],[1,1],[1,4]],"color":"#000000","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[3.5,5.5],[2.5,5.5],[1.5,4.5],[0.5,4.5],[0.5,3.5],[1.5,3.5],[2.5,2.5],[3.5,2.5],[3.5,3.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true,"layer":"over"}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[8.5,10.5],[7.5,9.5],[5.5,9.5],[4.5,8.5],[5.5,7.5],[5.5,6.5],[4.5,7.5],[3.5,7.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true,"layer":"over"}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[5.5,4.5],[6.5,4.5],[6.5,3.5],[7.5,3.5],[8.5,4.5],[10.5,2.5],[9.5,2.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true,"layer":"over"}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[7.5,5.5],[8.5,5.5],[9.5,6.5],[10.5,6.5],[10.5,7.5],[9.5,7.5],[8.5,8.5],[7.5,8.5],[7.5,7.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true,"layer":"over"}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[3.5,2.5],[2.5,2.5],[1.5,3.5],[0.5,3.5],[0.5,4.5],[1.5,4.5],[2.5,5.5],[3.5,5.5],[3.5,4.5]],"color":"#9ae9f6ff","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[7.5,5.5],[8.5,5.5],[9.5,6.5],[10.5,6.5],[10.5,7.5],[9.5,7.5],[8.5,8.5],[7.5,8.5],[7.5,7.5]],"color":"#9ae9f6ff","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[8.5,10.5],[7.5,9.5],[5.5,9.5],[4.5,8.5],[5.5,7.5],[5.5,6.5],[4.5,7.5],[3.5,7.5]],"color":"#9ae9f6ff","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[9.5,2.5],[10.5,2.5],[8.5,4.5],[7.5,3.5],[6.5,3.5],[6.5,4.5],[5.5,4.5],[5.5,5.5]],"color":"#9ae9f6ff","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#9ae9f6ff","thickness":0,"angle":45}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,6.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#9ae9f6ff","thickness":0,"angle":45}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,10.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#9ae9f6ff","thickness":0,"angle":45}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,2.5],"width":0.5,"height":0.5,"rounded":false,"fill":"#9ae9f6ff","thickness":0,"angle":45}}
```

(Belated) Happy Birthday, ChinStrap!
***
- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Index Lines: Each turquoise line is an Index Line, i.e. the number in the Nth cell along such a line (starting from the diamond) indicates the position along the line where the number N appears. For example, if a diamond cell contains a 3, the third cell along that line must have a 1.

- Up to N-sums: Numbers outside of the grid are Up to N-clues. An Up to N-clue outside the Row or Column N indicates the sum of all digits up to the cell that contains the digit N. (The digit N itself is not included in the sum.)
