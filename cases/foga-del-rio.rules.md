---
fog:
  initiallyLit:
    - 30
    - 31
    - 32
    - 39
    - 40
    - 41
    - 48
    - 49
    - 50
format: open-rules
title: Foga Del Rio
setter: Meggen033
source: https://sudokupad.app/3m01e37nh1
case: https://sudoku-sleuth.com/cases/foga-del-rio
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r5c7-r6c7 colour "white"
kropki-2: kropki r4c7-r5c7 colour "white"
kropki-3: kropki r5c3-r6c3 colour "white"
kropki-4: kropki r4c3-r5c3 colour "white"
kropki-5: kropki r3c6-r3c7 colour "white"
kropki-6: kropki r2c5-r3c5 colour "white"
kropki-7: kropki r1c8-r1c9 colour "white"
kropki-8: kropki r6c4-r6c5 colour "black"
arrow-1: arrow r5c5-r6c6 bulb ["r4c4"]
arrow-2: arrow r5c5-r6c4 bulb ["r4c6"]
arrow-3: arrow r3c3-r3c4 bulb ["r4c3"]
arrow-4: arrow r3c7-r3c6 bulb ["r4c7"]
arrow-5: arrow r5c2-r4c2 bulb ["r6c2"]
arrow-6: arrow r5c8-r4c8 bulb ["r6c8"]
arrow-7: arrow r8c4-r8c5 bulb ["r8c3"]
arrow-8: arrow r8c9-r7c8 bulb ["r9c8"]
arrow-9: arrow r9c2-r9c3 bulb ["r8c2"]
whispers-1: whispers r6c3-r7c3-r7c4-r7c5-r7c6-r7c7-r6c7 gap 5
whispers-2: whispers r2c7-r2c8-r3c8 gap 5
renban-1: renban r5c4-r6c5-r5c6-r4c5
renban-2: renban r2c4-r1c4-r1c5-r1c6-r2c6
renban-3: renban r2c3-r2c2-r3c2
renban-4: renban r9c4-r9c5-r9c6
```

```drawing
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,5.5],"width":0.65,"height":0.65,"rounded":true,"fill":"#A8A8A8","stroke":"#A8A8A8","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,4.5],"width":0.65,"height":0.65,"rounded":true,"fill":"#ABABAB","stroke":"#ABABAB","thickness":1,"textColor":"#000000","opacity":0.5}}
```

•	Normal Sudoku rules apply. 
•	Digits along a magenta renban form a set of consecutive non-repeating digits in any order.
•	The digits along each arrow must sum to the digit in the circled cell.  Arrows cross in a straight line.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
•	Cells with a filled circle must be odd.
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
