---
format: open-rules
title: Never Break the Chain
setter: Will Power
source: https://sudokupad.app/dcyi132o0t
case: https://sudoku-sleuth.com/cases/never-break-the-chain
library: https://rules.sudoku-sleuth.com/
status: read
exported: ee95abf7129e84badba99e54ac81383d
---

```rules
sudoku 9x9
cage r2c3-r3c3 total 8 connected true
kropki-1: kropki r2c1-r3c1 white
kropki-2: kropki r1c1-r2c1 white
kropki-3: kropki r1c1-r1c2 white
kropki-4: kropki r4c1-r4c2 white
kropki-5: kropki r9c4-r9c5 white
kropki-6: kropki r1c9-r2c9 white
kropki-7: kropki r1c8-r1c9 white
kropki-8: kropki r2c7-r3c7 white
kropki-9: kropki r9c1-r9c2 black
kropki-10: kropki r2c2-r3c2 black
kropki-11: kropki r8c2-r8c3 black
kropki-12: kropki r6c2-r6c3 black
kropki-13: kropki r7c1-r8c1 black
kropki-14: kropki r5c6-r6c6 black
palindrome-1: palindrome r8c4-r9c4-r9c5-r8c6-r7c6-r6c5-r5c5-r4c6-r4c7-r5c7
palindrome-2: palindrome r5c6-r6c6-r6c7-r5c8-r4c8-r3c7-r2c7-r1c8-r1c9-r2c9
palindrome-3: palindrome r9c1-r9c2-r8c3-r7c3-r6c4-r5c4-r4c5-r3c6
palindrome-4: palindrome r2c4-r1c4-r1c3-r2c2-r3c2-r4c3-r5c3-r6c2-r6c1-r5c1
```

Normal Sudoku rules apply. PALINDROMES- Numbers an equal distance from the ends of a gray line are the same. (ie: numbers on a line can be read the same forward and backward) KILLER CAGE- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
