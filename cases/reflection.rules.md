---
format: open-rules
title: Reflection
setter: Jobo
source: https://sudokupad.app/kdoizfml6i
case: https://sudoku-sleuth.com/cases/reflection
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
palindrome-1: palindrome r2c4-r1c4-r1c5-r1c6-r1c7-r2c7-r3c7-r4c7-r4c6
double-arrow-1: double-arrow r1c4-r1c5-r1c6-r1c7-r2c7-r3c7-r4c7 ends ["r2c4","r4c6"]
palindrome-2: palindrome r2c9-r3c9-r4c9-r4c8-r5c8
double-arrow-2: double-arrow r3c9-r4c9-r4c8 ends ["r2c9","r5c8"]
palindrome-3: palindrome r6c3-r6c4-r7c4-r8c4-r9c4-r9c3-r9c2-r9c1-r8c1
double-arrow-3: double-arrow r6c4-r7c4-r8c4-r9c4-r9c3-r9c2-r9c1 ends ["r6c3","r8c1"]
palindrome-4: palindrome r8c5-r8c6-r8c7-r9c7-r9c8
double-arrow-4: double-arrow r8c6-r8c7-r9c7 ends ["r8c5","r9c8"]
palindrome-5: palindrome r3c1-r3c2-r3c3-r4c3-r4c4
double-arrow-5: double-arrow r3c2-r3c3-r4c3 ends ["r3c1","r4c4"]
palindrome-6: palindrome r2c4-r1c4-r1c5-r1c6-r1c7-r2c7-r3c7-r4c7-r4c6
double-arrow-6: double-arrow r1c4-r1c5-r1c6-r1c7-r2c7-r3c7-r4c7 ends ["r2c4","r4c6"]
palindrome-7: palindrome r5c8-r4c8-r4c9-r3c9-r2c9
double-arrow-7: double-arrow r4c8-r4c9-r3c9 ends ["r5c8","r2c9"]
palindrome-8: palindrome r8c5-r8c6-r8c7-r9c7-r9c8
double-arrow-8: double-arrow r8c6-r8c7-r9c7 ends ["r8c5","r9c8"]
palindrome-9: palindrome r6c3-r6c4-r7c4-r8c4-r9c4-r9c3-r9c2-r9c1-r8c1
double-arrow-9: double-arrow r6c4-r7c4-r8c4-r9c4-r9c3-r9c2-r9c1 ends ["r6c3","r8c1"]
palindrome-10: palindrome r3c1-r3c2-r3c3-r4c3-r4c4
double-arrow-10: double-arrow r3c2-r3c3-r4c3 ends ["r3c1","r4c4"]
```

Normal sudoku rules apply.

The sum of the digits along a double arrow line connecting two circles is equal to the sum of the digits in the circles.

All double arrows (including the circles) are also palindromes and must read the same in both directions.
