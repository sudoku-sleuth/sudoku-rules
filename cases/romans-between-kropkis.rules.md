---
format: open-rules
title: Romans Between Kropkis
setter: Tingo
source: https://sudokupad.app/todipgdfgq
case: https://sudoku-sleuth.com/cases/romans-between-kropkis
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
anti-knight
kropki-1: kropki r2c9-r3c9 colour "white"
kropki-2: kropki r8c4-r8c5 colour "white"
kropki-3: kropki r8c2-r9c2 colour "black"
kropki-4: kropki r3c8-r4c8 colour "black"
kropki-5: kropki r6c9-r7c9 colour "black"
kropki-6: kropki r6c1-r6c2 colour "black"
kropki-7: kropki r7c8-r8c8 colour "black"
palindrome-1: palindrome r3c3-r4c3-r5c4-r6c5
palindrome-2: palindrome r3c5-r4c6-r5c7-r6c7
pair-1: pair r7c6-r7c7 relation {"op":"sum","value":10}
pair-2: pair r1c8-r2c8 relation {"op":"sum","value":10}
pair-3: pair r2c3-r2c4 relation {"op":"sum","value":5}
pair-4: pair r5c7-r6c7 relation {"op":"sum","value":5}
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

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[2.5,2.5],[3.5,2.5],[4.5,3.5],[5.5,4.5],[6.5,5.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[2.5,4.5],[3.5,5.5],[4.5,6.5],[5.5,6.5],[6.5,6.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
```

Normal Sudoku Rules Apply
Digits separated by a knight's move (in chess) may not contain the same digit.
Cells in the same relative position may not contain the same digit
Cells joined by white dots have consecutive values. Cells joined by black dots have values in ratio of 2:1. Not all dots are given. 
Cells joined by Vs sum to 5. Cells joined by X sum to 10. Not all Xs and Vs are necessarily given.
Digits along between lines have values between digits in the circles. Also, the actual lines of the between lines are palindromes. Digits must read the same forward and backward.
