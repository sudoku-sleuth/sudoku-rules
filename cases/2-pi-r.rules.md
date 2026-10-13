---
format: open-rules
title: 2 Pi R
setter: Blobz
source: https://sudokupad.app/blobz/2-pi-r
case: https://sudoku-sleuth.com/cases/2-pi-r
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r6c7-r6c6-r6c5-r6c4-r6c3-r7c2
thermo-2: thermo r6c7-r6c6-r6c5-r6c4-r7c4-r8c4-r9c4
thermo-3: thermo r6c7-r6c6-r7c6-r8c6-r9c6
palindrome-1: palindrome r2c1-r1c2-r2c3-r3c3-r3c2-r4c1-r4c2-r4c3-r4c4
palindrome-2: palindrome r4c6-r3c6-r2c6-r1c7-r1c8
pair-1: pair r2c1-r2c2 sum 10
pair-2: pair r2c3-r3c3 sum 10
pair-3: pair r1c4-r1c5 sum 10
pair-4: pair r2c4-r2c5 sum 10
pair-5: pair r1c6-r1c7 sum 10
pair-6: pair r2c7-r3c7 sum 10
pair-7: pair r4c8-r4c9 sum 10
pair-8: pair r4c6-r4c7 sum 10
pair-9: pair r5c6-r5c7 sum 10
pair-10: pair r5c5-r6c5 sum 10
pair-11: pair r4c4-r4c5 sum 10
pair-12: pair r5c3-r6c3 sum 10
pair-13: pair r5c1-r5c2 sum 10
pair-14: pair r6c1-r6c2 sum 10
pair-15: pair r7c1-r7c2 sum 10
pair-16: pair r8c2-r9c2 sum 10
pair-17: pair r8c7-r9c7 sum 10
pair-18: pair r7c8-r8c8 sum 10
pair-19: pair r1c8-r2c8 sum 5
pair-20: pair r8c2-r8c3 sum 5
```

Normal sudoku rules apply. 

Grey lines ("2" and "r") are palindromes and read the same in both directions. 

Digits on the thermo ("π") strictly increase from the bulb end.

Digits separated by X sum to 10; digits separated by V sum to 5. Not all such X's and V's are shown.
