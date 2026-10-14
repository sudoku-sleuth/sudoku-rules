---
format: open-rules
title: "Equality Cages 105: Palindromesemordnilap"
setter: gUBBLOR
source: ""
case: https://sudoku-sleuth.com/cases/equality-cages-105
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0f0c4c969546c65f4e9fcc31bda9b356
---

```rules
sudoku 9x9
equality-cage-1: equality-cage r2c3-r3c3
equality-cage-2: equality-cage r2c4-r3c4
equality-cage-3: equality-cage r1c5-r1c6
equality-cage-4: equality-cage r1c7-r2c7
equality-cage-5: equality-cage r3c6-r3c7-r3c8-r3c9
equality-cage-6: equality-cage r1c8-r2c8
equality-cage-7: equality-cage r7c7-r7c8-r7c9-r8c7
equality-cage-8: equality-cage r8c8-r8c9-r9c8-r9c9
equality-cage-9: equality-cage r4c9-r5c9-r6c8-r6c9
equality-cage-10: equality-cage r5c1-r6c1
kropki-1: kropki r2c5-r2c6 black
kropki-2: kropki r1c1-r1c2 black
kropki-3: kropki r3c2-r3c3 black
kropki-4: kropki r9c4-r9c5 black
kropki-5: kropki r8c9-r9c9 black
kropki-6: kropki r7c9-r8c9 black
kropki-7: kropki r6c1-r6c2 white
kropki-8: kropki r6c5-r7c5 white
kropki-9: kropki r9c1-r9c2 white
palindrome-1: palindrome r2c3-r3c4
palindrome-2: palindrome r3c3-r2c4-r1c5
palindrome-3: palindrome r1c6-r1c7-r2c7
palindrome-4: palindrome r3c5-r4c4-r5c4-r6c3-r7c3
palindrome-5: palindrome r3c1-r4c2
palindrome-6: palindrome r3c2-r4c1
palindrome-7: palindrome r8c3-r8c4-r9c5
palindrome-8: palindrome r9c3-r9c4-r8c5
palindrome-9: palindrome r3c6-r4c7-r3c8-r2c9
palindrome-10: palindrome r5c9-r5c8-r4c8-r3c7-r2c8
palindrome-11: palindrome r6c8-r7c9
palindrome-12: palindrome r6c9-r7c8
pair-1: pair r2c2-r2c3 sum 10
pair-2: pair r8c4-r9c4 sum 10
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

X: Adjacent cells connected with an X must sum to 10. Not all X's are shown.

Palindromes: Digits along a palindrome line read the same forwards or backwards. Palindromes never branch, so if lines are crossing each other that means they are different lines.
