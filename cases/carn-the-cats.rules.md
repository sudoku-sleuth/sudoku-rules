---
format: open-rules
title: Carn the Cats!
setter: EPH
source: https://tinyurl.com/2p8rjnye
case: https://sudoku-sleuth.com/cases/carn-the-cats
library: https://rules.sudoku-sleuth.com/
status: read
exported: c7e53dc092d3f4edd308939f3cc33081
---

```rules
sudoku 9x9
kropki-1: kropki r2c4-r2c5 white
kropki-2: kropki r6c5-r6c6 white
kropki-3: kropki r8c6-r8c7 white
kropki-4: kropki r8c3-r8c4 white
kropki-5: kropki r7c2-r7c3 white
kropki-6: kropki r7c4-r7c5 white
kropki-7: kropki r3c5-r3c6 white
kropki-8: kropki r5c2-r5c3 white
kropki-9: kropki r2c1-r2c2 black
kropki-10: kropki r4c1-r4c2 black
kropki-11: kropki r4c8-r4c9 black
kropki-12: kropki r6c7-r6c8 black
index r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9-r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9-r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9-r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 axis "row"
```

Standard sudoku rules apply: each row, column, and 3x3 box contains all the digits from 1 to 9.

Cells separated by a white dot contain consecutive digits.
Cells separated by a black dot contain digits in a 1:2 ratio.

Digits in the blue rows index the number of the row in its column.  For example if r2c5 were 7, then r7c5 must be 2.
