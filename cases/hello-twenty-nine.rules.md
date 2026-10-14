---
format: open-rules
title: Hello, Twenty-Nine!
setter: sujoyku
source: https://sudokupad.app/kg0g3i32xb
case: https://sudoku-sleuth.com/cases/hello-twenty-nine
library: https://rules.sudoku-sleuth.com/
status: read
exported: ca354367006eef1e8561c368bd3211e8
---

```rules
sudoku 9x9
cage-1: cage r2c1-r2c3-r3c1-r3c2-r3c3 total 29 connected true
cage-2: cage r1c2-r1c3-r1c4-r2c2-r2c4 total 29 connected true
cage-3: cage r7c4-r8c4-r9c3-r9c4 total 29 connected true
cage-4: cage r6c6-r6c7-r7c5-r7c6-r7c7-r8c5-r8c6 total 29 connected true
cage-5: cage r4c4-r5c3-r5c4-r6c3-r7c3 total 29 connected true
cage-6: cage r4c2-r4c3-r5c1-r5c2-r6c1 total 29 connected true
cage-7: cage r1c6-r1c7-r1c8-r2c6-r2c8 total 29 connected true
cage-8: cage r2c7-r2c9-r3c7-r3c8-r3c9 total 29 connected true
cage-9: cage r4c7-r4c8-r4c9-r5c7-r5c9 total 29 connected true
little-killer-1: little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 29
little-killer-2: little-killer r1c6-r2c5-r3c4-r4c3-r5c2-r6c1 sum 29
little-killer-3: little-killer r4c9-r5c8-r6c7-r7c6-r8c5-r9c4 sum 29
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer Cages: Digits in a cage do not repeat and must sum to 29.

- Little Killers: Digits on a marked diagonal sum to 29. (If there is no conflict with other rules, digits on such a diagonal may repeat.)
