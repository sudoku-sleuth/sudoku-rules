---
format: open-rules
title: The Return Journey
setter: Blobz
source: https://sudokupad.app/blobz/the-return-journey
case: https://sudoku-sleuth.com/cases/the-return-journey
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r8c1-r9c1 total 8 connected true
cage-2: cage r5c2-r6c2 total 9 connected true
cage-3: cage r3c1-r3c2 total 11 connected true
cage-4: cage r8c8-r9c7-r9c8 total 15 connected true
cage-5: cage r7c6-r7c7-r8c7 total 18 connected true
cage-6: cage r6c6-r6c7-r6c8 total 16 connected true
cage-7: cage r4c8-r5c7-r5c8 total 21 connected true
cage-8: cage r4c6-r4c7 total 17 connected true
cage-9: cage r6c1-r7c1 total 15 connected true
cage-10: cage r2c7-r3c7-r3c8 total 9 connected true
cage-11: cage r2c1-r2c2 total 11 connected true
cage-12: cage r1c1-r1c2 total 6 connected true
cage-13: cage r4c1-r5c1 total 10 connected true
cage-14: cage r7c2-r8c2 total 9 connected true
cage-15: cage r4c2-r4c3 connected true
cage-16: cage r8c5-r8c6 connected true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#76e5fa21","thickness":0,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#76e5fa21","thickness":0,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#76e5fa21","thickness":0,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#76e5fa21","thickness":0,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#76e5fa21","thickness":0,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#76e5fa21","thickness":0,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#76e5fa21","thickness":0,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#1bcc1b31","thickness":0,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#1bcc1b31","thickness":0,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#1bcc1b31","thickness":0,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#1bcc1b31","thickness":0,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#1bcc1b31","thickness":0,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#1bcc1b31","thickness":0,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#1bcc1b31","thickness":0,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#1bcc1b31","thickness":0,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#1bcc1b31","thickness":0,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#1bcc1b31","thickness":0,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#1bcc1b31","thickness":0,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#1bcc1b31","thickness":0,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#1bcc1b31","thickness":0,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#1bcc1b31","thickness":0,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#1bcc1b31","thickness":0,"angle":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#1bcc1b31","thickness":0,"angle":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#1bcc1b31","thickness":0,"angle":0}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.5],"width":0,"height":0.613,"rounded":true,"thickness":0,"angle":0,"text":"Mirkwood","textColor":"#09b80950","fontSize":23.2,"textStroke":"#ffffff00","textStrokeWidth":1}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":0,"height":0.52,"rounded":true,"thickness":0,"angle":0,"text":"Great","textColor":"#257dd350","fontSize":19.6,"textStroke":"#ffffff00","textStrokeWidth":1}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,3.5],"width":0,"height":0.52,"rounded":true,"thickness":0,"angle":0,"text":"River","textColor":"#257dd350","fontSize":19.6,"textStroke":"#ffffff00","textStrokeWidth":1}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[0.15,1.35],[0.35,1.35],[0.4,1.4],[0.55,1.45],[1,1.9],[1.05,2.05],[1.45,2.45],[1.55,2.45],[1.6,2.5],[1.8,2.5],[1.85,2.55],[1.95,2.55],[2,2.6],[2.7,2.6],[3,2.9],[3,3],[3.1,3.1],[3.1,3.2],[3.35,3.45],[3.55,3.45],[3.6,3.5],[4.2,3.5],[4.25,3.45],[4.55,3.45],[4.6,3.5],[5.1,3.5],[5.15,3.45],[5.55,3.45],[6,3.9],[6,4],[6.1,4.1],[6.1,4.2],[6.35,4.45],[6.55,4.45],[6.65,4.35],[6.75,4.35],[6.85,4.25],[6.9,4.1],[7.5,3.5],[7.65,3.45],[7.7,3.4],[7.8,3.4],[7.85,3.35],[8.15,3.35],[8.2,3.4],[8.3,3.4],[8.35,3.45],[8.55,3.45],[8.6,3.5],[8.8,3.5],[8.85,3.55],[8.85,3.45],[8.8,3.4]],"color":"#9edef8d4","thickness":10,"rounded":true}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[2.4,2.6],[2.25,2.45],[2.25,2.35],[2.1,2.2]],"color":"#9edef8d4","thickness":10,"rounded":true}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[3.35,3.45],[3.45,3.55],[3.55,3.55],[3.6,3.6],[3.8,3.6],[3.85,3.55],[3.95,3.55],[4.1,3.6],[4.4,3.6],[4.45,3.55],[4.55,3.55],[4.6,3.5],[4.7,3.6],[4.8,3.6],[4.85,3.55],[5.35,3.55],[5.4,3.6],[5.5,3.6],[5.75,3.85],[5.85,3.85]],"color":"#9edef8d4","thickness":10,"rounded":true}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[3.8,3.5],[3.75,3.55]],"color":"#9edef8d4","thickness":10,"rounded":true}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[6.85,4.25],[6.75,4.25],[6.7,4.3],[6.5,4.3],[6.45,4.35],[6.35,4.35],[6.3,4.3]],"color":"#9edef8d4","thickness":10,"rounded":true}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[7.25,3.75],[7.4,3.7],[7.5,3.6],[7.65,3.55],[7.85,3.55],[7.9,3.5],[8.05,3.45],[8.15,3.55],[8.45,3.55],[8.6,3.6],[8.8,3.6],[8.85,3.65]],"color":"#9edef8d4","thickness":10,"rounded":true}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[7.85,3.35],[7.85,3.25],[7.7,3.1],[7.7,3],[7.55,2.85],[7.55,2.65],[7.5,2.6],[7.45,2.45],[7.2,2.2],[7.15,2.05],[6.65,1.55],[6.5,1.5],[6.25,1.25]],"color":"#9edef8d4","thickness":10,"rounded":true}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[8.3,3.4],[8.7,3.4],[8.75,3.35],[8.85,3.35]],"color":"#9edef8d4","thickness":10,"rounded":true}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[7.75,3.55],[7.7,3.6],[7.6,3.6],[7.35,3.85],[7.25,3.85],[7.2,3.9]],"color":"#9edef8d4","thickness":10,"rounded":true}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[7.85,3.55],[8.15,3.55]],"color":"#9edef8d4","thickness":10,"rounded":true}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"line","points":[[8.25,3.55],[8.3,3.6],[8.6,3.6],[8.75,3.65]],"color":"#9edef8d4","thickness":10,"rounded":true}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[6.85,1.75],[6.85,1.65],[6.75,1.55],[6.75,1.35],[6.65,1.25],[6.7,1.2]],"color":"#9edef8d4","thickness":10,"rounded":true}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"line","points":[[8.9,3.3],[8.9,3.7]],"color":"#9edef8d4","thickness":10,"rounded":true}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"line","points":[[4.5,8.5],[2.5,8.5],[0.5,6.5],[0.5,5.5],[2.5,5.5],[3.5,4.5],[4.5,4.5],[4.5,1.5],[3.5,0.5]],"color":"#cb862d8b","thickness":6,"rounded":true}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"cage","cells":[22],"color":"#1fa8fa82"}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"cage","cells":[41],"color":"#1fa8fa82"}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"cage","cells":[49],"color":"#1fa8fa82"}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"cage","cells":[40],"label":"Beorn","color":"#0000","labelColor":"#ae08e0b4"}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"cage","cells":[36],"label":"Goblin Pass","color":"#0000","labelColor":"#ae08e0b4"}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"cage","cells":[53],"label":"Lonely Mt.","color":"#0000","labelColor":"#ae08e0b4"}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,8.5],"width":0.42,"height":0.42,"rounded":true,"fill":"#faf6dfff","stroke":"#cb862daf","thickness":1}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,4.5],"width":0.42,"height":0.42,"rounded":true,"fill":"#faf6dfff","stroke":"#cb862daf","thickness":1}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,0.5],"width":0.42,"height":0.42,"rounded":true,"fill":"#faf6dfff","stroke":"#cb862daf","thickness":1}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1],"width":0,"height":0.582,"rounded":true,"thickness":0,"angle":0,"text":"Misty","textColor":"#0000002d","fontSize":22,"textStroke":"#ffffff00","textStrokeWidth":1}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,1],"width":0,"height":0.582,"rounded":true,"thickness":0,"angle":0,"text":"Mountains","textColor":"#0000002d","fontSize":22,"textStroke":"#ffffff00","textStrokeWidth":1}}
```

At last they came up the long road, and reached the very pass where the goblins had captured them before. But they came to that high point at morning, and looking backward they saw a white sun shining over the outstretched lands. There behind lay Mirkwood, blue in the distance, and darkly green at the nearer edge even in the spring. There far away was the Lonely Mountain on the edge of eyesight. On its highest peak snow yet unmelted was gleaming pale.

Normal sudoku rules apply. 

Begin by filling in the "boulder" digits from the previous puzzle into their corresponding locations (pale blue cages). 

Digits along Bilbo and Gandalf's path (brown lines) must be between the digits in their journey stopping points (circled ends).

Box borders divide the Great River (blue line) into segments that sum to the same value.

In cages, digits do not repeat, and sum to the given value.
