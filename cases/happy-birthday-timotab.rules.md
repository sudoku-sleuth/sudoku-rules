---
format: open-rules
title: Happy Birthday, Timotab!
setter: FastSandals
source: https://sudokupad.app/7iuzjfv1qq
case: https://sudoku-sleuth.com/cases/happy-birthday-timotab
library: https://rules.sudoku-sleuth.com/
status: read
exported: 6242c3cfa1b1fd9926b5d6c63775f3a2
---

```rules
sudoku 9x9
cage-1: cage r2c5-r2c6 total 10 connected true
cage-2: cage r2c4-r3c4 total 14 connected true
cage-3: cage r5c5-r5c6-r6c5-r6c6 total 19 connected true
cage-4: cage r9c4-r9c5-r9c6-r9c7 total 14 connected true
cage-5: cage r7c9-r8c9 total 15 connected true
cage-6: cage r6c2-r7c1-r7c2 total 14 connected true
cage-7: cage r2c7-r3c7-r3c8 total 10 connected true
cage-8: cage r2c2-r3c1-r3c2 total 14 connected true
cage-9: cage r1c3-r1c4-r1c5 total 10 connected true
cage-10: cage r4c3-r4c4 total 10 connected true
cage-11: cage r1c7-r1c8-r1c9 total 14 connected true
cage-12: cage r3c9-r4c9-r5c8-r5c9 total 10 connected true
cage-13: cage r7c4-r7c5-r8c5 total 14 connected true
cage-14: cage r5c1-r5c2-r5c3 total 14 connected true
quadruple-1: quadruple r3c5-r3c6-r4c5-r4c6 digits [1,9,7,1]
quadruple-2: quadruple r1c5-r1c6-r2c5-r2c6 digits [5,4]
quadruple-3: quadruple r7c3-r7c4-r8c3-r8c4 digits [1,9,7,1]
quadruple-4: quadruple r4c7-r4c8-r5c7-r5c8 digits [1]
quadruple-5: quadruple r7c5-r7c6-r8c5-r8c6 digits [5,4]
quadruple-6: quadruple r1c2-r1c3-r2c2-r2c3 digits [1]
quadruple-7: quadruple r8c1-r8c2-r9c1-r9c2 digits [5,4]
quadruple-8: quadruple r8c8-r8c9-r9c8-r9c9 digits [5,4]
quadruple-9: quadruple r3c8-r3c9-r4c8-r4c9 digits [5,4]
```

•Normal 9x9 sudoku rules apply
•Digits in cages sum to the number in the top left corner, without repeats
•Digits in white circles must appear at least once in the four cells surrounding the circle
