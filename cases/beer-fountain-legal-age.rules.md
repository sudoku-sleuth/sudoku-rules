---
format: open-rules
title: Beer Fountain Legal Age?
setter: Will Power
source: https://sudokupad.app/td7g8br209
case: https://sudoku-sleuth.com/cases/beer-fountain-legal-age
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c6-r4c6 colour "white"
kropki-2: kropki r4c6-r5c6 colour "white"
kropki-3: kropki r5c6-r6c6 colour "white"
kropki-4: kropki r3c5-r4c5 colour "white"
kropki-5: kropki r4c5-r5c5 colour "white"
kropki-6: kropki r5c5-r6c5 colour "white"
kropki-7: kropki r6c8-r7c8 colour "white"
kropki-8: kropki r5c8-r6c8 colour "white"
kropki-9: kropki r3c7-r4c7 colour "white"
kropki-10: kropki r4c7-r5c7 colour "white"
kropki-11: kropki r2c8-r3c8 colour "white"
kropki-12: kropki r3c8-r4c8 colour "white"
kropki-13: kropki r2c4-r3c4 colour "white"
kropki-14: kropki r8c8-r9c8 colour "black"
kropki-15: kropki r6c4-r7c4 colour "black"
kropki-16: kropki r8c7-r8c8 colour "black"
kropki-17: kropki r7c7-r8c7 colour "black"
kropki-18: kropki r4c1-r5c1 colour "black"
kropki-19: kropki r5c1-r6c1 colour "black"
kropki-20: kropki r8c9-r9c9 colour "black"
kropki-21: kropki r9c2-r9c3 colour "black"
arrow-1: arrow r6c3-r5c3-r4c3-r3c3 bulb ["r7c3","r8c3"]
arrow-2: arrow r6c5-r5c5-r4c5-r3c5-r2c5-r1c5 bulb ["r7c5","r8c5"]
arrow-3: arrow r7c8-r6c8-r5c8-r4c8 bulb ["r8c8","r9c8"]
arrow-4: arrow r6c6-r5c6-r4c6-r3c6 bulb ["r7c6","r8c6"]
arrow-5: arrow r5c4-r4c4-r3c4-r2c4-r1c4 bulb ["r6c4","r7c4"]
arrow-6: arrow r5c7-r4c7-r3c7 bulb ["r6c7","r7c7"]
arrow-7: arrow r7c2-r6c2-r5c2 bulb ["r8c2","r9c2"]
```

Let me know if you've heard this one: Seven customers walk into a bar.......

Normal Sudoku rules apply. 

ARROWS- Numbers on arrows sum to the number in the arrow's pill.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
