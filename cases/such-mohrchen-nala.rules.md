---
fog:
  initiallyLit:
    - r2c7
    - r2c9
format: open-rules
title: Such Möhrchen, Nala!
setter: Sandra & Nala
source: https://sudokupad.app/sandra-and-nala/such-moehrchen-nala
case: https://sudoku-sleuth.com/cases/such-mohrchen-nala
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: fe2df927b2f1e3d86fffbd1e4c5d509d
---

```rules
sudoku 9x9
arrow-1: arrow r6c6-r5c7 bulb ["r5c5"]
arrow-2: arrow r8c3-r7c2 bulb ["r9c3"]
arrow-3: arrow r1c8-r1c7-r2c6-r2c7-r3c6 bulb ["r2c9"]
arrow-4: arrow r4c2-r4c3-r3c4 bulb ["r5c1"]
arrow-5: arrow r8c6-r7c5-r7c4 bulb ["r8c7"]
arrow-6: arrow r7c8-r7c9 bulb ["r8c7"]
arrow-7: arrow r1c2-r1c3 bulb ["r2c1"]
arrow-8: arrow r3c2-r3c3 bulb ["r2c1"]
numbered-room-1: numbered-room r2c9-r2c8-r2c7-r2c6-r2c5-r2c4-r2c3-r2c2-r2c1 digit 5
numbered-room-2: numbered-room r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 digit 7
numbered-room-3: numbered-room r6c9-r6c8-r6c7-r6c6-r6c5-r6c4-r6c3-r6c2-r6c1 digit 4
numbered-room-4: numbered-room r7c9-r7c8-r7c7-r7c6-r7c5-r7c4-r7c3-r7c2-r7c1 digit 6
numbered-room-5: numbered-room r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9 digit 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[1.55,4.45]],"color":"#ffb540ff","thickness":6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.7,4.5],[1.75,4.45],[1.75,4.35],[1.65,4.35],[1.7,4.4],[1.65,4.45],[1.65,4.55],[1.6,4.6],[1.5,4.6],[1.45,4.55],[1.55,4.55],[1.65,4.45]],"color":"#ffb540ff","thickness":6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1.65,4.35],[1.6,4.4],[1.5,4.4],[1.45,4.45],[1.45,4.55],[1.4,4.5],[1.45,4.45]],"color":"#ffb540ff","thickness":6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.55,5.55],[3.5,5.5],[3.6,5.6],[3.5,5.6],[3.65,5.65],[3.7,5.6],[3.65,5.55],[3.6,5.4],[3.5,5.4],[3.45,5.45],[3.55,5.45],[3.6,5.5],[3.6,5.6]],"color":"#ffb540ff","thickness":6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[3.45,5.45],[3.45,5.55],[3.5,5.6]],"color":"#ffb540ff","thickness":6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[5.55,6.55],[5.5,6.5],[5.6,6.5],[5.7,6.4],[5.7,6.5],[5.55,6.65],[5.5,6.6],[5.45,6.65],[5.55,6.65]],"color":"#ffb540ff","thickness":6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[5.6,6.5],[5.45,6.55],[5.4,6.5],[5.4,6.6],[5.45,6.65]],"color":"#ffb540ff","thickness":6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[5.65,6.45],[5.45,6.45],[5.4,6.5]],"color":"#ffb540ff","thickness":6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[8.65,8.35],[8.6,8.4],[8.6,8.5],[8.45,8.55],[8.6,8.4]],"color":"#ffb540ff","thickness":6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[8.6,8.5],[8.55,8.55],[8.4,8.6],[8.55,8.45],[8.5,8.5],[8.4,8.5],[8.5,8.4],[8.7,8.4],[8.65,8.45],[8.6,8.6],[8.55,8.65],[8.35,8.65],[8.35,8.55],[8.4,8.5]],"color":"#ffb540ff","thickness":6,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[8.6,8.4],[8.55,8.45]],"color":"#ffb540ff","thickness":6,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[8.55,8.55],[8.5,8.6],[8.4,8.5],[8.45,8.55],[8.35,8.55],[8.35,8.45],[8.45,8.45]],"color":"#ffb540ff","thickness":6,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[7.5,3.4],[7.5,3.5],[7.7,3.7],[7.6,3.7],[7.65,3.65]],"color":"#ffb540ff","thickness":6,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[7.45,3.55],[7.6,3.7]],"color":"#ffb540ff","thickness":6,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[7.6,3.6],[7.4,3.4],[7.4,3.6],[7.45,3.65],[7.65,3.65],[7.4,3.4]],"color":"#ffb540ff","thickness":6,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[7.65,3.65],[7.65,3.55],[7.55,3.45],[7.55,3.35],[7.45,3.35],[7.4,3.4]],"color":"#ffb540ff","thickness":6,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[7.65,1.45],[7.7,1.4],[7.65,1.35],[7.65,1.45]],"color":"#ffb540ff","thickness":6,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[7.65,1.35],[7.45,1.35],[7.4,1.4],[7.4,1.5],[7.5,1.5],[7.55,1.45],[7.45,1.55],[7.4,1.5]],"color":"#ffb540ff","thickness":6,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[7.65,1.45],[7.55,1.45],[7.6,1.5],[7.65,1.45]],"color":"#ffb540ff","thickness":6,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[7.55,1.45],[7.6,1.4],[7.45,1.45],[7.5,1.4],[7.6,1.4]],"color":"#ffb540ff","thickness":6,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[5.45,0.65],[5.5,0.7],[5.7,0.7],[5.65,0.65],[5.6,0.7]],"color":"#ffb540ff","thickness":6,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[5.45,0.65],[5.4,0.6],[5.4,0.5],[5.55,0.65],[5.4,0.5]],"color":"#ffb540ff","thickness":6,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[5.6,0.7],[5.55,0.65]],"color":"#ffb540ff","thickness":6,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[5.65,0.65],[5.6,0.6],[5.6,0.5],[5.45,0.55],[5.5,0.6],[5.45,0.45],[5.4,0.5],[5.5,0.5],[5.45,0.45]],"color":"#ffb540ff","thickness":6,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[5.65,0.65],[5.65,0.55],[5.55,0.45],[5.45,0.45]],"color":"#ffb540ff","thickness":6,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[5.6,0.6]],"color":"#ffb540ff","thickness":6,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[1.25,4.65],[1.3,4.6],[1.4,4.6],[1.3,4.7],[1.2,4.7],[1.2,4.6],[1.3,4.6]],"color":"#5fd40bff","thickness":6,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[5.5,0.3],[5.4,0.4],[5.4,0.5],[5.3,0.5],[5.25,0.45],[5.35,0.45],[5.2,0.2],[5.3,0.2],[5.35,0.25],[5.4,0.4]],"color":"#5fd40bff","thickness":6,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[5.4,0.4],[5.3,0.3],[5.3,0.2]],"color":"#5fd40bff","thickness":6,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[7.25,1.45],[7.2,1.4],[7.3,1.4],[7.3,1.5]],"color":"#5fd40bff","thickness":6,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[3.35,5.45],[3.3,5.4],[3.4,5.4],[3.3,5.3],[3.35,5.25],[3.4,5.3],[3.4,5.4]],"color":"#5fd40bff","thickness":6,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[7.35,3.45],[7.25,3.45],[7.3,3.4],[7.4,3.4],[7.4,3.3],[7.35,3.35],[7.35,3.25],[7.3,3.2],[7.25,3.25],[7.3,3.4]],"color":"#5fd40bff","thickness":6,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[3.4,5.3],[3.5,5.2],[3.55,5.25],[3.4,5.3]],"color":"#5fd40bff","thickness":6,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[7.4,3.3],[7.5,3.2],[7.4,3.2],[7.4,3.3]],"color":"#5fd40bff","thickness":6,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[8.2,8.6],[8.25,8.55],[8.3,8.6],[8.2,8.6]],"color":"#5fd40bff","thickness":6,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[8.2,8.6],[8.1,8.6],[8.15,8.65],[8.25,8.65],[8.25,8.55],[8.3,8.5],[8.15,8.45],[8.2,8.5],[8.3,8.5]],"color":"#5fd40bff","thickness":6,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[8.25,8.55],[8.15,8.55],[8.1,8.6]],"color":"#5fd40bff","thickness":6,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[8.3,8.6],[8.35,8.65],[8.35,8.75],[8.3,8.8],[8.25,8.75],[8.3,8.6]],"color":"#5fd40bff","thickness":6,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[5.35,6.75],[5.4,6.7],[5.35,6.65],[5.35,6.75]],"color":"#5fd40bff","thickness":6,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[5.35,6.65],[5.3,6.6],[5.35,6.55],[5.2,6.5],[5.3,6.6]],"color":"#5fd40bff","thickness":6,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[5.3,6.6],[5.25,6.65],[5.15,6.65],[5.2,6.6],[5.3,6.6]],"color":"#5fd40bff","thickness":6,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[7.2,1.5],[7.25,1.55],[7.35,1.55],[7.35,1.65],[7.3,1.7],[7.3,1.6],[7.2,1.6],[7.15,1.55],[7.2,1.5]],"color":"#5fd40bff","thickness":6,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[1.45,4.65],[1.45,4.75],[1.5,4.7],[1.45,4.65]],"color":"#5fd40bff","thickness":6,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[1.35,4.55],[1.4,4.5],[1.3,4.5],[1.35,4.55]],"color":"#5fd40bff","thickness":6,"rounded":true}}
```

Today was a rainy day, so instead of being outside, Nala spent the day with her favourite „inside game“: searching the rooms for carrots and trading them in for treats! How many will she find today?

Normal sudoku rules apply. Place the digits 1-9 in every row, column and 3x3 box exactly once each. 

The grid is partially covered in fog. Entering correct digits will clear the fog from surrounding cells, possibly revealing more clues.

Digits along an arrow must sum to the digit in the corresponding circle. All circles are single digit numbers. Arrows can only branch from their circles. Each arrow has its own color and arrows of the same color are connected. If multiple arrows branch from the same circle, they all have the same color.

Apart from arrows, several carrots are hidden underneath the fog. Each carrot is either a minimum or a maximum cell. The digit in a minimum cell is smaller than its 4 orthogonally adjacent neighbours while the digit in a maximum cell is greater than its 4 orthogonally adjacent neighbours.

The carrots nature (minimum or maximum) has to be determined for each carrot individually by the solver.

Numbered Rooms: Clues outside the grid indicate the digit which has to be placed in the Nth cell in the corresponding direction, where N is first digit. 
Example: a 5 clue to the left of row 2 tells you that a 5 needs to be placed in the position that is indicated by the first digit in row 2 seen from the clue (r2c1 in this case). If r2c1 was a 3, then 5 would have to be placed in the 3rd position of that row as seen from the clue (r2c3).
