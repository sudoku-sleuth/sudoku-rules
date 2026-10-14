---
format: open-rules
title: Radar
setter: Jobo
source: https://tinyurl.com/5a747r94
case: https://sudoku-sleuth.com/cases/radar
library: https://rules.sudoku-sleuth.com/
status: read
givens: ..3...8...5.....3.6.......1...........................9.......2.4.....5...7...4..
exported: 5ec95c0abaf6fd556a1558362283f839
---

```rules
sudoku 9x9
palindrome-1: palindrome r6c2-r5c1-r4c2-r3c3-r2c4-r1c5-r2c6-r3c7-r4c8-r5c9-r6c8-r7c7-r8c6-r9c5-r8c4-r7c3
palindrome-2: palindrome r3c6-r4c7
palindrome-3: palindrome r6c7-r7c6
palindrome-4: palindrome r7c4-r6c3
palindrome-5: palindrome r4c3-r3c4
palindrome-6: palindrome r4c6-r3c5-r4c4-r5c3-r6c4-r7c5-r6c6-r5c7
```

Normal sudoku rules apply.

Grey lines are palindromes and must read the same in both directions.
