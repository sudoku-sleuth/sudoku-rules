---
format: open-rules
title: Beyond Price
setter: Blobz
source: https://sudokupad.app/blobz/beyond-price
case: https://sudoku-sleuth.com/cases/beyond-price
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
kropki-1: kropki r1c2-r2c2 colour "white"
kropki-2: kropki r8c8-r9c8 colour "white"
kropki-3: kropki r8c7-r9c7 colour "white"
kropki-4: kropki r8c3-r9c3 colour "white"
kropki-5: kropki r2c2-r2c3 colour "white"
kropki-6: kropki r2c3-r3c3 colour "white"
kropki-7: kropki r9c7-r9c8 colour "white"
kropki-8: kropki r9c2-r9c3 colour "white"
kropki-9: kropki r8c2-r8c3 colour "white"
kropki-10: kropki r1c7-r1c8 colour "white"
kropki-11: kropki r1c8-r1c9 colour "white"
kropki-12: kropki r7c5-r7c6 colour "white"
kropki-13: kropki r3c4-r3c5 colour "white"
whispers-1: whispers r4c5-r5c4-r6c5-r5c6 gap 5 loop true
whispers-2: whispers r1c6-r2c7-r3c8-r4c8-r5c8-r6c8-r7c8-r8c7-r9c6-r9c5-r9c4-r8c3-r7c2-r6c2-r5c2-r4c2-r3c2-r2c3-r1c4-r1c5 gap 5 loop true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"A","textColor":"#388afa61","fontSize":40,"textStroke":"#ffffff00","textStrokeWidth":1}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"R","textColor":"#388afa61","fontSize":40,"textStroke":"#ffffff00","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"K","textColor":"#388afa61","fontSize":40,"textStroke":"#ffffff00","textStrokeWidth":1}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"E","textColor":"#388afa61","fontSize":40,"textStroke":"#ffffff00","textStrokeWidth":1}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"N","textColor":"#388afa61","fontSize":40,"textStroke":"#ffffff00","textStrokeWidth":1}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,8.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"S","textColor":"#388afa61","fontSize":40,"textStroke":"#ffffff00","textStrokeWidth":1}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,8.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"T","textColor":"#388afa61","fontSize":40,"textStroke":"#ffffff00","textStrokeWidth":1}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,8.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"O","textColor":"#388afa61","fontSize":40,"textStroke":"#ffffff00","textStrokeWidth":1}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,8.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"N","textColor":"#388afa61","fontSize":40,"textStroke":"#ffffff00","textStrokeWidth":1}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,8.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"E","textColor":"#388afa61","fontSize":40,"textStroke":"#ffffff00","textStrokeWidth":1}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[30,31,32],"label":"Front Gate","color":"#dc27f995","labelColor":"#dc27f995"}}
```

"For the Arkenstone of my father," Thorin said, "is worth more than a river of gold in itself, and to me it is beyond price. That stone of all the treasure I name unto myself, and I will be avenged on anyone who finds it and withholds it." Bilbo heard these words and he grew afraid, wondering what would happen, if the stone was found--wrapped in an old bundle of tattered oddments that he used as a pillow. All the same he did not speak of it, for as the weariness of the days grew heavier, the beginnings of a plan had come into his little head.

Normal sudoku rules apply.

Begin by filling in the "Front Gate" digits from the previous puzzle.

Digits along the marked diagonals do not repeat.

Along green lines, adjacent digits differ by at least 5.

White dots separate consecutive digits.

Note: Cells with the same letter (specifically “E” and “N”) do not have to contain the same digit.
