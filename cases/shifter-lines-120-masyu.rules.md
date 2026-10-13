---
format: open-rules
title: "Shifter Lines 120: Masyu"
setter: gUBBLOR
source: https://sudokupad.app/ztlacnhcnk
case: https://sudoku-sleuth.com/cases/shifter-lines-120-masyu
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r2c5-r2c6 colour "white"
kropki-2: kropki r5c7-r5c8 colour "white"
kropki-3: kropki r4c8-r4c9 colour "white"
kropki-4: kropki r1c2-r1c3 colour "white"
kropki-5: kropki r4c6-r5c6 colour "white"
kropki-6: kropki r2c1-r3c1 colour "white"
kropki-7: kropki r4c5-r5c5 colour "white"
pair-1: pair r1c1-r2c1 sum 10
pair-2: pair r4c2-r5c2 sum 10
pair-3: pair r7c2-r8c2 sum 10
pair-4: pair r8c5-r8c6 sum 10
pair-5: pair r2c6-r3c6 sum 10
pair-6: pair r1c5-r2c5 sum 10
pair-7: pair r4c9-r5c9 sum 10
pair-8: pair r1c8-r2c8 sum 10
pair-9: pair r6c8-r6c9 sum 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,3.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#6a6a6aff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#6a6a6aff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#6a6a6aff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Masyu: Draw a single non-intersecting loop through the centers of some cells that passes through every circle clue. The loop must turn on black circles and pass straight through the cells on either side. The loop must go straight through white circles and turn in at least one of the cells on either side.

Shifter lines: The entire masyu loop is a shifter line. Adjacent digits within the same box on a shifter line share both parity (even/odd) AND polarity (low/high). Whenever the line enters a new box either the parity OR the polarity shifts, never both. Shifter lines can never have 5 on it. Digits may repeat on the line.

Kropki dots: A white dot between cells indicates cells with consecutive values. Not all dots are shown.

XV: Adjacent cells connected with an X must sum to 10. Adjacent cells connected with a V must sum to 5. Not all X's or V's are shown.

Cells connected by a dot or an X or a V are either both off the loop, or both are on the loop and the loop goes through the constraint to the next cell. When the loop goes through a constraint this act as a box border for shifter line purposes.
