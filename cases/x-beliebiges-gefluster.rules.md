---
format: open-rules
title: X-beliebiges Geflüster
setter: sujoyku
source: https://sudokupad.app/cko6w5eofl
case: https://sudoku-sleuth.com/cases/x-beliebiges-gefluster
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
whispers-1: whispers r7c1-r8c2-r9c3 gap 5
whispers-2: whispers r1c7-r2c8-r3c9 gap 5
whispers-3: whispers r9c6-r8c5-r7c4-r6c5-r5c6 gap 5
whispers-4: whispers r1c4-r2c5-r3c6-r4c5-r5c4 gap 5
whispers-5: whispers r4c3-r5c3 gap 5
whispers-6: whispers r5c7-r6c7 gap 5
whispers-7: whispers r8c7-r9c8-r8c9-r7c8 gap 5 loop true
whispers-8: whispers r1c2-r2c1-r3c2-r2c3 gap 5 loop true
x-sum-1: x-sum r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 sum 18
x-sum-2: x-sum r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 sum 21
x-sum-3: x-sum r9c1-r8c1-r7c1-r6c1-r5c1-r4c1-r3c1-r2c1-r1c1 sum 18
x-sum-4: x-sum r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9 sum 15
x-sum-5: x-sum r9c9-r8c9-r7c9-r6c9-r5c9-r4c9-r3c9-r2c9-r1c9 sum 12
x-sum-6: x-sum r9c9-r9c8-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2-r9c1 sum 15
x-sum-7: x-sum r1c9-r1c8-r1c7-r1c6-r1c5-r1c4-r1c3-r1c2-r1c1 sum 12
x-sum-8: x-sum r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 sum 18
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- X-sums: A clue outside of the grid indicates the sum of the first X digits in the respective row or column where X is the first digit seen from the clue.

- German Whispers: Adjacent digits on a green line must have a difference of at least 5.
