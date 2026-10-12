---
fog:
  initiallyLit:
    - 0
    - 1
    - 9
    - 11
    - 18
    - 20
    - 36
    - 37
    - 38
    - 39
    - 40
    - 41
    - 42
    - 43
    - 44
format: open-rules
title: Probably Good Enough
setter: Sandra & Nala
source: https://sudokupad.app/m2d9vg2fbs
case: https://sudoku-sleuth.com/cases/probably-good-enough
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
board:
  rows: 9
  cols: 9
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
  givens: r6c9=5
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r2c3
      - r3c1
      - r3c2
      - r3c3
    - - r1c4
      - r1c5
      - r1c6
      - r2c4
      - r2c5
      - r2c6
      - r3c4
      - r3c5
      - r3c6
    - - r1c7
      - r1c8
      - r1c9
      - r2c7
      - r2c8
      - r2c9
      - r3c7
      - r3c8
      - r3c9
    - - r4c1
      - r4c2
      - r4c3
      - r5c1
      - r5c2
      - r5c3
      - r6c1
      - r6c2
      - r6c3
    - - r4c4
      - r4c5
      - r4c6
      - r5c4
      - r5c5
      - r5c6
      - r6c4
      - r6c5
      - r6c6
    - - r4c7
      - r4c8
      - r4c9
      - r5c7
      - r5c8
      - r5c9
      - r6c7
      - r6c8
      - r6c9
    - - r7c1
      - r7c2
      - r7c3
      - r8c1
      - r8c2
      - r8c3
      - r9c1
      - r9c2
      - r9c3
    - - r7c4
      - r7c5
      - r7c6
      - r8c4
      - r8c5
      - r8c6
      - r9c4
      - r9c5
      - r9c6
    - - r7c7
      - r7c8
      - r7c9
      - r8c7
      - r8c8
      - r8c9
      - r9c7
      - r9c8
      - r9c9
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9
unique-9: unique r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9
unique-10: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1
unique-11: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2
unique-12: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3
unique-13: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4
unique-14: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5
unique-15: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6
unique-16: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7
unique-17: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8
unique-18: unique r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9
unique-19: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3-r3c1-r3c2-r3c3
unique-20: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6-r3c4-r3c5-r3c6
unique-21: unique r1c7-r1c8-r1c9-r2c7-r2c8-r2c9-r3c7-r3c8-r3c9
unique-22: unique r4c1-r4c2-r4c3-r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
unique-23: unique r4c4-r4c5-r4c6-r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
unique-24: unique r4c7-r4c8-r4c9-r5c7-r5c8-r5c9-r6c7-r6c8-r6c9
unique-25: unique r7c1-r7c2-r7c3-r8c1-r8c2-r8c3-r9c1-r9c2-r9c3
unique-26: unique r7c4-r7c5-r7c6-r8c4-r8c5-r8c6-r9c4-r9c5-r9c6
unique-27: unique r7c7-r7c8-r7c9-r8c7-r8c8-r8c9-r9c7-r9c8-r9c9
cage-1: cage r1c1-r2c1-r3c1 total 7 connected true
cage-2: cage r2c3-r3c3 total 9 connected true
cage-3: cage r2c5-r2c6 total 13 connected true
cage-4: cage r6c6-r6c7 total 10 connected true
kropki-1: kropki r4c9-r5c9 colour "white"
kropki-2: kropki r3c4-r4c4 colour "black"
kropki-3: kropki r4c4-r4c5 colour "black"
kropki-4: kropki r4c3-r4c4 colour "black"
kropki-5: kropki r2c6-r2c7 colour "black"
kropki-6: kropki r9c7-r9c8 colour "white"
kropki-7: kropki r8c4-r8c5 colour "white"
arrow-1: arrow r1c3-r1c4-r1c5 bulb ["r2c2"]
arrow-2: arrow r3c7-r4c8 bulb ["r3c6"]
whispers-1: whispers r6c8-r7c8-r7c7-r7c6-r8c6 gap 5
whispers-2: whispers r6c6-r6c5-r6c4-r7c4 gap 5
quadruple-1: quadruple r3c1-r3c2-r4c1-r4c2 digits [1,3,9]
quadruple-2: quadruple r6c6-r6c7-r7c6-r7c7 digits [2,3,5,9]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[4.5,7.9],[4.5,0.5],[4.5,0.6]],"color":"#a9a9a9ff","thickness":3.2,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[4.5,0.1]],"color":"#a9a9a9ff","thickness":3.2,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.35,1.75],[0.45,1.75],[0.5,1.8],[0.3,1.8],[0.3,1.7],[0.35,1.65],[0.45,1.75]],"color":"#f7b865ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[0.45,1.75],[0.3,1.7],[0.25,1.65],[0.45,1.65],[0.6,1.6],[0.65,1.55],[0.5,1.4],[0.4,1.4],[0.35,1.35],[0.45,1.35],[0.5,1.3],[0.4,1.3],[0.35,1.35]],"color":"#f7b865ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.35,1.65],[0.3,1.6],[0.35,1.55],[0.4,1.6],[0.5,1.6],[0.45,1.55],[0.35,1.55]],"color":"#f7b865ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.35,1.35],[0.25,1.25],[0.3,1.2],[0.35,1.25],[0.55,1.25],[0.5,1.3]],"color":"#f7b865ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0.4,1.3],[0.3,1.3],[0.25,1.35],[0.3,1.4],[0.3,1.5],[0.4,1.6]],"color":"#f7b865ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.3,1.6],[0.3,1.5],[0.35,1.55],[0.4,1.5],[0.5,1.5],[0.35,1.45],[0.3,1.5]],"color":"#f7b865ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.4,1.5],[0.3,1.5]],"color":"#f7b865ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0.6,1.6],[0.5,1.6],[0.55,1.55],[0.45,1.55],[0.35,1.45],[0.45,1.45],[0.3,1.4],[0.35,1.45]],"color":"#f7b865ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[0.6,1.6],[0.45,1.45],[0.55,1.55],[0.5,1.5]],"color":"#f7b865ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[5.6,8.4],[5.5,8.4],[5.6,8.5],[5.8,8.5],[5.75,8.55],[5.65,8.55],[5.6,8.6],[5.5,8.6],[5.45,8.55],[5.5,8.5],[5.6,8.5]],"color":"#f0cc81ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[5.5,8.4],[5.4,8.4],[5.35,8.45],[5.45,8.45],[5.5,8.5]],"color":"#f0cc81ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[5.35,8.45],[5.35,8.55],[5.4,8.6],[5.5,8.6],[5.45,8.65],[5.4,8.6]],"color":"#f0cc81ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[5.65,8.45],[5.75,8.45]],"color":"#f0cc81ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[7.7,0.3],[7.6,0.2],[7.7,0.2],[7.8,0.3],[7.7,0.4],[7.65,0.35],[7.75,0.35],[7.8,0.3]],"color":"#f0cc81ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[7.6,0.2],[7.55,0.25],[7.65,0.35],[7.55,0.25]],"color":"#f0cc81ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[7.7,0.7],[7.75,0.65],[7.65,0.65],[7.55,0.75],[7.65,0.75],[7.75,0.65]],"color":"#f0cc81ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[7.7,0.7],[7.6,0.8],[7.55,0.75],[7.55,0.65],[7.6,0.6],[7.7,0.6],[7.75,0.65]],"color":"#f0cc81ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[5.7,8.5],[5.5,8.5],[5.4,8.6],[5.45,8.65]],"color":"#b79084ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[5.4,8.4],[5.45,8.35]],"color":"#b79084ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[5.8,8.3],[5.6,8.3],[5.65,8.25],[5.7,8.3]],"color":"#b79084ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[5.35,8.45],[5.3,8.5],[5.4,8.6],[5.35,8.65],[5.35,8.75],[5.75,8.75],[5.7,8.7],[5.4,8.7],[5.35,8.65]],"color":"#b79084ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[5.35,8.55],[5.4,8.5],[5.4,8.4],[5.35,8.35],[5.4,8.3],[5.6,8.3],[5.45,8.25],[5.35,8.25],[5.35,8.35]],"color":"#b79084ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[5.25,8.45],[5.3,8.5],[5.25,8.55]],"color":"#f8edc5ff","thickness":4.48,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"cage","cells":[1],"label":"Nala "}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"cage","cells":[53],"label":"Henri"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"cage","cells":[63],"label":"Finish"}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.4,1.45],"width":0.04,"height":0.06,"rounded":true,"fill":"#474132ff","stroke":"#060606ff","thickness":1.28,"angle":0}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,8.4],"width":0.04,"height":0.06,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.75,8.5],"width":0.08,"height":0.06,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.4,1.6],"width":0.04,"height":0.06,"rounded":true,"fill":"#474132ff","stroke":"#060606ff","thickness":1.28,"angle":0}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.6,1.55],"width":0.08,"height":0.04,"rounded":true,"fill":"#474132ff","stroke":"#060606ff","thickness":1.28,"angle":0}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,8.6],"width":0.04,"height":0.06,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.8,8.2],"width":0.18,"height":0.18,"rounded":true,"fill":"#ea1ee0ff","stroke":"#9826cdff","thickness":1.28,"angle":0}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.8,1.2],"width":0.18,"height":0.18,"rounded":true,"fill":"#ea1ee0ff","stroke":"#9826cdff","thickness":1.28,"angle":0}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.55,0.25],"width":0.04,"height":0.04,"rounded":true,"fill":"#bda275ff","stroke":"#c5a743ff","thickness":1.28,"angle":0}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.65,0.2],"width":0.04,"height":0.04,"rounded":true,"fill":"#bda275ff","stroke":"#c5a743ff","thickness":1.28,"angle":0}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.8,0.3],"width":0.04,"height":0.04,"rounded":true,"fill":"#bda275ff","stroke":"#c5a743ff","thickness":1.28,"angle":0}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.7,0.3],"width":0.04,"height":0.04,"rounded":true,"fill":"#bda275ff","stroke":"#c5a743ff","thickness":1.28,"angle":0}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.7,0.4],"width":0.04,"height":0.04,"rounded":true,"fill":"#bda275ff","stroke":"#c5a743ff","thickness":1.28,"angle":0}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.6,0.6],"width":0.04,"height":0.04,"rounded":true,"fill":"#bda275ff","stroke":"#c5a743ff","thickness":1.28,"angle":0}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.75,0.65],"width":0.04,"height":0.04,"rounded":true,"fill":"#bda275ff","stroke":"#c5a743ff","thickness":1.28,"angle":0}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.65,0.7],"width":0.04,"height":0.04,"rounded":true,"fill":"#bda275ff","stroke":"#c5a743ff","thickness":1.28,"angle":0}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.65,0.8],"width":0.04,"height":0.04,"rounded":true,"fill":"#bda275ff","stroke":"#c5a743ff","thickness":1.28,"angle":0}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.55,0.7],"width":0.04,"height":0.04,"rounded":true,"fill":"#bda275ff","stroke":"#c5a743ff","thickness":1.28,"angle":0}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.55,0.8],"width":0.04,"height":0.04,"rounded":true,"fill":"#bda275ff","stroke":"#c5a743ff","thickness":1.28,"angle":0}}
```

Today Nala and Henri are on a relay race to reach a shared goal: cookies!

Normal Sudoku rules apply: Place the digits 1-9 in every row, column and box exactly once each. 

The grid is partially covered in fog. Placing correct digits will clear the fog from surrounding cells, possibly revealing more clues.

This puzzle is solved in 2 parts. The grey line in row 5 is a fence that the dogs don’t cross. Every clue above that line has to be fulfilled correctly, while every clue below that line has to be fulfilled wrogn!

Build a path that starts at Nala, leads to Henri to hand over the ball, and then takes Henri with the ball to the finish, so they both get their cookies. The path moves orthogonally and starts at Nala, passes through Henri, and ends at the cookies. It cannot touch itself orthogonally, but can do so diagonally. Adjacent digits along the path alternate between odd and even.

Part 1: Nala: 
 - digits along an arrow must sum to the digit in the corresponding circle.
- every digit that appears in a (larger) white circle must also appear in at least one of its 4 surrounding cells.
- digits in a dashed cage must sum to the number in the top left corner of the cage. Digits may not repeat within their own cage. 
- all cells of all dashed cages are part of the path Nala takes
- digits separated by a white dot are consecutive. Digits separated by a black dot are in a 1:2 ratio. Not all possible dots are given. (There is no negative constraint.)
- adjacent digits on a green whisper line differ by at least 5

Part 2: Henri
Starting from Henri, all clues are standard, but all clues need to be wrong, including the parity path, i.e. no adjacent digits along the parity path alternate between odd and even. A quad clue is considered wrong if none of its digits appear in the 4 surrounding cells and a green whisper line is considered wrong if no adjacent digits on it differ by 5 or more.
