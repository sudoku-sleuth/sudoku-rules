---
format: open-rules
title: 48 Stitches
setter: Tingo
source: https://tinyurl.com/48stitchessudoku
case: https://sudoku-sleuth.com/cases/48-stitches
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - Some source features still need to be checked against our reading.
---

```rules
sudoku 9x9
diagonal direction "anti"
kropki-1: kropki r2c1-r3c1 colour "white"
kropki-2: kropki r7c2-r8c2 colour "white"
kropki-3: kropki r7c7-r7c8 colour "white"
palindrome-1: palindrome r3c1-r4c2
palindrome-2: palindrome r3c2-r4c1
palindrome-3: palindrome r6c1-r7c2
palindrome-4: palindrome r6c2-r7c1
palindrome-5: palindrome r9c3-r8c4-r7c3-r6c4-r5c3-r4c4-r3c3-r2c4
palindrome-6: palindrome r1c6-r2c7-r3c6-r4c7-r5c6-r6c7-r7c6-r8c7
palindrome-7: palindrome r6c9-r7c8
palindrome-8: palindrome r6c8-r7c9
palindrome-9: palindrome r3c9-r4c8
palindrome-10: palindrome r3c8-r4c9
whispers r4c5-r4c4-r5c4-r6c4-r6c5-r6c6-r5c6-r4c6 gap 5
pair-1: pair r2c8-r3c8 sum 5
pair-2: pair r1c5-r1c6 sum 5
parity-cells r9c7 parity "odd"
scoped-move move "knight" relation "same" digits [4,8]
```

Normal Sudoku Rules Apply
All 4s and all 8s in the puzzle must adhere to the antiknight rule, i.e. no 4 can be a knight's move (in chess) away from any other 4. Likewise, no 8 can be a knight's move away from any other 8. All other digits do not face this restriction.
Green lines are German Whispers lines. Adjacent digits along a German Whispers line must differ in value by at least 5.
Gray lines are palindromes, and must be read the same forwards and backwards.
Digits along the marked diagonal cannot repeat.
Cells joined by white dots are consecutive in value. Not all dots are given.
Cells joined by Vs sum to 5. Not all Vs are given.
The cell with a gray circle contains an odd digit.
