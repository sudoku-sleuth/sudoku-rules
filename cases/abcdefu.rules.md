---
format: open-rules
title: abcdefu
setter: sujoyku
source: https://sudokupad.app/194ziy6fh2
case: https://sudoku-sleuth.com/cases/abcdefu
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
kropki-1: kropki r2c1-r3c1 colour "black"
kropki-2: kropki r3c1-r3c2 colour "black"
kropki-3: kropki r7c8-r7c9 colour "black"
kropki-4: kropki r7c9-r8c9 colour "black"
kropki-5: kropki r4c5-r4c6 colour "black"
kropki-6: kropki r5c3-r5c4 colour "black"
kropki-7: kropki r6c5-r7c5 colour "black"
kropki-8: kropki r6c1-r7c1 colour "black"
pair-1: pair r7c4-r7c5 sum 10
pair-2: pair r4c7-r4c8 sum 10
pair-3: pair r7c1-r8c1 sum 10
pair-4: pair r9c2-r9c3 sum 10
pair-5: pair r1c7-r1c8 sum 10
pair-6: pair r2c9-r3c9 sum 10
pair-7: pair r5c3-r6c3 sum 5
pair-8: pair r2c6-r3c6 sum 5
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
```

𝘼ll rows=1-9
𝘽oxes=1-9
𝘾olumns=1-9
𝘿iagonals=1-9
𝙀ach Kropki=times 2
𝙁ill V=5, X=10 (I hope)
𝙐 Njoy
