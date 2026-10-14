---
fog:
  initiallyLit:
    - r1c1
    - r1c3
    - r2c1
    - r3c2
    - r3c3
format: open-rules
title: "Cookie Crime Part 3: On The Scent"
setter: Sandra & Nala
source: https://sudokupad.app/6xmlpgd01i
case: https://sudoku-sleuth.com/cases/cookie-crime-part-3-on-the-scent
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: 58ee0e4489d5332a135af9411afb383f
---

```rules
sudoku 9x9
kropki-1: kropki r1c4-r2c4 black
kropki-2: kropki r1c4-r1c5 black
kropki-3: kropki r3c8-r4c8 black
kropki-4: kropki r4c8-r5c8 black
kropki-5: kropki r6c6-r7c6 black
kropki-6: kropki r6c4-r6c5 white
kropki-7: kropki r4c7-r5c7 white
kropki-8: kropki r5c7-r6c7 white
kropki-9: kropki r8c9-r9c9 white
kropki-10: kropki r6c1-r7c1 white
kropki-11: kropki r7c8-r7c9 white
kropki-12: kropki r6c4-r7c4 white
kropki-13: kropki r7c1-r7c2 white
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.9,0.6],[0.95,0.55],[0.75,0.55]],"color":"#000000","thickness":2.56,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.95,0.55],[0.9,0.5]],"color":"#000000","thickness":2.56,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[8.4,4.7],[8.5,4.7],[8.55,4.75],[8.5,4.8],[8.4,4.8],[8.35,4.85],[8.3,4.8],[8.3,4.7],[8.35,4.65],[8.35,4.75]],"color":"#e7d1b7ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[8.65,4.85],[8.75,4.85],[8.8,4.9]],"color":"#e7d1b7ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[8.65,4.65],[8.7,4.7],[8.8,4.7]],"color":"#e7d1b7ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[8.5,4.2],[8.5,4.3],[8.6,4.3],[8.75,4.45],[8.75,4.55],[8.7,4.6],[8.6,4.5],[8.7,4.4]],"color":"#e7d1b7ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[8.6,4.5],[8.6,4.6],[8.65,4.55],[8.65,4.45],[8.6,4.5]],"color":"#e7d1b7ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[8.65,4.45],[8.7,4.5],[8.65,4.55]],"color":"#e7d1b7ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[8.45,4.75],[8.35,4.75],[8.35,4.85],[8.3,4.8],[8.3,4.7],[8.35,4.65],[8.35,4.75]],"color":"#9867519a","thickness":4.48,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[8.55,4.65],[8.6,4.7]],"color":"#9867519a","thickness":4.48,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[8.55,4.85],[8.6,4.8]],"color":"#9867519a","thickness":4.48,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[8.6,4.7],[8.7,4.8],[8.75,4.75],[8.65,4.75]],"color":"#c0a78eff","thickness":4.48,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[8.65,4.75],[8.6,4.8]],"color":"#c0a78eff","thickness":4.48,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[8.6,4.3],[8.5,4.3],[8.65,4.45],[8.65,4.55],[8.6,4.5],[8.6,4.4]],"color":"#c0a78eff","thickness":4.48,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[8.5,4.3],[8.45,4.25],[8.5,4.2],[8.6,4.2],[8.65,4.15]],"color":"#c0a78eff","thickness":4.48,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[8.55,4.35],[8.65,4.35]],"color":"#c0a78eff","thickness":4.48,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[8.6,4.4],[8.55,4.45],[8.55,4.55],[8.65,4.45],[8.55,4.45]],"color":"#c0a78eff","thickness":4.48,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[8.6,4.5],[8.55,4.45]],"color":"#c0a78eff","thickness":4.48,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[8.65,4.55],[8.55,4.55]],"color":"#c0a78eff","thickness":4.48,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[8.55,4.15],[8.5,4.2],[8.55,4.25],[8.65,4.25]],"color":"#c0a78eff","thickness":4.48,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[8.85,4.45],[8.85,4.55],[8.8,4.5],[8.8,4.4],[8.85,4.45]],"color":"#c0a78eff","thickness":4.48,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[8.8,4.4],[8.75,4.35],[8.7,4.4],[8.75,4.45],[8.8,4.4]],"color":"#c0a78eff","thickness":4.48,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[8.35,4.85],[8.55,4.85],[8.6,4.9],[8.4,4.9],[8.35,4.85]],"color":"#c0a78eff","thickness":4.48,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[8.35,4.65],[8.4,4.6],[8.6,4.6],[8.55,4.65],[8.35,4.65]],"color":"#c0a78eff","thickness":4.48,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[1.5,0.2],[1.6,0.2],[1.65,0.25]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[1.8,0.3],[1.85,0.35],[1.9,0.3]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[0.55,2.15],[0.55,2.25]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[2.25,2.15],[2.35,2.25]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[2.55,1.15],[2.65,1.25]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[2.25,1.75],[2.15,1.65]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[0.3,5.3],[0.35,5.25],[0.4,5.3]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[0.75,5.35],[0.85,5.35]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[2.65,6.25],[2.6,6.2],[2.65,6.15]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[2.7,6.7],[2.7,6.8]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[2.25,8.25],[2.35,8.25],[2.4,8.3]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[2.75,8.75],[2.85,8.75]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[3.3,8.2],[3.25,8.25],[3.25,8.15],[3.3,8.1]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[3.6,8.3],[3.7,8.3],[3.7,8.4]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[3.6,8.8],[3.7,8.8]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[5.05,7.45],[5.15,7.45]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[5.85,7.35],[5.9,7.3],[5.9,7.2]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[5.35,5.25],[5.3,5.2],[5.3,5.1]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[5.8,5.1],[5.8,5.2],[5.75,5.25]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[6.6,6.8],[6.6,6.9]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[6.75,6.65],[6.9,6.8]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[4.65,5.15],[4.55,5.05]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[4.2,5.3],[4.15,5.35],[4.25,5.35]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[4.35,3.75],[4.3,3.8],[4.2,3.8]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[4.65,3.25],[4.75,3.25]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[6.45,2.25],[6.45,2.15],[6.5,2.1]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[6.7,2.2],[6.8,2.1]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[6.3,2.7],[6.25,2.75],[6.15,2.75]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[7.6,2.8],[7.65,2.85]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"line","points":[[7.15,3.15],[7.25,3.25]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[7.5,3.8],[7.4,3.9]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"line","points":[[8.9,4.1],[8.9,4.2],[8.95,4.25]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"line","points":[[8.3,4.8],[8.25,4.75],[8.3,4.7]],"color":"#e7d1b7ff","thickness":1.92,"rounded":true}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"line","points":[[1.35,0.25],[1.4,0.2]],"color":"#c0a78eff","thickness":1.92,"rounded":true}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"line","points":[[0.85,2.25],[0.8,2.2],[0.7,2.2]],"color":"#c0a78eff","thickness":1.92,"rounded":true}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"line","points":[[0.7,2.8],[0.75,2.75]],"color":"#c0a78eff","thickness":1.92,"rounded":true}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"line","points":[[2.7,1.3],[2.8,1.2]],"color":"#c0a78eff","thickness":1.92,"rounded":true}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"line","points":[[2.6,2.2],[2.65,2.15]],"color":"#c0a78eff","thickness":1.92,"rounded":true}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"line","points":[[2.8,2.8],[2.85,2.85]],"color":"#c0a78eff","thickness":1.92,"rounded":true}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"line","points":[[0.75,5.25],[0.8,5.2]],"color":"#c0a78eff","thickness":1.92,"rounded":true}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"line","points":[[0.25,5.75],[0.3,5.8]],"color":"#c0a78eff","thickness":1.92,"rounded":true}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"line","points":[[0.55,5.75],[0.65,5.75],[0.7,5.7]],"color":"#c0a78eff","thickness":1.92,"rounded":true}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"line","points":[[2.25,6.65],[2.35,6.65]],"color":"#c0a78eff","thickness":1.92,"rounded":true}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"line","points":[[2.35,6.25],[2.35,6.15],[2.4,6.1]],"color":"#c0a78eff","thickness":1.92,"rounded":true}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"line","points":[[2.65,8.25],[2.75,8.15]],"color":"#c0a78eff","thickness":1.92,"rounded":true}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"line","points":[[2.25,8.75],[2.35,8.85]],"color":"#c0a78eff","thickness":1.92,"rounded":true}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"line","points":[[3.6,8.2],[3.65,8.15]],"color":"#c0a78eff","thickness":1.92,"rounded":true}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"line","points":[[3.25,8.75],[3.3,8.7]],"color":"#c0a78eff","thickness":1.92,"rounded":true}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"line","points":[[5.4,7.2],[5.45,7.15],[5.55,7.15]],"color":"#c0a78eff","thickness":1.92,"rounded":true}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"line","points":[[5.6,7.8],[5.55,7.85],[5.45,7.85]],"color":"#c0a78eff","thickness":1.92,"rounded":true}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"line","points":[[5.5,5.8],[5.55,5.75]],"color":"#c0a78eff","thickness":1.92,"rounded":true}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"line","points":[[5.1,5.7],[5.25,5.65]],"color":"#c0a78eff","thickness":1.92,"rounded":true}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"line","points":[[6.1,6.2],[6.2,6.2],[6.3,6.3]],"color":"#c0a78eff","thickness":1.92,"rounded":true}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"line","points":[[6.75,6.25],[6.8,6.2]],"color":"#c0a78eff","thickness":1.92,"rounded":true}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"line","points":[[4.45,5.75],[4.55,5.75]],"color":"#c0a78eff","thickness":1.92,"rounded":true}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"line","points":[[4.35,3.25],[4.4,3.2]],"color":"#c0a78eff","thickness":1.92,"rounded":true}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"line","points":[[4.8,3.7],[4.8,3.8],[4.85,3.85]],"color":"#c0a78eff","thickness":1.92,"rounded":true}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"line","points":[[6.25,2.15],[6.3,2.3]],"color":"#c0a78eff","thickness":1.92,"rounded":true}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"line","points":[[7.4,2.2],[7.4,2.1],[7.45,2.05]],"color":"#c0a78eff","thickness":1.92,"rounded":true}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"line","points":[[7.2,2.8],[7.15,2.85],[7.05,2.85]],"color":"#c0a78eff","thickness":1.92,"rounded":true}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"line","points":[[7.55,3.25],[7.6,3.2],[7.75,3.15]],"color":"#c0a78eff","thickness":1.92,"rounded":true}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"line","points":[[8.3,4.1],[8.35,4.05],[8.4,4.1]],"color":"#c0a78eff","thickness":1.92,"rounded":true}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"cage","cells":[0],"label":"Start","color":"#0000"}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"cage","cells":[76],"label":"Culprit","color":"#0000"}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2.5],"width":0.8,"height":0.8,"rounded":false,"fill":"#000000a0","stroke":"#000000","thickness":3.2,"angle":90}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,2.5],"width":0.8,"height":0.8,"rounded":false,"fill":"#000000a0","stroke":"#000000","thickness":3.2,"angle":90}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,5.5],"width":0.8,"height":0.8,"rounded":false,"fill":"#000000a0","stroke":"#000000","thickness":3.2,"angle":90}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,5.5],"width":0.8,"height":0.8,"rounded":false,"fill":"#000000a0","stroke":"#000000","thickness":3.2,"angle":90}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,2.5],"width":0.8,"height":0.8,"rounded":false,"fill":"#000000a0","stroke":"#000000","thickness":3.2,"angle":90}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,8.5],"width":0.8,"height":0.8,"rounded":false,"fill":"#000000a0","stroke":"#000000","thickness":3.2,"angle":90}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,0.5],"width":0.85,"height":0.85,"rounded":true,"stroke":"#000000","thickness":3.2,"angle":0}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,1.5],"width":0.85,"height":0.85,"rounded":true,"stroke":"#000000","thickness":3.2,"angle":0}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,6.5],"width":0.85,"height":0.85,"rounded":true,"stroke":"#000000","thickness":3.2,"angle":0}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,7.5],"width":0.85,"height":0.85,"rounded":true,"stroke":"#000000","thickness":3.2,"angle":0}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,8.5],"width":0.85,"height":0.85,"rounded":true,"stroke":"#000000","thickness":3.2,"angle":0}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,6.5],"width":0.85,"height":0.85,"rounded":true,"stroke":"#000000","thickness":3.2,"angle":0}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,5.5],"width":0.85,"height":0.85,"rounded":true,"stroke":"#000000","thickness":3.2,"angle":0}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,3.5],"width":0.85,"height":0.85,"rounded":true,"stroke":"#000000","thickness":3.2,"angle":0}}
- {"id":"drawing-103","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,2.5],"width":0.85,"height":0.85,"rounded":true,"stroke":"#000000","thickness":3.2,"angle":0}}
- {"id":"drawing-104","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3.5],"width":0.85,"height":0.85,"rounded":true,"stroke":"#000000","thickness":3.2,"angle":0}}
- {"id":"drawing-118","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.4,4.7],"width":0.04,"height":0.04,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-119","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.4,4.8],"width":0.04,"height":0.04,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-120","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,4.75],"width":0.08,"height":0.06,"rounded":true,"fill":"#4e3930ff","stroke":"#000000","thickness":1.28,"angle":0}}
```

Nala gathered enough information to have a good idea about the identity of the cookie thief. And the best part is: she knows where to look for him. All she has to do is follow the scent she was able to pick up from the shed fur she found. An easy job for a nose as good as hers! Follow along if you want to find the cookie thief as well!

Masyu-esque rules apply: Draw a path that passes through all circled and rectangled cells. The path must go straight through the cells with circles, with a turn in at least one of the cells immediately before/after each circle. The path must make a turn in all the rectangles, but must go straight in both cells immediately before/after each rectangle. 

The path starts in box 1 on the cell marked with „Start“, moving in the direction the arrow is pointing. The path ends on the "culprit cell".

Normal Sudoku rules apply: Place the digits 1-9 in every row, column and box exactly once each. 

Additionally the grid is partially covered in fog. Placing correct digits will clear the fog from surrounding cells, possibly revealing more clues.

Digits in circles are odd and digits in rectangles are even. 

For each box the path visits, while it stays within the box, digits along the path must strictly increase from where the path entered the box up to where it leaves the box. (Think: build your own thermometer)

The path is allowed to touch diagonally if it wants to, but it can not touch itself orthogonally. 

Digits separated by a white dot are consecutive. Digits separated by a black dot are in a 1:2 ratio. Not all possible dots are given. (There is no negative constraint.)

Drawings in the grid are simply cosmetic!
