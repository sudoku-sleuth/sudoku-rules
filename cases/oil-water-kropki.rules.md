---
format: open-rules
title: Oil, Water, Kropki
setter: Blobz
source: https://sudokupad.app/ijn1wz672n
case: https://sudoku-sleuth.com/cases/oil-water-kropki
library: https://rules.sudoku-sleuth.com/
status: read
exported: 85ca2adacdb6fc50d9e397d0be387cbf
---

```rules
sudoku 9x9
cage-1: cage r1c8-r1c9-r2c9 connected true
cage-2: cage r1c4-r1c5-r1c6-r2c5 connected true
cage-3: cage r3c3-r4c3-r4c4-r5c4 connected true
cage-4: cage r3c7-r4c6-r4c7-r5c6 connected true
cage-5: cage r6c5-r7c5 connected true
cage-6: cage r7c2-r7c3-r8c3-r8c4 connected true
cage-7: cage r7c7-r7c8-r8c6-r8c7 total 20 connected true
cage-8: cage r4c1-r5c1-r6c1 connected true
cage-9: cage r4c9-r5c9-r6c9 connected true
cage-10: cage r2c8-r3c8-r4c8 total 12 connected true
cage-11: cage r1c1-r1c2-r2c1 total 13 connected true
cage-12: cage r9c5-r9c6 total 10 connected true
layered-cage-1: layered-cage r1c8-r1c9-r2c9 upper [2,4,6,8]
layered-cage-2: layered-cage r1c4-r1c5-r1c6-r2c5 upper [2,4,6,8]
layered-cage-3: layered-cage r3c3-r4c3-r4c4-r5c4 upper [2,4,6,8]
layered-cage-4: layered-cage r3c7-r4c6-r4c7-r5c6 upper [2,4,6,8]
layered-cage-5: layered-cage r6c5-r7c5 upper [2,4,6,8]
layered-cage-6: layered-cage r7c2-r7c3-r8c3-r8c4 upper [2,4,6,8]
layered-cage-7: layered-cage r7c7-r7c8-r8c6-r8c7 upper [2,4,6,8]
layered-cage-8: layered-cage r4c1-r5c1-r6c1 upper [2,4,6,8]
layered-cage-9: layered-cage r4c9-r5c9-r6c9 upper [2,4,6,8]
layered-cage-10: layered-cage r2c8-r3c8-r4c8 upper [2,4,6,8]
layered-cage-11: layered-cage r1c1-r1c2-r2c1 upper [2,4,6,8]
layered-cage-12: layered-cage r9c5-r9c6 upper [2,4,6,8]
kropki-1: kropki r5c1-r5c2 black
kropki-2: kropki r4c3-r4c4 black
kropki-3: kropki r8c3-r8c4 black
kropki-4: kropki r7c7-r7c8 black
kropki-5: kropki r7c9-r8c9 black
kropki-6: kropki r6c5-r7c5 black
kropki-7: kropki r6c6-r6c7 black
kropki-8: kropki r3c7-r4c7 black
kropki-9: kropki r1c5-r2c5 black
kropki-10: kropki r1c3-r1c4 black
```

Normal sudoku rules apply.

Black dots separate two digits where one is double the other. Not all such dots are shown.

Digits in cages do not repeat and must sum to the small clue, if given.

Each cage is either full of "oil" (even digits), full of "water" (odd digits), or a mix of both. In all cases, each "row" within a cage is of just one type (oil or water). Oil floats on water, so even digits will always be in rows above odd digits in mixed cages.
