---
format: open-rules
title: "Equality Cages 114: Now in 3D!"
setter: gUBBLOR
source: https://sudokupad.app/wmept74u42
case: https://sudoku-sleuth.com/cases/equality-cages-114-now-in-3d
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
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
exported: c228e83c01f4411dbb3a9abbc6013f93
---

```rules
thermo-1: thermo r6c4-r7c4-r7c3-r6c3
thermo-2: thermo r7c1-r7c2
thermo-3: thermo r9c2-r9c3
between-1: between r1c2 ends ["r2c1","r1c3"]
between-2: between r4c4-r4c3 ends ["r3c4","r4c2"]
whispers-1: whispers r1c8-r1c9-r2c9 gap 4
whispers-2: whispers r3c9-r4c9-r4c8 gap 4
whispers-3: whispers r4c7-r4c6-r3c6 gap 4
whispers-4: whispers r2c6-r1c6-r1c7 gap 4
renban-1: renban r6c8-r7c9
renban-2: renban r7c7-r8c7-r9c8
renban-3: renban r8c8-r8c9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fff3f3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fff3f3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fff3f3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fff3f3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fff3f3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fff3f3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fff3f3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fff3f3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fff3f3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fff3f3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fff3f3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fff3f3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fff3f3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fff3f3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fff3f3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fff3f3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f4f3ffff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f4f3ffff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f4f3ffff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f4f3ffff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f4f3ffff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f4f3ffff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f4f3ffff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f4f3ffff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f4f3ffff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f4f3ffff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f4f3ffff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f4f3ffff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f4f3ffff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f4f3ffff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f4f3ffff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f4f3ffff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f0fff3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f0fff3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f0fff3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f0fff3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f0fff3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f0fff3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f0fff3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f0fff3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f0fff3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f0fff3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f0fff3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f0fff3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f0fff3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f0fff3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f0fff3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f0fff3ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffeaff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffeaff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffeaff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffeaff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffeaff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffeaff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffeaff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffeaff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffeaff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffeaff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffeaff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffeaff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffeaff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffeaff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffeaff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffeaff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"line","points":[[5,1],[5,2],[9,2],[9,9],[7,9],[7,7],[9,7]],"color":"#000000","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"line","points":[[5,1],[5,0],[7,0],[7,4],[5,4],[5,2]],"color":"#000000","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"line","points":[[9,2],[9,0],[7,0]],"color":"#000000","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"line","points":[[7,4],[9,4]],"color":"#000000","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"line","points":[[9,5],[7,5],[7,7],[5,7],[5,9],[7,9]],"color":"#000000","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"line","points":[[7,5],[5,5],[5,7]],"color":"#000000","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-103","rules":[],"visual":{"kind":"line","points":[[5,9],[2,9],[2,7],[4,7],[4,9]],"color":"#000000","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-104","rules":[],"visual":{"kind":"line","points":[[5,0],[4,0],[4,4],[2,4],[2,2],[4,2]],"color":"#000000","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-105","rules":[],"visual":{"kind":"line","points":[[4,0],[2,0],[2,2],[0,2],[0,5],[2,5],[2,7],[0,7],[0,5]],"color":"#000000","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-106","rules":[],"visual":{"kind":"line","points":[[2,4],[0,4]],"color":"#000000","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-107","rules":[],"visual":{"kind":"line","points":[[2,9],[0,9],[0,7]],"color":"#000000","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-108","rules":[],"visual":{"kind":"line","points":[[4,7],[4,5],[2,5]],"color":"#000000","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-109","rules":[],"visual":{"kind":"line","points":[[2,0],[0,0],[0,2]],"color":"#000000","thickness":3.2,"rounded":true,"layer":"over"}}
- {"id":"drawing-110","rules":[],"visual":{"kind":"cage","cells":[19],"label":"B"}}
- {"id":"drawing-111","rules":[],"visual":{"kind":"cage","cells":[24],"label":"B"}}
- {"id":"drawing-112","rules":[],"visual":{"kind":"cage","cells":[23],"label":"E"}}
- {"id":"drawing-113","rules":[],"visual":{"kind":"cage","cells":[7,8,17],"label":"C"}}
- {"id":"drawing-114","rules":[],"visual":{"kind":"cage","cells":[52],"label":"C"}}
- {"id":"drawing-115","rules":[],"visual":{"kind":"cage","cells":[60],"label":"A"}}
- {"id":"drawing-116","rules":[],"visual":{"kind":"cage","cells":[59],"label":"D"}}
- {"id":"drawing-117","rules":[],"visual":{"kind":"cage","cells":[57],"label":"C"}}
- {"id":"drawing-118","rules":[],"visual":{"kind":"cage","cells":[47],"label":"C"}}
- {"id":"drawing-119","rules":[],"visual":{"kind":"cage","cells":[55],"label":"A"}}
- {"id":"drawing-120","rules":[],"visual":{"kind":"cage","cells":[54],"label":"D"}}
- {"id":"drawing-121","rules":[],"visual":{"kind":"cage","cells":[63],"label":"E"}}
```

The grid consists of 4 differently colored 4x4 areas. Each area is a different layer (considered to be stacked on top of each other), and together they make up a 4x4x4 cube. There are 4 groupings of digits; low (1,2,3,4), high (6,7,8,9), even (2,4,6,8), odd (1,3,7,9). Each layer is to be filled with digits from only one group, and no two layers can have the same grouping of digits. It is up to the solver to deduce which group of digits belong in which layer. Digits may not repeat in any row, column, or 2x2 box WITHIN ITS LAYER, and digits can also not appear in the same relative position in another layer. For example, the black 6 on the image means 6 could never be in any of the cells with the smaller-sized digits.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Digits may not repeat in a cage. The letters are for identification purposes only.

Between lines (top left layer): Cells along lines between two filled circles must have values between those in the circles. Digits may repeat on between lines.

Dutch Whispers (top right layer): Adjacent digits along each Dutch Whisper line must have a difference of at least 4. Digits may repeat on the line.

Thermometers (bottom left layer): Digits along each thermometer must increase starting from the bulb end.

Renban (bottom right layer): Digits along each renban line must be a set of consecutive digits in any order, and must not repeat.

Link to image with visual aid/solved example here: https://shorturl.at/gnzES

There is a setting (under Gameplay) called 'Conflict Checker', and I'd recommend you set that to 'Off', as well as 'Check Pencilmarks' which I'd also recommend setting to 'Off'.
