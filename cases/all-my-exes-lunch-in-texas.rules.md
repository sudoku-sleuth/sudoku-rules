---
format: open-rules
title: All My Exes Lunch in Texas
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/all-my-exes-lunch-in-texas
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
parity r2c3-r3c3-r4c3-r4c2-r4c1-r5c1-r6c2-r6c3-r7c4-r8c5-r9c6-r9c7-r8c7-r7c7-r6c8-r6c9-r5c9-r4c9-r3c8-r3c7-r3c6-r3c5-r2c5-r1c5-r1c4-r1c3
renban r6c4-r6c5-r6c6-r5c7-r4c7
pair-1: pair r4c3-r4c4 sum 10
pair-2: pair r4c6-r4c7 sum 10
pair-3: pair r3c6-r4c6 sum 10
pair-4: pair r5c3-r6c3 sum 10
pair-5: pair r5c4-r6c4 sum 10
pair-6: pair r7c4-r7c5 sum 10
pair-7: pair r7c6-r8c6 sum 10
pair-8: pair r4c8-r4c9 sum 10
pair-9: pair r5c7-r6c7 sum 10
pair-10: pair r5c3-r5c4 sum 10
pair-11: pair r6c3-r6c4 sum 10
pair-12: pair r5c6-r5c7 sum 10
negative relations [{"op":"sum","value":10}] except [["r4c3","r4c4"],["r4c6","r4c7"],["r3c6","r4c6"],["r5c3","r6c3"],["r5c4","r6c4"],["r7c4","r7c5"],["r7c6","r8c6"],["r4c8","r4c9"],["r5c7","r6c7"],["r5c3","r5c4"],["r6c3","r6c4"],["r5c6","r5c7"]]
sandwich-1: sandwich r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 sum 23
sandwich-2: sandwich r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 sum 17
```

All my exes lunch in Texas: as you can see, none of them are located outside the state!

Normal sudoku rules apply. Digits along the Texas border (yellow line) alternate even/odd. Digits in cells separated by an X sum to 10. All possible Xs are shown. (Negative constraint applies). Digits along the purple (Renban) line are a set of consecutive digits, in any order. Number outside of the grid indicate the sum of the digits appearing between 1 and 9 in that column (sandwich sums).
