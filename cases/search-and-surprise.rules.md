---
fog:
  initiallyLit:
    - 1
    - 10
    - 19
    - 55
    - 64
format: open-rules
title: Search And Surprise
setter: Sandra & Nala
source: https://sudokupad.app/sandra-and-nala/search-and-surprise
case: https://sudoku-sleuth.com/cases/search-and-surprise
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
numbered-room-1: numbered-room r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 digit 9
numbered-room-2: numbered-room r9c2-r8c2-r7c2-r6c2-r5c2-r4c2-r3c2-r2c2-r1c2 digit 1
numbered-room-3: numbered-room r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 digit 5
numbered-room-4: numbered-room r5c9-r5c8-r5c7-r5c6-r5c5-r5c4-r5c3-r5c2-r5c1 digit 4
numbered-room-5: numbered-room r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6 digit 3
numbered-room-6: numbered-room r9c6-r8c6-r7c6-r6c6-r5c6-r4c6-r3c6-r2c6-r1c6 digit 4
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[8.5,1.5],[5.5,1.5],[6.5,2.5],[7.5,2.5]],"color":"#a9a5f9ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[2.5,7.5],[2.5,8.5],[6.5,8.5],[6.5,7.5],[5.5,7.5]],"color":"#ffaf7cff","thickness":25.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[4.5,0.5]],"color":"#f7eb86ff","thickness":22.4,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[4.5,3.5]],"color":"#f7eb86ff","thickness":22.4,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[5.5,2.5]],"color":"#f7eb86ff","thickness":22.4,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[0.5,7.5],[1.5,6.5],[0.5,5.5],[0.5,4.5]],"color":"#afd4f7ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[1.5,2.5],[2.5,2.5],[3.5,1.5],[2.5,1.5],[1.5,0.5],[1.5,1.5]],"color":"#fd5eaaff","thickness":12.8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[7.5,5.5],[7.5,4.5],[8.5,4.5],[8.5,3.5]],"color":"#83dca9ff","thickness":16,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[2.85,4.35],[2.75,4.25],[2.75,4.15],[2.8,4.1],[2.7,4.1],[2.75,4.15]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[2.8,4.3],[2.7,4.3],[2.7,4.1]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[2.7,4.2],[2.65,4.25],[2.8,4.4],[2.8,4.5],[2.85,4.45],[2.8,4.4]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[2.8,4.4],[2.95,4.35],[2.95,4.45],[2.85,4.45],[2.85,4.55],[2.8,4.5]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[2.85,4.45],[2.9,4.4]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.65,4.75],[2.7,4.8],[2.8,4.8],[2.85,4.85]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[2.7,4.8],[2.65,4.85]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[2.8,4.8],[2.85,4.75]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[2.1,4.1],[2.15,4.15],[2.25,4.15],[2.3,4.2]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[2.15,4.15],[2.1,4.2]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[2.25,4.15],[2.3,4.1]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[8.9,8.1],[8.85,8.15],[8.9,8.2]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[8.85,8.15],[8.75,8.15],[8.7,8.1]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[8.75,8.15],[8.7,8.2]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[8.15,8.75],[8.2,8.8],[8.3,8.8],[8.35,8.75]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[8.2,8.8],[8.15,8.85]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[8.3,8.8],[8.35,8.85]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[8.45,8.05],[8.5,8.1],[8.55,8.05]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[8.5,8.1],[8.5,8.2],[8.55,8.25]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[8.5,8.2],[8.45,8.25]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[8.6,3.5],[8.6,3.4],[8.65,3.35],[8.75,3.35],[8.8,3.3],[8.9,3.3],[8.9,3.2],[8.85,3.25],[8.7,3.3],[8.65,3.35]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[8.6,3.4],[8.55,3.35],[8.55,3.55],[8.65,3.55],[8.65,3.35],[8.75,3.25],[8.7,3.3]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[8.75,3.35],[8.65,3.45]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[8.8,3.3],[8.8,3.2],[8.85,3.25],[8.75,3.25],[8.7,3.2],[8.75,3.15],[8.8,3.2]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[8.8,3.2],[8.8,3.1],[8.75,3.15]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[8.75,3.65],[8.8,3.7],[8.85,3.65]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[8.8,3.7],[8.8,3.8]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[2.65,4.25],[2.6,4.3],[2.55,4.25],[2.6,4.2],[2.65,4.25]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[8.55,3.35],[8.5,3.3],[8.45,3.35],[8.5,3.4],[8.55,3.35]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[8.4,3.9],[8.45,3.95],[8.5,3.8],[8.4,3.9]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[8.45,3.85],[8.55,3.85],[8.6,3.8],[8.5,3.8],[8.45,3.75],[8.45,3.85]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[8.45,3.85],[8.4,3.8],[8.35,3.65],[8.45,3.75]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[8.4,3.8],[8.3,3.7],[8.35,3.65],[8.35,3.55],[8.3,3.6],[8.3,3.7]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[8.3,3.7],[8.25,3.65],[8.2,3.7],[8.25,3.75],[8.3,3.7]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[8.8,8.5],[8.85,8.45],[8.8,8.4],[8.8,8.5]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[8.8,8.4],[8.75,8.45],[8.8,8.5],[8.7,8.5],[8.75,8.55],[8.75,8.45]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[8.75,8.45],[8.7,8.4],[8.7,8.7],[8.75,8.75],[8.75,8.55],[8.7,8.6]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[8.7,8.5],[8.65,8.45],[8.7,8.4]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[8.75,8.75],[8.8,8.8],[8.85,8.75],[8.8,8.7],[8.75,8.75]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[8.75,8.75],[8.65,8.75],[8.7,8.8],[8.75,8.75]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[8.45,8.35],[8.55,8.45],[8.5,8.5],[8.45,8.45],[8.55,8.45]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[8.45,8.35],[8.4,8.4],[8.35,8.35],[8.4,8.4]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[8.55,8.45],[8.4,8.4],[8.4,8.6],[8.35,8.55],[8.4,8.5]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[8.4,8.4],[8.2,8.3],[8.3,8.3],[8.35,8.35],[8.25,8.35],[8.2,8.3]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[8.4,8.5],[8.3,8.4],[8.3,8.3],[8.25,8.25],[8.2,8.3],[8.2,8.2],[8.25,8.15],[8.3,8.2],[8.25,8.25]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"line","points":[[8.3,8.4],[8.25,8.35],[8.2,8.4],[8.1,8.4],[8.1,8.3],[8.2,8.3],[8.15,8.35],[8.1,8.3]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[8.25,8.35],[8.15,8.35]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"line","points":[[2.3,4.6],[2.35,4.65],[2.4,4.6],[2.35,4.55],[2.3,4.6]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"line","points":[[2.3,4.6],[2.25,4.65],[2.4,4.6],[2.45,4.65],[2.5,4.6],[2.35,4.55],[2.4,4.5],[2.35,4.45],[2.35,4.55]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"line","points":[[2.35,4.65],[2.3,4.7],[2.25,4.65],[2.2,4.7],[2.3,4.7]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"line","points":[[2.4,4.5],[2.25,4.75],[2.2,4.7],[2.2,4.8],[2.25,4.85],[2.3,4.8],[2.25,4.75]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"line","points":[[2.35,4.45],[2.3,4.5],[2.35,4.55],[2.3,4.7],[2.25,4.75]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"line","points":[[2.2,4.7],[2.15,4.65],[2.1,4.7],[2.15,4.75],[2.2,4.7]],"color":"#faebc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[4.5,3.5],[5.5,2.5]],"color":"#FFFFFF","thickness":3.2,"rounded":true}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[3.5,2.5]],"color":"#FFFFFF","thickness":3.2,"rounded":true}}
```

It’s Nala’s birthday again. She may have gotten older, but her excitement for gifts has been the same since she was a tiny puppy. With no patience left for party to start, she sneaks away to search the rooms of the house for hidden gifts. Will she find anything?

Normal Sudoku rules apply: Place the digits 1-9 in every row, column and box exactly once each. 

The grid is partially covered in fog. Placing correct digits will clear the fog from surrounding cells, possibly revealing more clues.

Numbered Rooms: Clues outside the grid indicate the digit which has to be placed in the Nth cell in the corresponding direction, where N is first digit. Example: a 5 clue to the left of row 2 tells you that a 5 needs to be placed in the position that is indicated by the first digit in row 2 seen from the clue (r2c1 in this case). If r2c1 was a 3, then 5 would have to be placed in the 3rd position of that row as seen from the clue (r2c3). 

All lines in this puzzle are thermo lines. Along those lines, digits strictly increase starting from one end of the line. The direction has to be determined by the solver. Only the hollow line branches and it does so from the lowest digit. Each line has its own color (and thickness) and lines of the same color are connected.

Good luck!
