---
format: open-rules
title: N and N
setter: sujoyku
source: https://sudokupad.app/i3gsrx6wp3
case: https://sudoku-sleuth.com/cases/n-and-n
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
exported: ab93146b2aad3344432bdd6bcd0f6e52
---

```rules
sudoku 9x9
diagonal direction "main"
nabner-1: nabner r6c1-r7c1-r8c1-r9c1 distinct true
nabner-2: nabner r5c1-r4c1-r3c1-r2c1 distinct true
nabner-3: nabner r8c9-r7c9-r6c9-r5c9 distinct true
nabner-4: nabner r4c9-r3c9-r2c9-r1c9 distinct true
nabner-5: nabner r4c6-r4c7-r4c8-r5c8-r6c8 distinct true
nabner-6: nabner r4c5-r5c5-r6c5 distinct true
nabner-7: nabner r8c2-r7c2-r7c3 distinct true
nabner-8: nabner r7c4-r7c5-r8c5 distinct true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,0.5],"width":0,"height":1.284,"rounded":true,"thickness":0,"angle":0,"text":"10","textColor":"#000000","fontSize":49,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,8.5],"width":0,"height":1.284,"rounded":true,"thickness":0,"angle":0,"text":"10","textColor":"#000000","fontSize":49,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,6.5],"width":0,"height":1.284,"rounded":true,"thickness":0,"angle":0,"text":"7","textColor":"#000000","fontSize":49,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,2.5],"width":0,"height":1.284,"rounded":true,"thickness":0,"angle":0,"text":"17","textColor":"#000000","fontSize":49,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[6.5,5.5],[8.5,7.5],[6.5,7.5]],"color":"#9ae9f6ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[0.5,5.5],[2.5,7.5],[1.5,7.5]],"color":"#9ae9f6ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[4.5,2.5],[5.5,2.5],[4.5,3.5]],"color":"#9ae9f6ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[0.5,5.5],[2.5,7.5],[1.5,7.5]],"color":"#FFFFFF","thickness":3.2,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[6.5,5.5],[8.5,7.5],[6.5,7.5]],"color":"#FFFFFF","thickness":3.2,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[4.5,2.5],[5.5,2.5],[4.5,3.5]],"color":"#FFFFFF","thickness":3.2,"rounded":true}}
```

- Normal Sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Negative Diagonal: On the negative main diagonal, digits may not repeat.

- Nabner Lines: The yellow lines are Nabner Lines, i.e. on such a line there may not be consecutive or repeated digits. For example, if a 5 lies on a Nabner line, this line may not contain another 5 and neither a 4 nor a 6.

- Ninetropy Lines: Every set of 4 adjacent digits (those might cross dots) on a hollow blue line must contain a digit from each of the pairs summing to 9, i.e. one of the subsets {1,8}, {2,7}, {3,6}, and {4,5}. A 9 may not appear on a Ninetropy line. Digits on a line may repeat if allowed by other rules.

- Up to N-sums: A clue outside the Column N indicates the sum of all digits up to the cell that contains the digit N. (The digit N itself is not included in the sum.)
