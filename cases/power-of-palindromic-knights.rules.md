---
format: open-rules
title: Power Of Palindromic Knights
setter: Tingo
source: https://tinyurl.com/powerofthepalindromicknights
case: https://sudoku-sleuth.com/cases/power-of-palindromic-knights
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-knight
kropki-1: kropki r5c1-r6c1 colour "white"
kropki-2: kropki r4c2-r4c3 colour "white"
palindrome-1: palindrome r6c5-r7c4-r8c3
palindrome-2: palindrome r3c4-r4c3
palindrome-3: palindrome r6c6-r5c6-r6c7-r5c7
palindrome-4: palindrome r9c5-r9c6-r9c7-r8c7-r8c8
palindrome-5: palindrome r1c3-r2c2-r3c1-r4c2-r5c1-r6c1
pair-1: pair r8c7-r8c8 sum 10
pair-2: pair r9c8-r9c9 sum 10
pair-3: pair r4c3-r4c4 sum 10
pair-4: pair r5c8-r6c8 sum 10
pair-5: pair r1c2-r2c2 sum 10
pair-6: pair r6c7-r7c7 sum 10
pair-7: pair r3c7-r4c7 sum 10
pair-8: pair r6c5-r6c6 sum 5
pair-9: pair r1c1-r1c2 sum 5
```

Normal Sudoku Rules Apply
Any two cells separated by a knight's move (in chess) cannot contain the same digit.
Cells connected by X sum to 10. Cells connected by V sum to 5. Not all Xs and Vs are given.
Cells connected by white dots are consecutive. Not all white dots are given.
The gray lines are palindrome lines, and must read the same forwards and backwards.
Additionally, the 5 palindromes represent "Knights". Each night has a rank equal to the length of the palindrome line which represents it. The sum of all values on a palindrome line is equal to the rank of the knight to the second power. i.e., the digits on a palindrome of length 3 will sum to 3^2, or 9.
