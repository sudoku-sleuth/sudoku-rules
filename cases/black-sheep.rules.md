---
format: open-rules
title: Black Sheep
setter: Blobz
source: https://sudokupad.app/blobz/black-sheep
case: https://sudoku-sleuth.com/cases/black-sheep
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c9=8 r9c1=1
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 connected true
cage-2: cage r1c3-r1c4-r1c5 connected true
cage-3: cage r1c6-r1c7-r1c8 connected true
cage-4: cage r2c2-r3c1-r3c2-r4c1 connected true
cage-5: cage r5c1-r6c1-r6c2-r7c1 connected true
cage-6: cage r8c1-r9c1-r9c2 connected true
cage-7: cage r9c3-r9c4-r9c5 connected true
cage-8: cage r9c6-r9c7-r9c8 connected true
cage-9: cage r7c9-r8c9-r9c9 connected true
cage-10: cage r7c2-r7c3-r8c2 connected true
cage-11: cage r7c4-r8c3-r8c4 connected true
cage-12: cage r8c5-r8c6-r8c7 connected true
cage-13: cage r6c8-r7c8-r8c8 connected true
cage-14: cage r4c9-r5c9-r6c9 connected true
cage-15: cage r1c9-r2c9-r3c9 connected true
cage-16: cage r3c8-r4c8-r5c8 connected true
cage-17: cage r6c7-r7c6-r7c7 connected true
cage-18: cage r5c5-r6c4-r6c5-r7c5 connected true
cage-19: cage r4c4-r5c3-r5c4-r6c3 connected true
cage-20: cage r3c3-r4c2-r4c3 connected true
cage-21: cage r2c3-r2c4-r3c4-r3c5 connected true
cage-22: cage r2c6-r3c6-r4c6 connected true
cage-23: cage r2c7-r2c8-r3c7 connected true
cage-24: cage r4c7-r5c6-r5c7-r6c6 connected true
layered-cage-1: layered-cage r1c1-r1c2-r2c1 upper [2,4,6,8]
layered-cage-2: layered-cage r1c3-r1c4-r1c5 upper [2,4,6,8]
layered-cage-3: layered-cage r1c6-r1c7-r1c8 upper [2,4,6,8]
layered-cage-4: layered-cage r2c2-r3c1-r3c2-r4c1 upper [2,4,6,8]
layered-cage-5: layered-cage r5c1-r6c1-r6c2-r7c1 upper [2,4,6,8]
layered-cage-6: layered-cage r8c1-r9c1-r9c2 upper [2,4,6,8]
layered-cage-7: layered-cage r9c3-r9c4-r9c5 upper [2,4,6,8]
layered-cage-8: layered-cage r9c6-r9c7-r9c8 upper [2,4,6,8]
layered-cage-9: layered-cage r7c9-r8c9-r9c9 upper [2,4,6,8]
layered-cage-10: layered-cage r7c2-r7c3-r8c2 upper [2,4,6,8]
layered-cage-11: layered-cage r7c4-r8c3-r8c4 upper [2,4,6,8]
layered-cage-12: layered-cage r8c5-r8c6-r8c7 upper [2,4,6,8]
layered-cage-13: layered-cage r6c8-r7c8-r8c8 upper [2,4,6,8]
layered-cage-14: layered-cage r4c9-r5c9-r6c9 upper [2,4,6,8]
layered-cage-15: layered-cage r1c9-r2c9-r3c9 upper [2,4,6,8]
layered-cage-16: layered-cage r3c8-r4c8-r5c8 upper [2,4,6,8]
layered-cage-17: layered-cage r6c7-r7c6-r7c7 upper [2,4,6,8]
layered-cage-18: layered-cage r5c5-r6c4-r6c5-r7c5 upper [2,4,6,8]
layered-cage-19: layered-cage r4c4-r5c3-r5c4-r6c3 upper [2,4,6,8]
layered-cage-20: layered-cage r3c3-r4c2-r4c3 upper [2,4,6,8]
layered-cage-21: layered-cage r2c3-r2c4-r3c4-r3c5 upper [2,4,6,8]
layered-cage-22: layered-cage r2c6-r3c6-r4c6 upper [2,4,6,8]
layered-cage-23: layered-cage r2c7-r2c8-r3c7 upper [2,4,6,8]
layered-cage-24: layered-cage r4c7-r5c6-r5c7-r6c6 upper [2,4,6,8]
kropki-1: kropki r2c1-r3c1 colour "white"
kropki-2: kropki r1c3-r2c3 colour "white"
kropki-3: kropki r1c4-r2c4 colour "white"
kropki-4: kropki r1c5-r1c6 colour "white"
kropki-5: kropki r1c8-r2c8 colour "white"
kropki-6: kropki r2c5-r2c6 colour "white"
kropki-7: kropki r3c4-r4c4 colour "white"
kropki-8: kropki r4c6-r4c7 colour "white"
kropki-9: kropki r4c8-r4c9 colour "white"
kropki-10: kropki r5c8-r6c8 colour "white"
kropki-11: kropki r5c5-r5c6 colour "white"
kropki-12: kropki r5c4-r6c4 colour "white"
kropki-13: kropki r6c3-r7c3 colour "white"
kropki-14: kropki r7c1-r8c1 colour "white"
kropki-15: kropki r8c3-r9c3 colour "white"
kropki-16: kropki r9c5-r9c6 colour "white"
kropki-17: kropki r9c8-r9c9 colour "white"
kropki-18: kropki r8c8-r8c9 colour "white"
kropki-19: kropki r7c8-r7c9 colour "white"
kropki-20: kropki r7c6-r8c6 colour "white"
kropki-21: kropki r4c1-r5c1 colour "black"
```

Normal sudoku rules apply.

Each cage is either full of "oil" (even digits), full of "water" (odd digits), or a mix of both. In all cases, each "row" within a cage is of just one type (oil or water). Oil floats on water, so even digits will always be in rows above odd digits in mixed cages.

Digits in cages do not repeat.

White dots separate consecutive digits. Black dots separate digits where one is double the other.
