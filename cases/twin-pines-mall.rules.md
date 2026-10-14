---
format: open-rules
title: Twin Pines Mall
setter: Blobz
source: https://sudokupad.app/blobz/twin-pines-mall
case: https://sudoku-sleuth.com/cases/twin-pines-mall
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r4c3=8 r5c4=8
exported: 4500a1382b01db364904de0dd818415a
---

```rules
sudoku 9x9
cage-1: cage r7c2-r8c2-r9c2 total 14 connected true
cage-2: cage r6c4-r7c4-r8c4 total 10 connected true
cage-3: cage r7c6-r8c6-r9c6 total 16 connected true
cage-4: cage r4c9-r5c9-r6c9 total 7 connected true
whispers-1: whispers r6c1-r5c1-r4c1-r3c1-r4c2 gap 5
whispers-2: whispers r3c1-r2c1-r3c2 gap 5
whispers-3: whispers r2c1-r1c1-r2c2 gap 5
whispers-4: whispers r6c7-r5c8-r6c8-r7c8-r8c8-r9c8 gap 5
whispers-5: whispers r7c7-r6c8-r7c9 gap 5
whispers-6: whispers r8c7-r7c8-r8c9 gap 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"🔥","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"🔥","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"🔥","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"🔥","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"🔥","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,5.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"🔥","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,6.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"🔥","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,2.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"🔥","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,3.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"🔥","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,4.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"🔥","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"🔥","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,6.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"🔥","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,7.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"🔥","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,8.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"🔥","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"cage","cells":[27],"label":"AO","color":"#07ff","labelColor":"#07ff"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"cage","cells":[19],"label":"TF","color":"#07ff","labelColor":"#07ff"}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"cage","cells":[11],"label":"DL","color":"#07ff","labelColor":"#07ff"}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"cage","cells":[3],"label":"FC","color":"#07ff","labelColor":"#07ff"}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"cage","cells":[69,70,71],"label":"Twin","color":"#d38904ff","labelColor":"#d38904ff"}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"cage","cells":[78,79,80],"label":"Pines","color":"#d38904ff","labelColor":"#d38904ff"}}
```

Normal sudoku rules apply.

Begin by filling in the blue cages with digits from the four previous puzzles.

Along green lines, adjacent digits differ by at least 5.

Digits in cages must sum to the given value.

A digit on a flame indicates how many flames contain that digit.
