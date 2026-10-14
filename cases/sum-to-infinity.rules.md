---
format: open-rules
title: Sum to Infinity
setter: Blobz
source: https://sudokupad.app/blobz/sum-to-infinity
case: https://sudoku-sleuth.com/cases/sum-to-infinity
library: https://rules.sudoku-sleuth.com/
status: read
exported: e6c03aef1ece6bfd44d3b98807f1bd80
---

```rules
sudoku 9x9
cage-1: cage r5c7-r5c8-r6c7-r6c8 connected true
cage-2: cage r8c4-r8c5 connected true
kropki-1: kropki r4c6-r4c7 white
kropki-2: kropki r5c3-r5c4 white
kropki-3: kropki r6c5-r7c5 white
kropki-4: kropki r8c5-r9c5 white
kropki-5: kropki r9c6-r9c7 white
palindrome-1: palindrome r3c6-r2c7-r2c8-r3c9-r4c9-r5c8-r5c7-r4c6-r3c5-r2c4-r2c3-r3c2-r4c2-r5c3-r5c4-r4c5
palindrome-2: palindrome r6c8-r6c7-r6c6-r7c7-r8c6-r9c5-r9c6-r9c7
little-killer-1: little-killer r1c7-r2c8-r3c9 sum 7
little-killer-2: little-killer r5c9-r6c8-r7c7-r8c6-r9c5 sum 30
```

Normal sudoku rules apply. 

The grey lines are palindromes (they read the same in either direction) that both exclude the digit 8. 

A single 8 resides inside each loop of the infinity (∞) symbol; all other digits appear along that symbol. 

The sum of the digits along the summation (Σ) symbol is a square number, though no individual digit is a square. 

All digits on the summation symbol appear in the square (2x2) cage.

The sum of digits in the smaller (1x2) cage is a square. 

Digits along the indicated diagonals must sum to the given total. 

Digits separated by a white dot are consecutive.
