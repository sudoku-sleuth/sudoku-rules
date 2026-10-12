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
title: Foggiano
setter: Meggen033
source: https://sudokupad.app/wiv434dumn
case: https://sudoku-sleuth.com/cases/foggiano
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r6c6-r6c7 colour "white"
kropki-2: kropki r7c4-r7c5 colour "white"
kropki-3: kropki r9c5-r9c6 colour "white"
kropki-4: kropki r4c6-r5c6 colour "black"
kropki-5: kropki r5c4-r6c4 colour "black"
kropki-6: kropki r4c3-r4c4 colour "black"
kropki-7: kropki r7c1-r7c2 colour "black"
kropki-8: kropki r8c5-r8c6 colour "black"
kropki-9: kropki r2c7-r2c8 colour "black"
whispers-1: whispers r6c4-r5c5-r4c6 gap 5
whispers-2: whispers r3c6-r3c7-r4c7 gap 5
whispers-3: whispers r7c4-r7c3-r6c3 gap 5
whispers-4: whispers r7c2-r8c2-r8c3 gap 5
whispers-5: whispers r7c9-r8c8 gap 5
whispers-6: whispers r2c2-r1c3 gap 5
renban-1: renban r5c4-r4c5
renban-2: renban r6c5-r5c6
renban-3: renban r5c3-r4c3-r3c3-r3c4-r3c5
renban-4: renban r7c5-r7c6-r7c7-r6c7-r5c7
renban-5: renban r2c6-r2c7-r2c8-r3c8-r4c8
```

```drawing
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,6.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#BFBFBF","stroke":"#BFBFBF","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,5.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#BFBFBF","stroke":"#BFBFBF","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#BFBFBF","stroke":"#BFBFBF","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#BFBFBF","stroke":"#BFBFBF","thickness":1,"textColor":"#000000","opacity":0.5}}
```

•	Normal Sudoku rules apply. 
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	Digits along a magenta renban form a set of consecutive non-repeating digits in any order.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
•	Cells with a filled circle must be odd.
