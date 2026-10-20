---
format: open-rules
title: Liar Cells example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
liar-cells
whispers r1c1-r1c2 gap 5
kropki r2c4-r2c5 black
pair r3c7-r3c8 sum 10
```

## Worked answer

```
123456789
456789123
789123456
234567891
567891234
891234567
345678912
678912345
912345678
```

Use these liar cells and values; every other value equals its digit:

| Cell | Written digit | Real value |
| --- | --- | --- |
| r1c1 | 1 | 7 |
| r2c4 | 7 | 4 |
| r3c7 | 4 | 5 |
| r4c2 | 3 | 1 |
| r5c5 | 9 | 2 |
| r6c8 | 6 | 9 |
| r7c3 | 5 | 3 |
| r8c6 | 2 | 8 |
| r9c9 | 8 | 6 |

Satisfies the case: each row, column and box contains one liar, and both liar columns in the table are permutations of 1–9 with no unchanged pair. The whisper values are 7 and 2 (gap 5); the black-dot values are 4 and 8 (ratio 2); the X values are 5 and 5 (sum 10). These face-digit pairs are respectively 1 and 2, 7 and 8, and 4 and 5: all three clues rely on the value channel.

Breaks the rule: change only r1c1's real value to 1. That row no longer contains a cell whose value differs from its digit. Change it to 4 instead and the liar values repeat 4.
