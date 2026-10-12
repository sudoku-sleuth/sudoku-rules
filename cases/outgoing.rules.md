---
format: open-rules
title: Outgoing
setter: sujoyku
source: https://tinyurl.com/mre2cbpf
case: https://sudoku-sleuth.com/cases/outgoing
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r9c1-r9c2-r9c3-r9c4-r9c5 total 31 connected true
cage-2: cage r6c2-r7c2-r7c3-r8c3-r8c4 total 31 connected true
cage-3: cage r5c1-r6c1-r7c1-r8c1-r8c2 total 31 connected true
cage-4: cage r1c5-r1c6-r1c7-r1c8-r1c9 total 30 connected true
cage-5: cage r2c8-r2c9-r3c9-r4c9-r5c9 total 30 connected true
cage-6: cage r2c6-r2c7-r3c7-r3c8-r4c8 total 30 connected true
cage-7: cage r5c7-r5c8-r6c7-r6c8 total 13 connected true
cage-8: cage r4c2-r4c3-r5c2-r5c3 total 14 connected true
cage-9: cage r7c5-r7c6-r8c5-r8c6 total 12 connected true
cage-10: cage r2c4-r2c5-r3c4-r3c5 total 13 connected true
cage-11: cage r9c6-r9c7 total 6 connected true
cage-12: cage r3c1-r4c1 total 9 connected true
cage-13: cage r1c3-r1c4 total 12 connected true
cage-14: cage r6c9-r7c9 total 10 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
arrow-1: arrow r6c3 bulb ["r7c4"]
arrow-2: arrow r7c7-r8c7 bulb ["r7c8"]
```

Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each. On the main diagonals digits do not repeat. Digits in a cage do not repeat and sum to the clue in the top left. Digits on an arrow sum to the digit in the circle from which the arrow emerges.
