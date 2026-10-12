---
format: open-rules
title: It's Prime Time!
setter: Will Power
source: https://sudokupad.app/3sdr6dnlb6
case: https://sudoku-sleuth.com/cases/it-s-prime-time
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 connected true
cage-2: cage r1c5-r1c6 connected true
cage-3: cage r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 connected true
cage-4: cage r3c8-r4c8-r5c8-r6c8 connected true
cage-5: cage r4c9-r5c9-r6c9 connected true
cage-6: cage r4c1-r4c2-r4c3-r4c4-r4c5-r4c6 connected true
cage-7: cage r5c2-r5c3-r5c4-r5c5-r5c6-r5c7 connected true
cage-8: cage r6c3-r6c4-r6c5 connected true
cage-9: cage r7c3-r7c4-r7c5-r7c6-r7c7-r7c8 connected true
cage-10: cage r9c1-r9c2-r9c3-r9c4-r9c5-r9c6 connected true
cage-11: cage r8c4-r8c5 connected true
kropki-1: kropki r5c4-r5c5 colour "white"
kropki-2: kropki r2c2-r3c2 colour "white"
kropki-3: kropki r5c1-r5c2 colour "white"
kropki-4: kropki r5c2-r5c3 colour "white"
kropki-5: kropki r3c8-r3c9 colour "white"
kropki-6: kropki r5c7-r6c7 colour "white"
kropki-7: kropki r2c1-r2c2 colour "white"
arrow-1: arrow r1c4-r1c5-r1c6 bulb ["r1c3"]
arrow-2: arrow r6c1-r6c2-r6c3-r5c3-r5c2-r5c1-r4c1-r4c2-r4c3-r3c3-r2c3-r2c2-r3c2-r3c1-r2c1-r1c1-r1c2 bulb ["r7c1","r7c2"]
arrow-3: arrow r7c4-r8c4-r8c5-r7c5-r7c6-r8c6-r9c6-r9c5-r9c4-r9c3-r9c2-r9c1-r8c1-r8c2-r8c3-r7c3 bulb ["r5c4","r6c4"]
arrow-4: arrow r1c9-r1c8-r1c7-r2c7-r2c8-r3c8-r3c7-r3c6-r3c5-r3c4-r2c4-r2c5-r2c6 bulb ["r2c9","r3c9"]
arrow-5: arrow r9c9-r8c9-r8c8-r8c7-r7c7-r7c8-r7c9-r6c9-r5c9-r4c9-r4c8-r5c8-r6c8-r6c7-r5c7-r4c7-r4c6-r5c6-r6c6-r6c5-r5c5-r4c5 bulb ["r9c7","r9c8"]
```

Normal Sudoku rules apply. ARROWS- Numbers on arrows sum to the number in the arrow's pill or circle. Pills are read from left to right or top to bottom. KILLER CAGES- Numbers in cages each sum to a prime number. ALL pills, circles and cage sums are DIFFERENT prime numbers. Possible primes are, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 71, 73, 79, 83, 89, 97. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are given.
