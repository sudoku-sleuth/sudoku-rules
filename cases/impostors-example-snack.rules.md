---
format: open-rules
title: Impostors Example/Snack
setter: gUBBLOR
source: https://sudokupad.app/yt1jnyn8dy
case: https://sudoku-sleuth.com/cases/impostors-example-snack
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
board:
  rows: 6
  cols: 6
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
exported: aa493a5c385b9cc900924452b84f566d
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6
unique-7: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1
unique-8: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2
unique-9: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3
unique-10: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4
unique-11: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5
unique-12: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6
kropki-1: kropki r3c2-r3c3 black
kropki-2: kropki r2c2-r3c2 black
kropki-3: kropki r2c2-r2c3 black
kropki-4: kropki r2c3-r3c3 black
kropki-5: kropki r2c4-r2c5 black
kropki-6: kropki r4c3-r5c3 black
kropki-7: kropki r3c6-r4c6 black
kropki-8: kropki r4c5-r4c6 black
kropki-9: kropki r3c1-r4c1 white
kropki-10: kropki r1c4-r1c5 white
kropki-11: kropki r4c4-r5c4 white
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":45}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":45}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":45}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,0.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":45}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":45}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":45}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":45}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":45}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.25],"width":0.52,"height":0.72,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.25],"width":0.52,"height":0.72,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.25],"width":0.52,"height":0.72,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,0.25],"width":0.52,"height":0.72,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.25,1.5],"width":0.72,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.25,2.5],"width":0.72,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.25,3.5],"width":0.72,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.25,4.5],"width":0.72,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":45}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":45}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":45}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":45}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":45}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":45}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":45}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,5.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":45}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.75,1.5],"width":0.72,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.75,2.5],"width":0.72,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.75,3.5],"width":0.72,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.75,4.5],"width":0.72,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.75],"width":0.52,"height":0.72,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.75],"width":0.52,"height":0.72,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.75],"width":0.52,"height":0.72,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,5.75],"width":0.52,"height":0.72,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":0,"height":0.457,"rounded":true,"thickness":0,"angle":315,"text":"Repeated","textColor":"#78bdffff","fontSize":17.2,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":0,"height":0.457,"rounded":true,"thickness":0,"angle":315,"text":"Removed","textColor":"#ff9f9fff","fontSize":17.2,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[3,3],[5,3],[5,5],[3,5],[3,3]],"color":"#000000","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[5,3],[5,1],[1,1],[1,3],[3,3],[3,1]],"color":"#000000","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[3,5],[1,5],[1,3]],"color":"#000000","thickness":2.56,"rounded":true,"layer":"over"}}
```

The grid contains the digits 1-4, but normal 4x4 sudoku rules DO NOT apply. There are 4 impostor digits to be found, one in each row, column, and box.

Impostors: In each row, column, and box one digit has been removed and replaced by an impostor digit, which is a repeat of one of the other digits in that row or column. I.e. 1424 would be a valid example - 3 has been removed, and one of the repeated 4s is an impostor (the solver must deduce which one).

Each digit 1-4 appears exactly once in an impostor cell. The blue arrows is used to indicate the impostor digit in that row or column. Each digit 1-4 is removed from exactly one row, exactly one column and exactly one box. The red arrows is used to keep track of these. The blue and red arrows in the same row/column need to point to the same cell (the impostor).

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.
