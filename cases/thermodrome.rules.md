---
format: open-rules
title: Thermodrome
setter: Tingo
source: https://tinyurl.com/mryxjm36
case: https://sudoku-sleuth.com/cases/thermodrome
library: https://rules.sudoku-sleuth.com/
status: read
exported: 577eac4b7120689c7912482514f72b6e
---

```rules
sudoku 9x9
anti-knight
thermo-1: thermo r2c3-r1c3-r2c2-r3c3-r4c3
thermo-2: thermo r8c7-r9c7-r8c8-r7c7-r6c7
kropki-1: kropki r3c3-r4c3 white
kropki-2: kropki r5c6-r6c6 white
kropki-3: kropki r4c3-r5c3 white
kropki-4: kropki r1c4-r1c5 black
palindrome-1: palindrome r2c4-r3c4-r4c3-r3c3
palindrome-2: palindrome r2c6-r3c7-r4c8
palindrome-3: palindrome r6c8-r7c7-r8c6
palindrome-4: palindrome r8c8-r8c7-r9c6-r9c5
palindrome-5: palindrome r8c5-r7c4-r6c3-r6c2
pair-1: pair r7c7-r8c7 sum 10
pair-2: pair r4c6-r5c6 sum 10
pair-3: pair r2c3-r2c4 sum 5
unique-1: unique r1c1-r1c4-r1c7-r4c1-r4c4-r4c7-r7c1-r7c4-r7c7
unique-2: unique r1c2-r1c5-r1c8-r4c2-r4c5-r4c8-r7c2-r7c5-r7c8
unique-3: unique r1c3-r1c6-r1c9-r4c3-r4c6-r4c9-r7c3-r7c6-r7c9
unique-4: unique r2c1-r2c4-r2c7-r5c1-r5c4-r5c7-r8c1-r8c4-r8c7
unique-5: unique r2c2-r2c5-r2c8-r5c2-r5c5-r5c8-r8c2-r8c5-r8c8
unique-6: unique r2c3-r2c6-r2c9-r5c3-r5c6-r5c9-r8c3-r8c6-r8c9
unique-7: unique r3c1-r3c4-r3c7-r6c1-r6c4-r6c7-r9c1-r9c4-r9c7
unique-8: unique r3c2-r3c5-r3c8-r6c2-r6c5-r6c8-r9c2-r9c5-r9c8
unique-9: unique r3c3-r3c6-r3c9-r6c3-r6c6-r6c9-r9c3-r9c6-r9c9
```

Normal Sudoku Rules Apply
Cells a knights move (in chess) away from each other must not have the same value (anti-knight).
Digits cannot repeat in relative cell locations (disjoint sets).
Yellow lines are palindromes. Digits along a palindrome must read the same forwards and backwards
Digits along thermometers must strictly increase from the bulb.
Cells joined by white dots are consecutive in value. Cells joined by black dots have values in a ratio of 2:1
Cells joined by Vs sum to 5. Cells joined by Xs sum to 10. Not all dots, Vs or Xs are given.
