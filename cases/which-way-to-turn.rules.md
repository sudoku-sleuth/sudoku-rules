---
format: open-rules
title: Which Way To Turn?
setter: EPH
source: https://sudokupad.app/pxgs1dio88
case: https://sudoku-sleuth.com/cases/which-way-to-turn
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
givens: r1c2=1 r9c9=2
---

```rules
sudoku 9x9
pair-1: pair r7c4-r7c5 sum 10
pair-2: pair r4c7-r5c7 sum 10
pair-3: pair r9c7-r9c8 sum 10
pair-4: pair r7c8-r7c9 sum 10
pair-5: pair r2c9-r3c9 sum 10
pair-6: pair r5c2-r6c2 sum 10
pair-7: pair r2c4-r2c5 sum 5
pair-8: pair r7c5-r7c6 sum 5
pair-9: pair r5c7-r6c7 sum 5
pair-10: pair r7c1-r8c1 sum 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[0.5,3.5],[0.5,4.5],[2.5,6.5],[3.5,6.5],[4.5,5.5],[4.5,4.833]],"color":"#cfcdcdff","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[4.833,4.5],[5.5,4.5],[6.5,5.5],[6.5,6.5],[4.5,8.5],[3.5,8.5],[2.5,7.5]],"color":"#cfcdcdff","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,4.167],[4.5,3.5],[5.5,2.5],[6.5,2.5],[8.5,4.5],[8.5,5.5],[7.5,6.5]],"color":"#cfcdcdff","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.167,4.5],[3.5,4.5],[2.5,3.5],[2.5,2.5],[4.5,0.5],[5.5,0.5],[6.5,1.5]],"color":"#cfcdcdff","thickness":9.6,"rounded":true}}
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Grey lines are palindromes: digits along a palindrome read the same in either direction.

XV pairs: digits separated an X sum to 10; digits separated by a V sum to 5.
