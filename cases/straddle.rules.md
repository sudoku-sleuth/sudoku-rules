---
format: open-rules
title: Straddle
setter: Marty Sears
source: https://tinyurl.com/yszb8574
case: https://sudoku-sleuth.com/cases/straddle
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
---

```rules
sudoku 9x9
kropki-1: kropki r4c2-r5c2 colour "white"
kropki-2: kropki r5c8-r6c8 colour "white"
kropki-3: kropki r6c3-r6c4 colour "white"
kropki-4: kropki r4c6-r4c7 colour "white"
whispers-1: whispers r4c6-r3c6-r4c5-r3c5-r2c5-r1c5-r1c6 gap 5
whispers-2: whispers r9c4-r9c5-r8c5-r7c5-r6c5-r7c4-r6c4 gap 5
renban-1: renban r5c4-r5c3-r5c2-r5c1-r4c2
renban-2: renban r5c6-r5c7-r5c8-r5c9-r6c8
pair-1: pair r1c7-r2c7 sum 10
pair-2: pair r8c3-r9c3 sum 10
pair-3: pair r7c9-r7c8 less
pair-4: pair r3c2-r3c1 less
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[7,4],[9,4],[9,9],[0,9],[0,5],[2,5]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[9,4],[9,0],[5,0],[5,2]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[9,5],[7,5]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[5,9],[5,7]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[4,9],[4,7]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0,5],[0,4],[2,4]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[5,0],[4,0],[4,2]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[0,4],[0,0],[4,0]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[3.917,2.083],[3.75,2.25]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[3.583,2.417],[3.417,2.583]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[3.25,2.75],[3.083,2.917]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[2.917,3.083],[2.75,3.25]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[2.583,3.417],[2.417,3.583]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[2.25,3.75],[2.083,3.917]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[0.083,0.083],[0.25,0.25]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[0.417,0.417],[0.583,0.583]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[0.75,0.75],[0.917,0.917]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[1.083,1.083],[1.25,1.25]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[1.417,1.417],[1.583,1.583]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[1.75,1.75],[1.917,1.917]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[2.083,2.083],[2.25,2.25]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[2.417,2.417],[2.583,2.583]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[2.75,2.75],[2.917,2.917]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[3.083,3.083],[3.25,3.25]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[3.417,3.417],[3.583,3.583]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[3.75,3.75],[3.917,3.917]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[4.083,4.083],[4.25,4.25]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[4.417,4.417],[4.583,4.583]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[4.583,4.417],[4.417,4.583]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[4.75,4.75],[4.917,4.917]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[4.917,4.083],[4.75,4.25]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[4.25,4.75],[4.083,4.917]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[3.917,5.083],[3.75,5.25]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[3.583,5.417],[3.417,5.583]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[3.25,5.75],[3.083,5.917]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[2.083,5.083],[2.25,5.25]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[2.417,5.417],[2.583,5.583]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[2.75,5.75],[2.917,5.917]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[3.083,6.083],[3.25,6.25]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[3.417,6.417],[3.583,6.583]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[3.75,6.75],[3.917,6.917]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[2.917,6.083],[2.75,6.25]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[2.583,6.417],[2.417,6.583]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[2.25,6.75],[2.083,6.917]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[1.917,7.083],[1.75,7.25]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[1.583,7.417],[1.417,7.583]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[1.25,7.75],[1.083,7.917]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[0.917,8.083],[0.75,8.25]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[0.583,8.417],[0.417,8.583]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"line","points":[[0.25,8.75],[0.083,8.917]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[5.083,5.083],[5.25,5.25]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"line","points":[[5.417,5.417],[5.583,5.583]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"line","points":[[5.75,5.75],[5.917,5.917]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"line","points":[[6.083,6.083],[6.25,6.25]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"line","points":[[6.417,6.417],[6.583,6.583]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"line","points":[[6.75,6.75],[6.917,6.917]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"line","points":[[7.083,7.083],[7.25,7.25]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"line","points":[[7.417,7.417],[7.583,7.583]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"line","points":[[7.75,7.75],[7.917,7.917]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"line","points":[[8.083,8.083],[8.25,8.25]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"line","points":[[8.417,8.417],[8.583,8.583]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"line","points":[[8.75,8.75],[8.917,8.917]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"line","points":[[6.917,5.083],[6.75,5.25]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"line","points":[[6.583,5.417],[6.417,5.583]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"line","points":[[6.25,5.75],[6.083,5.917]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"line","points":[[5.917,6.083],[5.75,6.25]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"line","points":[[5.583,6.417],[5.417,6.583]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"line","points":[[5.25,6.75],[5.083,6.917]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"line","points":[[5.083,2.083],[5.25,2.25]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"line","points":[[5.417,2.417],[5.583,2.583]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"line","points":[[5.75,2.75],[5.917,2.917]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"line","points":[[6.083,3.083],[6.25,3.25]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"line","points":[[6.417,3.417],[6.583,3.583]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"line","points":[[6.75,3.75],[6.917,3.917]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"line","points":[[5.917,3.083],[5.75,3.25]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"line","points":[[5.583,3.417],[5.417,3.583]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"line","points":[[5.25,3.75],[5.083,3.917]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"line","points":[[6.917,2.083],[6.75,2.25]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"line","points":[[6.583,2.417],[6.417,2.583]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"line","points":[[6.25,2.75],[6.083,2.917]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"line","points":[[8.917,0.083],[8.75,0.25]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"line","points":[[8.583,0.417],[8.417,0.583]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"line","points":[[8.25,0.75],[8.083,0.917]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"line","points":[[7.917,1.083],[7.75,1.25]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"line","points":[[7.583,1.417],[7.417,1.583]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"line","points":[[7.25,1.75],[7.083,1.917]],"color":"#8c8c8c","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,6.5],"width":0.24,"height":0.24,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,8],"width":0.24,"height":0.24,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,2.5],"width":0.24,"height":0.24,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,1],"width":0.24,"height":0.24,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
```

• The grid is divided into 12 regions. Fill the grid with the digits 1-9 so that each digit appears exactly once in each row, column and region.
• IRREGULAR SQUISHDOKU: Solid grey lines are regular region borders. Dashed lines are also region borders, but digits can sit on top of these. A digit straddling a dashed line is simultaneously part of both regions that the dashed line separates.
• RENBAN: Digits on a pink line form a non-repeating consecutive set, but these can be arranged in any order.
• GERMAN WHISPER: Adjacent digits on a green line must have a difference of at least 5.
• KROPKI: Two digits joined by a white dot are consecutive. (Not all possible white dots are shown.)
• X CLUES: Two digits joined by an X sum to 10. (Not all possible Xs are shown.)
• INEQUALITY ARROWS: An inequality arrow points towards the smaller of the two digits it sits between.
