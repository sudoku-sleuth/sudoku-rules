---
format: open-rules
title: Extreme Knighthood
setter: Tingo
source: https://tinyurl.com/2p86n57j
case: https://sudoku-sleuth.com/cases/extreme-knighthood
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-knight
thermo-1: thermo r6c3-r5c3-r4c2-r3c2-r2c3
thermo-2: thermo r2c7-r3c6-r2c5-r2c6-r1c6
kropki-1: kropki r7c2-r8c2 colour "white"
kropki-2: kropki r3c2-r4c2 colour "white"
kropki-3: kropki r6c3-r6c4 colour "white"
kropki-4: kropki r8c1-r9c1 colour "white"
kropki-5: kropki r4c7-r5c7 colour "white"
kropki-6: kropki r1c2-r1c3 colour "white"
kropki-7: kropki r2c5-r2c6 colour "white"
kropki-8: kropki r1c6-r1c7 colour "white"
kropki-9: kropki r6c8-r6c9 colour "black"
kropki-10: kropki r2c4-r3c4 colour "black"
kropki-11: kropki r7c7-r8c7 colour "black"
palindrome r8c2-r7c2-r6c3-r5c4-r6c5-r7c6-r7c7-r6c8-r6c9
pair-1: pair r5c3-r5c4 relation {"op":"sum","value":10}
pair-2: pair r4c3-r5c3 relation {"op":"sum","value":5}
pair-3: pair r7c8-r8c8 relation {"op":"sum","value":5}
```

Normal Sudoku rules apply.
A digit may not appear in any cell that is a knight's move (in chess) away from it
Digits on a thermometer increase from the bulb
Cells separated by a white dot are consecutive - not all white dots are given.
Cells separated by a black dot are in a ratio of 2:1 - not all black dots are given
Cells separated by a V add to a total of 5 - not all Vs are given
Cells separated by an X sum to a total of 10 - not all Xs are given
Cells along the gray line are a palindrome
