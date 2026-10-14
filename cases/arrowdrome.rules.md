---
format: open-rules
title: Arrowdrome
setter: Tingo
source: https://sudokupad.app/cycvasl7o4
case: https://sudoku-sleuth.com/cases/arrowdrome
library: https://rules.sudoku-sleuth.com/
status: read
exported: e925e682336dd80f5a81c8c306fbc4e8
---

```rules
sudoku 9x9
anti-knight
kropki-1: kropki r1c2-r1c3 white
kropki-2: kropki r1c3-r1c4 white
kropki-3: kropki r1c4-r1c5 white
kropki-4: kropki r2c8-r2c9 white
kropki-5: kropki r3c9-r4c9 white
kropki-6: kropki r3c7-r4c7 white
kropki-7: kropki r5c5-r5c6 white
kropki-8: kropki r4c8-r5c8 white
kropki-9: kropki r8c7-r8c8 white
kropki-10: kropki r7c8-r8c8 white
kropki-11: kropki r8c9-r9c9 white
arrow-1: arrow r4c2-r3c3-r2c4 bulb ["r4c1"]
arrow-2: arrow r3c5-r4c4 bulb ["r4c6"]
arrow-3: arrow r8c4-r7c3-r6c2 bulb ["r8c5"]
arrow-4: arrow r7c6-r6c7 bulb ["r8c5"]
arrow-5: arrow r4c8-r3c7-r2c6 bulb ["r5c9"]
arrow-6: arrow r6c8-r7c7 bulb ["r5c9"]
palindrome-1: palindrome r6c8-r7c7
palindrome-2: palindrome r4c8-r3c7-r2c6
palindrome-3: palindrome r3c5-r4c4
palindrome-4: palindrome r2c4-r3c3-r4c2
palindrome-5: palindrome r6c2-r7c3-r8c4
palindrome-6: palindrome r7c6-r6c7
```

Normal Sudoku Rules Apply
Digits separated by a knight's move (in chess) may not contain the same digit.
Cells joined by white dots have consecutive values. Not all dots are given. 
Digits along the line of an arrow must sum to the value in the arrows circle. Additionally, all digits along the line of an arrow, are palindromes and must read the same way both forwards and backwards.
