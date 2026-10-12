---
format: open-rules
title: Caught between the lines
setter: sujoyku
source: https://tinyurl.com/mr2um2hu
case: https://sudoku-sleuth.com/cases/caught-between-the-lines
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c1-r3c1-r4c1 total 8 connected true
cage-2: cage r9c2-r9c3-r9c4 total 12 connected true
cage-3: cage r6c9-r7c9-r8c9 total 16 connected true
cage-4: cage r1c6-r1c7-r1c8 total 20 connected true
cage-5: cage r2c2-r2c3 total 10 connected true
cage-6: cage r7c2-r8c2 total 12 connected true
cage-7: cage r2c8-r3c8 total 13 connected true
cage-8: cage r8c7-r8c8 total 13 connected true
cage-9: cage r6c6-r6c7 total 8 connected true
cage-10: cage r4c3-r4c4 total 14 connected true
whispers-1: whispers r2c4-r2c5-r2c6-r2c7 gap 5
whispers-2: whispers r8c3-r8c4-r8c5-r8c6 gap 5
whispers-3: whispers r7c4-r6c4-r6c5 gap 5
whispers-4: whispers r5c6-r4c6-r4c7 gap 5
nabner-1: nabner r1c2-r1c3-r1c4-r1c5 distinct true
nabner-2: nabner r4c8-r5c8-r6c8-r7c8 distinct true
renban-1: renban r9c5-r9c6-r9c7-r9c8
renban-2: renban r7c5-r7c6-r7c7
renban-3: renban r3c2-r4c2-r5c2-r6c2
nabner-3: nabner r5c1-r6c1-r7c1-r8c1 distinct true
nabner-4: nabner r2c9-r3c9-r4c9-r5c9 distinct true
nabner-5: nabner r3c3-r3c4-r3c5 distinct true
```

Normal sudoku rules apply. Digits in a cage do not repeat and sum to the clue in the top left. Yellow lines are Nabner lines and do not contain repeated or consecutive digits. If for example 4 is on a Nabner line it does not contain either 3 or 5. Purple lines contain a set of consecutive non-repeating digits in any order. Adjacent digits on a green line have differ by at least 5. Each set of three consecutive digits on an orange line has to contain a low (1, 2, 3), medium (4, 5, 6) and a high digit (7, 8, 9).
