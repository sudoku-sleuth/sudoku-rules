---
format: open-rules
title: Birthday Wishes
setter: Dr Logic
source: ""
case: https://sudoku-sleuth.com/cases/birthday-wishes
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c5=1 r1c7=8 r5c1=1 r8c4=1 r8c6=8
---

```rules
sudoku 9x9
cage-1: cage r6c9-r7c9-r8c9-r9c9 total 18 connected true
cage-2: cage r8c4-r8c5-r9c4-r9c5 total 18 connected true
cage-3: cage r1c9-r2c9-r3c9-r4c9 total 19 connected true
cage-4: cage r7c6-r7c7-r7c8 total 18 connected true
cage-5: cage r5c2-r6c2-r7c2 total 18 connected true
cage-6: cage r1c1-r2c1-r3c1 total 18 connected true
cage-7: cage r1c3-r1c4-r1c5-r2c4 total 18 connected true
cage-8: cage r5c6-r5c7-r5c8 total 18 connected true
cage-9: cage r5c4-r6c4-r6c5-r6c6 total 18 connected true
cage-10: cage r3c2-r3c3-r4c2-r4c3 total 18 connected true
cage-11: cage r1c6-r1c7-r2c7-r2c8 total 18 connected true
kropki r8c4-r9c4 colour "black"
arrow-1: arrow r8c1-r7c1 bulb ["r9c1"]
arrow-2: arrow r9c2-r9c3 bulb ["r9c1"]
palindrome-1: palindrome r4c6-r3c7
palindrome-2: palindrome r7c6-r6c7
whispers-1: whispers r5c6-r5c7-r4c8-r3c8-r2c7-r2c6-r3c5-r4c5 gap 5
whispers-2: whispers r6c5-r5c6-r4c5 gap 5
whispers-3: whispers r6c8-r5c7-r5c6-r6c5-r7c5-r8c6 gap 5
whispers-4: whispers r7c8-r6c8 gap 5
whispers-5: whispers r8c7-r7c8 gap 5
whispers-6: whispers r8c8-r8c7-r8c6 gap 5
renban r3c2-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r8c2
sandwich-1: sandwich r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6 sum 2
sandwich-2: sandwich r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 sum 0
sandwich-3: sandwich r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8 sum 0
sandwich-4: sandwich r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 sum 5
sandwich-5: sandwich r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 sum 8
sandwich-6: sandwich r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 sum 8
```

Rules:
Normal Sudoku Rules Apply
Numbers at the top of the grid are the sum of the numbers between 1 and 9 in that column.
Cells along a purple renban line form a consecutive sequence of digits, in any order.
Cells along a green german whisper line have a difference of at least 5. 
Cells in a killer cage must sum to the total in the corner of the cage, with no repeats.
Cells seperated with a black dot must be in the ratio 1:2.
Cells along the shaft of an arrow sum to the circle at the base.
Cells along a grey line form a palindrome.
