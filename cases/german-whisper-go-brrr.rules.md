---
format: open-rules
title: German Whisper go brrr
setter: sujoyku
source: https://sudokupad.app/ie80dnv9d8
case: https://sudoku-sleuth.com/cases/german-whisper-go-brrr
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
whispers-1: whispers r1c3-r1c2-r2c1-r3c2-r2c3-r2c2 gap 5
whispers-2: whispers r7c2-r8c2-r9c2-r9c3-r8c3-r8c2 gap 5
whispers-3: whispers r9c5-r8c5-r8c6 gap 5
whispers-4: whispers r9c8-r8c8-r8c9 gap 5
whispers-5: whispers r1c5-r2c5-r3c5-r3c6-r3c7-r2c7-r1c7 gap 5
whispers-6: whispers r3c6-r2c6 gap 5
whispers-7: whispers r6c3-r6c4-r5c4-r4c4-r4c3-r5c3-r5c4 gap 5
whispers-8: whispers r4c5-r5c5-r5c6-r4c6 gap 5 loop true
pair-1: pair r4c1-r4c2 relation {"op":"sum","value":10}
pair-2: pair r6c8-r6c9 relation {"op":"sum","value":10}
pair-3: pair r4c8-r4c9 relation {"op":"sum","value":10}
pair-4: pair r1c9-r2c9 relation {"op":"sum","value":5}
pair-5: pair r3c8-r4c8 relation {"op":"sum","value":5}
```

```drawing
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.2,5.5],[0.8,5.5]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0.8,5.6],[0.7,5.5],[0.8,5.4]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[0.2,5.4],[0.3,5.5],[0.2,5.6]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[0.65,5.65],[0.5,5.5],[0.5,5.8]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[0.7,5.6],[0.6,5.6],[0.6,5.7]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[0.6,5.8],[0.5,5.7],[0.4,5.8]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[0.65,5.35],[0.5,5.5],[0.5,5.3],[0.6,5.2]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[0.7,5.4],[0.6,5.4],[0.6,5.3]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[0.5,5.2],[0.5,5.3],[0.4,5.2]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[0.35,5.65],[0.5,5.5],[0.35,5.35]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[0.4,5.7],[0.4,5.6],[0.3,5.6]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[0.4,5.3],[0.4,5.4],[0.3,5.4]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[1.2,6.5],[1.8,6.5]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[1.8,6.6],[1.7,6.5],[1.8,6.4]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[1.65,6.65],[1.5,6.5],[1.5,6.8]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[1.6,6.7],[1.6,6.6],[1.7,6.6]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[1.6,6.8],[1.5,6.7],[1.4,6.8]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[1.2,6.6],[1.3,6.5],[1.2,6.4]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[1.6,6.2],[1.5,6.3],[1.5,6.5],[1.65,6.35]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[1.7,6.4],[1.6,6.4],[1.6,6.3]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[1.4,6.7],[1.4,6.6],[1.5,6.5],[1.35,6.35]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[1.3,6.4],[1.4,6.4],[1.4,6.3]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[1.35,6.65],[1.4,6.6],[1.3,6.6]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[1.5,6.2],[1.5,6.3],[1.4,6.2]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[4.8,8.5],[4.7,8.5],[4.8,8.4]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[4.8,8.6],[4.7,8.5],[4.5,8.5],[4.5,8.8]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[4.6,8.8],[4.5,8.7],[4.4,8.8]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[4.65,8.65],[4.5,8.5],[4.65,8.35]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[4.7,8.6],[4.6,8.6],[4.6,8.7]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[4.7,8.4],[4.6,8.4],[4.6,8.3]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[4.2,8.5],[4.5,8.5],[4.5,8.3],[4.6,8.2]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[4.2,8.6],[4.3,8.5],[4.2,8.4]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[4.5,8.2],[4.5,8.3],[4.4,8.2]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[4.35,8.65],[4.5,8.5],[4.35,8.35]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[4.4,8.7],[4.4,8.6],[4.3,8.6]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[4.3,8.4],[4.4,8.4],[4.4,8.3]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[8.2,7.5],[8.8,7.5]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[8.8,7.6],[8.7,7.5],[8.8,7.4]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[8.65,7.65],[8.5,7.5],[8.65,7.35]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[8.6,7.7],[8.6,7.6],[8.7,7.6]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[8.7,7.4],[8.6,7.4],[8.6,7.3]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[8.4,7.7],[8.4,7.6],[8.5,7.5],[8.4,7.4],[8.4,7.3]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[8.3,7.4],[8.4,7.4],[8.35,7.35]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[8.35,7.65],[8.4,7.6],[8.3,7.6]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[8.2,7.4],[8.3,7.5],[8.2,7.6]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"line","points":[[8.5,7.2],[8.5,7.8]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[8.6,7.2],[8.5,7.3],[8.4,7.2]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"line","points":[[8.6,7.8],[8.5,7.7],[8.4,7.8]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"line","points":[[6.5,4.8],[6.5,4.7],[6.6,4.8]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"line","points":[[6.8,4.5],[6.7,4.5],[6.8,4.4]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"line","points":[[6.8,4.6],[6.7,4.5],[6.5,4.5],[6.5,4.7],[6.4,4.8]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"line","points":[[6.65,4.35],[6.5,4.5],[6.65,4.65]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"line","points":[[6.7,4.4],[6.6,4.4],[6.6,4.3]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"line","points":[[6.6,4.7],[6.6,4.6],[6.7,4.6]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"line","points":[[6.6,4.2],[6.5,4.3],[6.5,4.5],[6.2,4.5]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"line","points":[[6.5,4.2],[6.5,4.3],[6.4,4.2]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"line","points":[[6.35,4.35],[6.5,4.5],[6.4,4.6],[6.4,4.7]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"line","points":[[6.4,4.3],[6.4,4.4],[6.3,4.4]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"line","points":[[6.35,4.65],[6.4,4.6],[6.3,4.6]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"line","points":[[6.2,4.4],[6.3,4.5],[6.2,4.6]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"line","points":[[3.2,3.5],[3.8,3.5]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"line","points":[[3.8,3.6],[3.7,3.5],[3.8,3.4]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"line","points":[[3.2,3.4],[3.3,3.5],[3.2,3.6]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"line","points":[[3.65,3.65],[3.5,3.5],[3.65,3.35]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"line","points":[[3.6,3.7],[3.6,3.6],[3.7,3.6]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"line","points":[[3.7,3.4],[3.6,3.4],[3.6,3.3]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"line","points":[[3.5,3.8],[3.5,3.3],[3.6,3.2]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"line","points":[[3.6,3.8],[3.5,3.7],[3.4,3.8]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"line","points":[[3.5,3.2],[3.5,3.3],[3.4,3.2]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"line","points":[[3.35,3.65],[3.5,3.5],[3.35,3.35]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"line","points":[[3.4,3.7],[3.4,3.6],[3.3,3.6]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"line","points":[[3.4,3.3],[3.4,3.4],[3.3,3.4]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"line","points":[[2.5,2.2],[2.5,2.8]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"line","points":[[2.6,2.2],[2.5,2.3],[2.4,2.2]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"line","points":[[2.6,2.8],[2.5,2.7],[2.4,2.8]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"line","points":[[2.65,2.65],[2.5,2.5],[2.8,2.5]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"line","points":[[2.7,2.6],[2.6,2.6],[2.6,2.7]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"line","points":[[2.8,2.6],[2.7,2.5],[2.8,2.4]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"line","points":[[2.65,2.35],[2.5,2.5],[2.2,2.5]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"line","points":[[2.7,2.4],[2.6,2.4],[2.6,2.3]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"line","points":[[2.2,2.4],[2.3,2.5],[2.2,2.6]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"line","points":[[2.35,2.65],[2.5,2.5],[2.35,2.35]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"line","points":[[2.4,2.7],[2.4,2.6],[2.3,2.6]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"line","points":[[2.4,2.3],[2.4,2.4],[2.3,2.4]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"line","points":[[5.2,0.5],[5.8,0.5]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"line","points":[[5.8,0.6],[5.7,0.5],[5.8,0.4]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"line","points":[[5.2,0.4],[5.3,0.5],[5.2,0.6]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"line","points":[[5.65,0.65],[5.5,0.5],[5.65,0.35]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"line","points":[[5.7,0.6],[5.6,0.6],[5.6,0.7]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"line","points":[[5.7,0.4],[5.6,0.4],[5.6,0.3]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"line","points":[[5.5,0.8],[5.5,0.3],[5.6,0.2]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"line","points":[[5.6,0.8],[5.5,0.7],[5.4,0.8]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"line","points":[[5.5,0.2],[5.5,0.3],[5.4,0.2]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"line","points":[[5.35,0.65],[5.5,0.5],[5.35,0.35]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-103","rules":[],"visual":{"kind":"line","points":[[5.4,0.7],[5.4,0.6],[5.3,0.6]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-104","rules":[],"visual":{"kind":"line","points":[[5.4,0.3],[5.4,0.4],[5.3,0.4]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-105","rules":[],"visual":{"kind":"line","points":[[7.2,1.5],[7.8,1.5]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-106","rules":[],"visual":{"kind":"line","points":[[7.8,1.6],[7.7,1.5],[7.8,1.4]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-107","rules":[],"visual":{"kind":"line","points":[[7.2,1.4],[7.3,1.5],[7.2,1.6]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-108","rules":[],"visual":{"kind":"line","points":[[7.65,1.65],[7.5,1.5],[7.65,1.35]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-109","rules":[],"visual":{"kind":"line","points":[[7.7,1.6],[7.6,1.6],[7.6,1.7]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-110","rules":[],"visual":{"kind":"line","points":[[7.7,1.4],[7.6,1.4],[7.6,1.3]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-111","rules":[],"visual":{"kind":"line","points":[[7.5,1.8],[7.5,1.3],[7.6,1.2]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-112","rules":[],"visual":{"kind":"line","points":[[7.6,1.8],[7.5,1.7],[7.4,1.8]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-113","rules":[],"visual":{"kind":"line","points":[[7.5,1.2],[7.5,1.3],[7.4,1.2]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-114","rules":[],"visual":{"kind":"line","points":[[7.35,1.65],[7.5,1.5],[7.35,1.35]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-115","rules":[],"visual":{"kind":"line","points":[[7.4,1.7],[7.4,1.6],[7.3,1.6]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-116","rules":[],"visual":{"kind":"line","points":[[7.4,1.3],[7.4,1.4],[7.3,1.4]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- German Whispers: Adjacent digits on a green line must have a difference of at least 5.

- XV: Digits joined by a V sum to 5. Digits joined by an X sum to 10. Not all XV are given.
