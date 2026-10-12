---
format: open-rules
title: Dreamboat
setter: Blobz
source: https://sudokupad.app/blobz/dreamboat
case: https://sudoku-sleuth.com/cases/dreamboat
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
arrow-1: arrow r3c2-r4c3-r5c3-r6c4 bulb ["r2c1"]
arrow-2: arrow r2c8-r3c7 bulb ["r3c9"]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":0,"height":1.362,"rounded":true,"thickness":0,"angle":0,"text":"A","textColor":"#d5a2f4ff","fontSize":52,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":0,"height":1.362,"rounded":true,"thickness":0,"angle":0,"text":"R","textColor":"#d5a2f4ff","fontSize":52,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":0,"height":1.362,"rounded":true,"thickness":0,"angle":0,"text":"T","textColor":"#d5a2f4ff","fontSize":52,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":0,"height":1.362,"rounded":true,"thickness":0,"angle":0,"text":"Y","textColor":"#d5a2f4ff","fontSize":52,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":0,"height":1.362,"rounded":true,"thickness":0,"angle":0,"text":"M","textColor":"#d5a2f4ff","fontSize":52,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":0,"height":1.362,"rounded":true,"thickness":0,"angle":0,"text":"F","textColor":"#d5a2f4ff","fontSize":52,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":0,"height":1.362,"rounded":true,"thickness":0,"angle":0,"text":"M","textColor":"#d5a2f4ff","fontSize":52,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,6.5],"width":0,"height":1.362,"rounded":true,"thickness":0,"angle":0,"text":"L","textColor":"#d5a2f4ff","fontSize":52,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":0,"height":1.362,"rounded":true,"thickness":0,"angle":0,"text":"Y","textColor":"#d5a2f4ff","fontSize":52,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.3,4.5],"width":0,"height":1.362,"rounded":true,"thickness":0,"angle":0,"text":"c","textColor":"#d5a2f4ff","fontSize":52,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[2.278,1.722],[1.5,2.5],[1.5,3.5],[2.5,4.5],[1.5,5.5],[1.5,6.5],[3.5,8.5],[4.5,8.5],[8.5,4.5],[4.5,0.5],[3.5,0.5],[2.722,1.278]],"color":"#fba8e4ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[28,29,30,31,32],"color":"#d38904ff"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[39,40,41,42,43],"color":"#d38904ff"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,1.5],"width":0,"height":0.863,"rounded":true,"thickness":0,"angle":0,"text":"♥","textColor":"#ff8181ff","fontSize":32.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,3],"width":0,"height":0.863,"rounded":true,"thickness":0,"angle":0,"text":"♥","textColor":"#ff8181ff","fontSize":32.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,6],"width":0,"height":0.863,"rounded":true,"thickness":0,"angle":0,"text":"♥","textColor":"#ff8181ff","fontSize":32.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,3.5],"width":0,"height":0.863,"rounded":true,"thickness":0,"angle":0,"text":"♥","textColor":"#ff8181ff","fontSize":32.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3],"width":0,"height":0.863,"rounded":true,"thickness":0,"angle":0,"text":"♥","textColor":"#ff8181ff","fontSize":32.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,2.5],"width":0,"height":0.863,"rounded":true,"thickness":0,"angle":0,"text":"♥","textColor":"#ff8181ff","fontSize":32.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,1],"width":0,"height":0.863,"rounded":true,"thickness":0,"angle":0,"text":"♥","textColor":"#ff8181ff","fontSize":32.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,2.5],"width":0,"height":0.863,"rounded":true,"thickness":0,"angle":0,"text":"♥","textColor":"#ff8181ff","fontSize":32.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,2],"width":0,"height":0.863,"rounded":true,"thickness":0,"angle":0,"text":"♥","textColor":"#ff8181ff","fontSize":32.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,3.5],"width":0,"height":0.863,"rounded":true,"thickness":0,"angle":0,"text":"♥","textColor":"#ff8181ff","fontSize":32.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,5],"width":0,"height":0.863,"rounded":true,"thickness":0,"angle":0,"text":"♥","textColor":"#ff8181ff","fontSize":32.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,7],"width":0,"height":0.863,"rounded":true,"thickness":0,"angle":0,"text":"♥","textColor":"#ff8181ff","fontSize":32.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,6.5],"width":0,"height":0.863,"rounded":true,"thickness":0,"angle":0,"text":"♥","textColor":"#ff8181ff","fontSize":32.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,8.5],"width":0,"height":0.863,"rounded":true,"thickness":0,"angle":0,"text":"♥","textColor":"#ff8181ff","fontSize":32.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,7],"width":0,"height":0.863,"rounded":true,"thickness":0,"angle":0,"text":"♥","textColor":"#ff8181ff","fontSize":32.8,"textStroke":"#ffffff","textStrokeWidth":1}}
```

Normal sudoku rules apply.

The heart outline is a palindrome (reading the same in both directions) containing the digits 1-9 exactly twice each.

Digits map to letters, so the 'M' and 'Y' digits are cloned in rows 4 and 5.

Heart symbols separate digits where one is double the other; ALL possible hearts are shown.

Digits along arrows may repeat, but must sum to the digit in the attached circle.
