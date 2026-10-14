---
format: open-rules
title: Drop Anchor! (vor Anker gehen)
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/drop-anchor-vor-anker-gehen
library: https://rules.sudoku-sleuth.com/
status: read
exported: dab42b35e2bc06e9dc8bef6ec7f35835
---

```rules
sudoku 9x9
kropki-1: kropki r5c4-r6c4 white
kropki-2: kropki r6c4-r6c5 white
kropki-3: kropki r4c5-r4c6 white
kropki-4: kropki r5c5-r5c6 white
kropki-5: kropki r4c3-r5c3 white
kropki-6: kropki r5c3-r6c3 white
kropki-7: kropki r4c3-r4c4 white
kropki-8: kropki r6c2-r6c3 white
palindrome-1: palindrome r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r6c7-r6c8-r5c9-r4c9-r3c8
palindrome-2: palindrome r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c6-r8c6-r9c5-r9c4-r8c3
palindrome-3: palindrome r9c2-r9c1-r8c1-r7c1-r6c2-r6c3-r5c3-r4c3
palindrome-4: palindrome r3c4-r3c5-r3c6-r2c7-r1c8-r1c7
little-killer-1: little-killer r5c9-r6c8-r7c7-r8c6-r9c5 sum 11
little-killer-2: little-killer r4c9-r5c8-r6c7-r7c6-r8c5-r9c4 sum 27
little-killer-3: little-killer r1c7-r2c6-r3c5-r4c4-r5c3-r6c2-r7c1 sum 46
little-killer-4: little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 21
```

Normal Sudoku rules apply. Numbers on gray (Anchor) and blue (Ocean) lines are palindromes, where a number X away from one end is also X away from the other end of the line. Numbers on the gray line are a triple palindrome with the center where the lines meet. All sets of three neighbors on the gray line sum to 8 or less. All sets of four neighbors on the gray line sum to 10 or less. Numbers outside the grid are the sum of the numbers on the indicated diagonal. Numbers with a white dot between them are consecutive. Not all possible dots are given.
