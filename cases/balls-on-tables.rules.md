---
format: open-rules
title: Balls On Tables
setter: Marty Sears
source: https://sudokupad.app/9ujztd7sf9
case: https://sudoku-sleuth.com/cases/balls-on-tables
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
whispers-1: whispers r5c9-r4c9-r5c8-r6c7-r7c6-r8c5-r9c5 gap 5
whispers-2: whispers r4c9-r3c8-r2c7-r3c6-r4c5-r5c4-r6c3-r7c4-r8c5 gap 5
whispers-3: whispers r6c3-r7c3 gap 5
whispers-4: whispers r8c7-r7c7-r8c8-r9c8 gap 5
whispers-5: whispers r7c7-r6c8-r7c9-r8c8 gap 5
whispers-6: whispers r7c9-r8c9 gap 5
whispers-7: whispers r5c1-r4c1-r5c2-r6c2 gap 5
whispers-8: whispers r4c1-r3c2-r2c3-r1c4-r2c5-r3c4-r4c3-r5c2 gap 5
whispers-9: whispers r2c5-r3c5 gap 5
```

```drawing
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[5.5,2.5],[7.5,4.5],[8.5,4.5]],"color":"#FFFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[1.5,6.5],[3.5,8.5],[7.5,4.5]],"color":"#FFFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[4.5,8.5]],"color":"#FFFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[7.5,7.5],[6.5,8.5],[7.5,8.5]],"color":"#FFFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[5.5,7.5],[6.5,8.5]],"color":"#FFFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[9.1,8.7],[9.1,9.1],[-0.1,9.1],[-0.1,-0.1],[9.1,-0.1],[9.1,8.7]],"color":"#c18842ff","thickness":11.52,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[8.833,9.167],[9.167,9.167],[9.167,-0.167],[-0.167,-0.167],[-0.167,9.167],[8.833,9.167]],"color":"#d2b189ff","thickness":8.32,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[-0.167,1.833],[-0.167,1.167]],"color":"#d2b189ff","thickness":8.32,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[9.167,1.833],[9.167,3.833]],"color":"#d2b189ff","thickness":8.32,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[7,6],[9,6],[9,9],[6,9],[6,6],[7,6]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[9,6],[9,3],[6,3],[6,6],[3,6],[3,9],[6,9]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[9,3],[9,0],[6,0],[6,3],[3,3],[3,6],[0,6],[0,9],[3,9]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[6,0],[3,0],[3,3],[0,3],[0,6]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[3,0],[0,0],[0,3]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.667,2.5],"width":0.76,"height":0.52,"rounded":true,"fill":"#00000015","thickness":0,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.667,1.5],"width":0.76,"height":0.52,"rounded":true,"fill":"#00000015","thickness":0,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.667,4.5],"width":0.76,"height":0.52,"rounded":true,"fill":"#00000015","thickness":0,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.667,4.5],"width":0.76,"height":0.52,"rounded":true,"fill":"#00000015","thickness":0,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.667,5.5],"width":0.76,"height":0.52,"rounded":true,"fill":"#00000015","thickness":0,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.667,6.5],"width":0.76,"height":0.52,"rounded":true,"fill":"#00000015","thickness":0,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.667,7.5],"width":0.76,"height":0.52,"rounded":true,"fill":"#00000015","thickness":0,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.667,3.5],"width":0.76,"height":0.52,"rounded":true,"fill":"#00000015","thickness":0,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,7.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#d8a9f1ff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#d8a9f1ff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,1.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#d8a9f1ff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,3.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#d8a9f1ff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,4.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#d8a9f1ff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,6.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#d8a9f1ff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,5.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#d8a9f1ff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,4.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#d8a9f1ff","stroke":"#FFFFFF","thickness":1.92,"angle":0}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.375,1.375],"width":0.14,"height":0.14,"rounded":true,"fill":"#ffffff43","thickness":0,"angle":0}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.375,2.375],"width":0.14,"height":0.14,"rounded":true,"fill":"#ffffff43","thickness":0,"angle":0}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.375,3.375],"width":0.14,"height":0.14,"rounded":true,"fill":"#ffffff43","thickness":0,"angle":0}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.375,6.375],"width":0.14,"height":0.14,"rounded":true,"fill":"#ffffff43","thickness":0,"angle":0}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.375,4.375],"width":0.14,"height":0.14,"rounded":true,"fill":"#ffffff43","thickness":0,"angle":0}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.375,4.375],"width":0.14,"height":0.14,"rounded":true,"fill":"#ffffff43","thickness":0,"angle":0}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.375,5.375],"width":0.14,"height":0.14,"rounded":true,"fill":"#ffffff43","thickness":0,"angle":0}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.375,7.375],"width":0.14,"height":0.14,"rounded":true,"fill":"#ffffff43","thickness":0,"angle":0}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.375,1.375],"width":0.32,"height":0.32,"rounded":true,"fill":"#ffffff21","thickness":0,"angle":0}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.375,2.375],"width":0.32,"height":0.32,"rounded":true,"fill":"#ffffff21","thickness":0,"angle":0}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.375,3.375],"width":0.32,"height":0.32,"rounded":true,"fill":"#ffffff21","thickness":0,"angle":0}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.375,6.375],"width":0.32,"height":0.32,"rounded":true,"fill":"#ffffff21","thickness":0,"angle":0}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.375,4.375],"width":0.32,"height":0.32,"rounded":true,"fill":"#ffffff21","thickness":0,"angle":0}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.375,4.375],"width":0.32,"height":0.32,"rounded":true,"fill":"#ffffff21","thickness":0,"angle":0}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.375,5.375],"width":0.32,"height":0.32,"rounded":true,"fill":"#ffffff21","thickness":0,"angle":0}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.375,7.375],"width":0.32,"height":0.32,"rounded":true,"fill":"#ffffff21","thickness":0,"angle":0}}
```

Normal sudoku rules apply.

Adjacent digits along a green line have a difference of at least 5.

The value of a table equals the sum of the balls on that table. All three tables have the same value.
