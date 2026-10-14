---
format: open-rules
title: A gift
setter: Chip Sounder
source: https://sudokupad.app/77gtj7dsk8
case: https://sudoku-sleuth.com/cases/a-gift
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 25cbf873669ef08f819f0393804c20b5
---

```rules
sudoku 9x9
kropki-1: kropki r1c4-r1c5 white
kropki-2: kropki r1c5-r1c6 white
kropki-3: kropki r1c6-r1c7 white
kropki-4: kropki r2c2-r2c3 white
kropki-5: kropki r2c6-r2c7 white
kropki-6: kropki r3c4-r3c5 white
kropki-7: kropki r5c4-r5c5 white
kropki-8: kropki r5c5-r5c6 white
kropki-9: kropki r5c6-r5c7 white
kropki-10: kropki r7c4-r7c5 white
kropki-11: kropki r8c2-r8c3 white
kropki-12: kropki r8c6-r8c7 white
pair-1: pair r3c6-r4c6 sum 10
pair-2: pair r5c8-r5c9 sum 10
pair-3: pair r4c7-r5c7 sum 10
pair-4: pair r6c4-r7c4 sum 10
pair-5: pair r6c6-r7c6 sum 10
pair-6: pair r8c7-r8c8 sum 10
pair-7: pair r6c9-r7c9 sum 10
pair-8: pair r1c8-r1c9 sum 5
pair-9: pair r4c8-r4c9 sum 5
pair-10: pair r5c1-r5c2 sum 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[0.5,2.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[1.5,4.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[3.5,3.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[3.5,5.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[5.5,3.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[7.5,4.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
```

For an extra bit of fun, hidden in the puzzle is a word and it is up to the solver to disambiguate what it says.
Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Cells separated by an X sum to 10.
Cells separated by a V sum to 5.
Adjacent digits on a green dash must differ by at least 5.
Cells separated by a white dot are consecutive.
No negative constraints.
