---
format: open-rules
title: For the Love of Xs & Vs 2
setter: The Bard
source: https://sudokupad.app/jk061zh1hy
case: https://sudoku-sleuth.com/cases/for-the-love-of-xs-vs-2
library: https://rules.sudoku-sleuth.com/
status: read
givens: r9c1=6 r9c4=7
---

```rules
sudoku 9x9
pair-1: pair r5c6-r6c6 relation {"op":"sum","value":10}
pair-2: pair r4c5-r5c5 relation {"op":"sum","value":10}
pair-3: pair r5c4-r6c4 relation {"op":"sum","value":10}
pair-4: pair r6c7-r6c8 relation {"op":"sum","value":10}
pair-5: pair r5c2-r5c3 relation {"op":"sum","value":10}
pair-6: pair r8c2-r9c2 relation {"op":"sum","value":10}
pair-7: pair r8c8-r9c8 relation {"op":"sum","value":10}
pair-8: pair r1c9-r2c9 relation {"op":"sum","value":10}
pair-9: pair r1c3-r2c3 relation {"op":"sum","value":10}
pair-10: pair r3c6-r4c6 relation {"op":"sum","value":10}
pair-11: pair r1c4-r1c5 relation {"op":"sum","value":10}
pair-12: pair r4c9-r5c9 relation {"op":"sum","value":10}
pair-13: pair r2c6-r2c7 relation {"op":"sum","value":10}
pair-14: pair r4c2-r4c3 relation {"op":"sum","value":10}
pair-15: pair r5c6-r5c7 relation {"op":"sum","value":10}
pair-16: pair r5c7-r5c8 relation {"op":"sum","value":5}
pair-17: pair r8c3-r9c3 relation {"op":"sum","value":5}
pair-18: pair r7c5-r8c5 relation {"op":"sum","value":5}
pair-19: pair r7c4-r8c4 relation {"op":"sum","value":5}
pair-20: pair r5c3-r5c4 relation {"op":"sum","value":5}
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.

XV: Digits separated by an X sum to 10. Digits separated by a V sum to 5.
