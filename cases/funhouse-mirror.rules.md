---
format: open-rules
title: Funhouse Mirror
setter: EPH
source: https://sudokupad.app/m9zt1xamn7
case: https://sudoku-sleuth.com/cases/funhouse-mirror
library: https://rules.sudoku-sleuth.com/
status: read
exported: b570ac6c05a2ab4ddc58cceaf6d1e9c2
---

```rules
sudoku 9x9
anti-knight
arrow-1: arrow r3c4-r2c4-r1c4 bulb ["r4c4"]
arrow-2: arrow r4c3-r4c2-r4c1 bulb ["r4c4"]
arrow-3: arrow r5c7-r6c7-r7c7 bulb ["r4c7"]
arrow-4: arrow r7c5-r7c6-r7c7 bulb ["r7c4"]
arrow-5: arrow r3c9-r2c9-r1c9 bulb ["r4c9"]
arrow-6: arrow r8c8-r9c7 bulb ["r7c9"]
arrow-7: arrow r9c3-r9c2 bulb ["r9c4"]
palindrome-1: palindrome r1c4-r2c4-r3c4-r4c4-r4c3-r4c2-r4c1
palindrome-2: palindrome r4c7-r5c7-r6c7-r7c7-r7c6-r7c5-r7c4
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.
Palindrome: digits along a thick grey line must read the same from either end.  E.g. 2537352.  There is one line from R4C1 to R1C4, and one line from R7C4 to R4C7.
Arrows: digits along an arrow must sum to the value in the attached circle.
Anti-knight: digits which are a chess knight's move apart must not be the same.
