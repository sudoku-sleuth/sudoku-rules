---
format: open-rules
title: Knightly Exclusive Dominoes
setter: Tingo
source: https://sudokupad.app/jp0kj27ei1
case: https://sudoku-sleuth.com/cases/knightly-exclusive-dominoes
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c7-r4c8 total 6 connected true
cage-2: cage r7c4-r7c5 total 6 connected true
anti-knight
kropki-1: kropki r5c5-r6c5 colour "black"
kropki-2: kropki r5c4-r5c5 colour "black"
kropki-3: kropki r5c4-r6c4 colour "black"
kropki-4: kropki r5c2-r5c3 colour "black"
palindrome-1: palindrome r8c4-r7c3
palindrome-2: palindrome r8c6-r7c7
palindrome-3: palindrome r7c6-r6c7
palindrome-4: palindrome r7c9-r6c8
palindrome-5: palindrome r6c3-r5c4
palindrome-6: palindrome r7c2-r6c1
palindrome-7: palindrome r4c3-r3c2
palindrome-8: palindrome r2c4-r1c3
palindrome-9: palindrome r3c6-r2c7
pair-1: pair r6c5-r6c6 sum 10
pair-2: pair r5c3-r5c4 sum 10
pair-3: pair r5c1-r6c1 sum 10
pair-4: pair r4c2-r5c2 sum 10
pair-5: pair r3c1-r4c1 sum 5
pair-6: pair r3c3-r3c4 sum 5
```

Normal Sudoku Rules Apply
Cells that are a knight's move (in chess) apart cannot contain the same digit.
Digits cannot repeat within killer cages and must sum to the value in the top left corner.
Cells joined by "V" sum to 5. Cells joined by "X" sum to 10. Not all Xs and Vs are given.
Black dots separate cells of 2:1 ratio values. Not all black dots are given.
Digits along gray lines are palindromes and must be read the same forwards and backwards.
Additionally - all cell pairs (dominoes) joined by a clue are unique within that clue type. For example, if a black dot joins a domino, and the values of those two cells are 3 and 6, the 3/6 domino cannot be used for other black dot joined dominoes. This does not exclude any other clue type from using that same cell value pair, providing that clue type also only uses the cell value pair once.
