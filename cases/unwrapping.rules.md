---
fog:
  initiallyLit:
    - 9
    - 15
    - 16
    - 17
    - 56
    - 78
format: open-rules
title: Unwrapping
setter: Sandra & Nala
source: https://sudokupad.app/0exn4lju81
case: https://sudoku-sleuth.com/cases/unwrapping
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r7c8-r7c9 colour "white"
kropki-2: kropki r2c7-r2c8 colour "black"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[2.5,8.5],[1.5,8.5],[0.5,7.5]],"color":"#ffaf7cff","thickness":5.76,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.65,7.45],[0.45,7.45],[0.45,7.65]],"color":"#ffaf7cff","thickness":5.76,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[8.5,7.5],[7.5,6.5]],"color":"#ffaf7cff","thickness":5.76,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[7.45,6.65],[7.45,6.45],[7.65,6.45]],"color":"#ffaf7cff","thickness":5.76,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[1.5,2.5],[0.5,3.5],[0.7,3.5]],"color":"#a9a5f9ff","thickness":5.76,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[0.5,3.3]],"color":"#a9a5f9ff","thickness":5.76,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[2.5,4.5],[1.5,5.5],[1.7,5.5]],"color":"#83dca9ff","thickness":5.76,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[1.5,5.3]],"color":"#83dca9ff","thickness":5.76,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[0.5,1.5],[0.65,1.35]],"color":"#83dca9ff","thickness":5.76,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[0.35,1.35]],"color":"#83dca9ff","thickness":5.76,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[5.5,5.5],[6.5,5.5],[6.375,5.375]],"color":"#fd5eaaff","thickness":5.76,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[6.375,5.625]],"color":"#fd5eaaff","thickness":5.76,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[8.5,8.5],[7.5,8.5],[7.625,8.375]],"color":"#fd5eaaff","thickness":5.76,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[7.5,8.5],[7.625,8.625]],"color":"#fd5eaaff","thickness":5.76,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[4.5,8.5],[4.5,7.5],[4.625,7.625]],"color":"#f4df96ff","thickness":5.76,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[4.375,7.625]],"color":"#f4df96ff","thickness":5.76,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[7.5,2.5],[7.5,1.5],[7.625,1.625]],"color":"#eabdd5ff","thickness":5.76,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[7.375,1.625]],"color":"#eabdd5ff","thickness":5.76,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[5.5,0.5],[5.563,0.563],[5.563,0.688]],"color":"#eabdd5ff","thickness":5.76,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[5.563,0.563],[5.563,0.438],[5.313,0.438]],"color":"#eabdd5ff","thickness":5.76,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[4.75,3.55],[4.45,3.55],[4.45,3.75],[4.55,3.75],[4.6,3.7],[4.8,3.7],[4.85,3.65],[4.85,3.35],[4.8,3.3],[4.5,3.3],[4.75,3.45],[4.55,3.45],[4.6,3.5],[4.7,3.5],[4.85,3.55]],"color":"#ffe9bfff","thickness":9.6,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[4.5,3.3],[4.45,3.35],[4.45,3.45],[4.55,3.45]],"color":"#ffe9bfff","thickness":9.6,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[4.85,3.55],[4.8,3.6],[4.55,3.65],[4.75,3.65],[4.5,3.6],[4.45,3.55],[4.45,3.45]],"color":"#ffe9bfff","thickness":9.6,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[4.45,3.45],[4.45,3.65],[4.5,3.6],[4.5,3.4],[4.45,3.45]],"color":"#ffdc90ff","thickness":3.2,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[4.5,3.4],[4.5,3.3],[4.45,3.45],[4.45,3.25],[4.5,3.3]],"color":"#ffdc90ff","thickness":3.2,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[4.45,3.35],[4.4,3.4],[4.4,3.7],[4.45,3.65],[4.45,3.75],[4.4,3.7]],"color":"#ffdc90ff","thickness":3.2,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[4.3,3.1],[4.3,3.3],[4.4,3.4],[4.35,3.55],[4.35,3.65],[4.25,3.65],[4.2,3.7],[4.15,3.65],[4.35,3.45],[4.4,3.5],[4.45,3.65],[4.5,3.7],[4.5,3.9]],"color":"#bbc8ffff","thickness":3.2,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[4.3,3.5],[4.1,3.5],[4.1,3.4],[4.15,3.35],[4.25,3.35],[4.35,3.45]],"color":"#bbc8ffff","thickness":3.2,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[4.9,3.5],[4.7,3.5],[4.55,3.55],[4.4,3.5],[4.7,3.5]],"color":"#bbc8ffff","thickness":3.2,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[4.45,3.45]],"color":"#bbc8ffff","thickness":3.2,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[4.65,3.75],[4.7,3.7],[4.7,3.3],[4.65,3.25]],"color":"#bbc8ffff","thickness":3.2,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,6.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#ffaf7cff","thickness":6.4,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,6.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#a9a5f9ff","thickness":6.4,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,0.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#83dca9ff","thickness":6.4,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,7.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#fd5eaaff","thickness":6.4,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,2.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#f4df96ff","thickness":6.4,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,0.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#eabdd5ff","thickness":6.4,"angle":0}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,8],"width":0.34,"height":0.34,"rounded":true,"fill":"#bfbfbfff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,1],"width":0.34,"height":0.34,"rounded":true,"fill":"#bfbfbfff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7],"width":0.34,"height":0.34,"rounded":true,"fill":"#bfbfbfff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,6],"width":0.34,"height":0.34,"rounded":true,"fill":"#bfbfbfff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2],"width":0.34,"height":0.34,"rounded":true,"fill":"#bfbfbfff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,4],"width":0.34,"height":0.34,"rounded":true,"fill":"#bfbfbfff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,1],"width":0.34,"height":0.34,"rounded":true,"fill":"#bfbfbfff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,1.5],"width":0.34,"height":0.34,"rounded":true,"fill":"#bfbfbfff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,1],"width":0.34,"height":0.34,"rounded":true,"fill":"#bfbfbfff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,8.5],"width":0.34,"height":0.34,"rounded":true,"fill":"#bfbfbfff","stroke":"#000000","thickness":1.28,"angle":0}}
```

Nala got a present and she was allowed to unwrap it all by herself. She got a little bit too enthusiastic about it and ripped everything apart, including the colorful arrows we had planned to use for a puzzle. Maybe it’s still usable? 

Normal 9x9 Sudoku rules apply: Place the digits 1-9 in every row, column and box exactly once each.   

The grid is partially covered in fog. Placing correct digits will clear the fog from surrounding cells, possibly revealing more clues.  

Arrows have been detached from their circles. Digits along an arrow must still sum to the digit in the corresponding circle. Each arrow has its own color and arrows of the same color belong to the circle with matching color. No arrows of the same color overlap.

Digits separated by a white dot are consecutive. Digits separated by a black dot are in a 1:2 ratio.
Grey dots are ambiguous and can turn out to be either functioning as white or black dot for the digits they separate. Not all possible dots are given. (There is no negative constraint.)
