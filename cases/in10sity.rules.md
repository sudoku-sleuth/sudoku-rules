---
format: open-rules
title: In10sity
setter: sujoyku
source: https://tinyurl.com/mrymz94a
case: https://sudoku-sleuth.com/cases/in10sity
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r9c5-r9c6-r9c7-r9c8 total 10 connected true
cage-2: cage r1c2-r1c3-r1c4-r1c5 total 30 connected true
kropki-1: kropki r1c7-r2c7 colour "black"
kropki-2: kropki r5c4-r6c4 colour "black"
little-killer-1: little-killer r2c1-r1c2 sum 10
little-killer-2: little-killer r3c1-r2c2-r1c3 sum 20
little-killer-3: little-killer r4c1-r3c2-r2c3-r1c4 sum 30
little-killer-4: little-killer r6c1-r5c2-r4c3-r3c4-r2c5-r1c6 sum 40
little-killer-5: little-killer r8c9-r9c8 sum 10
little-killer-6: little-killer r7c9-r8c8-r9c7 sum 10
little-killer-7: little-killer r6c9-r7c8-r8c7-r9c6 sum 10
little-killer-8: little-killer r4c9-r5c8-r6c7-r7c6-r8c5-r9c4 sum 20
little-killer-9: little-killer r9c9-r8c8-r7c7-r6c6-r5c5-r4c4-r3c3-r2c2-r1c1 sum 50
```

Normal sudoku rules apply. Digits in a killer cage sum to the clue in the top left. Digits on a marked diagonal sum to the little killer clue outside the grid. If there is no contradiction with other rules, digits on a diagonal may repeat. Digits joined by a black dot have a 1:2 ratio. (Not all black dots are given.)
