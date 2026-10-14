---
format: open-rules
title: Sushi
setter: Blobz
source: https://sudokupad.app/blobz/sushi
case: https://sudoku-sleuth.com/cases/sushi
library: https://rules.sudoku-sleuth.com/
status: read
exported: f4fed8551022276be5e9cb019701e589
---

```rules
sudoku 9x9
kropki-1: kropki r1c2-r2c2 black
kropki-2: kropki r2c4-r3c4 black
kropki-3: kropki r1c8-r2c8 black
kropki-4: kropki r2c8-r3c8 black
kropki-5: kropki r7c1-r7c2 black
kropki-6: kropki r7c4-r8c4 black
kropki-7: kropki r3c6-r3c7 black
kropki-8: kropki r3c8-r4c8 black
kropki-9: kropki r5c6-r5c7 white
kropki-10: kropki r3c2-r4c2 white
kropki-11: kropki r6c5-r7c5 white
kropki-12: kropki r7c2-r7c3 white
kropki-13: kropki r7c9-r8c9 white
kropki-14: kropki r2c2-r2c3 white
kropki-15: kropki r9c6-r9c7 white
kropki-16: kropki r5c1-r5c2 white
kropki-17: kropki r8c5-r9c5 white
kropki-18: kropki r7c6-r7c7 white
kropki-19: kropki r4c5-r5c5 white
renban-1: renban r7c1-r8c1-r9c1-r9c2-r9c3-r8c3-r7c3
renban-2: renban r1c7-r1c8-r1c9-r2c8-r3c7-r3c8-r3c9
renban-3: renban r1c2-r1c1-r2c1-r3c1-r3c2-r3c3-r2c3
renban-4: renban r5c1-r6c1-r6c2-r6c3-r5c3-r4c3-r4c2
renban-5: renban r3c4-r3c5-r3c6-r2c6-r2c5-r1c5-r1c4
renban-6: renban r4c4-r4c5-r4c6-r5c6-r5c5-r6c5-r6c4
renban-7: renban r9c4-r9c5-r9c6-r8c6-r7c6-r7c5-r8c5
renban-8: renban r4c7-r5c7-r6c7-r5c8-r4c9-r5c9-r6c9
renban-9: renban r7c9-r7c8-r7c7-r8c7-r8c8-r9c8-r9c9
```

Normal sudoku rules apply. 

Pink lines contain a consecutive sequence in any order. 

White dots separate consecutive digits. 

Black dots separate digits where one is double the other.
