---
format: open-rules
title: Heavy Is the Crown
setter: sujoyku
source: https://sudokupad.app/c3qu3xglut
case: https://sudoku-sleuth.com/cases/heavy-is-the-crown
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: a29b40553e9cad44d7a3c97dbcb7eae1
---

```rules
sudoku 9x9
cage-1: cage r7c2-r8c2-r8c3 total 20 connected true
cage-2: cage r8c7-r8c8-r8c9 total 20 connected true
cage-3: cage r1c2-r2c2-r3c2 total 20 connected true
region-sum-1: region-sum r1c3-r2c4-r2c5-r3c6-r3c7-r4c7-r5c8-r6c8-r7c9 segments [["r1c3"],["r2c4","r2c5","r3c6"],["r3c7"],["r4c7","r5c8","r6c8"],["r7c9"]]
region-sum-2: region-sum r5c3-r5c4-r6c4-r7c5 segments [["r5c3"],["r5c4","r6c4"],["r7c5"]]
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[3.5,1.5],[5.5,1.5],[7.5,3.5],[7.5,5.5],[8.5,6.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[6.5,6.5],[5.5,6.5],[4.5,5.5],[3.5,5.5],[3.5,4.5],[2.5,3.5],[2.5,2.5],[1.5,2.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[8.5,6.5],[7.5,5.5],[7.5,3.5],[5.5,1.5],[3.5,1.5],[2.5,0.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[2.5,2.5],[2.5,3.5],[3.5,4.5],[3.5,5.5],[4.5,5.5],[5.5,6.5],[6.5,6.5],[6.5,7.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[3.5,1.5],[5.5,1.5],[7.5,3.5],[7.5,5.5],[8.5,6.5]],"color":"#FFFFFF","thickness":3.2,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[6.5,6.5],[5.5,6.5],[4.5,5.5],[3.5,5.5],[3.5,4.5],[2.5,3.5],[2.5,2.5],[1.5,2.5]],"color":"#FFFFFF","thickness":3.2,"rounded":true}}
```

Happy Birthday, Calvinball!
---
- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Tentropic Lines: Every set of four sequential digits on a hollow peach line must contain one each from {19}, {28}, {37}, and {46}. A 5 may not appear on a Tentropic Line. Digits on a line may repeat if allowed by other rules.

- Region Sum Lines: Box borders divide the blue lines into segments with the same sum. (Different lines may have different sums.)

- Killer Cages: Digits in a cage must sum to 20.
