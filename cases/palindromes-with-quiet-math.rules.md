---
format: open-rules
title: Palindromes with quiet math
setter: Chip Sounder
source: https://sudokupad.app/tczmidqzrx
case: https://sudoku-sleuth.com/cases/palindromes-with-quiet-math
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r5c1-r6c1-r7c1 total 15 connected true
cage-2: cage r1c1-r1c2-r2c1-r3c1 total 20 connected true
cage-3: cage r3c9-r4c8-r4c9-r5c8-r5c9 total 22 connected true
cage-4: cage r9c4-r9c5-r9c6 total 17 connected true
cage-5: cage r5c2-r5c3-r6c2 total 14 connected true
cage-6: cage r1c3-r1c4 total 9 connected true
cage-7: cage r4c5-r5c5-r6c5 total 15 connected true
cage-8: cage r6c4-r7c4-r8c4-r8c5 connected true
palindrome-1: palindrome r2c5-r1c5-r1c4-r1c3-r2c2-r3c2-r4c1-r5c1-r6c1-r7c1-r6c2-r5c2-r5c3
palindrome-2: palindrome r6c7-r5c8-r4c8-r3c9-r4c9-r5c9-r6c9-r7c8-r8c8-r9c7-r9c6-r9c5-r9c4
whispers-1: whispers r3c2-r2c2-r1c3-r1c4-r1c5-r2c5 gap 5
whispers-2: whispers r5c9-r4c9-r3c9-r4c8-r5c8-r6c7 gap 5
region-sum r5c5-r5c4-r4c4-r4c5-r4c6-r3c7-r2c7-r1c7-r1c8-r1c9 segments [["r5c5","r5c4","r4c4","r4c5","r4c6"],["r3c7","r2c7","r1c7","r1c8","r1c9"]]
```

```drawing
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[7.5,8.5],[8.5,8.5]],"color":"#ffa600ff","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.  
Duality line.. (Digits along a grey palindrome must read the same forwards as backwards.
Adjacent digits along a green line must differ by at least 5.) 
Digits in a dotted cage without repeat sum to the total in the top left corner of the cage (if given).
Box borders separate the blue line into equal sums.
Digits on a orange line must differ by at least 4.
