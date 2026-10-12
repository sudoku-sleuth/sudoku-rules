---
format: open-rules
title: Falcon
setter: Blobz
source: https://sudokupad.app/m6b8m9wxfc
case: https://sudoku-sleuth.com/cases/falcon
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c3=9 r1c4=4
---

```rules
sudoku 9x9
kropki-1: kropki r1c6-r1c7 colour "white"
kropki-2: kropki r1c9-r2c9 colour "white"
kropki-3: kropki r4c1-r4c2 colour "white"
kropki-4: kropki r8c9-r9c9 colour "white"
kropki-5: kropki r3c7-r3c8 colour "white"
kropki-6: kropki r5c6-r6c6 colour "black"
kropki-7: kropki r6c5-r7c5 colour "black"
kropki-8: kropki r8c5-r8c6 colour "black"
kropki-9: kropki r8c3-r8c4 colour "black"
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[3.5,2.5],[4.5,1.5],[7.5,1.5],[8.5,2.5],[8.5,5.5],[7.5,6.5],[5.5,6.5],[5.5,7.5],[3.5,7.5],[3.5,6.5],[4.5,6.5],[3.5,5.5],[2.5,5.5],[1.5,4.5],[4.5,4.5],[4.5,3.5],[1.5,3.5],[2.5,2.5]],"color":"#67f067bd","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply.

Along the green outline, adjacent digits differ by 5 or more.

White dots separate consecutive digits. Black dots separate digits where one is double the other. Not all such dots are shown.
