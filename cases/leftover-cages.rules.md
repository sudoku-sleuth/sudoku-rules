---
format: open-rules
title: Leftover Cages
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/f7qq34e5v1
case: https://sudoku-sleuth.com/cases/leftover-cages
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r2c3-r3c3 colour "black"
kropki-2: kropki r4c3-r4c4 colour "black"
kropki-3: kropki r6c3-r7c3 colour "black"
kropki-4: kropki r3c1-r3c2 colour "black"
kropki-5: kropki r7c1-r7c2 colour "black"
kropki-6: kropki r8c2-r8c3 colour "black"
kropki-7: kropki r8c4-r9c4 colour "black"
kropki-8: kropki r1c4-r2c4 colour "black"
kropki-9: kropki r2c6-r3c6 colour "black"
kropki-10: kropki r3c7-r3c8 colour "black"
kropki-11: kropki r4c8-r5c8 colour "black"
kropki-12: kropki r5c7-r6c7 colour "black"
kropki-13: kropki r6c8-r6c9 colour "black"
kropki-14: kropki r5c1-r6c1 colour "black"
kropki-15: kropki r8c3-r8c4 colour "white"
kropki-16: kropki r1c3-r2c3 colour "white"
kropki-17: kropki r4c8-r4c9 colour "white"
kropki-18: kropki r9c6-r9c7 colour "white"
kropki-19: kropki r6c5-r7c5 colour "white"
kropki-20: kropki r7c7-r8c7 colour "white"
remainder-cage-1: remainder-cage r2c3-r3c2-r3c3 modulus 3 remainder 2 distinct false
remainder-cage-2: remainder-cage r4c3-r4c4-r5c3 modulus 3 remainder 0 distinct false
remainder-cage-3: remainder-cage r6c3-r7c2-r7c3 modulus 3 remainder 1 distinct false
remainder-cage-4: remainder-cage r8c3-r8c4-r9c4 modulus 3 remainder 0 distinct false
remainder-cage-5: remainder-cage r1c3-r1c4-r2c4 modulus 3 remainder 2 distinct false
remainder-cage-6: remainder-cage r2c5-r2c6-r3c6-r3c7 modulus 3 remainder 0 distinct false
remainder-cage-7: remainder-cage r3c8-r4c8-r4c9 modulus 3 remainder 0 distinct false
remainder-cage-8: remainder-cage r5c7-r5c8-r6c7-r6c8 modulus 3 remainder 2 distinct false
remainder-cage-9: remainder-cage r1c8-r1c9-r2c9 modulus 3 remainder 1 distinct false
remainder-cage-10: remainder-cage r8c7-r9c6-r9c7 modulus 3 remainder 2 distinct false
remainder-cage-11: remainder-cage r8c9-r9c8-r9c9 modulus 3 remainder 0 distinct false
remainder-cage-12: remainder-cage r6c5-r7c5-r7c6 modulus 3 remainder 1 distinct false
```

**Sudoku, Kropki, Cage Variant**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
- Remainder Cages: Digits can repeat within cages. The value in the upper left corner of the cage gives the REMAINDER when the sum of the digits inside the cage is divided by 3. For example, if a cage contains the digits 479, the cage value would be 2 since 4+7+9=20 and 20 divided by 3 has remainder 2.

For more of our puzzles, please visit https://missingdeck.net
