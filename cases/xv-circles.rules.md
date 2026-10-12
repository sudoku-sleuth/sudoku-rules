---
format: open-rules
title: XV Circles
setter: Meggen033
source: https://sudokupad.app/onv29nsceq
case: https://sudoku-sleuth.com/cases/xv-circles
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
pair-1: pair r8c7-r9c7 relation {"op":"sum","value":10}
pair-2: pair r8c4-r9c4 relation {"op":"sum","value":10}
pair-3: pair r5c1-r6c1 relation {"op":"sum","value":10}
pair-4: pair r2c4-r3c4 relation {"op":"sum","value":10}
pair-5: pair r6c4-r7c4 relation {"op":"sum","value":10}
pair-6: pair r6c7-r7c7 relation {"op":"sum","value":10}
pair-7: pair r7c9-r8c9 relation {"op":"sum","value":10}
pair-8: pair r3c9-r4c9 relation {"op":"sum","value":10}
pair-9: pair r8c6-r8c7 relation {"op":"sum","value":10}
pair-10: pair r9c2-r9c3 relation {"op":"sum","value":5}
pair-11: pair r3c1-r4c1 relation {"op":"sum","value":5}
pair-12: pair r3c7-r4c7 relation {"op":"sum","value":5}
unique-1: unique r1c1-r1c4-r1c7-r4c1-r4c4-r4c7-r7c1-r7c4-r7c7
unique-2: unique r1c2-r1c5-r1c8-r4c2-r4c5-r4c8-r7c2-r7c5-r7c8
unique-3: unique r1c3-r1c6-r1c9-r4c3-r4c6-r4c9-r7c3-r7c6-r7c9
unique-4: unique r2c1-r2c4-r2c7-r5c1-r5c4-r5c7-r8c1-r8c4-r8c7
unique-5: unique r2c2-r2c5-r2c8-r5c2-r5c5-r5c8-r8c2-r8c5-r8c8
unique-6: unique r2c3-r2c6-r2c9-r5c3-r5c6-r5c9-r8c3-r8c6-r8c9
unique-7: unique r3c1-r3c4-r3c7-r6c1-r6c4-r6c7-r9c1-r9c4-r9c7
unique-8: unique r3c2-r3c5-r3c8-r6c2-r6c5-r6c8-r9c2-r9c5-r9c8
unique-9: unique r3c3-r3c6-r3c9-r6c3-r6c6-r6c9-r9c3-r9c6-r9c9
counting-circles r1c5-r2c3-r2c9-r3c1-r3c6-r3c7-r4c2-r4c4-r5c6-r6c3-r6c4-r6c6-r6c7-r8c3-r9c1
```

•	Normal Sudoku rules apply. 
•	Disjoint Set: Digits must not repeat at corresponding box positions. 
•	Circles: A circled digit indicates exactly how many circles contain that digit. 
•	Adjacent cells connected with an X must sum to 10. Adjacent cells connected with a V must sum to 5.
