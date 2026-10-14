---
format: open-rules
title: Mind the gaps
setter: sujoyku
source: https://tinyurl.com/r25ky9xc
case: https://sudoku-sleuth.com/cases/mind-the-gaps
library: https://rules.sudoku-sleuth.com/
status: read
exported: a31aaa149da7aedf253ee3361b84dd4e
---

```rules
sudoku 9x9
cage-1: cage r7c1-r7c2-r7c3-r8c1-r9c1 total 25 connected true
cage-2: cage r8c2-r8c3-r8c4-r9c2 total 25 connected true
cage-3: cage r9c3-r9c4-r9c5-r9c6 total 11 connected true
cage-4: cage r7c4-r7c5-r8c5-r8c6 total 25 connected true
cage-5: cage r4c3-r5c2-r5c3-r6c2 total 24 connected true
cage-6: cage r1c1-r1c2-r1c3-r2c3-r3c3 total 24 connected true
cage-7: cage r2c1-r2c2-r3c2-r4c2 total 24 connected true
cage-8: cage r4c1-r5c1-r6c1 total 16 connected true
cage-9: cage r4c5-r5c4-r5c5-r5c6-r6c5 total 33 connected true
cage-10: cage r7c7-r8c7-r9c7-r9c8-r9c9 total 26 connected true
cage-11: cage r6c8-r7c8-r8c8-r8c9 total 26 connected true
cage-12: cage r4c9-r5c9-r6c9-r7c9 total 10 connected true
cage-13: cage r4c8-r5c7-r5c8-r6c7 total 26 connected true
cage-14: cage r1c9-r2c9-r3c7-r3c8-r3c9 total 23 connected true
cage-15: cage r1c8-r2c6-r2c7-r2c8 total 23 connected true
cage-16: cage r2c4-r2c5-r3c5-r3c6 total 23 connected true
cage-17: cage r1c4-r1c5-r1c6-r1c7 total 17 connected true
pair r3c9-r4c9 sum 10
```

Normal Sudoku rules apply. Digits in a cage do not repeat and sum to the clue in the top left. Digits joined by an X sum to 10. (Not all X are given.)
