---
format: open-rules
title: Oil, Water, Whisper
setter: Blobz
source: https://sudokupad.app/fchipmhae8
case: https://sudoku-sleuth.com/cases/oil-water-whisper
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c2-r3c1-r3c2 connected true
cage-2: cage r3c3-r4c1-r4c2-r4c3-r5c3 connected true
cage-3: cage r1c6-r1c7-r1c8-r2c7 connected true
cage-4: cage r3c7-r3c8-r4c8-r5c8 connected true
cage-5: cage r3c4-r4c4-r5c4-r6c4-r6c5 connected true
cage-6: cage r7c4-r7c5-r8c3-r8c4-r9c3 connected true
cage-7: cage r6c1-r7c1-r7c2 total 18 connected true
cage-8: cage r6c9-r7c8-r7c9 total 18 connected true
cage-9: cage r7c7-r8c7-r8c8-r9c8 connected true
cage-10: cage r1c5-r2c5-r3c5-r4c5 connected true
cage-11: cage r7c6-r8c5-r8c6-r9c4-r9c5 connected true
cage-12: cage r9c1-r9c2 connected true
cage-13: cage r6c2-r6c3 connected true
cage-14: cage r4c7-r5c7-r6c7 connected true
cage-15: cage r4c6-r5c5-r5c6-r6c6 connected true
layered-cage-1: layered-cage r1c1-r1c2-r2c2-r3c1-r3c2 upper [2,4,6,8]
layered-cage-2: layered-cage r3c3-r4c1-r4c2-r4c3-r5c3 upper [2,4,6,8]
layered-cage-3: layered-cage r1c6-r1c7-r1c8-r2c7 upper [2,4,6,8]
layered-cage-4: layered-cage r3c7-r3c8-r4c8-r5c8 upper [2,4,6,8]
layered-cage-5: layered-cage r3c4-r4c4-r5c4-r6c4-r6c5 upper [2,4,6,8]
layered-cage-6: layered-cage r7c4-r7c5-r8c3-r8c4-r9c3 upper [2,4,6,8]
layered-cage-7: layered-cage r6c1-r7c1-r7c2 upper [2,4,6,8]
layered-cage-8: layered-cage r6c9-r7c8-r7c9 upper [2,4,6,8]
layered-cage-9: layered-cage r7c7-r8c7-r8c8-r9c8 upper [2,4,6,8]
layered-cage-10: layered-cage r1c5-r2c5-r3c5-r4c5 upper [2,4,6,8]
layered-cage-11: layered-cage r7c6-r8c5-r8c6-r9c4-r9c5 upper [2,4,6,8]
layered-cage-12: layered-cage r9c1-r9c2 upper [2,4,6,8]
layered-cage-13: layered-cage r6c2-r6c3 upper [2,4,6,8]
layered-cage-14: layered-cage r4c7-r5c7-r6c7 upper [2,4,6,8]
layered-cage-15: layered-cage r4c6-r5c5-r5c6-r6c6 upper [2,4,6,8]
whispers-1: whispers r4c4-r3c5-r2c5-r2c4-r3c3-r4c2-r5c2-r6c2 gap 5
whispers-2: whispers r6c6-r7c5-r8c5-r8c6-r7c7-r6c8-r5c8-r4c8 gap 5
whispers-3: whispers r6c2-r7c3-r7c4-r6c4 gap 5
whispers-4: whispers r4c8-r3c7-r3c6-r4c6 gap 5
whispers-5: whispers r6c4-r5c5-r4c6 gap 5
whispers-6: whispers r4c4-r5c4 gap 5
whispers-7: whispers r5c6-r6c6 gap 5
```

Normal sudoku rules apply.

Adjacent digits along the green line must differ by at least 5.

Digits in cages do not repeat and must sum to the small clue, if given.

Each cage is either full of "oil" (even digits), full of "water" (odd digits), or a mix of both. In all cases, each "row" within a cage is of just one type (oil or water). Oil floats on water, so even digits will always be in rows above odd digits in mixed cages.
