---
format: open-rules
title: Palindromethyst
setter: Will Power
source: https://sudokupad.app/m3webzcets
case: https://sudoku-sleuth.com/cases/palindromethyst
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c8=6 r8c3=6
exported: 2c61a604b0ad8fe026d4c37eac99dca1
---

```rules
sudoku 9x9
cage-1: cage r9c1-r9c2 total 10 connected true
cage-2: cage r9c8-r9c9 total 10 connected true
kropki-1: kropki r1c5-r1c6 white
kropki-2: kropki r4c9-r5c9 white
kropki-3: kropki r5c9-r6c9 white
kropki-4: kropki r4c1-r5c1 white
kropki-5: kropki r9c4-r9c5 white
kropki-6: kropki r9c5-r9c6 white
kropki-7: kropki r6c8-r7c8 white
kropki-8: kropki r1c4-r1c5 black
kropki-9: kropki r5c1-r6c1 black
palindrome-1: palindrome r8c3-r7c2-r6c1-r5c1-r4c1-r3c2-r2c3-r1c4-r1c5-r1c6-r2c7-r3c8-r4c9-r5c9-r6c9-r7c8-r8c7-r9c6-r9c5-r9c4
palindrome-2: palindrome r3c6-r2c5-r3c4-r4c3-r5c3-r6c4-r7c5-r7c6-r6c7-r5c8-r4c7
```

Normal Sudoku rules apply. PALINDROMES(+)- Cells an equal distance from the center of a purple line are the same number. OTHER THAN THE GIVEN NUMBERS, numbers may only appear at most once, on either side of a palindrome. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.
