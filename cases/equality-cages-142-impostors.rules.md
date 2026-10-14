---
format: open-rules
title: "Equality Cages 142: Impostors"
setter: gUBBLOR
source: https://sudokupad.app/1hmqd1uz14
case: https://sudoku-sleuth.com/cases/equality-cages-142-impostors
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading of the board gives a house more cells than available digits; we need to check its layout.
board:
  rows: 11
  cols: 11
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 9
exported: bb8f7115190a5268bb39f32379ea0ec5
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9-r1c10-r1c11
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9-r2c10-r2c11
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9-r3c10-r3c11
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9-r4c10-r4c11
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9-r5c10-r5c11
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9-r6c10-r6c11
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9-r7c10-r7c11
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9-r8c10-r8c11
unique-9: unique r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9-r9c10-r9c11
unique-10: unique r10c1-r10c2-r10c3-r10c4-r10c5-r10c6-r10c7-r10c8-r10c9-r10c10-r10c11
unique-11: unique r11c1-r11c2-r11c3-r11c4-r11c5-r11c6-r11c7-r11c8-r11c9-r11c10-r11c11
unique-12: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1-r10c1-r11c1
unique-13: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2-r10c2-r11c2
unique-14: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3-r10c3-r11c3
unique-15: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4-r10c4-r11c4
unique-16: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5-r10c5-r11c5
unique-17: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6-r10c6-r11c6
unique-18: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7-r10c7-r11c7
unique-19: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8-r10c8-r11c8
unique-20: unique r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9-r10c9-r11c9
unique-21: unique r1c10-r2c10-r3c10-r4c10-r5c10-r6c10-r7c10-r8c10-r9c10-r10c10-r11c10
unique-22: unique r1c11-r2c11-r3c11-r4c11-r5c11-r6c11-r7c11-r8c11-r9c11-r10c11-r11c11
equality-cage-1: equality-cage r2c2-r2c3
equality-cage-2: equality-cage r3c4-r3c5
equality-cage-3: equality-cage r4c3-r4c4
equality-cage-4: equality-cage r3c9-r4c9
equality-cage-5: equality-cage r6c10-r7c10
equality-cage-6: equality-cage r5c6-r6c6
equality-cage-7: equality-cage r5c3-r6c3
equality-cage-8: equality-cage r9c5-r10c5
equality-cage-9: equality-cage r9c6-r10c6
equality-cage-10: equality-cage r8c8-r8c9-r9c8-r9c9
equality-cage-11: equality-cage r11c9-r11c10
equality-cage-12: equality-cage r11c4-r11c5
kropki-1: kropki r9c8-r10c8 black
kropki-2: kropki r8c8-r9c8 black
kropki-3: kropki r7c8-r8c8 black
kropki-4: kropki r6c8-r7c8 black
kropki-5: kropki r3c9-r4c9 black
kropki-6: kropki r4c3-r4c4 black
kropki-7: kropki r8c4-r8c5 black
kropki-8: kropki r8c5-r9c5 black
kropki-9: kropki r9c5-r10c5 black
kropki-10: kropki r9c6-r9c7 black
pair-1: pair r2c4-r3c4 sum 10
pair-2: pair r7c2-r7c3 sum 10
pair-3: pair r6c4-r7c4 sum 10
pair-4: pair r7c4-r7c5 sum 10
pair-5: pair r9c2-r9c3 sum 10
pair-6: pair r5c11-r6c11 sum 10
pair-7: pair r2c9-r2c10 sum 5
pair-8: pair r2c10-r3c10 sum 5
pair-9: pair r3c6-r3c7 sum 5
pair-10: pair r3c5-r3c6 sum 5
pair-11: pair r8c8-r8c9 sum 5
pair-12: pair r4c5-r5c5 sum 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[10.5,1.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":45}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[10.5,2.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":45}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[10.5,3.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":45}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[10.5,4.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":45}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[10.5,5.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":45}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[10.5,6.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":45}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[10.5,7.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":45}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[10.5,8.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":45}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[10.5,9.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":45}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.5,10.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":45}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,10.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":45}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,10.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":45}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,10.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":45}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,10.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":45}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,10.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":45}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,10.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":45}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,10.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":45}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,10.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":45}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[10.75,1.5],"width":0.72,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[10.75,2.5],"width":0.72,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[10.75,3.5],"width":0.72,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[10.75,4.5],"width":0.72,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[10.75,5.5],"width":0.72,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[10.75,6.5],"width":0.72,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[10.75,7.5],"width":0.72,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[10.75,8.5],"width":0.72,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[10.75,9.5],"width":0.72,"height":0.52,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.5,10.75],"width":0.52,"height":0.72,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,10.75],"width":0.52,"height":0.72,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,10.75],"width":0.52,"height":0.72,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,10.75],"width":0.52,"height":0.72,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,10.75],"width":0.52,"height":0.72,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,10.75],"width":0.52,"height":0.72,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,10.75],"width":0.52,"height":0.72,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,10.75],"width":0.52,"height":0.72,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,10.75],"width":0.52,"height":0.72,"rounded":false,"fill":"#ff9f9fff","thickness":0,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.5,0.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":45}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":45}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,0.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":45}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,0.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":45}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,0.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":45}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,0.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":45}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":45}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":45}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":45}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":45}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":45}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":45}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":45}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":45}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,6.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":45}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":45}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":45}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,9.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":45}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.25,1.5],"width":0.72,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":0}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.25,2.5],"width":0.72,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":0}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.25,3.5],"width":0.72,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":0}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.25,4.5],"width":0.72,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":0}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.25,5.5],"width":0.72,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":0}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.25,6.5],"width":0.72,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":0}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.25,7.5],"width":0.72,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":0}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.25,8.5],"width":0.72,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":0}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.25,9.5],"width":0.72,"height":0.52,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":0}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.25],"width":0.52,"height":0.72,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":0}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.25],"width":0.52,"height":0.72,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":0}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.25],"width":0.52,"height":0.72,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":0}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,0.25],"width":0.52,"height":0.72,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":0}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,0.25],"width":0.52,"height":0.72,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":0}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,0.25],"width":0.52,"height":0.72,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":0}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,0.25],"width":0.52,"height":0.72,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":0}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.25],"width":0.52,"height":0.72,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":0}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.5,0.25],"width":0.52,"height":0.72,"rounded":false,"fill":"#78bdffff","thickness":0,"angle":0}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":0,"height":0.457,"rounded":true,"thickness":0,"angle":315,"text":"Repeated","textColor":"#78bdffff","fontSize":17.2,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"shape","layer":"under","center":[10.5,10.5],"width":0,"height":0.457,"rounded":true,"thickness":0,"angle":315,"text":"Removed","textColor":"#ff9f9fff","fontSize":17.2,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"line","points":[[7,8],[7,10],[10,10],[10,7],[7,7],[7,8]],"color":"#000000","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"line","points":[[7,10],[4,10],[4,7],[7,7],[7,4],[4,4],[4,7]],"color":"#000000","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"line","points":[[10,7],[10,1],[7,1],[7,4],[10,4]],"color":"#000000","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"line","points":[[4,10],[1,10],[1,7],[4,7]],"color":"#000000","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"line","points":[[1,7],[1,4],[4,4],[4,1],[7,1]],"color":"#000000","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"line","points":[[1,4],[1,1],[4,1]],"color":"#000000","thickness":2.56,"rounded":true,"layer":"over"}}
```

The grid contains the digits 1-9, but normal sudoku rules DO NOT apply. There are 9 impostor digits to be found, one in each row, column, and box.

Impostors: In each row, column, and box one digit has been removed and replaced by an impostor digit, which is a repeat of one of the other digits in that row or column. I.e. 142496785 would be a valid example - 3 has been removed, and one of the repeated 4s is an impostor (the solver must deduce which one).

Each digit 1-9 appears exactly once in an impostor cell. The blue arrows is used to indicate the impostor digit in that row or column. Each digit 1-9 is removed from exactly one row, exactly one column and exactly one box. The red arrows is used to keep track of these. The blue and red arrows in the same row/column need to point to the same cell (the impostor).

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are shown.

XV: Adjacent cells connected with an X must sum to 10. Adjacent cells connected with a V must sum to 5. Not all X's or V's are shown.
