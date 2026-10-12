---
format: open-rules
title: Parroty Lines
setter: Marty Sears
source: https://sudokupad.app/izm586jif0
case: https://sudoku-sleuth.com/cases/parroty-lines
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3-r2c1-r2c2-r2c3-r3c1-r3c2-r3c3 connected true
cage-2: cage r1c4-r1c5-r1c6-r2c4-r2c5-r2c6-r3c4-r3c5-r3c6 connected true
cage-3: cage r1c7-r1c8-r1c9-r2c7-r2c8-r2c9-r3c7-r3c8-r3c9 connected true
cage-4: cage r4c1-r4c2-r4c3-r5c1-r5c2-r5c3-r6c1-r6c2-r6c3 connected true
cage-5: cage r4c4-r4c5-r4c6-r5c4-r5c5-r5c6-r6c4-r6c5-r6c6 connected true
cage-6: cage r4c7-r4c8-r4c9-r5c7-r5c8-r5c9-r6c7-r6c8-r6c9 connected true
cage-7: cage r7c1-r7c2-r7c3-r8c1-r8c2-r8c3-r9c1-r9c2-r9c3 connected true
cage-8: cage r7c4-r7c5-r7c6-r8c4-r8c5-r8c6-r9c4-r9c5-r9c6 connected true
cage-9: cage r7c7-r7c8-r7c9-r8c7-r8c8-r8c9-r9c7-r9c8-r9c9 connected true
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[6.889,1.556],[6.889,1.778],[6.778,1.889],[6.556,1.889],[6.833,1.611]],"color":"#ffef98ff","thickness":4,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[6.889,1.667],[6.778,1.667],[6.889,1.778]],"color":"#ffef98ff","thickness":4,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[6.778,1.889],[6.667,1.778],[6.667,1.889]],"color":"#ffef98ff","thickness":4,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.556,7.889],[3.778,7.889],[3.889,7.778],[3.889,7.556],[3.778,7.667],[3.889,7.778]],"color":"#ffef98ff","thickness":4,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[3.667,7.889],[3.667,7.778],[3.778,7.889]],"color":"#ffef98ff","thickness":4,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.889,7.667],[3.778,7.667],[3.611,7.833]],"color":"#ffef98ff","thickness":4,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[2.556,0.889],[2.778,0.889],[2.889,0.778],[2.889,0.556],[2.667,0.778],[2.778,0.889]],"color":"#ffef98ff","thickness":4,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[2.667,0.889],[2.667,0.778],[2.611,0.833]],"color":"#ffef98ff","thickness":4,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[2.889,0.778],[2.778,0.667],[2.889,0.667]],"color":"#ffef98ff","thickness":4,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[2.667,0.778],[2.611,0.722]],"color":"#ffef98ff","thickness":4,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[2.778,0.667],[2.722,0.611]],"color":"#ffef98ff","thickness":4,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[0.722,7.833],[0.778,7.889],[0.889,7.778],[0.778,7.667],[0.889,7.556],[0.889,7.667],[0.778,7.667]],"color":"#ffef98ff","thickness":4,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[0.722,7.833],[0.667,7.778],[0.556,7.889],[0.778,7.889]],"color":"#ffef98ff","thickness":4,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[0.889,7.778],[0.889,7.667]],"color":"#ffef98ff","thickness":4,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[0.778,7.667],[0.667,7.778],[0.667,7.889]],"color":"#ffef98ff","thickness":4,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[2.722,5.833],[2.778,5.889],[2.889,5.778],[2.833,5.722],[2.889,5.667],[2.889,5.778]],"color":"#ffef98ff","thickness":4,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[2.722,5.833],[2.667,5.778],[2.889,5.556],[2.889,5.667],[2.833,5.611]],"color":"#ffef98ff","thickness":4,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[2.778,5.889],[2.667,5.889],[2.667,5.778],[2.556,5.889],[2.667,5.889]],"color":"#ffef98ff","thickness":4,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[2.833,5.722],[2.778,5.667]],"color":"#ffef98ff","thickness":4,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[8.857,1.143],[8.857,1.857]],"color":"#ffe441ff","thickness":13,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[4.857,1.143],[4.857,1.857]],"color":"#ffe441ff","thickness":13,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[3.857,6.857],[3.857,6.143]],"color":"#ffe441ff","thickness":13,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[2.857,7.143],[2.857,7.857]],"color":"#ffe441ff","thickness":13,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[5.857,8.143],[5.857,8.857]],"color":"#ffe441ff","thickness":13,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[3.1,1.4],[3.1,1.2],[3.15,1.05],[3.2,1],[3.15,0.85],[2.85,0.85],[2.8,0.8]],"color":"#b3b3b3ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[7.15,1.55],[7.1,1.6],[7.1,1.9],[7.05,1.95],[6.95,1.95],[6.8,1.8]],"color":"#b3b3b3ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[3.05,6.45],[2.9,6.3],[2.9,6.1],[3.05,5.95],[3.05,5.85],[3,5.8],[2.9,5.8],[2.85,5.85],[2.8,5.8]],"color":"#b3b3b3ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[1.15,7.55],[1.15,7.85],[1.1,7.9],[0.9,7.9],[0.8,7.8]],"color":"#b3b3b3ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[3.8,7.8],[3.85,7.85],[4.15,7.85],[4.15,7.95],[3.8,8.3],[3.8,8.4],[3.95,8.55],[4,8.5]],"color":"#b3b3b3ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[1.5,8.5],[1.5,5.5],[0.5,5.5],[0.5,4.5]],"color":"#ffffffe4","thickness":42,"rounded":true,"layer":"over"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[7.5,1.1],[8.9,1.1],[8.9,1.9],[7.5,1.9]],"color":"#ffe441ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[8.833,1.5],[7.5,1.5],[7.5,1.875]],"color":"#ffe441ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[7.167,1.5],[7.5,1.5],[7.5,1.125]],"color":"#ffe441ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[8.75,1.75],[7.417,1.75]],"color":"#ffe441ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[7.583,1.25],[8.75,1.25]],"color":"#ffe441ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[3.167,1.5],[4.833,1.5]],"color":"#ffe441ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[3.5,1.875],[3.5,1.125]],"color":"#ffe441ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[3.5,6.125],[3.5,6.875]],"color":"#ffe441ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[3.833,6.5],[3.167,6.5]],"color":"#ffe441ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[4.5,8.125],[4.5,8.875]],"color":"#ffe441ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[5.833,8.5],[4.167,8.5]],"color":"#ffe441ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[1.5,7.125],[1.5,7.875]],"color":"#ffe441ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[2.833,7.5],[1.167,7.5]],"color":"#ffe441ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[3.583,1.25],[4.75,1.25]],"color":"#ffe441ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[4.75,1.75],[3.583,1.75]],"color":"#ffe441ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[3.5,6.9],[3.9,6.9],[3.9,6.1],[3.5,6.1]],"color":"#ffe441ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[1.5,7.1],[2.9,7.1],[2.9,7.9],[1.5,7.9]],"color":"#ffe441ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[4.5,8.1],[5.9,8.1],[5.9,8.9],[4.5,8.9]],"color":"#ffe441ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[3.5,1.1],[4.9,1.1],[4.9,1.9],[3.5,1.9]],"color":"#ffe441ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[8.286,1.143],[8.286,1.857]],"color":"#ffe441ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[4.286,1.143],[4.286,1.857]],"color":"#ffe441ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[2.286,7.143],[2.286,7.857]],"color":"#ffe441ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"line","points":[[5.286,8.143],[5.286,8.857]],"color":"#ffe441ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[4.583,8.25],[5.75,8.25]],"color":"#ffe441ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"line","points":[[5.75,8.75],[4.583,8.75]],"color":"#ffe441ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"line","points":[[3.75,6.75],[3.417,6.75]],"color":"#ffe441ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"line","points":[[3.583,6.25],[3.75,6.25]],"color":"#ffe441ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"line","points":[[1.583,7.25],[2.75,7.25]],"color":"#ffe441ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"line","points":[[2.75,7.75],[1.583,7.75]],"color":"#ffe441ff","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[4.5,6.5]],"color":"#ffffffe4","thickness":42,"rounded":true,"layer":"over"}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[0.5,3.5],[2.5,3.5],[2.5,2.5],[1.5,2.5]],"color":"#ffffffe4","thickness":42,"rounded":true,"layer":"over"}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"line","points":[[7.5,8.5],[7.5,6.5],[6.5,5.5],[6.5,3.5],[4.5,3.5],[3.5,4.5]],"color":"#ffffffe4","thickness":42,"rounded":true,"layer":"over"}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[6.5,7.5]],"color":"#ffffffe4","thickness":42,"rounded":true,"layer":"over"}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"line","points":[[8.5,2.5],[8.5,3.5],[7.5,3.5],[5.5,1.5],[5.5,0.5]],"color":"#ffffffe4","thickness":42,"rounded":true,"layer":"over"}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[8.5,4.5],[8.5,6.5]],"color":"#ffffffe4","thickness":42,"rounded":true,"layer":"over"}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"line","points":[[5.1,0.7],[4.8,1]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"line","points":[[5.083,0.583],[5,0.667],[5.167,0.5],[5.167,0.833],[4.5,1.167],[5,0.667]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"line","points":[[5,0.667],[4.75,0.917]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"line","points":[[5,0.889],[5.056,0.833],[4.833,0.833],[4.833,0.944],[4.722,0.944],[4.611,1.056]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"line","points":[[4.833,0.944],[5.111,0.667],[5.111,0.778],[5.056,0.833]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"line","points":[[4.857,1],[4.714,1],[5.143,0.571],[5.143,0.857]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"line","points":[[4.714,1],[4.643,1.071]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"line","points":[[5.143,0.714],[4.929,0.929]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"line","points":[[5.063,0.688],[5.063,0.813]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"line","points":[[8.4,6.8],[8.4,7.2],[8.6,6.8]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"line","points":[[8.4,7],[8.5,6.9],[8.4,6.9]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"line","points":[[8.5,6.833],[8.556,6.889],[8.5,6.944],[8.444,6.889]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"line","points":[[8.5,6.944],[8.444,7]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"line","points":[[8.438,6.813],[8.563,6.813]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"line","points":[[8.571,6.857],[8.429,6.857],[8.429,7.143]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"line","points":[[4.429,6.857],[4.429,7]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"line","points":[[4.5,6.786],[4.5,6.929]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"line","points":[[4.438,6.813],[4.438,6.938]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"line","points":[[3.8,8.4],[4.2,8.4],[3.9,8.5],[3.8,8.6]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"line","points":[[3.833,8.5],[4.083,8.417]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"line","points":[[3.786,8.5],[3.857,8.429],[4,8.429]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"line","points":[[3.333,4.167],[3.333,4.333]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"line","points":[[3.357,4.071],[3.357,4.214]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"line","points":[[0.313,2.063],[0.313,2.313]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"line","points":[[0.375,2.125],[0.438,2.188]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"line","points":[[0.389,2.278],[0.389,2.167],[0.333,2.111],[0.333,2.222]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"line","points":[[0.333,2.111],[0.333,2]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"line","points":[[4.417,5.083],[4.333,5.167],[4.417,5.25]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"line","points":[[4.333,5.333],[4.333,5]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"line","points":[[4.357,5.357],[4.357,5.071],[4.429,5.143],[4.429,5.286]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"line","points":[[4.375,5.25],[4.375,5.125],[4.313,5.188],[4.313,5.313]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"line","points":[[4.313,5.188],[4.313,5.063],[4.375,5.125],[4.375,5]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"line","points":[[4.313,5.063],[4.313,4.938]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"line","points":[[4.3,5.1],[4.3,5.3],[4.5,5.3],[4.4,5],[4.3,4.9],[4.3,5.1]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"line","points":[[0.286,2.143],[0.286,2.286],[0.5,2.214],[0.429,2.143],[0.286,1.857],[0.286,2.143]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"line","points":[[3.3,4.1],[3.3,4.3],[3.4,4.2],[3.3,3.9],[3.3,4.1]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-103","rules":[],"visual":{"kind":"line","points":[[4.4,6.8],[4.4,7.2],[4.5,6.9],[4.6,6.8],[4.4,6.8]],"color":"#ffffffe4","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-113","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,1.5],"width":0.6,"height":0.55,"rounded":false,"fill":"#ffef98ff","thickness":0,"angle":45}}
- {"id":"drawing-114","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,7.5],"width":0.6,"height":0.55,"rounded":false,"fill":"#ffef98ff","thickness":0,"angle":45}}
- {"id":"drawing-115","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,7.5],"width":0.6,"height":0.55,"rounded":false,"fill":"#ffef98ff","thickness":0,"angle":45}}
- {"id":"drawing-116","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5.5],"width":0.6,"height":0.55,"rounded":false,"fill":"#ffef98ff","thickness":0,"angle":45}}
- {"id":"drawing-117","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,0.5],"width":0.6,"height":0.55,"rounded":false,"fill":"#ffef98ff","thickness":0,"angle":45}}
- {"id":"drawing-118","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,1.5],"width":0.85,"height":0.55,"rounded":true,"stroke":"#ffe441ff","thickness":3,"angle":270}}
- {"id":"drawing-119","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,8.5],"width":0.85,"height":0.55,"rounded":true,"stroke":"#ffe441ff","thickness":3,"angle":270}}
- {"id":"drawing-120","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,1.5],"width":0.85,"height":0.55,"rounded":true,"stroke":"#ffe441ff","thickness":3,"angle":270}}
- {"id":"drawing-121","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,6.5],"width":0.85,"height":0.55,"rounded":true,"stroke":"#ffe441ff","thickness":3,"angle":270}}
- {"id":"drawing-122","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,7.5],"width":0.85,"height":0.55,"rounded":true,"stroke":"#ffe441ff","thickness":3,"angle":270}}
- {"id":"drawing-123","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,8.5],"width":0.85,"height":0.85,"rounded":true,"stroke":"#ffe441ff","thickness":3,"angle":270}}
- {"id":"drawing-124","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,7.5],"width":0.85,"height":0.85,"rounded":true,"stroke":"#ffe441ff","thickness":3,"angle":270}}
- {"id":"drawing-125","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,6.5],"width":0.85,"height":0.85,"rounded":true,"stroke":"#ffe441ff","thickness":3,"angle":270}}
- {"id":"drawing-126","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,1.5],"width":0.85,"height":0.85,"rounded":true,"stroke":"#ffe441ff","thickness":3,"angle":270}}
- {"id":"drawing-127","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,1.5],"width":0.85,"height":0.85,"rounded":true,"stroke":"#ffe441ff","thickness":3,"angle":270}}
- {"id":"drawing-128","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.1,1.5],"width":0.16,"height":0.16,"rounded":true,"fill":"#ffe441ff","thickness":0,"angle":270}}
- {"id":"drawing-129","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.1,7.5],"width":0.16,"height":0.16,"rounded":true,"fill":"#ffe441ff","thickness":0,"angle":0}}
- {"id":"drawing-130","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.1,6.5],"width":0.16,"height":0.16,"rounded":true,"fill":"#ffe441ff","thickness":0,"angle":0}}
- {"id":"drawing-131","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.1,8.5],"width":0.16,"height":0.16,"rounded":true,"fill":"#ffe441ff","thickness":0,"angle":0}}
- {"id":"drawing-132","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.1,1.5],"width":0.16,"height":0.16,"rounded":true,"fill":"#ffe441ff","thickness":0,"angle":0}}
```

Normal Sudoku rules apply.

PARROTY LINES - A 'word' is a non-repeating sequence of digits, like '365', '24', or '7' (but not '747'). Each white Parroty Line consists of one or more copies of the same word. The digit on a parrot indicates the length of the word the parrot is saying. (Example: a parrot with a 3 could be saying “486 486”).

CAGES - Digits in a cage sum to the attached tag.
