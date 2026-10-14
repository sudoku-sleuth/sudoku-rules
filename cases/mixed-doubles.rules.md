---
format: open-rules
title: Mixed Doubles
setter: Marty Sears
source: https://tinyurl.com/3wx7pdch
case: https://sudoku-sleuth.com/cases/mixed-doubles
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: c07bc9814b3492c2dd9dc4fc41605084
---

```rules
sudoku 9x9
kropki-1: kropki r7c2-r8c2 black
kropki-2: kropki r7c3-r8c3 black
kropki-3: kropki r2c2-r2c3 black
kropki-4: kropki r2c7-r2c8 black
kropki-5: kropki r3c2-r3c3 black
kropki-6: kropki r3c7-r3c8 black
kropki-7: kropki r7c7-r7c8 black
kropki-8: kropki r8c7-r8c8 black
whispers-1: whispers r1c1-r2c2 gap 5
whispers-2: whispers r1c4-r1c5-r1c6 gap 5
whispers-3: whispers r3c6-r3c5-r4c5 gap 5
entropic-1: entropic r4c6-r4c7-r4c8
whispers-4: whispers r5c3-r5c4 gap 5
whispers-5: whispers r5c6-r5c7 gap 5
entropic-2: entropic r6c2-r6c3-r6c4
whispers-6: whispers r6c5-r7c5-r7c4 gap 5
whispers-7: whispers r8c8-r9c9 gap 5
entropic-3: entropic r9c4-r9c5-r9c6
renban-1: renban r1c8-r2c9
renban-2: renban r2c6-r2c5-r2c4-r3c4-r4c3
renban-3: renban r4c1-r5c1-r6c1
renban-4: renban r4c9-r5c9-r6c9
renban-5: renban r6c8-r6c7-r6c6-r7c6-r8c5-r8c4
renban-6: renban r8c1-r9c2
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":0.494,"height":0.494,"rounded":false,"fill":"#FF6A6A","thickness":0,"opacity":0.5,"angle":45}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":0.494,"height":0.494,"rounded":false,"fill":"#FF6A6A","thickness":0,"opacity":0.5,"angle":45}}
```

Normal sudoku rules apply.

Digits separated by a black dot are in a 1:2 ratio (one is double the other.) Not all possible black dots are given.

Adjacent digits along a green line must have a difference of at least 5.

Digits on a purple line must form a non-repeating consecutive sequence (but can be arranged in any order).

Yellow lines are entropic; they must contain one low digit (1, 2 or 3), one medium digit (4, 5 or 6) and one high digit (7, 8 or 9), in any order.

The digit in the red diamond indicates how many lines contain that digit.
